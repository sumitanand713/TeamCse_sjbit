<<<<<<< HEAD
package com.example.plrepa.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // USES PLURAL (recommended)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String username;
    private String email;
    private String phone;
    private String password;

    public User() {}

    public User(String name, String username, String email, String phone, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
=======
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
>>>>>>> d7d32daad66a1de5cf65050f6af8b9bb712a46d9
}
