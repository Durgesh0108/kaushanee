// pages/return-exchange.tsx
import Head from "next/head";
import React from "react";

const ReturnExchangePolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Return & Exchange Policy - Kaushanee</title>
        <meta
          name="description"
          content="Return and exchange policy for Kaushanee, an e-commerce platform for sarees and dress materials."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Return & Exchange Policy</h1>
          <p className="text-lg mb-4">
            At Kaushanee, we want you to be completely satisfied with your
            purchase. If for any reason you are not, we offer a straightforward
            return and exchange policy to ensure your shopping experience is
            seamless and worry-free. Kaushanee is owned and operated by Trillion
            Game Media.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Eligibility for Returns & Exchanges
          </h2>
          <p className="mb-4">
            We accept returns and exchanges within 7 days of the delivery date.
            To be eligible for a return or exchange, the item must be unused,
            unwashed, and in its original packaging with all tags intact. Please
            note that certain items, such as custom-made products, are not
            eligible for returns or exchanges.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. Return Process
          </h2>
          <p className="mb-4">
            If you wish to return an item, please follow these steps:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Contact our customer support team at{" "}
              <a
                href="mailto:kaushanee@gmail.com"
                className="text-blue-600 hover:underline"
              >
                kaushanee@gmail.com
              </a>{" "}
              within 7 days of receiving your order.
            </li>
            <li>
              Provide your order number, item details, and the reason for the
              return.
            </li>
            <li>
              Our team will review your request and provide you with a return
              authorization and instructions for shipping the item back to us.
            </li>
            <li>
              Once we receive the returned item, we will inspect it to ensure it
              meets our return eligibility criteria.
            </li>
          </ul>
          <p className="mb-4">
            If the return is approved, a refund will be processed to your
            original payment method within 7-10 business days. Please note that
            the original shipping charges are non-refundable.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            3. Exchange Process
          </h2>
          <p className="mb-4">
            If you wish to exchange an item, please follow the same steps as the
            return process. Once your exchange request is approved, we will
            process the exchange and ship the new item to you. If there is a
            price difference between the original item and the exchanged item,
            we will notify you of any additional charges or refunds.
          </p>
          <p className="mb-4">
            Please note that exchanges are subject to availability. If the item
            you wish to exchange is out of stock, we will offer you the option
            of a refund or an alternative product.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Damaged or Defective Items
          </h2>
          <p className="mb-4">
            In the unlikely event that you receive a damaged or defective item,
            please contact our customer support team immediately at{" "}
            <a
              href="mailto:kaushanee@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kaushanee@gmail.com
            </a>
            . Provide your order number and details of the issue, along with
            photos of the damaged or defective product. We will arrange for a
            replacement or a full refund, including any shipping charges.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            5. Non-Returnable Items
          </h2>
          <p className="mb-4">
            Certain items are non-returnable and non-exchangeable. These
            include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Custom-made or personalized products.</li>
            <li>Items purchased on sale or clearance.</li>
            <li>Gift cards.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our return and exchange
            policy, please reach out to our customer support team at{" "}
            <a
              href="mailto:kaushanee@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kaushanee@gmail.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+919876543210" className="text-blue-600 hover:underline">
              9876543210
            </a>
            .
          </p>

          <p className="text-center text-gray-500 mt-8">
            Thank you for shopping with Kaushanee. We are committed to ensuring
            your satisfaction with every purchase.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReturnExchangePolicy;
