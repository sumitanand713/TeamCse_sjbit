package com.example.plrepa.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Links progress to the User ID (placeholder in frontend is '1')
    private Long userId; 

    private int videosWatched = 0;
    private int quizzesTaken = 0;
    private int totalVideosAvailable = 0;
}