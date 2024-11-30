import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";
import { ROUTES } from "./utils";

import ImgBookstore from "./assets/img_landing_bookstore.webp";
import ImgFarm from "./assets/img_landing_farm.webp";
import ImgGroup from "./assets/img_landing_group.webp";

import IconWhat from "./assets/icon_what.svg";
import IconWho from "./assets/icon_who.svg";
import IconReflect from "./assets/icon_reflect.svg";
import IconFormat from "./assets/icon_format.svg";
import IconEvolve from "./assets/icon_evolve.svg";

import IconVenue from "./assets/Icon_venue.svg";
import IconSpeaker from "./assets/Icon_speaker.svg";
import IconTime from "./assets/Icon_time.svg";

import LandingGallery1 from "./assets/img_landing_gallery_1.webp";
import LandingGallery2 from "./assets/img_landing_gallery_2.webp";
import LandingGallery3 from "./assets/img_landing_gallery_3.webp";
import LandingGallery4 from "./assets/img_landing_gallery_4.webp";

const LandingPage = () => {
  return (
    <div id="page-contents">
      <Header />
      <div className="width-limit">
        <div id="landing-banner">
          <h1>About Speak History</h1>
          <p id="banner-text">
            We are a small community of people in Mysore, India who meet on alternative Saturdays at
            the storytelling platform of a bookstore, wondering about the origins, the process of
            civilisation and the way the truth unfolds on this planet
          </p>
          <a href={ROUTES.MEMBERSHIP} className="btn primary">
            Join the group
          </a>
          <img src={ImgGroup} id="landing-banner-img" className="br" />
        </div>
      </div>
      <div className="width-limit">
        <div className="section">
          <h2 className="section-heading">Founding of Speak History</h2>
          <div id="founding-flex">
            <p>
              Speak History forum has been a concept in the minds of the Founders of Silverfish
              Books, namely Dr. Padma Sudarshan and Ms. Anvita Sudarshan. They experimented the idea
              in small and informal gatherings for a while before setting it as a programme at
              Silverfish Books. Then they drew an underlining principle to transform the forum into
              ‘participatory’ mode, so that the passion and a sense of ownership is shared among the
              participants and the institution of dialogue becomes sustainable and expandable.
            </p>
            <img src={ImgFarm} className="br" />
          </div>
        </div>

        <div className="section">
          <div id="landing-faq">
            <img src={ImgBookstore} className="br" id="landing-faq-image" />
            <div id="landing-faq-content">
              <h5>
                <img src={IconWhat} className="landing-faq-icon" />
                What is it?
              </h5>
              <p>
                It is a simple get together for an hour every 2 weeks, during which you speak and
                discuss about a snippet from history, any historical material, and gain the pleasure
                of a new knowledge and learn a little more about our origins, our connections
              </p>
              <h5>
                <img src={IconWho} className="landing-faq-icon" />
                Who can participate?
              </h5>
              <p>
                Everyone and anyone. Those who can articulate or just want to sit and listen. If you
                nurture an interest in history, past milestones of mankind and the relevance of it
                all to us, you will have a space
              </p>
              <h5>
                <img src={IconFormat} className="landing-faq-icon" />
                What is the format?
              </h5>
              <p>
                We gather. One of the persons will have come prepared to speak for 20 minutes about
                a historical matter. It is spoken and we discuss about it
              </p>
              <h5>
                <img src={IconReflect} className="landing-faq-icon" />
                How will it reflect?
              </h5>
              <p>
                Each get together will be meticulously recorded as a summary of conversation and
                built into a well documented series
              </p>
              <h5>
                <img src={IconEvolve} className="landing-faq-icon" />
                How will it evolve?
              </h5>
              <p>
                Beginning as simple, unassuming and casual conversations, the forum could eventually
                evolve into including invited guests, scholars, experts and writers that would lead
                the conversations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section-heading">Upcoming talks</h2>

        <div id="upcoming-wrapper">
          <div className="upcoming-item">
            <h5>Phonecians trading with India</h5>
            <div className="upcoming-flex">
              <div className="upcoming-flex-item speaker">
                <img src={IconSpeaker} />
                Mr.Ajay Sharma
              </div>
              <div className="upcoming-flex-item time">
                <img src={IconTime} />
                30 Nov 2024, 5:00 PM
              </div>
              <div className="upcoming-flex-item venue">
                <img src={IconVenue} />
                Kalpa Kshetra, Mysuru
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="width-limit">
        <div className="section">
          <h2 className="section-heading">Lookback at our first year</h2>
          <div id="lookback-flex">
            <p id="lookback-text">
              The first year of the forum has recorded considerable progress. The membership of the
              forum has reached nearly 60, although the attendance in some sessions has exceeded
              that number. <a href={ROUTES.SESSIONS}>20 sessions</a> have been conducted so far and{" "}
              <a href={ROUTES.SPEAKERS}>11 speakers</a> have led the conversations.
              <br />
              <br />
              The forum also has held its sessions in 2 different locations - at the Farmer's House
              in Mysore and at Padma Farms, in the outskirts of Mysore.
              <br />
              <br />
              The profile of membership of the forum is very diverse and includes almost all walks
              of life.
            </p>
            <div id="landing-gallery-flex">
              <img src={LandingGallery1} />
              <img src={LandingGallery2} />
              <img src={LandingGallery3} />
              <img src={LandingGallery4} />
            </div>
            {/* <a href={ROUTES.GALLERY} className="btn primary">
              View Gallery
            </a> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<LandingPage />);
