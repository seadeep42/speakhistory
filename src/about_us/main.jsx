import React from "react";
import { createRoot } from "react-dom/client";
import { filter, includes } from "lodash";

import Header from "../components/header";
import Footer from "../components/footer";

const AboutUsPage = () => {
  return (
    <div id="page-contents">
      <Header />
      <div className="width-limit section">
        <h1>About Us</h1>
        <h2>The Platform</h2>
        <p>
          Farmer’s House has a popular Bookstore called ‘Silverfish’ at its organic outlet premises
          in town. Over 10,000 bestsellers are on the shelf. The Bookstore is well curated through
          community participation, to stay relevant to what the world currently reads. Customers
          often buy books at the Silverfish Bookstore and visit Padma Farms to read under a tree or
          on the tree house in the natural landscape.
        </p>
        <h2>Founders</h2>
        <div className="founder-item">
          <h4>Ms. Anvita Sudarshan</h4>
          MFA A Filmmaker by education from New York Film Academy and a writer by passion, Anvita is
          a published author. Her book on pageantry,{" "}
          <a href="https://www.amazon.in/BeautyQueen-Pathway-Pageantry-Sudarshan/dp/9390924103">
            Beauty Queen
          </a>{" "}
          was recently published by Amaryllis. Having spent years in pageantry, fashion industry and
          film industry, she returned to her hometown Mysore and co-founded Farmer’s House and
          Silverfish Books.
        </div>
        <div className="founder-item">
          <h4>Ms. Padma Sudarshan</h4>
          Ph.D An Environmentalist by education, Padma serves on the Advisory Panel of India’s
          National Honey Mission. She has founded and worked on several environmental initiatives as
          well as on inter-Governmental platforms of the United Nations, building a robust
          environmental outreach framework in the Middle East. She is the main architect of the
          organic farms and the products of Farmer’s House. She is also deeply involved in building
          a community of clean growers and clean consumers on the platform of Farmer’s House.
        </div>
        <h2>The Team</h2>
        <ul>
          <li>Sudarshan</li>
          <li>Mahesh</li>
          <li>Kanchana</li>
          <li>Joyita</li>
          <li>Poornima</li>
          <li>Saumya</li>
          <li>Sindhu</li>
          <li>Deep</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AboutUsPage />);
