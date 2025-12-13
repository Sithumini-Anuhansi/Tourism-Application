package tourism_application.destination_service.model;

import jakarta.persistence.*;

@Entity
@Table(name = "destinations")
public class Destination
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 4000)
    private String description;

    private String location;
    private String category;
<<<<<<< HEAD
=======
    private Double avgPrice;
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
    private String imageUrl;

    public Destination() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

<<<<<<< HEAD
=======
    public Double getAvgPrice() { return avgPrice; }
    public void setAvgPrice(Double avgPrice) { this.avgPrice = avgPrice; }

>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
