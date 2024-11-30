import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-17/01.webp", width: 1280, height: 576 },
  { src: "/session-imgs/01-17/02.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/03.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/04.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-17/05.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/06.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/07.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/08.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-17/09.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-17/10.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-17/11.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-17/12.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-17/13.webp", width: 1600, height: 720 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-17-clay2"]}
      synopsis="We have known by now that the clay defined several important milestones in human civilization. However, the Anatolia and Mesopotamia centric views are only part of the story because clay underlined life's success in Americas, Africa and the rest of the world including India where clay-based developments were substantial, especially in the past 2000 to 3000 years."
      prev={SESSIONS["01-16-clay1"]}
      next={SESSIONS["01-18-curiosity"]}>
      <p>
        <b>India and the World</b>
        <br />
        Formation of clay itself was a dramatic event on the planet, as we now know, but it is a
        strange coincidence that the very first life molecules used clay as substrate, eventually
        inferring that clay molded life on the planet. Then, the earth went through several
        geo-bio-physical time periods which we popularly call as Eons that are further subdivided
        into Eras, Periods and Epochs. These time periods have alternated between several ice ages
        and warm periods, each time the clay playing a major planetary role.
        <br />
        <br />
        The Holocene Epoch that began 11,700 years ago is widely regarded as the present one in this
        sequence of earth time. Around the beginning of Holocene, the negative impact of a rapid
        cooling phase of an event called the ‘;Younger Dryas’ or the " Big Freeze" had a negative
        impact on the flora and the fauna, which consequentially forced the hunting-gathering
        Paleolithic man to usher into Neolithic era and begin agriculture. This milestone in the
        civilization was an adaptation to the forcings of nature. These climactic changes and
        demographic pressures also contributed to the necessity of inventing agriculture for man,
        who by then was already passing through a semi sedentary phase. The 23,000 year old Natufian
        culture at Ohalo II on the banks of the sea of Galilee demonstrates this fact. Also, the
        incipient Agriculturists seem to have overcome the initial challenges of farming and
        domestication of animals in the golden crescent region, a part that covers Jordan, Israel,
        Lebanon, Cyprus, Syria, ancient Anatolia and a small part of Egypt. Once the early Holocene
        man became comfortable after having solved the sustenance problem in the first 3 pre-pottery
        neolithic age, he began turning his attention towards higher goals. He started building
        dwellings, making pottery, ornaments, toys and musical instruments among other things. With
        each culture named after the pottery found during archeological excavations, beginning from
        the neolithic to the chalcolithic age through the bronze age and upto the iron age, the art
        of pottery, construction of settlements, villages, towns and city-states got better and
        better using the applications of clay. Each region in the world had its own pottery culture.
        maturing through the ages of civilization.
        <br />
        <br />
        In India, in the Harppan and the vedic age, clay as construction material had its run
        through stages of maturity where clay bricks were used to build the large Harappan cities of
        Mohenjo Daro, Rakhigarhi, Kalibangan etc. Pottery was used for storing grains & liquids, for
        cooking and for funerary rituals. Later stages saw the use of pottey only for storage,
        cooking and ornamentation. Today, clay still holds its place as an eco-friendly construction
        material like that used in rammed earth construction, adobe bricks etc.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
