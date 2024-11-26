import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import ImgCartography01 from "./images/cartography_01.jpg";
import ImgCartography02 from "./images/cartography_02.webp";
import ImgCartography03 from "./images/cartography_03.jpg";
import ImgCartography04 from "./images/cartography_04.jpg";
import ImgCartography05 from "./images/cartography_05.webp";
import ImgCartography06 from "./images/cartography_06.jpg";
import ImgCartography07 from "./images/cartography_07.jpg";
import ImgCartography08 from "./images/cartography_08.jpg";
import ImgCartography09 from "./images/cartography_09.png";
import ImgCartography10 from "./images/cartography_10.jpg";
import ImgCartography11 from "./images/cartography_11.webp";
import ImgCartography12 from "./images/cartography_12.jpg";
import ImgCartography13 from "./images/cartography_13.jpg";

const photos = [
  { src: "/session-imgs/02-06/01.jpg", width: 1200, height: 1600 },
  { src: "/session-imgs/02-06/02.jpg", width: 1200, height: 1600 },
  { src: "/session-imgs/02-06/03.jpg", width: 1600, height: 1200 },
  { src: "/session-imgs/02-06/04.jpg", width: 1200, height: 1600 },
  { src: "/session-imgs/02-06/05.jpg", width: 1200, height: 1600 },
  { src: "/session-imgs/02-06/06.jpg", width: 1600, height: 1200 },
  { src: "/session-imgs/02-06/07.jpg", width: 1600, height: 1200 },
  { src: "/session-imgs/02-06/08.jpg", width: 1200, height: 1600 },
  { src: "/session-imgs/02-06/09.jpg", width: 1200, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-06-cartography"]}
      synopsis={
        <p>
          Pranav Mahishi is a 10 yr old boy who loves to write stories and poems. He, while reading
          a geography book, stumbled upon a page all about maps which made him think on how he could
          use maps to make his fantasy worlds come to life. He is fascinated by how cartography is
          an integration of art and science. Being a person who loves making pencil sketches and a
          curious learner of how science and mathematics are applied in the real world, Pranav has
          been learning and practicing cartography for more than a year.
          <br />
          <br />
          In his talk about the picture of the world, Pranav will be telling the story of how the
          making of maps evolved through centuries from a flat artistic representation of the world
          to a more scientific and accurate representation of the earth. His talk will highlight how
          both art and science contributed to the development of cartography. And the way
          geographical, theological, cosmological and biological knowledge as well as technological
          advancements have influenced the art of cartography.
        </p>
      }
      prev={SESSIONS["02-05-robotic-surgery"]}
      next={SESSIONS["02-07-nuclear-weapons"]}>
      <div className="session-highlight-text">
        Dr Mahesh, the Intellectual content curator (ICC) of Speak History forum says, “The growth
        of Speak History is as fascinating as history itself. On one side we have Padma Shri
        Subbaraman, an illuminary nonagenarian who has scaled the rocks and conquered caves, and on
        the other end of the spectrum is, Pranav Mahishi, a child as young as ten years of age who
        can map it all out. I must admit that asking a young Pranav to speak on a matter as complex
        as cartography was a leap of faith. But I followed Rumi's wisdom: ‘Run from what’s
        comfortable. Forget safety. Live where you fear to live. Destroy your reputation. Be
        notorious. I have tried prudent planning long enough. From now on, I’ll be mad.’ And Parnav
        proved Rumi right and me justified.”
      </div>
      <div className="paragraph">
        Man has used maps since ages to help him explore and navigate the world. The art and science
        of map making is called cartography. Earliest maps were less scientifically accurate, and
        more an art work. Most of them had religious and cosmological depictions along with
        geographical details. As the science and technology developed, maps became more accurate
        still retaining the artistic component! The idea of the flat world then changed to the
        understanding that Earth is spherical. Spherical Earth was then represented as globes.
        ‘Picture of the world’ is the story told by the 10 yr old, Pranav Mahishi, tracing the
        history of cartography from the ancient times to the current day undertsanding of the
        structure of the world. How maps were created and changed over thousands of years. It’s
        amazing to think that people have been drawing maps for over 20,000 years!
      </div>
      <h2>Part 1: The Flat world</h2>
      <h3>Prehistoric Era</h3>
      <p>
        In prehistoric times, people didn’t have paper, so they made simple maps on walls and
        stones. One famous example is the <b>Bedolina Petroglyph</b> in northern Italy, which shows
        an ancient map carved into rock, with symbols of pathways, rivers, and fields.
        Archaeologists believe this helped early people understand their landscape and plan for
        travel, hunting, or farming.
      </p>
      <h3>Classical age (1500 BCE - 1300 CE)</h3>
      <p>
        As civilizations grew, so did their maps. The Egyptians drew maps on papyrus scrolls to show
        their lands, rivers, and temples. The Babylonians created some of the earliest known
        petroglyphs—or carvings—on clay tablets that outlined their world as they saw it: a flat
        disk with their city of Babylon at the center, surrounded by a ring of water. This map,
        known as the Babylonian Map of the World, showed different regions and rivers and
        represented the Babylonians' ideas about their place in the world. It’s amazing to think of
        people thousands of years ago picturing the world around them!
      </p>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgCartography02} alt="" />
          <div className="session-img-desc">Babylonian Map , c.500 BCE</div>
        </div>
        <div className="session-full-width">
          <img src={ImgCartography01} alt="" />
          <div className="session-img-desc">Ptolemy’s Geographic c.150 CE</div>
        </div>
      </div>
      <div className="paragraph">
        Then, the Greeks really took cartography to a new level. A famous Greek named Ptolemy wrote
        Geographia in the 2nd century, a book that included maps of over 8,000 places! He even used
        a grid system to place these locations on his maps, like early latitude and longitude.
      </div>
      <h3>Middle Ages: 11th to 12th Century CE</h3>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgCartography03} alt="" />
          <div className="session-img-desc">Book of curiosities, c 1020-1040 CE</div>
        </div>
        In the Middle Ages, maps in Europe centered the world around Jerusalem. Meanwhile, the
        Islamic world created incredibly accurate maps. One famous work was the Book of Curiosities,
        a 11th-century Egyptian manuscript that included detailed maps of the Mediterranean, Arabian
        Peninsula, and even representations of the stars and heavens. Cartographers in the Islamic
        world used advanced tools like astrolabes and compasses, which helped in navigating across
        deserts and seas.
      </div>
      <div className="clearfloat"></div>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgCartography04} alt="" />
          <div className="session-img-desc">Map of the tracks of Yu, c1136 CE</div>
        </div>
        In ancient China, during the Xia dynasty, the Map of the Tracks of Yu was one of the
        earliest Chinese maps, showing the emperor’s journeys and efforts to control floods.
        <br />
        In Europe, maps during the Middle Ages showed a spiritual world view, with the Hereford
        Mappa Mundi as a famous example. This map placed Jerusalem at the center, illustrating
        biblical events and known lands.
        <br />
        <b>
          5th-15th centuries: Cartography declines during the Middle Ages, with maps often distorted
          and filled with mythical elements.
        </b>
      </div>
      <h3>Age of exploration: 1400 to 1700 CE</h3>
      <p>
        Made in Korea, the Kangnido Map (1402) is one of the oldest maps in East Asia showing a
        broad world view, including Asia, Europe, and parts of Africa, showing an early Korean
        understanding of a global landscape.
      </p>
      <div className="clearfloat"></div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgCartography05} alt="" />
          <div className="session-img-desc">Kangnido Map, c 1402 CE</div>

          <img src={ImgCartography07} alt="" />
          <div className="session-img-desc">Fra Mauro’s world map</div>
          <p>
            In 1450, Fra Mauro, a Venetian monk, created a massive world map based on explorers' and
            traders’ information, showing a round Earth but placing south at the top.
          </p>
        </div>
        <div className="session-full-width">
          <img src={ImgCartography06} alt="" />
          <div className="session-img-desc">Hereford Mappa Mundi, c 1300 CE</div>

          <img src={ImgCartography08} alt="" />
          <div className="session-img-desc">Nautical Chart, c 1433 CE</div>
        </div>
      </div>
      <div className="session-float-image right">
        <img src={ImgCartography09} alt="" />
        <div className="session-img-desc">Mercator's projection, c.1569 CE</div>
      </div>
      <p>
        Nautical charts became essential for navigation, with coastlines and ports detailed for
        sailors. Created by Zheng He who went through 7 voyages to map the world. More than 50 sea
        routes are covered with accurate depiction of coastlines, Harbors and navigation routes. It
        also Indicated compass directions.
      </p>
      <p>
        During the 15th and 16th centuries, European explorers traveled to new lands and needed
        accurate maps for sailing. This is when cartography really became an art. Gerardus Mercator,
        a Flemish cartographer, invented a way to make maps flat while still showing the round
        Earth—called the Mercator projection. Even though it’s not perfect, we still use it today!
      </p>
      <h3>Modern Cartography : 1700 - present</h3>
      <div className="paragraph">
        In the 18th century, James Cook created highly accurate maps of the Pacific Ocean, including
        parts of Australia, New Zealand, and Hawaii, which advanced European understanding of these
        regions. Technological development led to drastic improvement in accuracy in 18th - 19th
        centuries. Large-scale topographic maps are created for infrastructure development and
        military planning.
        <ul>
          <li>
            Early 20th century: Aerial photography and remote sensing revolutionize mapmaking.
          </li>
          <li>
            Late 20th century: Geographic information systems (GIS) are developed, allowing for the
            integration of various data types.
          </li>
          <li>
            21st century: Advancements in satellite imagery and GPS continue to drive the evolution
            of cartography.
          </li>
        </ul>
      </div>
      <h2>Part 2. Gol-Gol Duniya</h2>
      <div className="session-float-image right">
        <img src={ImgCartography10} alt="" />
        <div className="session-img-desc">17th Century globe New Amsterdam History Centre</div>
      </div>

      <ul>
        <li>6th century BC: Hecataeus of Miletus creates the earliest known globe.</li>
        <li>3rd century BC: Eratosthenes creates a more accurate globe.</li>
        <li>5th-15th centuries: Globe making declines during the Middle Ages.</li>
        <li>15th century: Renaissance revives interest in globes.</li>
        <li>1507: Martin Waldseemüller's globe features the Americas.</li>
        <li>16th century: Globes become popular decorative items.</li>
        <li>18th and 19th centuries: Larger, more detailed globes are produced.</li>
        <li>20th century: Technological advancements lead to new types of globes.</li>
        <li>21st century: Globes remain popular educational tools and decorative objects</li>
      </ul>

      <div className="session-float-image right">
        <img src={ImgCartography11} alt="" />
        <div className="session-img-desc">Martin Behaims ‘Erdapfel” (earth Apple from 1492)</div>
      </div>
      <div className="clearfloat"></div>

      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgCartography12} alt="" />
          <div className="session-img-desc">Churchill Globe</div>
        </div>
        <div className="session-full-width">
          <img src={ImgCartography13} alt="" />
        </div>
      </div>
      <h2>Current view</h2>
      <p>
        The geoid is an irregular, ball- shaped surface that extends across the Earth's land and
        oceans. Its shape is irregular because the Earth's mass is not evenly distributed, which
        causes variations in gravity.
      </p>
      <div className="clearfloat"></div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
