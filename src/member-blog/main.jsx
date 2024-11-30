import React from "react";
import { createRoot } from "react-dom/client";

import Header from "../components/header";
import Footer from "../components/footer";
import { SESSIONS_LIST } from "../utils";

import { SpeakerItem } from "../components/speaker-item";

import ImageCancer from "./images/member_cancer.webp";
import ImageDisease from "./images/member_disease.webp";
import ImageEtruscan from "./images/member_etruscan.webp";
import ImageJalebi from "./images/member_jalebi.webp";
import ImagePigment from "./images/member_pigment.webp";
import ImageSugar from "./images/member_sugar.webp";

const MEMBER_BLOG_LIST = [
  {
    img: ImageCancer,
    title: "Cancer : Tales of Taming The Crab",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/tales-of-taming-the-crab-4ccf76d43cdc",
  },
  {
    img: ImageEtruscan,
    title: "The Forgotten Masters of Ancient Italy : The Rise and Fall of Etruscan Civilization",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/the-forgotten-masters-of-the-mediterranean-the-rise-and-fall-of-etruscan-civilization-2f6af7c7cc9c",
  },
  {
    img: ImageJalebi,
    title: "Sweet Talking: The Jalebi Speaks",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/a-sweet-talking-the-story-of-jalebi-579fb46d7a11",
  },
  {
    img: ImageDisease,
    title: "The King’s Disease : When King Played God",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/the-kings-disease-when-king-played-god-eb0ea15b1a19",
  },
  {
    img: ImageSugar,
    title: "Sugar Quoted Stories : A Brief History of Sugar in India",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/sugar-quoted-511278d6e12c",
  },
  {
    img: ImagePigment,
    title: "Beyond The Sea: The Tale of a Pigment from Back of Beyond",
    speaker: "Dr.Mahesh Rao",
    link: "https://medium.com/@maheshraobm/beond-the-sea-the-tale-of-a-pigment-from-back-of-beyond-17bed323aa9f",
  },
];

const SessionsPage = () => {
  return (
    <div id="page-contents">
      <Header />
      <div className="width-limit section">
        <h1>Member blog</h1>
        <div id="sessions-flex">
          {MEMBER_BLOG_LIST.map((s) => (
            <a className="session-list-item" key={s.link} href={s.link} target="_blank">
              <div className="session-list-image" style={{ backgroundImage: `url(${s.img})` }} />
              <p className="session-list-title">{s.title}</p>
              <p className="session-list-speaker">{s.speaker}</p>
            </a>
          ))}
          <a className="session-list-item"></a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
