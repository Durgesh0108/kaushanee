// pages/privacy-policy.tsx
import Head from "next/head";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Kaushanee</title>
        <meta
          name="description"
          content="Privacy policy for Kaushanee, an e-commerce platform for sarees and dress materials."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg mb-4">
            Welcome to Kaushanee. Your privacy is important to us, and we are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you visit our website and make purchases.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            <strong>Personal Information:</strong> When you make a purchase or
            create an account on Kaushanee, we collect personal information such
            as your name, email address, shipping address, and payment details.
            This information is necessary to process your orders and provide you
            with a seamless shopping experience.
          </p>
          <p className="mb-4">
            <strong>Non-Personal Information:</strong> We also collect
            non-personal information, such as your browser type, device
            information, and browsing behavior on our website. This information
            helps us improve our website and provide a better user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">The information we collect is used to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Process and fulfill your orders.</li>
            <li>
              Communicate with you about your order status and customer support
              inquiries.
            </li>
            <li>
              Improve our website, products, and services based on your feedback
              and usage patterns.
            </li>
            <li>
              Send you promotional offers and updates, if you have opted to
              receive them.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration, or
            disclosure. However, no method of transmission over the internet or
            electronic storage is 100% secure, so we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties.
            However, we may share your information with trusted service
            providers who assist us in operating our website, processing
            payments, and delivering orders. These providers are obligated to
            keep your information confidential and use it only for the purposes
            for which it was shared.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies</h2>
          <p className="mb-4">
            Kaushanee uses cookies to enhance your browsing experience. Cookies
            are small text files stored on your device that help us recognize
            you and remember your preferences. You can choose to disable cookies
            through your browser settings, but doing so may affect your ability
            to use certain features on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal
            information at any time. If you wish to exercise these rights,
            please contact our support team at{" "}
            <a
              href="mailto:support@kaushanee.com"
              className="text-blue-600 hover:underline"
            >
              support@kaushanee.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any changes will be
            posted on this page, and we encourage you to review it periodically.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please reach out to us at{" "}
            <a
              href="mailto:support@kaushanee.com"
              className="text-blue-600 hover:underline"
            >
              support@kaushanee.com
            </a>
            .
          </p>

          <p className="text-center text-gray-500 mt-8">
            Thank you for trusting Kaushanee with your personal information. We
            are dedicated to protecting your privacy and ensuring a safe
            shopping experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
