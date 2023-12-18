import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import Header from "../components/Header";
import ListingItem from "../components/ListingItem";
import { Link } from "react-router-dom";

export default function SavedListings() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/saved`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setLoading(false);
        setError(false);
        if (data.length > 0) {
          setListing(data);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <>
      {" "}
      <Header />
      <main>
        {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
        {error && (
          <p className="text-center my-7 text-2xl">Something went wrong!</p>
        )}
        {!loading && listing == null && (
          <p className="text-center my-7 text-2xl">No Saved Listing</p>
        )}
        {listing && listing.length > 0 && (
            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Saved Listing
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {listing.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} isSaved={true} />
                ))}
              </div>
            </div>
          )}
      </main>
    </>
  );
}
