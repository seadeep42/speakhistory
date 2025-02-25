import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import ImgRecliningLady from "./images/art_01.webp";
import ImgGaganendranath from "./images/art_02.webp";
import ImgKeshava from "./images/art_03.webp";
import ImgAkkana from "./images/art_04.webp";
import ImgSaraswati from "./images/art_05.webp";
import ImgJaganmohan from "./images/art_06.webp";
import ImgHope from "./images/art_07.webp";

const photos = [
  { src: "/session-imgs/02-03/01.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/02-03/02.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/03.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-03/04.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/05.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-03/06.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/07.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-03/08.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/09.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/10.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-03/11.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/12.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/13.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/14.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-03/15.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-03-mysore_art"]}
      synopsis={
        <p>
          Divya is a booklover, art enthusiast, and an amateur artist. She tries to juggle her
          passion for art and literature with her freelancing job as a content strategist and writer
          for software application companies. When she is at leisure and not reading a book or
          painting in her sketchbook, you'll find her staring at leaves, flowers, clouds, buildings,
          etc to marvel at patterns, textures, and colours. She believes that art is everywhere and
          all-encompassing, and hence its purpose is to blur any divisive boundaries. In her
          Session, 'Mysore: A Glimpse of the city and its history through the lens of art', she
          recounts her appreciation of art in Mysore and understanding of history through the
          paintings she admired, places she visited, and the views she enjoyed.
        </p>
      }
      prev={SESSIONS["02-02-migration"]}
      next={SESSIONS["02-04-mysore-palace"]}>
      <p>
        Mysore is usually known for Dassehra celebrations, the palace, and good urban planning. Any
        traveller or a resident with an inquisitive eye would find it fascinating to discover the
        history of Mysore and its vicinity through art and architecture. This talk of the Speak
        History forum was about one such journey. The talk is through the lens of an outsider’s
        observation about Mysore and the medieval cities around it through museums, temples, Jain
        basadis, and sculptures she visited in the past 20 months of her stay in the city.
      </p>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgRecliningLady} alt="" />
          <div className="session-img-desc">‘Reclining Nair Lady’ By Raja Ravi Verma</div>
        </div>
        The talk started with an analysis of famous paintings at the Jaganmohan palace museum in
        Mysore, and then discussed the evolution of distinct Mysore style from the sculptures of the
        Ganga period to the paintings of the Wodeyars and the present day. The talk briefly covered
        history of Mysore from the 10th Century AD to mid-20th Century. The concluding part was
        about the need to observe art beyond the lines of religion, and in the trees, flowers, and
        landscape.
      </div>
      <div className="clearfloat"></div>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgGaganendranath} alt="" />
          <div className="session-img-desc">
            A Mythological painting by Gaganendranath Tagore in ‘Bengal school’ Style
          </div>
        </div>
        Undoubtedly, Jaganmohan palace is home to one of the best collections of Indian art. One can
        see Ravi Varma’s famous paintings, paintings of Mysore maharajas, several Mysore-style
        paintings, and some more ensemble of form other schools of art like the Bengal School. The
        gallery provides with its visitors an opportunity to appreciate diverse styles and A
        Mythological painting by Gaganendranath Tagore in ‘Bengal school’ Styleunderstand the
        differences in the ‘gaze, intent, artistic styles, and culture. If a visitor is patient and
        open to learning, the gallery helps think about classical western art influences in Ravi
        Varma’s paintings, and the abstract-ish mythological paintings of Gaganendranath Tagore from
        Bengal School that evolved as an attempt to give birth to a modern yet Indian art style. It
        also plants several questions about the thread that connects the diverse art styles to the
        culture and heritage of this great city. One can try to answer the questions by visiting the
        historical places and diving deeper into the history and the kings that ruled these parts.
      </div>
      <div className="paragraph">
        The cultural influences on art in Mysore are quite varied. Mysore art is an amalgamation of
        styles from various regions and religions. The earliest sculptures around Mysore from the
        10th century, the Gomateswara Bahubali statues, were carved during the time of Ganga
        dynasty. Some other Bahubali statues were made in the later centuries suggesting the
        flourishing of Jain religion, especially the Digambara Jain sect, in and around Mysore and
        Belur. A crucial transition occurred during the Hoysala period (1006 to 1346 CE) when the
        king, Vishnuvardhana, converted to Hinduism while the queen, Shantala, continued rooting her
        belief system in Jainism. The period (1108 – 1152) saw the construction of both Hindu
        Temples and Jain Basadis, equally magnificent and artistic.
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgKeshava} alt="" />
          <div className="session-img-desc">Keshava Temple built in 1268 CE</div>
        </div>
        <div className="session-full-width">
          <img src={ImgAkkana} alt="" />
          <div className="session-img-desc">Akkana Basadi - built in 1181 CE</div>
        </div>
      </div>
      <div className="paragraph">
        Not many temples probably were built after the Hoysala period around Mysore in the Hoysala
        style, also known as Kannada Dravida, as temples didn’t receive much patronage with the rise
        of VeeraShavism. However, scrolls were made as an attempt to bring Gods outside the temples
        to the people. The foundational style of these scrolls lies with the Jain manuscripts that
        existed since the 7th century. The usage of natural colours and mineral colours in the later
        periods, and thin gold leaf suggest the inspirations. From the early Jain manuscripts to the
        murals made during Tipu Sultan’s period and to the eclectic Mysore style paintings of the
        Wodeyar period, any art enthusiast with an inquisitive eye, can identify a clear influence
        of Jainism on Mysore style manuscripts and paintings of the 19th and 20th centuries. On the
        other hand, artists migrated to Mysore from the Vijayanagar empire brought with them their
        styles and iconography to Mysore painting.
      </div>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgSaraswati} alt="" />
          <div className="session-img-desc">Mysore Painting depicting Goddess Saraswati</div>
        </div>
        Mysore style painting despite being not very popular and largely ignored by the contemporary
        Indian arts, is rich, vast, and distinct. The sundry Mysore paintings, murals, and
        manuscripts are not just about using gold-leaf in paintings or depicting Hindu Gods with
        delicate outlines and chubby cheeks. The reign of Krishnaraja Wodeyar III (1894 to 1940),
        the most prominent phase of Mysore style painting, produced several murals on temple and
        palace walls, manuscripts like Sri Tattva Nidhi, Bhagavata Purana, and probably many more
        that were lost to time, wars, and accidents. The narrative style of the manuscripts shows us
        disparate compositional styles, grammar or distinct iconography, modern British and Mughal
        elements, and abstract patterns. They are relevant even today and can be followed to
        illustrate modern stories and comics.
      </div>
      <div className="paragraph">
        Mysore art provides a great delectation for tourists, residents, and art enthusiasts.
        However, the city holds other secrets – one can walk through the numerous parks and wide
        roads to serendipitously spot beautiful foliage, patterns and textures, colours from three
        trees, shrubs, and bushes. The talk was intended to prompt the audience to view art with the
        eye of a historian and visit the lesser known Jain Basadis, museums like the Jaganmohan
        palace along with the popular tourist attractions like the Mysore palace, Hoysaleswara
        Temple, Chennakesava temple, etc. Whether you’re a resident or a traveller, do not miss
        taking a stroll on the roads and in the parks. The talk is a nudge to observe and understand
        how our art is a syncretic blend of cultures, shades and patterns that evolved around Mysore
        through its rich history. Mysore rekindles a pursuit of wonder that’s abundant in kids but
        in many cases lost during adulting.
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgJaganmohan} alt="" />
          <div className="session-img-desc">Jaganmohan Palace, Mysore</div>
        </div>
        <div className="session-full-width">
          <img src={ImgHope} alt="" />
          <div className="session-img-desc">‘Glow of hope’ By Sawlaram Haldankar</div>
        </div>
      </div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
