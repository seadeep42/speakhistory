import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import Img1 from "./images/conservation_01.jpg";
import Img2 from "./images/conservation_02.jpg";
import Img3 from "./images/conservation_03.jpg";
import Img4 from "./images/conservation_04.jpg";
import Img5 from "./images/conservation_05.jpg";

const photos = [
  { src: "/session-imgs/02-10/01.webp", width: 1152, height: 864 },
  { src: "/session-imgs/02-10/02.webp", width: 1280, height: 1060 },
  { src: "/session-imgs/02-10/03.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/04.webp", width: 1280, height: 893 },
  { src: "/session-imgs/02-10/05.webp", width: 1152, height: 864 },
  { src: "/session-imgs/02-10/06.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/07.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/08.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/09.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/10.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/11.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/12.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/13.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/14.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/15.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/16.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/17.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/18.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/19.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/20.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/21.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/22.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/23.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/24.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/25.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/26.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/27.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/28.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/29.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/30.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/31.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/32.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-10/33.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/34.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/35.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/36.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-10/37.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-10-conservation-restoration-antiques-art"]}
      synopsis={
        <p>
          Sri Subbaraman, who has spoken earlier in this Forum on his experiences in the
          conservation of some iconic monuments while serving in the Archaeological Survey of India,
          will speak in this session on his experiences in treating museum objects of great value,
          when he was in the Indian Museum, Kolkata and of art objects of different kinds during his
          tenure as Director of the INTACH Chitrakala Parishath Art Conservation Centre, Bangalore,
          from 1993 to 2006.
          <br />
          <br />
          Sri Subbaraman is a distinguished, retired archaeologist who headed teams responsible for
          conservation and preservation projects of the Archeological Survey of India, notably the
          paintings at Ajanta, Ellora caves, Bamian Buddhas in Afghanistan (which unfortunately
          didn't survive the brutal attack of the Taliban) besides other expeditions in his long and
          distinguished career.
        </p>
      }
      prev={SESSIONS["02-09-order-of-gandabherunda"]}>
      <div className="paragraph">
        In the 31st talk of the Speak History Forum and the first of the new year, Mr S.Subbaraman
        spoke about the conservation and restoration of antiquities and works of art, that are such
        an important part of our cultural heritage and need to be preserved properly. After
        outlining the various factors causing the deterioration of such objects over time, including
        the physical, chemical and biological ones, he spoke about half a dozen examples of the
        conservation work done by him in the past, all except the first one while heading the INTACH
        Chitrakalaparishath Art Conservation Centre,( ICKPAC ), Bangalore.
      </div>
      <div className="session-highlight-text">
        <h4>Deterioration of Antiquities, Works of Art</h4>
        <div className="paragraph ">
          Antiquities and works of art, like all other objects, are constantly subject to a process
          of change due to external agencies as well as inherent causes. This change, unfortunately,
          is almost always towards deterioration. The factors causing this deterioration are
          essentially of three types:
          <ul>
            <li>Physical</li>
            <li>Chemical</li>
            <li>Biological</li>
          </ul>
          Heat and moisture are the two primary causes of the deterioration of objects. Moisture is
          the ubiquitous and probably the most powerful agent of decay.
        </div>
      </div>
      <div>
        The first work he spoke on was the conservation treatment to the idol of Pundarika Vithala,
        the main deity of the famous pilgrimage centre, Phandarpur. How the work was done after
        convincing local religious objectors about the absolute necessity of such treatment and how
        the timing of the treatment had to be carefully chosen - all this added much interest to the
        story.
        <div className="session-float-image right">
          <img src={Img1} alt="" />
          <p className="session-img-desc">Pundarika Vithala temple, Phandarpur</p>
        </div>
      </div>
      <div className="paragraph">
        Next he described in detail the restoration of a Raja Ravi Varma painting (oil on canvas) at
        ICKPAC, which was followed by an account of the re-gilding of the life-size statue of Ranjit
        Singhji, the Jamsaheb of Nawanagar,(the famous cricketer) at the request of the Municipality
        of Jamnagar in Gujerat and the treatment to the large equestrian bronze statue of the first
        Jam Saheb. The corrosion process in bronze (an alloy of Copper and Tin), the formation of
        noble patina of Malachite in the early stages and the development of ‘ bronze disease‘ in
        some cases were all described along with the actual treatment to a bronze statue of the
        Vijayanagar period, aimed at getting rid the bronze disease without removing the patina. The
        last two examples were the de-acidification and preservation by encapsulation of a valuable
        paper manuscript, hand-written by the famous 19th century saint, Jyothi Ramalinga Swamigal
        of Tamilnadu and the cleaning and preservation of mural paintings in the Ranganatha Swami
        temple, Srirangam, Tamilnadu, that had been covered by a layer of soot due to a fire
        accident that had occurred near the Sanctum some years ago.
      </div>
      <div className="session-highlight-text paragraph">
        <div className="session-float-image right">
          <img src={Img2} alt="" />
        </div>
        <h4>Restoration of Ravi Varma painting</h4>
        <p>
          A painting has a layered structure consisting of a support, ground and paint layer. In
          conservation we aim at restoring each of the layers to a good condition, besides ensuring
          the soundness of their mutual adhesion. Relining of canvas, cleaning for removal of
          discoloured varnish, retouching, re-varnishing and framing.
        </p>
        <div className="clearfloat"></div>
      </div>
      <div className="session-full-width">
        <img src={Img3} alt="" />
      </div>
      <div className="session-highlight-text">
        <div className="session-float-image right">
          <img src={Img4} alt="" />
        </div>
        <h4>Conservation of old bronze statue</h4>
        Corrosion process: Cuprous oxide (Cu2O), Cupric oxide (CuO), Basic copper carbonate
        (Malachite), CuCo3.Cu(OH)2. Oxichlorides , Atacamite, Paratcamite Cu2Cl(OH)3
        <ul>
          <li>Sodium Sesquicarbonate method</li>
          <li>Silver oxide method</li>
          <li>Benzotrizole treatment</li>
          <li>Storage in a dry area</li>
        </ul>
      </div>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={Img5} alt="" />
          <p className="session-img-desc">Srirangam temple Work in progress</p>
        </div>
        There was a question/ answer session at the end of the talk that elicited more information
        on the subject. The useful discussions in the sylvan surroundings of the Padma Farms, the
        delicious lunch that followed and the meticulous arrangements that were in place, all
        contributed to a most enjoyable morning to the participants.
        <div className="clearfloat"></div>
      </div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
