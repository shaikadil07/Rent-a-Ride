import { useEffect, useState } from "react";

export default function Orders() {

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {

      const response = await fetch(
        "http://localhost:8081/api/bookings/user/1"
      );

      const data = await response.json();

      setBookings(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-20 px-5">

      <h1 className="text-4xl font-bold mb-2">
        Your Bookings
      </h1>

      <p className="text-gray-500 mb-8">
        {bookings.length > 0
          ? "Check out all of your bookings"
          : ""}
      </p>

      {bookings.length === 0 ? (

        <div className="flex justify-center items-center min-h-[300px]">

          <h2 className="text-2xl font-bold">
            No Bookings Yet
          </h2>

        </div>

      ) : (

        bookings.map((booking) => (

          <div
            key={booking.id}
            className="
            bg-white
            shadow-lg
            rounded-xl
            p-6
            mb-5
            border
            "
          >

            <h2 className="text-2xl font-bold mb-3">
              Booking #{booking.id}
            </h2>

            <div className="space-y-2">

              <p>
                <span className="font-semibold">
                  Vehicle ID:
                </span>{" "}
                {booking.vehicleId}
              </p>

              <p>
                <span className="font-semibold">
                  Pickup Date:
                </span>{" "}
                {booking.pickupDate}
              </p>

              <p>
                <span className="font-semibold">
                  Return Date:
                </span>{" "}
                {booking.returnDate}
              </p>

              <p>
                <span className="font-semibold">
                  Total Price:
                </span>{" "}
                ₹{booking.totalPrice}
              </p>

              <p
                className="
                inline-block
                bg-green-100
                text-green-700
                px-3
                py-1
                rounded-full
                font-semibold
                mt-2
                "
              >
                {booking.bookingStatus}
              </p>

            </div>

          </div>

        ))

      )}

    </div>
  );
}