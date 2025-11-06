package com.plrepa.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String examName; // e.g., "CET", "VTU Sem 3"

    @ElementCollection
    private List<String> subjects; // e.g., ["Maths", "Physics", "Chemistry"]

    public Exam() {}

    public Exam(String examName, List<String> subjects) {
        this.examName = examName;
        this.subjects = subjects;
    }
}
