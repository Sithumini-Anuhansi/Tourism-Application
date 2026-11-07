package tourism_app.booking_service.controller;

import org.springframework.web.bind.annotation.*;
import tourism_app.booking_service.dto.BookingRequest;
import tourism_app.booking_service.model.Booking;
import tourism_app.booking_service.service.BookingService;
import jakarta.validation.Valid;

import java.util.List;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(@Valid @RequestBody BookingRequest request) {
        request.setUserId(currentUserId());
        return bookingService.createBooking(request);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUser(@PathVariable Long userId) {
        requireOwnerOrAdmin(userId);
        return bookingService.getBookingsByUserId(userId);
    }

    @GetMapping("/phone/{phone}")
    public List<Booking> getBookingsByPhone(@PathVariable String phone) {
        return bookingService.getBookingsByPhone(phone);
    }

    @GetMapping("/{id}")
    public BookingRequest getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        requireOwnerOrAdmin(booking.getUserId());
        return mapToDto(booking);
    }

    private BookingRequest mapToDto(Booking booking) {
        BookingRequest dto = new BookingRequest();
        dto.setBookingId(booking.getBookingId());
        dto.setBookingType(booking.getBookingType());
        dto.setPackageTitle(booking.getPackageTitle());
        dto.setDestination(booking.getDestination());
        dto.setTravelDate(booking.getTravelDate());
        dto.setDays(booking.getDays());
        dto.setPeople(booking.getPeople());
        dto.setName(booking.getName());
        dto.setPhone(booking.getPhone());
        dto.setTotalPrice(booking.getTotalPrice());
        dto.setUserId(booking.getUserId());
        return dto;
    }

    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @Valid @RequestBody BookingRequest request) {
        Booking booking = bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        requireOwnerOrAdmin(booking.getUserId());
        request.setUserId(booking.getUserId());
        return bookingService.updateBooking(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        requireOwnerOrAdmin(booking.getUserId());
        bookingService.deleteBooking(id);
    }

    private Long currentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || isAdmin(authentication)) return null;
        Object details = authentication.getDetails();
        return details instanceof Long userId ? userId : null;
    }

    private void requireOwnerOrAdmin(Long ownerId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new AccessDeniedException("Authentication is required");
        }
        if (isAdmin(authentication)) return;
        Long userId = currentUserId();
        if (ownerId == null || !ownerId.equals(userId)) {
            throw new AccessDeniedException("You can only access your own bookings");
        }
    }

    private boolean isAdmin(Authentication authentication) {
        return authentication.getAuthorities().stream()
                .anyMatch(authority -> "ROLE_ADMIN".equals(authority.getAuthority()));
    }
}
