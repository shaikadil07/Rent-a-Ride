import { Link } from "react-router-dom";
import Footers from "../../components/Footer";

function Enterprise() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Rent Your Car & Earn Extra Income
          </h1>

          <p className="text-xl text-gray-600 mb-10">
            Turn your idle vehicle into a source of income.
            List your car on Rent a Ride and connect directly with customers.
          </p>
        </div>

        <Link to="/add-car">
          <div
            className="
              max-w-4xl
              mx-auto
              bg-green-500
              text-white
              rounded-3xl
              p-10
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              text-center
            "
          >
            <h2 className="text-4xl font-bold mb-5">
              🚗 Rent Your Car
            </h2>

            <p className="text-lg leading-8">
              Add your vehicle details, upload a photo,
              enter owner contact information and publish
              your car for rent on Rent a Ride.
            </p>

            <div className="mt-8">
              <span className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg">
                Get Started →
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-20 bg-gray-100 rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Rent a Ride?
          </h2>

          <ul className="space-y-3 text-lg">
            <li>✅ No Commission Charges</li>
            <li>✅ Direct Owner-Customer Communication</li>
            <li>✅ Easy Vehicle Listing</li>
            <li>✅ Manage Your Cars Anytime</li>
            <li>✅ Trusted Rental Platform</li>
          </ul>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Enterprise;