package com.example.plrepa.repository;

import com.example.plrepa.model.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
    // Custom method to find progress by user ID
    Progress findByUserId(Long userId);
}