import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const paths = {
    headerOnly: ["/edit-username", "/edit-email", "/search"],
    all: ["/", "/about-us", "/our-services"],
    nothing: [
      "/settings",
      "/my-listings",
      "/create-listing",
      "/listing/saved",
      "/sign-out",
      "/listing/requests",
      "/mortgage-calculator",
    ],
  }; // path without header and footer
  const allowedAll = paths.all.includes(location.pathname), // header and footer
    allowedheader = paths.headerOnly.includes(location.pathname), //header only
    notAllowed = paths.nothing.includes(location.pathname); // without header and footer

  if (allowedheader)
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </>
    );
  if (notAllowed)
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    );
  return (
    <>
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
          <Footer />
        </Suspense>
      </>
    </>
  );
};

export default Layout;
