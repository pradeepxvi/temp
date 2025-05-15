import React, { useContext } from "react";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import TopRelatedBooks from "./TopRelatedBooks";
import AllTimeBestSellingBooks from "./AllTimeBestSellingBooks";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />

      {/* new arraivals */}
      <NewArrivals />

      {/* banner */}
      <Banner />

      {/* new arraivals */}
      <TopRelatedBooks />

      {/* banner */}
      <Banner />

      {/* new arraivals */}
      <AllTimeBestSellingBooks />
    </>
  );
};

export default Home;
