package tourism_app.booking_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tourism_app.booking_service.model.Booking;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // Get bookings by type: "PACKAGE" or "CUSTOM"
    List<Booking> findByBookingType(String bookingType);

    // Get bookings for a specific package
    List<Booking> findByPackageTitle(String packageTitle);

    List<Booking> findByUserId(Long userId);

    List<Booking> findByPhone(String phone);

    // Optional: Find bookings by user and type
    List<Booking> findByUserIdAndBookingType(Long userId, String bookingType);

}
