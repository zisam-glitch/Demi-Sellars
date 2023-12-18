import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <div className=" flex bg-purple">
        <div className="w-1/2 bg-cover bg-center bg-[url(https://images.ctfassets.net/02vwvgr6spsr/1CUg99fiaZjIQdJ2WAZz4b/9fca892c843cff3a62bbf35881e98f5c/just-ask-zoopla-estate-agent.jpg?fm=avif&w=768&q=50)]"></div>
        <div className="w-1/2 p-16">
          <h2 className="font-semibold text-[34px] pt-5 pb-2">
            Premium Property Sales
          </h2>
          <p className="text-lg text-black pb-5">
            Discover a world of elegance with Demi Sellars Realty's Premium
            Property Sales service. We take pride in showcasing the finest homes
            in sought-after locations across the UK. Our team of seasoned real
            estate professionals is dedicated to curating a portfolio of homes
            that epitomize luxury, style, and unparalleled craftsmanship.
            Whether you're searching for a contemporary urban residence or a
            tranquil countryside estate, our extensive collection ensures that
            your dream home is just a step away. Trust us to guide you through a
            seamless buying experience, where every transaction reflects our
            commitment to excellence.
          </p>
        </div>
      </div>
      <div className=" flex gap-10 mx-10 my-24 rounded-xl">
        <div className="w-1/2 py-10 pr-10">
          <h1 className="font-semibold text-3xl pb-4">
            Bespoke Renting Solutions:
          </h1>
          <p className="text-lg text-black pr-8">
            At Demi Sellars Realty, we understand that your lifestyle is unique,
            and so should be your residence. Our Bespoke Renting Solutions offer
            a range of rental options tailored to suit your individual
            preferences. From luxurious apartments in the heart of the city to
            charming country homes that offer a retreat from the bustling urban
            life, we have a diverse selection of rental properties to cater to
            every taste. Let us assist you in finding the perfect rental home
            that aligns with your lifestyle and aspirations, ensuring your
            living experience is nothing short of extraordinary.
          </p>
        </div>
        <div className="w-1/2 rounded-xl bg-cover bg-center bg-[url(https://www.trainerbubble.com/wp-content/uploads/edd/2018/11/shutterstock_547753810.jpg.webp)]"></div>
      </div>
      <div className=" flex gap-10 mx-10 my-24 rounded-xl">
        <div className="w-1/2 rounded-xl bg-cover bg-center bg-[url(https://images.pexels.com/photos/3625734/pexels-photo-3625734.jpeg?auto=compress&cs=tinysrgb&w=400)]"></div>
        <div className="w-1/2 p-10">
          <h1 className="font-semibold text-3xl pb-4">Market Analysis:</h1>
          <p className="text-lg text-black pr-8">
            Stay ahead of the curve with Demi Sellars Realty's Market Analysis
            service. Our team provides up-to-date insights on market trends and
            property values, empowering you with the knowledge needed to make
            strategic real estate decisions. Whether you are buying, selling, or
            investing, our comprehensive market analysis ensures that you are
            well-informed every step of the way. Trust us to provide the
            intelligence you need to navigate the dynamic real estate landscape
            successfully. <br /> <br />
            At Demi Sellars Realty, our services extend beyond transactions; we
            are dedicated to building lasting relationships and ensuring that
            your property journey is not only successful but also a testament to
            our core values of integrity, innovation, and in-depth market
            knowledge.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mx-10 bg-yellow mt-20 rounded-xl">
        <div className="w-1/2">
          <div className="p-6">
            <h1 className="font-semibold text-3xl pb-4 pt-5">
              Investment Opportunities:
            </h1>
            <p className="text-lg text-black pb-5 ">
              Unlock the potential of your financial portfolio with Demi Sellars
              Realty's Investment Opportunities service. Our team of experts
              provides insightful advice on property investments to maximize
              returns. Whether you are a seasoned investor or a first-time buyer
              looking to explore the world of real estate investment, we offer
              personalized guidance to help you make informed decisions. From
              identifying lucrative opportunities to navigating the complexities
              of the market, our commitment is to see your investments thrive.
            </p>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1702473524/Artboard_1_qoej7u.png"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
