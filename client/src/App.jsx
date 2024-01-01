<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Services from './pages/Services';
import MyListing from './pages/ShowListing';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import SavedListings from './pages/SavedListings';
import ManageListings from './pages/ManageListings';
import Search from './pages/Search';
import ContactUs from './pages/ContactUs';
import Mortgage from './pages/Mortgage';
import SingOut from './pages/SingOut'
import Settings from './pages/Settings'

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import { lazy } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StampDutyCalculator from "./components/StampDutyCalculator";
>>>>>>> 6eb51089ef69b2aa4f335e004709fcfbba80df2f

// pages
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Listing = lazy(() => import("./pages/Listing"));
const Search = lazy(() => import("./pages/Search"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Mortgage = lazy(() => import("./pages/Mortgage"));

// private pages/route
const SavedListings = lazy(() => import("./pages/SavedListings"));
const ManageListings = lazy(() => import("./pages/ManageListings"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
const SingOut = lazy(() => import("./pages/SingOut"));
const Settings = lazy(() => import("./pages/Settings"));
const EditUserName = lazy(() => import("./pages/EditUserName"));
const UpdateListingS = lazy(() => import("./pages/UpdateListings"));
const MyListing = lazy(() => import("./pages/ShowListing"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const CreateListing = lazy(() => import("./pages/CreateListing"));
const UpdateListing = lazy(() => import("./pages/UpdateListing"));
const EditListingEmail = lazy(() => import("./components/EditListingEmail"));

export default function App() {
  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  {/* done */}
        <Route path='/sign-in' element={<SignIn />} />{/* done */}
        <Route path='/sign-up' element={<SignUp />} />{/* done */}
        <Route path='/our-services' element={<Services />} />{/* done */}
        <Route path='/mortgage-calculator' element={<Mortgage />} />{/* done */}
        <Route path='/about-us' element={<About />} />{/* done */}
        <Route path='/contact-us' element={<ContactUs />} />{/* done */}
        <Route path='/search' element={<Search />} />{/* done */}
        <Route path='/listing/:listingId' element={<Listing />} />{/* done */}
        <Route element={<PrivateRoute />}>
          <Route path='/my-listings' element={<MyListing />} />{/* done */}
          <Route path='/listing/saved' element={<SavedListings />} />{/* done */}
          <Route path='/listing/requests' element={<ManageListings />} /> {/* done */}
          <Route path='/sign-out' element={<SingOut />} />{/* done */}
          <Route path='/settings' element={<Settings />} />{/* done */}
          <Route path='/create-listing' element={<CreateListing />} />{/* done */}
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          {/* done */}
          <Route path='/sign-up' element={<SignUp />} />
          {/* done */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} /> {/* done */}
            <Route path='/our-services' element={<Services />} />
            {/* done */}
            <Route path='/mortgage-calculator' element={<Mortgage />} />
            {/* done */}
            <Route path='/about-us' element={<About />} />
            {/* done */}
            <Route path='/contact-us' element={<ContactUs />} />
            {/* done */}
            <Route path='/search' element={<Search />} />
            {/* done */}
            <Route path='/listing/:listingId' element={<Listing />} />
            {/* done */}
            {/* private Route */}
            <Route element={<PrivateRoute />}>
              <Route path='/edit-email' element={<EditListingEmail />} />
              <Route path='/listing/requests' element={<ManageListings />} />
              <Route path='/update-listings' element={<UpdateListingS />} />
              <Route path='/edit-username' element={<EditUserName />} />
              <Route
                path='/update-listing/:listingId'
                element={<UpdateListing />}
              />
              <Route path='/create-listing' element={<CreateListing />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/sign-out' element={<SingOut />} />
              <Route path='/my-account' element={<MyAccount />} />
              <Route path='/my-listings' element={<MyListing />} />
              <Route path='/listing/saved' element={<SavedListings />} />
              <Route path='/stamp' element={<StampDutyCalculator />} />
              <Route
                path='/dashboard/mortgage-calculator'
                element={<Mortgage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 6eb51089ef69b2aa4f335e004709fcfbba80df2f
    </>
  );
}
// 2bbZGB9PEFkwcxw
