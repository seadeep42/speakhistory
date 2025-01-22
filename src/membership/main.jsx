import React from "react";
import { createRoot } from "react-dom/client";

import Img from "./membership_banner.webp";

import Header from "../components/header";
import Footer from "../components/footer";

const SpeakersPage = () => {
  return (
    <div id="page-contents">
      <Header />
      <div className="width-limit section">
        <img src={Img} alt="membership banner" className="membership_banner" />
        <h3>About Speak History</h3>
        Speak History is a conversational forum that meets on alternative Saturdays, each time to
        discuss a different story from the annals of human history. It is a forum of passionate
        story tellers that do not necessarily have an academic background in history.
        <h3>The members</h3>
        The members, representing the different walks of life, are also not conventional historians.
        That makes the forum a meeting place for those that have genuine interest in the origin and
        transformation of civilization through the stories of human tribulations and travails across
        the world. The forum adopts an approach that shuns biases, judgements and opinionated
        narratives. In all, Speak History is a quest of curiosity into the happenings of the past.
        It is a forum by the people that have passionately pursued knowledge and for the people who
        have an appetite for truth.
        <h3>Joining Speak History</h3>
        For details about the past sessions, upcoming events, membership and any other information,
        please contact +919591799935, or +919611075994
        <div className="clearfloat"></div>
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SpeakersPage />);
