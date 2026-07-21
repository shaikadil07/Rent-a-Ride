package com.carrental.booking;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // Create Booking
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // Get All Bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Get Booking By ID
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking Not Found"));
    }

    // Get Booking By User ID
    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    // Delete Booking
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    // Update Booking Status
    public Booking updateBookingStatus(Long id, String status) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking Not Found"));

        booking.setBookingStatus(status);

        return bookingRepository.save(booking);
    }
}