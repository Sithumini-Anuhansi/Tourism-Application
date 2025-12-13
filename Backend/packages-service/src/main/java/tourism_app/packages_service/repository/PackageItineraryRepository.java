package tourism_app.packages_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tourism_app.packages_service.model.PackageItinerary;

import java.util.List;

@Repository
public interface PackageItineraryRepository extends JpaRepository<PackageItinerary, Long> {
    List<PackageItinerary> findByPkgPackageIdOrderByDayNumber(Long packageId);
}
