package com.stefanininewm.techtest.controller;

import com.stefanininewm.techtest.entity.Task;
import com.stefanininewm.techtest.requests.TaskPostRequestBody;
import com.stefanininewm.techtest.requests.TaskPutRequestBody;
import com.stefanininewm.techtest.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@Log4j2
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<Page<Task>> listAll(Pageable pageable) {
        return ResponseEntity.ok(taskService.listAllTasks(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Task> findById(@PathVariable long id) {
        return ResponseEntity.ok(taskService.findByIdOrElseThrowException(id));
    }

    @GetMapping(path = "/find")
    public ResponseEntity<List<Task>> findByTitle(@RequestParam String title) {
        return ResponseEntity.ok(taskService.findByTitle(title));
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Task> saveTask(@RequestBody @Valid TaskPostRequestBody taskPostRequestBody) {
        return new ResponseEntity<>(taskService.save(taskPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable long id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<Void> updateTask(@RequestBody TaskPutRequestBody taskPutRequestBody) {
        taskService.update(taskPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}