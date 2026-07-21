package com.carrental.dto;

import lombok.Data;

@Data
public class VehicleRequest {

    private String carName;

    private String brand;

    private String fuelType;

    private String transmission;

    private Double pricePerDay;

    private String imageUrl;

    private Boolean available;
}