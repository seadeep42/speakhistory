import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";

import ImgGandabherunda01 from "./images/gandabherunda_01.jpg";
import ImgGandabherunda02 from "./images/gandabherunda_02.jpg";
import ImgGandabherunda03 from "./images/gandabherunda_03.jpg";
import ImgGandabherunda04 from "./images/gandabherunda_04.jpg";
import ImgGandabherunda05 from "./images/gandabherunda_05.jpg";
import ImgGandabherunda06 from "./images/gandabherunda_06.jpg";
import ImgGandabherunda07 from "./images/gandabherunda_07.jpeg";
import ImgGandabherunda08 from "./images/gandabherunda_08.jpg";
import ImgGandabherunda09 from "./images/gandabherunda_09.jpg";
import ImgGandabherunda10 from "./images/gandabherunda_10.jpg";
import ImgGandabherunda11 from "./images/gandabherunda_11.jpg";

const SessionsPage = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-09-order-of-gandabherunda"]}
      synopsis={
        <p>
          R. Gyaneshwar Singh also known as RG or Gyani, is a prominent art collector and cultural
          revivalist based in Mysuru, India. Captivated by traditional Mysore paintings from a young
          age, RG built an impressive collection and commissioned new works, nurturing the Mysore
          style. As the Honorary Secretary of Ramsons Kala Pratishtana (RKP), he has been
          instrumental in reviving traditional Indian arts, organizing iconic exhibitions like Bombe
          Mane and Kreedaa Kaushalya. Since 2000, RG, along with Raghu Dharmendra and Dr. Dileep
          K.C.R. Gowda, has researched traditional Indian board games, teaching them to thousands
          through workshops. He has co-authored books such as "Indian Traditional Board Games – A
          Guide to the Art of Play" and "Thanjavur's Gilded Gods" . RG also established the Ramsingh
          Museum of Mysore Paintings and the Kaladevi Doll Museum in memory of his parents,
          significantly contributing to Mysuru's cultural landscape His illustrated lectures with
          in-depth research on various subjects using a multitude of sources and references give
          interesting new twists to the chosen subject .
        </p>
      }
      prev={SESSIONS["02-08-phoenicians-trading-with-india"]}
      next={SESSIONS["02-10-conservation-restoration-antiques-art"]}>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgGandabherunda01} alt="" />
          <p className="session-img-desc">
            The Order was instituted by His Highness Sir Sri Chamrajendra Wadiyar, the 23rd Maharaja
            of Mysuru in 1892 on the silver jubilee of his ascension to the throne.
          </p>
        </div>
        The Wadiyar kings who ruled over the Mysore Kingdom for over 600 years, conferred titles and
        honours on officers and 'subjects' for their contribution to the State and its people. The
        grand ceremony was held during the Dasara Durbars which the Maharaja presided over in the
        great hall of the Mysore Palace. One of the honours was the civilian Order of the
        Gandabherunda.
        <br />
        <br />
        The Order of the Gandabherunda was seen as a threat to the supremacy of the King Emperor. An
        order or title could not be instituted without the permission and approval of the design
        from the Viceroy's office. The British had made it clear that the Order or any other
        princely order could not be placed in a superior position on the chest to any award given by
        and on behalf of the King Emperor. The ingenuity of the courtiers is evident in the design
        of the chain worn around the neck with the pendant close to the throat.
        <div className="clearfloat" />
      </div>
      <h3>The Gandabherunda Order was classified into several categories</h3>
      <div className="paragraph">
        <img src={ImgGandabherunda02} alt="" className="session-full-width" />
        Conferred for Meritorious Service by a public servant. The Royal Emblem, the twin headed
        bird with wings displayed, all within a wreath open at the top. Rubies, Emeralds, Sapphires
        interspersed with diamonds made it a precious stone chain with a pendant.
        <br />
        <br />
        The Gandabherunda encased in a gem studded collet. The Order was suspended around the neck
        by a golden chain with button shaped flower encrusted with precious stones according to the
        class awarded.
        <img src={ImgGandabherunda03} alt="" className="session-full-width" />
      </div>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgGandabherunda04} alt="" />
          <p className="session-img-desc">Col. Desraj Urs</p>
        </div>
        A variation of the Gandabherunda Order for military service seems to have stemmed from the
        fact that in the Great War (1914-1919) Mysore State had attached regiments of the Imperial
        Service Lancers (Mysore Lancers) and the Mysore Transport Corps and it was felt that a war
        medal be instituted to honor men who had shown exceptional bravery. These were in 4 classes:
        First, Second, Third and Fourth. Two of the awardees in the First Class were Col. Desraj Urs
        and B.Chamaraja Urs.
        <br />
        <br />
        During Krishnaraja Wadiyar, the IV's rule, these Orders and Titles were conferred from the
        throne on the European Durbar Day during the Dasara festivities but from 1942, Maharaja H.H
        Jayachamraja Wadiyar conferred awards on his birthday festivities till 1949. The Order was
        ultimately disbanded on 26th January 1950.
      </div>
      <h3>Historic evidence</h3>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgGandabherunda05} alt="" />
          <p className="session-img-desc">
            The origins of the talismanic twin headed bird go back to 3800 BC.
          </p>
        </div>
        Sculptures have been found in the Hittite monuments, where the image was worshipped as the
        King of Heaven.
        <br />
        <br />
        The Roman Empire at its pinnacle had the symbol of the rank of a Caesar or an Augusti who
        governed a prefecture. Every major empire in the Middle Ages onwards adopted the two headed
        eagle as a medal or emblazoned on their flags.
        <br />
        <br />
        Hieroglyphic etchings of the two headed ferocious raptor as an insignia have been discovered
        in Mohenjodaro and Taxashila.
        <div className="clearfloat" />
      </div>
      <div className="paragraph">
        <div className="session-two-column">
          <div>
            <img src={ImgGandabherunda06} className="session-full-width" />
            <p>
              In Indian Mythology, Lord Vishnu takes the form of Narsimha, the man-lion to slay the
              demon, Hiranyakashipu. After slaying him, he does not revert to the form of Vishnu but
              of Gandabherunda. A battle between Shiva (as Sharaba) and the Gandabherunda ensues for
              18 days, ending in the latter's defeat.
            </p>
          </div>
          <div>
            <img src={ImgGandabherunda07} className="session-full-width" />
            <p>
              Hieroglyphic etchings of the two headed ferocious raptor as an insignia have been
              discovered in Mohenjodaro and Taxashila.
            </p>
          </div>
          <div>
            <img src={ImgGandabherunda08} className="session-full-width" />
            <p>
              The image was used on gold pagodas or Gadyana( currency) by the Vijaynagar king
              Achutha Deva Raya.
            </p>
          </div>
        </div>
      </div>
      <div className="paragraph">
        <div className="session-two-column">
          <div>
            <img src={ImgGandabherunda10} className="session-full-width" />
            <p>
              The ceiling carving of the Rameshwara temple in the town of Kaledi in Shimoga
              District, which was the capital of the Kaledi Nayakas, is an evocative depiction of
              the power of the mythical bird. This relief carving shows a double-headed eagle(Garuda
              Bhe-runda) grasping two lions in its beaks and two elephants in its talons
            </p>
          </div>
          <div>
            <img src={ImgGandabherunda09} className="session-full-width" />
            <p>
              In the temple at Balligave in Shimoga district, the Gandabherunda assumes an
              anthropomorphic form having a gigantic human torso complete with two arms and legs
              while retaining the twin avian heads. This unique sculpture is worshipped as
              Bherundeshwara
            </p>
          </div>
        </div>
      </div>
      <div className="paragraph">
        <img src={ImgGandabherunda11} className="session-full-width" />
        <p className="session-img-desc">
          Clockwise from left: (1) The Royal insignia of Wadiyars within the ornate pediment of one
          of the twin North gates of Mysore Palace (2) Gandabherunda at Lalit Mahal Palace, Mysore
          (3) Royal insignia of Mysore
        </p>
      </div>
      <h3>To conclude...</h3>
      <p>
        With the Union of India coming into being in the year 1950, the tradition of erstwhile royal
        orders and awards ended, so did the Order of Gandabherunda
      </p>
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
