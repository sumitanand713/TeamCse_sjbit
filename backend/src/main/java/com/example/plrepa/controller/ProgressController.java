package com.example.plrepa.controller;

import com.example.plrepa.model.Progress;
import com.example.plrepa.repository.ProgressRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "*")
public class ProgressController {

    private final ProgressRepository progressRepository;

    public ProgressController(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    // GET endpoint to retrieve user progress
    @GetMapping("/{userId}")
    public ResponseEntity<Progress> getProgress(@PathVariable Long userId) {
        Progress progress = progressRepository.findByUserId(userId);
        if (progress == null) {
            // Create a default entry if none exists
            progress = new Progress();
            progress.setUserId(userId);
            progress = progressRepository.save(progress);
        }
        return ResponseEntity.ok(progress);
    }

    // POST endpoint to update progress
    @PostMapping("/update/{userId}")
    public ResponseEntity<Progress> updateProgress(
            @PathVariable Long userId,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Integer totalVideos) {

        Progress progress = progressRepository.findByUserId(userId);
        if (progress == null) {
            progress = new Progress();
            progress.setUserId(userId);
        }

        if ("video".equals(type)) {
            progress.setVideosWatched(progress.getVideosWatched() + 1);
        } else if ("quiz".equals(type)) {
            progress.setQuizzesTaken(progress.getQuizzesTaken() + 1);
        }

        if (totalVideos != null) {
            progress.setTotalVideosAvailable(totalVideos);
        }

        Progress updatedProgress = progressRepository.save(progress);
        return ResponseEntity.ok(updatedProgress);
    }
}