import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-10/01.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-10/02.webp", width: 1600, height: 720 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-10-medicine"]}
      synopsis={
        <>
          The history of medicine in ancient India dates back to the Vedic period (1500 BCE - 600
          BCE), during which the medical practices were deeply intertwined with spiritual and
          philosophical beliefs. The Rigveda, one of the oldest sacred texts, contains references to
          various herbs and plants of medicinal properties, highlighting an early awareness of the
          therapeutic potential of nature.
        </>
      }
      prev={SESSIONS["01-09-wabisabi"]}
      next={SESSIONS["01-11-jalebi"]}>
      <p>
        The history of medicine in ancient India dates back to the Vedic period (1500 BCE - 600
        BCE), during which the medical practices were deeply intertwined with spiritual and
        philosophical beliefs. The Rigveda, one of the oldest sacred texts, contains references to
        various herbs and plants of medicinal properties, highlighting an early awareness of the
        therapeutic potential of nature. Ayurveda began to take shape in around 600 BCE. Charaka
        Samhita, attributed to Sage Charaka provided a wholesome guide to diagnosis, treatment,
        dietary regulations and lifestyle modifications relating to diseases. Sage Susruta is
        revered as the earliest surgeon in the world, who worked extensively on surgical procedures,
        correctional surgery, cataract surgery and instrumentation.
        <br />
        <br />
        Among the ancient medicines in India, Ayurveda and Siddha have evolved through extensive
        experimentation and documentation. In Ayurveda, Charaka Samhita for medicine and Sushruta
        Samhita for surgery have laid out elaborate details. The legend has it that both samhitas
        are 'apourusheya', meaning that they are of divine origin. But the recorded history places
        both of them at around 2nd to 3rd Century BCE. It also remains a doubt if Charaka and
        Sushruta were individual sages or a number of people over a period of time, contributing to
        the body of text, creating a recognition for those two symbolic names. <br />
        <br />
        The Charaka Samhita is organized into eight sections or Sthanas, covering various aspects of
        Ayurveda divided into 120 Chapters. Pathology, anatomy, sensory organs, therapeutics,
        pharmaceutics are all embedded in these. Much later to the original text, another 17
        chapters were added, making it wholesome. Meanwhile, Sushruta Samhita is made of 6 chapters
        and 8 disciplines and is as wholesome in conceptual treatment as the modern surgery. A 9th
        century manuscript found in Taklamakan and a 17th century manuscript found from Tanjaur,
        have enhanced our understanding of these and have also revelealed how several contributors
        successively embellished the central texts.
        <br />
        <br />
        In contrast, the Siddha medicine is perhaps much older to Ayurveda in origin. Again
        suspected to be 'apourusheya', Siddha is also traced back to Patanjali. And most of
        conceptual renderings of Ayurveda and its medicinal practices are a part of this medical
        system, making us wonder about the common but rich traditions of ancient India.
        <br />
        <br />
        Beyond the nuances of medicine and surgery, Kautilya's Arthashastra discusses policies on
        sanitation, health measures and medical administration. Nighantu literature delves into
        Pharmacology and medicinal plants. Emperor Ashoka is supposed to have banned dissection of
        human bodies and such civilizational challenges were part of the evolution of medical
        knowledge in ancient India. The insights, practices and exchanges developed through the
        bygone eras continue to influence traditional Indian medicine and holistic health approaches
        even today.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
