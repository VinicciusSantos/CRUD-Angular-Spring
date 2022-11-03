package com.vinicius.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinicius.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {}
