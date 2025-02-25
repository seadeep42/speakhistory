import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-12/01.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-12/02.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-12/03.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-12/04.webp", width: 900, height: 1535 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-12-restore"]}
      synopsis={
        <>
          It takes monumental effort to persuade the citadels of history to break their silence. The
          stories of the past come tumbling out of the mute stones only when a pair of deft hands
          work on them.
          <br />
          <br />
          Mr. Subbaraman has spent a lifetime restoring some of the most important heritage sites on
          the planet - including Bamiyan Buddhas, Angkor Wat, Ajanta, Ellora, Beluru, Halebeedu and
          Thanjavur. A chemist by education, and an archaeological chemist by training, he has
          learned at some of the best global institutions, and has been part of the senior
          leadership in the Archaeological Survey of India for decades. His pioneering work in
          conservation and restoration has been celebrated with many awards, the latest being the
          Padmashree, which the President of India honoured him with last year.
          <br />
          <br />
          Mr. Subbaraman, now 94, recounted stories of restoration from his life, under the banyan
          tree at Padma Farms, on 2 March 2024.
          <br />
          <br />
          On the same day, the forum also invited ten kids from Kaliyuva Mane, a free school of
          alternative learning for underprivileged children, to experience the farm and the event.
          They were allowed to set up food stalls, and art and craft exhibition.
        </>
      }
      prev={SESSIONS["01-11-jalebi"]}
      next={SESSIONS["01-13-water"]}>
      <p>
        If you've seen the iconic monuments of Ajanta, Ellora, Angkor Wat, Bamiyan Buddhas, Belur,
        Halebid, Lepakshi and Brihadeeshwara temples, you've seen Mr. S. Subbaraman's monumental
        work.
        <br />
        <br />
        Ever since he joined the Archaeological Survey of India (ASI) in 1954, he has been involved
        in the preservation of some of the most iconic historical monuments on our side of the
        planet. Mr Subbaraman, former Superintending Archaeological Chemist at ASI, was born in
        Mysore, studied in Madras, trained in Rome, and worked across Asia, including in Cambodia
        and Afghanistan.
        <br />
        <br />
        He has published papers extensively, his work has been decorated with many honours, and his
        paper on 'Conservation of wall paintings' has been used to train scientists by Department of
        Science & Technology.
        <br />
        <br />
        In 2023, thirty five years after he retired, he was awarded the Padma Shri. On 2 March 2024,
        the 70th year since he started work, he shared some of his memorable experiences with Speak
        History:
      </p>
      <ul>
        <li>
          After having been lost to the world for over a thousand years, the Ajanta Caves (a UNESCO
          world heritage site), were 'rediscovered' in 1819, in a dense forest. In early attempts to
          restore the 2nd BCE Buddhist mural paintings, Italian restorers used shellac, that turned
          dull and brown with time, robbing them of their colour. In the fifties, Mr. Subbaraman led
          ASI's painstaking effort to undo this damage by finding the right organic solvents and
          process to delicately reveal the paintings in their original colour and freshness.
        </li>
        <li>
          At the late Vijayanagara period, Lepakshi temple (1520 CE) in AP, a 16 foot long figure of
          Veerabhadra on the ceiling of the main shrine had literally been cloaked by time - the
          continuous use of oil lamps through centuries had coated it thick with soot. As the
          coating was carefully dissolved with organic solvents by Mr. Subbaraman and his ASI team,
          the figure slowly emerged, with colours restored to former splendour and detail.
        </li>
        <li>
          The early 11th Century Brihadeeshwara temple at Thanjavur, built by the great Raja Raja
          Chola, is an architectural masterpiece, unique for its mural paintings from three periods
          - Chola (11th C), Nayaka (16th C) and Maharatta (18th C). The Chola paintings, had been
          re-plastered by the Nayakas in 16th C, and painted over in the then prevalent style. With
          the accidental discovery of the Chola paintings underneath in 1935, early workers of ASI
          started chipping away at the overlaying Nayaka layer, to expose the Chola paintings.
          However, Mr Subbaraman, realizing that the Nayaka paintings were historic in their own
          right, devised a special technique to carefully separate and save them in one square metre
          panels, and remounting them on a fibre glass support, while also preserving the newly
          exposed Chola paintings, in situ. The separation of two overlapping layers of paint being
          accomplished on this scale was a world first, and received international attention.
        </li>
        <li>
          Between 1969 to 1977, ASI teams worked on the two gigantic Bamiyan Buddha statues (139 and
          183 feet tall) in Afghanistan, for nine seasons of four months each. In the final year,
          under the leadership of Mr Subbaraman, the work was completed, including the conservation
          of 4-5th Century paintings on the walls around the big Buddha. The sites were formally
          handed over to the Afghan government by the then External Affairs Minister, Sri Atal
          Behari Vajpayee in September, 1977.
        </li>
        <li>
          In 1982, at the invitation of the Cambodian government, a nine member ASI team visited
          Cambodia for four months, to study the long forgotten Angkor Wat temple (that had
          ironically been reclaimed and hence protected by the dense jungle and natural moat), and
          prepare a detailed conservation report. Mr Subbaraman and his chemistry team, after a
          comprehensive study, helped prepare the report that served as a guide for subsequent
          conservation of the stunning temple.
        </li>
      </ul>
      <p>
        The popular belief and recognition is that 'history' is preserved by those that document the
        civilization in words of story. But those that preserve the monuments and protect the
        heritage sites build the most essential connection between perception in the present and the
        facts of the past. The old adage that 'every stone tells a story' is enabled by silent
        scholars like Mr. Subbaraman. And his lifetime achievements laid another foundation stone
        for the pyramid of knowledge on our origins.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
