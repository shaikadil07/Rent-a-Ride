package com.carrental.controller;

import com.carrental.dto.AuthResponse;
import com.carrental.dto.LoginRequest;
import com.carrental.dto.RegisterRequest;
import com.carrental.dto.UserResponse;
import com.carrental.entity.User;
import com.carrental.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @RequestBody RegisterRequest request
    ) {

        User user = authService.registerUser(request);

        UserResponse response = new UserResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole().name()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request
    ) {

        return ResponseEntity.ok(
                authService.login(request)
        );
    }
}