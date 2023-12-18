import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className=" flex bg-bgsend">
        <div className="w-1/2 p-16">
          <h2 className="font-semibold text-[34px] pt-5 pb-2">
            About Us: Demi Sellars Realty
          </h2>
          <p className="text-lg text-black pb-5 pr-20">
            Welcome to Demi Sellars Realty, where excellence meets expertise in
            the dynamic landscape of the UK real estate market. With over 15
            years of visionary leadership, Demi Sellars has established herself
            as a prominent figure, bringing unparalleled insight and dedication
            to every client interaction.
          </p>
          <button className="text-black flex gap-2 justify-center items-center bg-transparent mb-5 py-2 px-5 outline outline-black outline-2 rounded hover:shadow-lg hover:bg-lightblue hover:outline-lightblue hover:text-white">
            <span className="font-medium text-lg">Sign in or register</span>
          </button>
        </div>
        <div className="w-1/2 bg-cover bg-center bg-[url(https://cdn.prod.zoopla.co.uk/_next/static/images/hero-800-b00fca870a06a690a104f07349cdc660.jpg)]"></div>
      </div>
      <div className="flex items-center gap-2 mx-10 bg-purple mt-20 rounded-xl">
        <div className="w-1/2">
          <div className="p-6">
            <h1 className="font-semibold text-3xl pb-4">
              Our Mission: Excellence in Every Transaction
            </h1>
            <p className="text-lg text-black pb-5 ">
              "At Demi Sellars Realty, we are committed to excellence in every
              transaction. Our mission is to provide an exceptional real estate
              experience, underpinned by integrity, innovation, and in-depth
              market knowledge. We believe in building lasting relationships
              with our clients, ensuring their property journey is seamless and
              successful."
            </p>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1701900629/Asset_1-svg_upk5bt.svg"
            alt=""
          />
        </div>
      </div>

      <div className=" flex gap-10 mx-10 my-24 rounded-xl">
        <div className="w-1/2 rounded-xl bg-cover bg-center bg-[url(https://images.pexels.com/photos/5411997/pexels-photo-5411997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"></div>
        <div className="w-1/2 p-10">
          <h1 className="font-semibold text-3xl pb-4">Our Visionary Leader</h1>
          <p className="text-lg text-black pr-8">
            Demi Sellars, the driving force behind our success, is a seasoned
            professional with a passion for connecting individuals with their
            dream homes. Her extensive experience spans more than a decade and a
            half, earning her a sterling reputation as a trusted advisor in the
            UK real estate industry. Demi's commitment to excellence has
            consistently positioned her at the forefront of the market, making
            her a go-to expert for those seeking unparalleled guidance.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mx-10 bg-yellow mt-20 rounded-xl">
        <div className="w-1/2">
          <div className="p-6">
            <h1 className="font-semibold text-3xl pb-4 pt-5">
              Integrity, Innovation, and Lasting Relationships
            </h1>
            <p className="text-lg text-black pb-5 ">
              Integrity is the foundation of our business. We conduct every
              transaction with honesty, transparency, and a commitment to the
              highest ethical standards. Innovation drives us to find creative
              solutions and stay ahead of industry trends, ensuring that our
              clients benefit from cutting-edge approaches. We believe in
              building lasting relationships, understanding that trust and
              satisfaction are the cornerstones of a successful partnership.
            </p>
          </div>
        </div>
        
        <div className="w-1/2 ">
          <img
            src="https://images.ctfassets.net/02vwvgr6spsr/6QWr7vOaUR2BINQ9xNyDuV/f66fc02afd25214404308fb86b586e9d/Illustration_valuation.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" flex gap-10 mx-10 my-24 rounded-xl">
        <div className="w-1/2 py-10 pr-10">
          <h1 className="font-semibold text-3xl pb-4">
            Unmatched Expertise and Insight
          </h1>
          <p className="text-lg text-black pr-8">
            At Demi Sellars Realty, we pride ourselves on our team's keen market
            insight and in-depth knowledge. We understand that the real estate
            landscape is ever-evolving, and our commitment to staying ahead of
            the curve ensures that our clients receive the most up-to-date and
            relevant information. This dedication to expertise allows us to
            navigate the complexities of the market with confidence, providing
            you with a seamless and informed property journey.
          </p>
        </div>
        <div className="w-1/2 rounded-xl bg-cover bg-center bg-[url(https://cdn.prod.zoopla.co.uk/_next/static/images/person-advising-other-person-b909b6b93b73d414bd4a722723fe1d6f.jpg)]"></div>
      </div>
      <Footer />
    </>
  );
}
