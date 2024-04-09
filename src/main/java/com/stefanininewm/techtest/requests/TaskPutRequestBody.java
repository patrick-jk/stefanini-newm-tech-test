package com.stefanininewm.techtest.requests;

import com.stefanininewm.techtest.entity.TaskStatus;
import lombok.Data;

@Data
public class TaskPutRequestBody {
    private Long id;
    private String title;
    private String description;
    private TaskStatus taskStatus;
}
