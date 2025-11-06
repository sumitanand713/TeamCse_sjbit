package com.plrepa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.plrepa.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
