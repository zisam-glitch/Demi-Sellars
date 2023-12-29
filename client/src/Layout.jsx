import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  const paths = {
    headerOnly: ["/edit-username", "/edit-email", "/search"],
    all: ["/", "/about-us", "/our-services"],
    nothing: [
      "/settings",
      "/my-listings",
      "/create-listing",
      "/my-account",
      "/listing/saved",
      "/sign-out",
      "/listing/requests",
      "/stamp",
    ],
  };

  const allowedAll = paths.all.includes(location.pathname);
  const allowedHeader = paths.headerOnly.includes(location.pathname);
  const notAllowed = paths.nothing.includes(location.pathname);
  const isMortgageCalculatorPage = location.pathname === "/mortgage-calculator";

  if (isMortgageCalculatorPage && !currentUser) {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </>
    );
  }

  if (allowedHeader) {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </>
    );
  }

  if (notAllowed) {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    );
  }

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
