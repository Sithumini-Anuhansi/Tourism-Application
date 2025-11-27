package tourism_app.auth_service.controller;

import tourism_app.auth_service.model.User;
import tourism_app.auth_service.repository.UserRepository;
import tourism_app.auth_service.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController
{
    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final JwtUtil jwtUtil;
    public AuthController(UserRepository repo, JwtUtil jwtUtil) { this.repo = repo; this.jwtUtil = jwtUtil; }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User req)
    {
        if (repo.findByEmail(req.getEmail()).isPresent()) return ResponseEntity.badRequest().body("Email exists");
        req.setPasswordHash(encoder.encode(req.getPasswordHash()));
        User saved = repo.save(req);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> body)
    {
        String email = body.get("email"), password = body.get("password");
        return repo.findByEmail(email).map(u ->
        {
            if (encoder.matches(password, u.getPasswordHash()))
            {
                String token = jwtUtil.generateToken(u.getEmail());
                return ResponseEntity.ok(Map.of("token", token, "userId", u.getId(), "name", u.getName()));
            }
            else return ResponseEntity.status(401).body("Invalid credentials");
        }).orElse(ResponseEntity.status(404).body("User not found"));
    }
}
