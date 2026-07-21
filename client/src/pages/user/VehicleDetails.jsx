import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehicleDetails() {

  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:8081/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data))
      .catch((err) => console.log(err));

  }, [id]);

  const handleBookNow = async () => {

  try {

    const bookingData = {
      userId: 1, // temporary
      vehicleId: vehicle.id,
      pickupDate: "2026-07-20",
      returnDate: "2026-07-21",
      totalPrice: vehicle.pricePerDay,
      bookingStatus: "BOOKED"
    };

    const response = await fetch(
      "http://localhost:8081/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      }
    );

    if (!response.ok) {
      throw new Error("Booking Failed");
    }

    alert("✅ Car Booked Successfully!");

  } catch (error) {

    console.log(error);

    alert("Booking Failed");

  }
};

  if (!vehicle) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="container mx-auto p-5">

      <div className="bg-white shadow-lg rounded-lg p-6">

        <img
          src={vehicle.imageUrl}
          alt={vehicle.carName}
          className="w-full md:w-1/2 mx-auto rounded-lg"
        />

        <h1 className="text-4xl font-bold mt-5 text-center">
          {vehicle.carName}
        </h1>

        <div className="mt-5 space-y-2 text-lg">

          <p>
            <strong>Brand:</strong> {vehicle.brand}
          </p>

          <p>
            <strong>Fuel Type:</strong> {vehicle.fuelType}
          </p>

          <p>
            <strong>Transmission:</strong> {vehicle.transmission}
          </p>

          <p>
            <strong>Price Per Day:</strong> ₹{vehicle.pricePerDay}
          </p>

        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-bold mb-3">
          Owner Details
        </h2>

        <p>
          <strong>Name:</strong> {vehicle.ownerName}
        </p>

        <p>
          <strong>Phone:</strong> {vehicle.ownerPhone}
        </p>

        <p>
          <strong>Email:</strong> {vehicle.ownerEmail}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href={`tel:${vehicle.ownerPhone}`}
            className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-5
              py-3
              rounded-lg
              font-semibold
            "
          >
            📞 Call Owner
          </a>

          <button
            onClick={handleBookNow}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              shadow-md
              transition-all
              duration-300
            "
          >
            🚗 Confirm & Book Now
          </button>

          <a
            href={`https://wa.me/91${vehicle.ownerPhone}`}
            target="_blank"
            rel="noreferrer"
            className="
              bg-green-700
              hover:bg-green-800
              text-white
              px-5
              py-3
              rounded-lg
              font-semibold
            "
          >
            💬 WhatsApp Owner
          </a>

        </div>

      </div>

    </div>
  );
}

export default VehicleDetails;