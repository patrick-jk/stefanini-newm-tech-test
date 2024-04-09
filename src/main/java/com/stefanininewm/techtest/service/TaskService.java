package com.stefanininewm.techtest.service;

import com.stefanininewm.techtest.entity.Task;
import com.stefanininewm.techtest.mapper.TaskMapper;
import com.stefanininewm.techtest.repository.TaskRepository;
import com.stefanininewm.techtest.requests.TaskPostRequestBody;
import com.stefanininewm.techtest.requests.TaskPutRequestBody;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public Page<Task> listAllTasks(Pageable pageable) {
        return taskRepository.findAll(pageable);
    }

    public Task findByIdOrElseThrowException(long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task not found"));
    }

    public List<Task> findByTitle(String title) {
        return taskRepository.findByTitleContaining(title);
    }

    @Transactional
    public Task save(TaskPostRequestBody taskPostRequestBody) {
        return taskRepository.save(TaskMapper.INSTANCE.toTask(taskPostRequestBody));
    }

    public void deleteTask(long id) {
        taskRepository.delete(findByIdOrElseThrowException(id));
    }

    public void update(TaskPutRequestBody taskPutRequestBody) {
        Task savedTask = findByIdOrElseThrowException(taskPutRequestBody.getId());
        Task task = TaskMapper.INSTANCE.toTask(taskPutRequestBody);
        task.setId(savedTask.getId());
        taskRepository.save(task);
    }
}
