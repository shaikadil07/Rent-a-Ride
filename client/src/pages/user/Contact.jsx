import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Footers from "../../components/Footer";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-5">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Get In Touch
            </h1>

            <p className="text-gray-600 text-lg">
              We're here to help you with your car rental needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                <FaPhoneAlt className="text-green-600 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Call Us
              </h3>

              <p className="text-gray-600 mb-4">
                Available 24/7 for support
              </p>

              <a
                href="tel:8074474160"
                className="text-lg font-semibold text-green-600"
              >
                +91 8074474160
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Email Us
              </h3>

              <p className="text-gray-600 mb-4">
                Send your queries anytime
              </p>

              <a
                href="mailto:support@rentaride.com"
                className="text-lg font-semibold text-blue-600"
              >
                support@rentaride.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
                <FaMapMarkerAlt className="text-red-600 text-2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Visit Us
              </h3>

              <p className="text-gray-600 mb-4">
                Rent a Ride Headquarters
              </p>

              <p className="text-lg font-semibold text-red-600">
                Andhra Pradesh, India
              </p>
            </div>

          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 bg-green-600 rounded-3xl p-10 text-center text-white shadow-2xl">

            <FaWhatsapp className="text-6xl mx-auto mb-4" />

            <h2 className="text-3xl font-bold mb-3">
              Need Instant Support?
            </h2>

            <p className="mb-6 text-lg">
              Chat directly with our support team on WhatsApp.
            </p>

            <a
              href="https://wa.me/918074474160"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>

      <Footers />
    </>
  );
}

export default Contact;