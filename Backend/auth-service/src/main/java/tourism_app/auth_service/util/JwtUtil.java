package tourism_app.auth_service.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtUtil
{
    @Value("${jwt.secret}") private String secret;
    @Value("${jwt.expiration}") private long expiration;
    public String generateToken(String email, String role)
    {
        Date now = new Date();
        return JWT.create()
                .withSubject(email)
                .withClaim("role", role)
                .withIssuedAt(now)
                .withExpiresAt(new Date(now.getTime() + expiration))
                .sign(Algorithm.HMAC256(secret));
    }
}
