package com.carrental.booking;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // Create Booking
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    // Get All Bookings
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Get Booking By ID
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // Get Booking By User ID
    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable Long userId) {
        return bookingService.getBookingsByUserId(userId);
    }

    // Delete Booking
    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {

        bookingService.deleteBooking(id);

        return "Booking Deleted Successfully";
    }

    // Update Booking Status
    @PutMapping("/{id}/status")
    public Booking updateBookingStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return bookingService.updateBookingStatus(id, status);
    }
}