package main.java.com.example.plrepa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.plrepa.model.User;

public interface UserRepository extends JpaRepository<User, String> {
}
