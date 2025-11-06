<<<<<<< HEAD
package com.example.plrepa.controller;

import com.example.plrepa.model.User;
import com.example.plrepa.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // ALLOWS FRONTEND TO ACCESS BACKEND
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User u = userRepository.findByEmail(user.getEmail());
        if (u != null && u.getPassword().equals(user.getPassword())) {
            return "SUCCESS";
        } else {
            return "FAIL";
        }
    }
=======
package com.plrepa.controller;

import com.plrepa.model.User;
import com.plrepa.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // allow frontend requests
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    // LOGIN endpoint
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = repo.findById(user.getEmail()).orElse(null);

        if (dbUser == null) {
            return "User not found";
        } else if (!dbUser.getPassword().equals(user.getPassword())) {
            return "Invalid password";
        } else {
            return "success";
        }
    }

    // SIGNUP endpoint
    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if (repo.existsById(user.getEmail())) {
            return "User already exists!";
        }
        repo.save(user);
        return "Account created successfully";
    }
>>>>>>> d7d32daad66a1de5cf65050f6af8b9bb712a46d9
}
