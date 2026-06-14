// pages/terms-conditions.tsx
import Head from "next/head";
import Link from "next/link";
import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Kaushanee</title>
        <meta
          name="description"
          content="Terms and conditions for Kaushanee, an e-commerce platform for sarees and dress materials."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg mb-4">
            Welcome to Kaushanee! By accessing or using our website, you agree
            to comply with and be bound by the following terms and conditions.
            Please read them carefully before making any purchases.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using Kaushanee, you agree to be bound by these
            Terms and Conditions, along with our Privacy Policy, Return &amp;
            Exchange Policy, and any other policies we may publish from time to
            time. If you do not agree with any part of these terms, you must not
            use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. Use of Our Website
          </h2>
          <p className="mb-4">
            You agree to use our website only for lawful purposes and in a
            manner that does not infringe the rights of, restrict, or inhibit
            anyone else&apos;s use and enjoyment of the website. Prohibited
            behavior includes harassing or causing distress or inconvenience to
            any other user, transmitting obscene or offensive content, or
            disrupting the normal flow of dialogue within our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            3. Product Descriptions
          </h2>
          <p className="mb-4">
            We strive to ensure that the products displayed on our website are
            accurately described and depicted. However, we do not warrant that
            the product descriptions, images, or other content are error-free,
            complete, or current. If a product offered by Kaushanee is not as
            described, your sole remedy is to return it in unused condition.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Pricing and Availability
          </h2>
          <p className="mb-4">
            All prices displayed on Kaushanee are in INR (Indian Rupees) and
            include any applicable taxes. We reserve the right to change prices
            at any time without prior notice. While we strive to ensure the
            accuracy of our pricing and availability information, errors may
            occur. If we discover an error in the price or availability of an
            item you have ordered, we will notify you as soon as possible and
            give you the option to reconfirm your order at the correct price or
            cancel it.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            5. Orders and Payment
          </h2>
          <p className="mb-4">
            By placing an order on Kaushanee, you are offering to purchase a
            product subject to these Terms and Conditions. All orders are
            subject to availability and confirmation of the order price. We
            reserve the right to refuse or cancel any order for any reason,
            including if the product is unavailable, if there has been an error
            in the product or pricing information, or if we suspect fraudulent
            activity.
          </p>
          <p className="mb-4">
            Payment for your order can be made through the payment methods
            available on our website. By submitting your payment information,
            you authorize us to charge the applicable payment method for the
            total amount of your order.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            6. Shipping and Delivery
          </h2>
          <p className="mb-4">
            Please refer to our{" "}
            <Link href="/Shipping" className="text-blue-600 hover:underline">
              Shipping Policy
            </Link>{" "}
            for information on shipping and delivery. We make every effort to
            ensure that your order is delivered in a timely manner, but we
            cannot guarantee delivery times and are not responsible for any
            delays caused by external factors.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            7. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on Kaushanee, including but not limited to text,
            graphics, logos, images, and software, is the property of Kaushanee
            or its content suppliers and is protected by Indian and
            international copyright laws. You may not use, reproduce,
            distribute, or create derivative works from any content on our
            website without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            8. Limitation of Liability
          </h2>
          <p className="mb-4">
            Kaushanee shall not be liable for any direct, indirect, incidental,
            special, or consequential damages resulting from your use or
            inability to use our website, products, or services. This limitation
            applies to all claims, whether based on warranty, contract, tort, or
            any other legal theory.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            9. Indemnification
          </h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Kaushanee, its
            officers, directors, employees, agents, and affiliates from and
            against any and all claims, liabilities, damages, losses, and
            expenses, including legal fees, arising out of or in any way
            connected with your use of our website or breach of these Terms and
            Conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            10. Governing Law
          </h2>
          <p className="mb-4">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India. Any disputes arising out of or in
            connection with these terms shall be subject to the exclusive
            jurisdiction of the courts of [Your City], India.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            11. Changes to Terms and Conditions
          </h2>
          <p className="mb-4">
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Any changes will be posted on this
            page, and your continued use of our website following the posting of
            changes constitutes your acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms and
            Conditions, please contact our customer support team at{" "}
            <a
              href="mailto:support@kaushanee.com"
              className="text-blue-600 hover:underline"
            >
              support@kaushanee.com
            </a>
            .
          </p>

          <p className="text-center text-gray-500 mt-8">
            Thank you for choosing Kaushanee. We appreciate your business and
            look forward to serving you.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
