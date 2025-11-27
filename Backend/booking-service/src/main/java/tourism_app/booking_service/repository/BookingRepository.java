package tourism_app.booking_service.repository;

import tourism_app.booking_service.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long>
{
    List<Booking> findByUserId(Long userId);
}
