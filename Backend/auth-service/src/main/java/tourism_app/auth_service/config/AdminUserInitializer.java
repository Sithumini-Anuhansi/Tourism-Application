package tourism_app.auth_service.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tourism_app.auth_service.model.User;
import tourism_app.auth_service.repository.UserRepository;

@Configuration
@Profile("dev")
public class AdminUserInitializer {

    @Bean
    CommandLineRunner seedAdmin(UserRepository repo, BCryptPasswordEncoder encoder) {
        return args -> {
            String adminEmail = "admin@travelbook.com";
            if (repo.findByEmail(adminEmail).isEmpty()) {
                User admin = new User();
                admin.setEmail(adminEmail);
                admin.setName("Admin");
                admin.setPasswordHash(encoder.encode("admin123"));
                admin.setRole("ADMIN");
                repo.save(admin);
                System.out.println("Default admin created: " + adminEmail + " / admin123");
            }
        };
    }

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
