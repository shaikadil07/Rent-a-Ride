import { useState } from "react";

function AddCar() {

  const [showReview, setShowReview] = useState(false);

  const [formData, setFormData] = useState({
    carName: "",
    brand: "",
    fuelType: "",
    pricePerDay: "",
    location: "",
    image: null,
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setShowReview(true);
  };
const handleConfirm = async () => {
  try {

    const vehicleData = {
      carName: formData.carName,
      brand: formData.brand,
      fuelType: formData.fuelType,
      pricePerDay: Number(formData.pricePerDay),
      location: formData.location,

      ownerName: formData.ownerName,
      ownerPhone: formData.ownerPhone,
      ownerEmail: formData.ownerEmail,

      available: true,

      imageUrl: "https://example.com/car.jpg"
    };

    const response = await fetch(
      "http://localhost:8081/api/vehicles",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log(errorText);
      throw new Error("Failed to save vehicle");
    }

    const data = await response.json();

    console.log("Vehicle Saved:", data);

    alert("Vehicle Added Successfully 🚗");

    window.location.href = "/vehicles";

  } catch (error) {
    console.error(error);
    alert("Error adding vehicle");
  }
};


  return (
    <>
      <div className="max-w-3xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8 text-center">
          🚗 Rent Your Car
        </h1>


        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8"
        >


          <input
            type="text"
            name="carName"
            placeholder="Car Name"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="text"
            name="brand"
            placeholder="Brand"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="text"
            name="fuelType"
            placeholder="Fuel Type"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="number"
            name="pricePerDay"
            placeholder="Price Per Day"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />



          <h2 className="text-xl font-bold mt-5 mb-3">
            Vehicle Image
          </h2>


          <input
            type="file"
            accept="image/*"
            className="w-full border p-3 rounded mb-4"
            onChange={handleImage}
          />



          <h2 className="text-xl font-bold mt-5 mb-3">
            Owner Details
          </h2>


          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="tel"
            name="ownerPhone"
            placeholder="Phone Number"
            maxLength="10"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />


          <input
            type="email"
            name="ownerEmail"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />



          <button
            className="
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            py-3
            rounded-lg
            font-semibold
            "
          >
            Continue
          </button>


        </form>

      </div>



      {/* REVIEW PAGE */}

      {
        showReview && (

          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-8">


            <h2 className="text-3xl font-bold text-center mb-6">
              Review Vehicle Details
            </h2>


            <p>
              <b>Car Name:</b> {formData.carName}
            </p>


            <p>
              <b>Brand:</b> {formData.brand}
            </p>


            <p>
              <b>Fuel:</b> {formData.fuelType}
            </p>


            <p>
              <b>Price:</b> ₹{formData.pricePerDay}/day
            </p>


            <p>
              <b>Location:</b> {formData.location}
            </p>


            <hr className="my-5"/>


            <h3 className="text-xl font-bold">
              Owner Details
            </h3>


            <p>
              Name: {formData.ownerName}
            </p>


            <p>
              Phone: {formData.ownerPhone}
            </p>


            <p>
              Email: {formData.ownerEmail}
            </p>



            <button
  onClick={handleConfirm}
  className="
  w-full
  mt-6
  bg-green-500
  hover:bg-green-600
  text-white
  py-3
  rounded-lg
  font-semibold
  "
>
  Confirm & Add Vehicle
</button>


          </div>

        )
      }

    </>
  );
}


export default AddCar;