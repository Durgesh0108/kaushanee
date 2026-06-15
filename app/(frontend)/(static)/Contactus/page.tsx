// pages/contact-us.tsx
"use client";

import Head from "next/head";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send the form data to an email address or API)
    alert("Thank you for contacting us!");
  };

  return (
    <>
      <Head>
        <title>Contact Us - Kaushanee</title>
        <meta
          name="description"
          content="Get in touch with Kaushanee for any inquiries, feedback, or support."
        />
      </Head>

      <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-6">
            We’d love to hear from you! Whether you have a question about our
            products, need assistance with your order, or just want to provide
            feedback, feel free to reach out to us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <p className="text-lg mt-8">
            You can also reach us directly at:{" "}
            <a
              href="mailto:kaushanee@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kaushanee@gmail.com
            </a>
          </p>
          <p className="text-lg">
            Or call us at:{" "}
            <a
              href="tel:+919876543210"
              className="text-blue-600 hover:underline"
            >
              9876543210
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
