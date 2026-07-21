package com.carrental.vehicle;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }
    public List<Vehicle> getVehiclesByOwnerEmail(String email) {
    return vehicleRepository.findByOwnerEmail(email);
}

    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id).orElse(null);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {

        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle Not Found"));

        vehicle.setCarName(vehicleDetails.getCarName());
        vehicle.setBrand(vehicleDetails.getBrand());
        vehicle.setPricePerDay(vehicleDetails.getPricePerDay());
        vehicle.setFuelType(vehicleDetails.getFuelType());
        vehicle.setTransmission(vehicleDetails.getTransmission());
        vehicle.setImageUrl(vehicleDetails.getImageUrl());
        vehicle.setAvailable(vehicleDetails.getAvailable());

        vehicle.setOwnerName(vehicleDetails.getOwnerName());
        vehicle.setOwnerPhone(vehicleDetails.getOwnerPhone());
        vehicle.setOwnerEmail(vehicleDetails.getOwnerEmail());

        return vehicleRepository.save(vehicle);
    }
}