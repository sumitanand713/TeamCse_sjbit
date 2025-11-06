package com.example.plrepa.service;

import com.example.plrepa.model.Subject;
import com.example.plrepa.repository.SubjectRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudyPlanService {

    private final SubjectRepository subjectRepo;

    public StudyPlanService(SubjectRepository subjectRepo) {
        this.subjectRepo = subjectRepo;
    }

    public List<Map<String, Object>> generatePlan(Long examId, List<String> weakSubjects) {

        // get subjects for the selected exam
        List<Subject> subjects = subjectRepo.findByExamId(examId);

        List<Map<String, Object>> plan = new ArrayList<>();

        for (Subject subject : subjects) {

            Map<String, Object> entry = new HashMap<>();
            entry.put("subject", subject.getSubjectName());

            // weak subjects get more hours
            if (weakSubjects.contains(subject.getSubjectName())) {
                entry.put("priority", "HIGH");
                entry.put("hoursPerDay", 2);
            } else {
                entry.put("priority", "NORMAL");
                entry.put("hoursPerDay", 1);
            }

            plan.add(entry);
        }

        return plan;
    }
}
