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
import MyAccount from './pages/MyAccount'
import SingOut from './pages/SingOut'
import EditEmail from './pages/EditEmail'
import EditUserName from './pages/EditUserName'
import UpdateListingS from './pages/UpdateListings'




export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/mortgage-calculator' element={<Mortgage />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/saved' element={<SavedListings />} />
        <Route path='/listing/requests' element={<ManageListings />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-listings' element={<MyListing />} />
          <Route path='/update-listings' element={<UpdateListingS />} />
          <Route path='/sing-out' element={<SingOut />} />
          <Route path='/edit-email' element={<EditEmail />} />
          <Route path='/edit-username' element={<EditUserName />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
// 2bbZGB9PEFkwcxw