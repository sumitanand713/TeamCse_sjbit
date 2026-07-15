package com.example.plrepa.controller;

import com.example.plrepa.model.User;
import com.example.plrepa.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // ALLOWS FRONTEND TO ACCESS BACKEND
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User u = userRepository.findByEmail(user.getEmail());
        if (u != null && passwordEncoder.matches(user.getPassword(), u.getPassword())) {
            return u;
        }
        return null;
    }

}