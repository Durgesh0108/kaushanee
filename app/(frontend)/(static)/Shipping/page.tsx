// pages/shipping-policy.tsx
import Head from "next/head";
import React from "react";

const ShippingPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shipping Policy - Kaushanee</title>
        <meta
          name="description"
          content="Shipping policy for Kaushanee, an e-commerce platform for sarees and dress materials."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
          <p className="text-lg mb-4">
            At Kaushanee, we are committed to delivering your orders in a timely
            and efficient manner. Our shipping policy outlines the processes and
            timelines for shipping your favorite sarees and dress materials
            directly to your doorstep.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Order Processing
          </h2>
          <p className="mb-4">
            Once your order is placed, it will be processed within 1-2 business
            days. This includes order verification, quality check, and
            packaging. Orders placed on weekends or public holidays will be
            processed on the next business day.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. Shipping Partner
          </h2>
          <p className="mb-4">
            We have partnered with Shiprocket, a trusted logistics provider, to
            ensure safe and reliable delivery of your products. Once your order
            is shipped, you will receive a tracking number via email or SMS,
            allowing you to track your order in real-time.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Shipping Time</h2>
          <p className="mb-4">
            <strong>Domestic Shipping (Within India):</strong> Standard delivery
            usually takes between 5-7 business days, depending on your location.
            For remote or rural areas, delivery might take an additional 2-3
            business days.
          </p>
          <p className="mb-4">
            <strong>International Shipping:</strong> At this time, Kaushanee
            primarily ships within India. International shipping options may be
            available in the future.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Shipping Charges
          </h2>
          <p className="mb-4">
            Shipping charges vary based on your location and the total weight of
            your order. The shipping cost will be calculated and displayed at
            the checkout before you complete your purchase.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Delivery</h2>
          <p className="mb-4">
            Orders will be delivered to the shipping address provided at the
            time of purchase. Please ensure all details are accurate to avoid
            delays. In the event of any delivery issues, please contact our
            customer support team within 48 hours of the expected delivery date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            6. Undelivered Packages
          </h2>
          <p className="mb-4">
            If a package is undelivered due to incorrect address information
            provided by the customer, additional shipping charges may apply for
            re-delivery. In case of refusal to accept the delivery or
            non-availability of the recipient, the package will be returned to
            our warehouse, and a refund will be processed, excluding the
            original shipping charges.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            7. Order Tracking
          </h2>
          <p className="mb-4">
            You can track your order at any time using the tracking link
            provided via email or SMS. For any queries related to your order
            status, please feel free to contact our support team.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-4">
            For any questions or assistance regarding your order or shipping,
            please reach out to our customer support team at{" "}
            <a
              href="mailto:support@kaushanee.com"
              className="text-blue-600 hover:underline"
            >
              support@kaushanee.com
            </a>
            .
          </p>

          <p className="text-center text-gray-500 mt-8">
            Thank you for choosing Kaushanee for your needs. We are dedicated to
            providing you with the best shopping experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
