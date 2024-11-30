import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import Img1 from "./images/palace_01.webp";
import Img2 from "./images/palace_02.webp";
import Img3 from "./images/palace_03.webp";
import Img4 from "./images/palace_04.webp";
import Img5 from "./images/palace_05.gif";
import Img6 from "./images/palace_06.webp";
import Img7 from "./images/palace_07.webp";
import Img8 from "./images/palace_08.webp";
import Img9 from "./images/palace_09.webp";
import Img10 from "./images/palace_10.webp";

const photos = [
  { src: "/session-imgs/02-04/01.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-04/02.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-04/03.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-04/04.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-04/05.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-04/06.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-04/07.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-04/08.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-04-mysore-palace"]}
      synopsis={
        <p>
          One of the most widely visited places in India, the Mysore Palace in all its grandeur,
          folklore, legend, history and legacy has its own story to share.
          <br />
          <br />
          Also known as the Amba Vilas Palace, it has a chequered history dating back to a couple of
          centuries. The construction of this iconic landmark would make for a riveting tale to be
          shared by Mr R G Singh, Secretary of Ramsons Kala Pratisthana which has established itself
          as a Research, training, design, development and conservation centre for art, craft and
          culture.
          <br />
          <br />
          Mr R G Singh's tryst with Mysore Paintings, photographs and antiques goes back to his
          early years and his passion as a researcher, collector of artefacts over the years and
          painstaking efforts to chronicle the history of the Royal dynasty makes him a popular
          speaker on the subject. His illustrated lectures with in-depth research on the subject
          using a multitude of sources and references add interesting insights and new twists to the
          chosen topic.
        </p>
      }
      prev={SESSIONS["02-03-mysore_art"]}
      next={SESSIONS["02-05-robotic-surgery"]}>
      <p>
        Some 400 years ago, Mysore was a small town within the ramparts of a fort. There were alleys
        and streets where stood houses and shops. The lives of the people revolved around a palace
        where lived the reigning king of Mysore. The fort was built sometime in 1574 by Bola
        Chamraja Wodeyar IV(1572-1576). The fort, as it stands today, is not the same, having had a
        chequered history.
      </p>
      <div className="session-two-column paragraph">
        <div className="session-full-width session-highlight-text">
          In 1638, the palace was struck by lightning and rebuilt by Kantirava Narasa Raja Wadeyar
          (1638-1659) who extended the existing structures, adding new pavilions.
        </div>
        <div className="session-full-width session-highlight-text">
          In 1793, it was demolished by Tipu Sultan, the son of Hyder Ali who rose to become the
          ruler of Mysore. He moved a part of the palace to Nazarbad where he wanted to build a mint
          and a palace for himself.
        </div>
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width session-highlight-text">
          <img src={Img1} alt="" />
          In 1799, upon the death of Tipu Sultan, the five year old Krishnaraja Wodeyar III ( 1794-
          1868) assumed the throne. A new palace was commissioned in the Hindu architectural style
          which was completed in 1803.
        </div>
        <div className="session-full-width session-highlight-text">
          <img src={Img2} alt="" />
          At the wedding celebrations (in 1897) of Princess Jayalakshammani and Kantharaje Urs, the
          balcony of the palace constructed in 1805 collapsed due to a fire mishap.
        </div>
      </div>
      <div className="paragraph">
        <div className="session-highlight-text">
          The destiny of the Mysuru Palace now passed to Queen Regent Kempananjammani Vanivilasa
          Sanndihana, who commissioned well known British architect Henry Irwin to build a new
          palace that would be a tribute to the legacy of Mysore and the Wodeyars. She gave clear
          instructions that the palace should be made fire proof. The pillars were brought from
          Scotland and the stained glass from Belgium.
        </div>
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width session-highlight-text">
          <img src={Img3} alt="" />
          H.H Kempananjammanni Vani Vilasa Sannidhana(1866-1934), wife of Chamrajendra Wodeyar X and
          mother of Krishnaraja Wodeyar IV, besides 4 others. She was widowed at the age of 26. She
          occupies a significant place in the annals of Mysore's history, being one of the strongest
          forces of her times who ensured the goodwill and growth of her people. She had a
          determined and steely gaze even in the days of the purdah! Her staunch belief in
          empowering her people through education and her stellar contributions towards building her
          city establishes her as one of the eminent queens in the history of India.
        </div>
        <div className="session-full-width">
          <div className="session-highlight-text paragraph">
            Completed in 1912, the result is what one sees as the glorious Mysore Palace today. A
            masterpiece in Indo-Saracenic architecture, with its majestic polished pillars of
            porphyries, interior door frames and other decorations in elaborately finished carvings
            of silver, ivory, sandalwood and stone.
          </div>
          <img src={Img4} alt="" />
          Beautifully painted cluster pillars support vaulted ceilings which are also decorated with
          floral trellis motifs. Bays between pilasters in the walls have special niches where
          originally canvases of Raja Ravi Varma adorned but now sport the canvases of Shilpi
          Siddhanti Sidddhalingaswamy.
          <div className="session-highlight-text">
            <img src={Img5} alt="" />
            Henry Irwin CIE (24 January 1841 – 5 August 1922) was an architect of British India. He
            is mainly known for his works in Indo- Saracenic style of architecture.His works
            include:Mysore palace, Chennai Railway station, Madras high court, The AMerican college,
            Madurai.
          </div>
        </div>
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={Img6} alt="" />
          <div className="session-img-desc">
            This colonnaded hall was the public durbar hall from 1907 until the palace was extended
            (1930) in the front by building a balcony.
          </div>
        </div>
        <div className="session-full-width">
          <img src={Img7} alt="" />
        </div>
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={Img8} alt="" />
          <div className="session-img-desc">
            K. Venkatappa, son of Palace artist Durgada Krishnappa, suggested the colours blue, gold
            and emerald for the interiors of the palace and was given an amount of ₹100 in 1931 for
            suggesting the colours!! He was a student of Abanindranath Tagore, from the Bengal
            School of Art.
          </div>
        </div>
        <div className="session-full-width">
          <img src={Img9} alt="" />
        </div>
      </div>
      <div className="paragraph session-highlight-text">
        Finally, in 1939, a second tower was built on either end of the facade. The present palace
        consists of 3 separate periods of construction
        <ul>
          <li>The undamaged part of the 1800 to 1805 construction</li>
          <li>The Henry Irwin designed part which lies at the centre 1897 to 1912</li>
          <li>The terraced durbar hall constructed in late 1930's</li>
        </ul>
      </div>
      <div className="session-full-width">
        <img src={Img10} alt="" />
      </div>
      <div className="paragraph session-highlight-text">
        The next and only major change in the appearance of the Palace painted terracotta red.
        <br />
        Cherry toppings on a truly magnificent cake!!!
      </div>
      <i>
        R. Gyaneshwar Singh also known as RG or Gyani, is a prominent art collector and cultural
        revivalist based in Mysuru, India. Captivated by traditional Mysore paintings from a young
        age, RG built an impressive collection and commissioned new works, nurturing the Mysore
        style. As the Honorary Secretary of Ramsons Kala Pratishtana (RKP), he has been instrumental
        in reviving traditional Indian arts, organizing iconic exhibitions like Bombe Mane and
        Kreedaa Kaushalya. Since 2000, RG, along with Raghu Dharmendra and Dr. Dileep K.C.R. Gowda,
        has researched traditional Indian board games, teaching them to thousands through workshops.
        He has co-authored books such as "Indian Traditional Board Games – A Guide to the Art of
        Play" and "Thanjavur's Gilded Gods". RG also established the Ramsingh Museum of Mysore
        Paintings and the Kaladevi Doll Museum in memory of his parents, significantly contributing
        to Mysuru's cultural landscape
      </i>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
