import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import ImgWriting from "./images/etruscan_01.jpg";
import ImgArch from "./images/etruscan_02.jpg";
import ImgPainting1 from "./images/etruscan_03.jpg";
import ImgPainting2 from "./images/etruscan_04.jpg";
import ImgBook from "./images/etruscan_05.webp";

const photos = [
  { src: "/session-imgs/02-01/01.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-01/02.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-01/03.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-01/04.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/02-01/05.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-01/06.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/02-01/07.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/02-01/08.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/02-01/09.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-01/10.jpg", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-01-etruscan"]}
      synopsis={
        <p>
          Who were the Etruscans? The first great civilisation of Italy that flourished in Tuscany
          and surrounding areas in the first millennium BC, the Etruscans traded with the Greeks and
          helped shape the development of the better known Roman civilisation that followed them.
          Why is so little known about them? Perhaps because there was little surviving literature
          from them. It was only with the discovery of Etruscan tombs starting from the late 19th
          century that they began to get into the public eye. What was their origin? What were the
          features of their civilization?
          <br />
          <br />
          Dr Usha, Paediatrician and a Professor who segued into public health later in her career,
          was fascinated by the travel that came with it. A History enthusiast who loves observing
          and learning about local culture, architecture, the environment and its conservation
          through her travels, was intrigued by the mystery and enigma that surrounded the Etruscans
          while she was traveling through Tuscany in the summer of this year. In her presentation,
          she will share some of the answers she discovered.
        </p>
      }
      prev={SESSIONS["01-20-time"]}
      next={SESSIONS["02-02-migration"]}>
      <div className="paragraph">
        The Etruscans, an indigenous population who inhabited Etruria in ancient Italy, formed a
        federation of city states that had a common language and culture. After conquering adjacent
        lands, it' s territory covered, at it' s greatest extent, roughly what is now Tuscany,
        Western Umbria and Northern Lazio as well as what are now the Po valley, Emilia Romagna,
        South Eastern Lombardy, Southern Veneto and Western Campania. The earliest evidence of their
        existence dates back to 900 BCE. They are considered to be an enigmatic people because apart
        from their inscriptions, there is no historical text written by the Etruscans themselves.
        Whatever data is available has been compiled by Greek and Roman authors. They flourished
        between the 8th and 3rd century BCE.
      </div>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgWriting} alt="" />
          <p className="session-img-desc">Etruscan writing- Ceppus Perugia 2nd century BCE</p>
        </div>
        They were renowned for their rich mineral resources and as a major Mediterranean trading
        power. Stone, copper, iron, gold were the main minerals. The artistic work they did with
        these resources was their hallmark. Historical accounts by Herodotus (Greek historian) Livy
        (Roman historian) and others from the 5th century BCE to the 5th century CE, excavations in
        Tuscany and Umbria in the 18th and 19th century, Pyrgi tablets discovered in 1964,the
        Marzabotta excavations in the 19th and 20th century, study of Etruscan art and architecture
        in the 20th century, deciphering inscriptions and finally using modern methods like carbon
        dating, DNA studies and digital reconstructions have contributed to our understanding of the
        Etruscan way of life.
      </div>
      <div className="paragraph">
        Etruscan, the language of the Etruscans was a Pre Indo European and Paleo European language,
        closely related to the Raetic language that was spoken in the Alps. The language influenced
        Latin but was eventually completely superseded by it.The two languages spoken were
        Phoenician or Greek as is evident from inscriptions on tomb stones, wall paintings and
        Piragi tabs.The Etruscan alphabet is similar to the Greek one. Linguists have been able to
        read the inscriptions but have not been able to understand the meaning. A comparison between
        the Etruscan and Greek alphabets reveals how accurately the Etruscans preserved the Greek
        alphabet. The Cippus Perusinus, a stone tablet bearing 46 lines of incised Etruscan text,
        one of the longest extant Etruscan inscriptions from the 3rd Or 2nd century BCE bears
        testimony to it. The Etruscan alphabet led to the development of Latin letters.
      </div>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgArch} alt="" />
          <p className="session-img-desc">Etruscan Arch Perugia 3rd century BCE, renovated 40BC</p>
        </div>
        Etruscan designs include arches and columns that were later used by the Romans.Their cities
        were enclosed by stone walls that featured the impressive Etruscan arch. The arch at Perugia
        from the 3rd Century BCE, renovated in 40 BCE is one such example.
      </div>
      <div className="paragraph">
        Etruscan women had a distinct status in the ancient Mediterranean World. The richly
        furnished tombs of upper class Etruscans indicate that women and men were treated as equals
        in contrast to their Greek and Roman contemporaries. They were politically important, were
        dominant in family and social life and enjoyed total liberty. They retained their maiden
        name, participated in banquets, sporting events and could inherit property. Paintings and
        sculpture from the period show that they participated in all social events, seated next to
        their partner. The women were known by their personal names. Priestesses had an important
        position and were given more importance. They had individual tombs befitting their stature.
        A statue of Allus Metellus mentions son of Vel and Vesi, indicating clearly the level of
        equality.
      </div>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgPainting1} alt="" />
          <p className="session-img-desc">Tomb paintings Tarquinia - Starting 6th century BCE</p>
        </div>
        From the Etruscans, the Romans inherited many of their cultural and artistic traditions,
        from the spectacle of gladiatorial combat, to hydraulic engineering, temple design and
        religious ritual, among other things. The Roman chariot racing drew on Etruscan practice,
        including the use of three horse teams and the attire of the charioteer.
      </div>
      <div className="clearfloat"></div>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgPainting2} alt="" />
          <p className="session-img-desc">Tomb paintings Tarquinia - Starting 6th century BCE</p>
        </div>
        The city planning methods with public sewers, roads and bridges was also an Etruscan
        inspiration. Interestingly, the fasces, a highly effective spectacle bundling wooden rods
        and a single-bladed axe with leather straps, symbolising a Roman king ' s power to punish
        his subjects, and later, a magistrate ' s power and jurisdiction, was also an Etruscan
        invention. The Etruscan Necropolises of cerveteri and Tarquinia, the archaeological site at
        Marzobotta, the Portici di Bologna(World UNESCO site),the leaning towers of Asinelli and
        Garisenda are some of the living examples of the magnificence of the Etruscan Civilisation.
        The civilization dominated Italy until it fell to the expanding Rome beginning in the late
        4th century as a result of the Roman -Etruscan wars. They were granted Roman citizenship in
        90 BC, and only in 27 BC the whole Etruscan territory was incorporated into the newly
        established Roman Empire. They became Romanised, their culture and language giving way to
        Latin ways, their literature and history obliterated.
      </div>
      <div className="session-float-image">
        <img src={ImgBook} alt="" />
        <p className="session-img-desc">
          The celebrated 20th century author DH Lawrence spent two years in Italy in 1920,
          fascinated by Etruscan artefacts, documenting his discoveries in a book called 'Etruscan
          Places ' . He says ' Everything Roman is Etruscan. ' And so the enigma lives on..
        </p>
      </div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
