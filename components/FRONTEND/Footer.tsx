import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCaretUp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "@/public/img/logo2.png";
import { cookieHandler } from "@/lib/cookieHandler";

const Footer = () => {
  const userId = cookieHandler.get("userId");

  return (
    <div className="bottom-0 relative top-28 ">
      <div id="footer" className="footer">
        <div className="footer-main bg-surface">
          <div className="container">
            <div className="content-footer md:py-[60px] py-10 flex justify-between flex-wrap gap-y-8 border-t border-[#533265]">
              <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                <Link href="/" className="logo inline-block w-3/4">
                  <Image
                    src={Logo}
                    alt="Kaunshanee"
                    className="object-contain w-full"
                  />
                </Link>
                <div className="flex gap-3 mt-3">
                  <div className="flex flex-col ">
                    <span className="text-button mt-3">Phone:</span>
                    <span className="text-button">Mail:</span>
                  </div>
                  <div className="flex flex-col ">
                    <span className="mt-[14px]">9876543210</span>
                    <span className="">kaushanee@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                <div className="list-nav flex justify-between basis-full max-md:basis-full gap-4">
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3 font-bold">
                      Infomation
                    </div>
                    <div className="group ">
                      <Link
                        href="/Contactus"
                        className="group-hover:text-[#dcb06a] duration-300 "
                      >
                        Contact
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 group-hover:border-b-[#dcb06a] rounded-full border-b-2 `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/aboutus"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        About Us
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group">
                      <Link
                        href={userId ? "/order" : "/Login"}
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        My Account
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/Register"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Register
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                  </div>
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3 font-bold">
                      Quick Shop
                    </div>
                    <div className="group ">
                      <Link
                        href="/"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Saree
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Kurta
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Kurta Set
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                  </div>
                  <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3 font-bold">
                      Customer Services
                    </div>
                    <div className="group ">
                      <Link
                        href="/TermsandCondition"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Terms and Condition
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/Shipping"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Shipping
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/privacyPolicy"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Privacy Policy
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                    <div className="group ">
                      <Link
                        href="/ReturnExchange"
                        className="group-hover:text-[#dcb06a] duration-300"
                      >
                        Return & Exchange
                      </Link>
                      <div
                        className={`duration-300 w-0  group-hover:w-10 rounded-full border-b-2 group-hover:border-b-[#dcb06a] `}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                  <div className="text-button-uppercase">Newletter</div>
                  <div className="caption1 mt-3">
                    Sign up for our newsletter and get 10% off your first
                    purchase
                  </div>
                  <div className="input-block w-full h-[52px] mt-4">
                    <form className="w-full h-full relative" action="post">
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line"
                      />
                      <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                        <i className="ph ph-arrow-right text-xl text-white" />
                      </button>
                    </form>
                  </div>
                  <div className="list-social flex items-center gap-6 mt-4">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF className="text-lg" />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <FaInstagram className="text-lg" />
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <FaTwitter className="text-lg" />
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <FaYoutube className="text-lg" />
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <FaPinterestP className="text-lg" />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
              <div className="left flex items-center gap-8">
                <div className="">
                  ©2024 Kaushanee. Designed By Trillion Game Media. All Right
                  Reserved.
                </div>
              </div>
              <div className="right flex items-center gap-2">
                <div className="caption1 text-secondary">Payment:</div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-0.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-1.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-2.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-3.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-4.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
                <div className="payment-img">
                  <Image
                    src="/assets/images/payment/Frame-5.png"
                    alt="payment"
                    width={1000}
                    height={1}
                    className="w-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   <Link className="scroll-to-top-btn" href="#top-nav">
    //   <i className="ph-bold ph-caret-up" />
    //   <FaCaretUp />

    // </Link>
  );
};

export default Footer;
