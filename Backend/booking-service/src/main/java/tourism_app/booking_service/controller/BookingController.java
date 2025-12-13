package tourism_app.booking_service.controller;

import tourism_app.booking_service.model.Booking;
import tourism_app.booking_service.repository.BookingRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController
{
    private final BookingRepository repo;
    public BookingController(BookingRepository repo) { this.repo = repo; }

    @PostMapping public ResponseEntity<Booking> create(@RequestBody Booking b) { b.setStatus("PENDING"); Booking saved = repo.save(b); return ResponseEntity.ok(saved); }
    @GetMapping("/{id}") public ResponseEntity<Booking> get(@PathVariable Long id) { return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build()); }
    @GetMapping("/user/{userId}") public List<Booking> byUser(@PathVariable Long userId) { return repo.findByUserId(userId); }
    @PutMapping("/{id}") public ResponseEntity<Booking> update(@PathVariable Long id, @RequestBody Booking updated) { return repo.findById(id).map(b -> { b.setStatus(updated.getStatus()); b.setTotalPrice(updated.getTotalPrice()); repo.save(b); return ResponseEntity.ok(b); }).orElse(ResponseEntity.notFound().build()); }
    @DeleteMapping("/{id}") public ResponseEntity<Void> cancel(@PathVariable Long id) { return repo.findById(id).map(b -> { b.setStatus("CANCELLED"); repo.save(b); return ResponseEntity.ok().build(); }).orElse(ResponseEntity.notFound().build()); }
}
