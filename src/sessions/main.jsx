import React from "react";
import { createRoot } from "react-dom/client";

import Header from "../components/header";
import Footer from "../components/footer";
import { SESSIONS_LIST } from "../utils";

import { SpeakerItem } from "../components/speaker-item";

const SessionsPage = () => {
  return (
    <div id="page-contents">
      <Header />
      <div className="width-limit section">
        <h1>Sessions</h1>
        <div id="sessions-flex">
          {SESSIONS_LIST.map((s) => (
            <a className="session-list-item" key={s.slug} href={`/sessions/${s.slug}/`}>
              <div className="session-list-image" style={{ backgroundImage: `url(${s.img})` }} />
              <p className="session-list-title">{s.title}</p>
              <p className="session-list-speaker">
                <SpeakerItem speakerInfo={s.speaker} />
              </p>
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
