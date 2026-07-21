package com.carrental.vehicle;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }
    @GetMapping("/owner/{email}")
public List<Vehicle> getVehiclesByOwnerEmail(
        @PathVariable String email) {

    return vehicleService.getVehiclesByOwnerEmail(email);
}

    @PostMapping
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.saveVehicle(vehicle);
    }

    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleService.getVehicleById(id);
    }

    @PutMapping("/{id}")
    public Vehicle updateVehicle(
            @PathVariable Long id,
            @RequestBody Vehicle vehicle) {

        return vehicleService.updateVehicle(id, vehicle);
    }

    @DeleteMapping("/{id}")
    public String deleteVehicle(@PathVariable Long id) {

        vehicleService.deleteVehicle(id);

        return "Vehicle Deleted Successfully";
    }
}