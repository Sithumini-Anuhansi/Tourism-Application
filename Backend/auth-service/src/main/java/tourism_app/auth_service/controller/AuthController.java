package tourism_app.auth_service.controller;

import tourism_app.auth_service.model.User;
import tourism_app.auth_service.repository.UserRepository;
import tourism_app.auth_service.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController
{
    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository repo, JwtUtil jwtUtil, BCryptPasswordEncoder encoder) {
        this.repo = repo;
        this.jwtUtil = jwtUtil;
        this.encoder = encoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        String name = body.get("name");

        if (email == null || password == null || name == null) {
            return ResponseEntity.badRequest().body("email, password, and name are required");
        }
        if (repo.findByEmail(email).isPresent()) {
            return ResponseEntity.badRequest().body("Email exists");
        }

        User user = new User();
        user.setEmail(email);
        user.setName(name);
        user.setPhone(body.get("phone"));
        user.setPasswordHash(encoder.encode(password));
        user.setRole("USER");

        User saved = repo.save(user);
        String token = jwtUtil.generateToken(saved.getEmail(), saved.getRole());
        return ResponseEntity.ok(Map.of(
                "token", token,
                "userId", saved.getId(),
                "name", saved.getName(),
                "role", saved.getRole()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        return repo.findByEmail(email).map(u -> {
            if (encoder.matches(password, u.getPasswordHash())) {
                String token = jwtUtil.generateToken(u.getEmail(), u.getRole());
                return ResponseEntity.ok(Map.of(
                        "token", token,
                        "userId", u.getId(),
                        "name", u.getName(),
                        "role", u.getRole()
                ));
            }
            return ResponseEntity.status(401).body("Invalid credentials");
        }).orElse(ResponseEntity.status(404).body("User not found"));
    }
}
