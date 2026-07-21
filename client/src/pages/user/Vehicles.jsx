import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ignis from "../../Assets/booking ignis.png";
import swift from "../../Assets/booking swift lxi.jpeg";
import waganor from "../../Assets/booking waganor.png";
import waganorBlue from "../../Assets/booking waganor blue.png";
import alto from "../../Assets/booking-alto.png";

import vehicle1 from "../../Assets/vehicleModel1.png";
import vehicle2 from "../../Assets/vehicleModel2.png";
import vehicle3 from "../../Assets/vehicleModel3.png";
import vehicle4 from "../../Assets/vehicleModel4.png";
import vehicle5 from "../../Assets/vehicleModel5.png";
import vehicle6 from "../../Assets/vehicleModel6.png";

function Vehicles() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.log(err));
  }, []);

  const vehicleImages = {
    "Audi A6": vehicle1,
    "Swift LXI": swift,
    "Maruti Alto": alto,
    "WaganR": waganor,
    "WaganR Blue": waganorBlue,
    "Maruti Ignis": ignis,
    "Hyundai Creta": vehicle2,
    "Hyundai Venue": vehicle3,
    "Kia Seltos": vehicle4,
    "Mahindra Thar": vehicle5,
    "Tata Nexon": vehicle6,
  };

  return (
    <div className="container mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-8">
        🚗 Available Vehicles
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {vehicles.map((vehicle) => (

          <div
            key={vehicle.id}
            className="
              bg-white
              rounded-xl
              shadow-lg
              overflow-hidden
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            <img
              src={vehicleImages[vehicle.carName] || vehicle1}
              alt={vehicle.carName}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold mb-2">
                {vehicle.carName}
              </h2>

              <p className="mb-1">
                <span className="font-semibold">Brand:</span>{" "}
                {vehicle.brand}
              </p>

              <p className="mb-1">
                <span className="font-semibold">Fuel:</span>{" "}
                {vehicle.fuelType}
              </p>

              <p className="mb-1">
                <span className="font-semibold">Transmission:</span>{" "}
                {vehicle.transmission}
              </p>

              <p className="text-green-600 text-xl font-bold mt-3">
                ₹{vehicle.pricePerDay}/day
              </p>

              <button
                onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                className="
                  w-full
                  mt-5
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  shadow-md
                  transition-all
                  duration-300
                "
              >
                View Details & Book 🚗
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Vehicles;