package com.carrental.booking;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
@GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "booking_seq"
)
@SequenceGenerator(
        name = "booking_seq",
        sequenceName = "booking_seq",
        allocationSize = 1
)
private Long id;

    private Long userId;

    private Long vehicleId;

    private LocalDate pickupDate;

    private LocalDate returnDate;

    private Double totalPrice;

    private String bookingStatus;

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public LocalDate getPickupDate() {
        return pickupDate;
    }

    public void setPickupDate(LocalDate pickupDate) {
        this.pickupDate = pickupDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
}