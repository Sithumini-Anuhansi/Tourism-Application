package tourism_app.booking_service.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "booking_id")
    private Long bookingId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "booking_type")
    private String bookingType; // "PACKAGE" or "CUSTOM"

    @Column(name = "package_title")
    private String packageTitle;

    @Column(name = "destination")
    private String destination;

    @Column(name = "travel_date")
    private LocalDate travelDate;

    @Column(name = "people")
    private Integer people;

    @Column(name = "days")
    private Integer days;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    // Getters and Setters
    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getBookingType() { return bookingType; }
    public void setBookingType(String bookingType) { this.bookingType = bookingType; }

    public String getPackageTitle() { return packageTitle; }
    public void setPackageTitle(String packageTitle) { this.packageTitle = packageTitle; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public LocalDate getTravelDate() { return travelDate; }
    public void setTravelDate(LocalDate travelDate) { this.travelDate = travelDate; }

    public Integer getPeople() { return people; }
    public void setPeople(Integer people) { this.people = people; }

    public Integer getDays() { return days; }
    public void setDays(Integer days) { this.days = days; }

    public BigDecimal getTotalPrice() { return totalPrice; }
    public void setTotalPrice(BigDecimal totalPrice) { this.totalPrice = totalPrice; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}
