package com.plrepa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private String email;     // Primary key
    private String password;  // Plaintext for demo only (use BCrypt for production)
}
