package com.carrental.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name ="CAR_RENTAL_USERS")
@Data
public class User {

    @Id
@SequenceGenerator(
        name = "user_seq",
        sequenceName = "USER_SEQ",
        allocationSize = 1
)
@GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "user_seq"
)
private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
}