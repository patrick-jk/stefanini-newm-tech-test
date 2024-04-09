package com.stefanininewm.techtest.requests;

import com.stefanininewm.techtest.entity.TaskStatus;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class TaskPostRequestBody {
    @NotEmpty(message = "Task name cannot be empty")
    private String title;
    @NotEmpty(message = "Task description cannot be empty")
    private String description;
    @NotEmpty(message = "Task status cannot be empty")
    private TaskStatus taskStatus;
}
