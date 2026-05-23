package tourism_app.booking_service.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class BookingRequest {

    private Long bookingId;
    private Long userId;
    private String bookingType;
    private String packageTitle;
    private String destination;
    private LocalDate travelDate;
    private Integer people;
    private Integer days;
    private BigDecimal totalPrice;
    private String name;        // added
    private String phone; // added

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
