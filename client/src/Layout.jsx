import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  const paths = {
    headerOnly: [
      "/edit-username",
      "/edit-email",
      "/search",
      "/my-account",
      "/stamp",
      "/dashboard/mortgage-calculator",
      "/listing/saved",
      "/create-listing",
      "/my-listings",
      "/settings",
      "/update-listings",
      "/sign-out",
      "/listing/requests",
    ],
    all: ["/", "/about-us", "/our-services"],
    nothing: [],
  };

  const allowedAll = paths.all.includes(location.pathname);
  const allowedHeader =
    paths.headerOnly.includes(location.pathname) ||
    location.pathname.includes(`/update-listing`);
  const notAllowed = paths.nothing.includes(location.pathname);

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
