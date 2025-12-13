package tourism_app.packages_service.service;

import org.springframework.stereotype.Service;
import tourism_app.packages_service.model.PackageItinerary;
import tourism_app.packages_service.repository.PackageItineraryRepository;

import java.util.List;

@Service
public class PackageItineraryService {
    private final PackageItineraryRepository itineraryRepository;

    public PackageItineraryService(PackageItineraryRepository itineraryRepository) {
        this.itineraryRepository = itineraryRepository;
    }

    public List<PackageItinerary> getItineraryByPackage(Long packageId) {
        return itineraryRepository.findByPkgPackageIdOrderByDayNumber(packageId);
    }
}
