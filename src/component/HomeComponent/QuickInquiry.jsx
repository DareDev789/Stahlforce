"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import TranslatedText from "../TranslatedText";
import { url } from "../../Contexte/urlApi.js";

function QuickInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // Validation simple front
    if (!formData.name || !formData.email || !formData.requirements) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      // axios -> data est déjà parsé JSON
      const { data } = await axios.post(`${url}/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      // si ton backend renvoie success/message:
      if (data?.success === false) {
        throw new Error(data?.message || "Something went wrong");
      }

      setMessage(data?.message || "Inquiry sent successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirements: "",
      });
    } catch (err) {
      // Laravel validation errors -> err.response.data.errors
      const apiMsg =
        err?.response?.data?.message ||
        (err?.response?.data?.errors
          ? Object.values(err.response.data.errors).flat().join(" ")
          : null);

      setMessage(apiMsg || err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <TranslatedText text="Need Technical Support or Product Consultation?" />
            </h2>
            <p className="text-xl mb-8">
              <TranslatedText text="Our engineering team is ready to provide professional answers and customized solutions" />
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
              >
                <TranslatedText text="Contact Us" />
              </Link>
              <Link
                href="#"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition"
              >
                <TranslatedText text="Request Samples" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-blue-600 text-xl font-bold mb-6">
              <TranslatedText text="Quick Inquiry" />
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-1 grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <TranslatedText text="Your Name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <TranslatedText text="Company Name" />
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <TranslatedText text="Email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <TranslatedText text="Phone" />
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 text-sm">
                  <TranslatedText text="Product Requirements" />
                </label>
                <textarea
                  rows="3"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {message && (
                <div className="mb-4 text-sm text-center text-gray-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition disabled:opacity-50"
              >
                {loading ? "Sending..." : <TranslatedText text="Submit Inquiry" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickInquiry;
