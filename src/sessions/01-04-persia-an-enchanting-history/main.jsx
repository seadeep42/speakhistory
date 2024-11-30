import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-04/01.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-04/02.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-04/03.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-04/04.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-04/05.webp", width: 1600, height: 1200 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-04-persia"]}
      synopsis={
        <>
          Persian civilization has been one of the most unique organisations of human communities in
          history. Geographically located at the cross roads of other civilizations from Indus
          valley, Mesopotamia, Greece, Arabia and Central Asia, the Persian culture influenced
          humankind for thousands of years. While a certain peace reigned in Persia in art, music,
          poetry, architecture and such, immense violence too marked its time.
        </>
      }
      prev={SESSIONS["01-03-bighunger"]}
      next={SESSIONS["01-05-jordan"]}>
      <p>
        Persian civilization is among the oldest on the planet and dates back to some 5,000 BCE.
        Known as Iran from the 20th century, deriving from the word 'Airyanam' from the ancient
        Avestan language, which meant 'Aryan', Persia is perhaps the largest kingdom ever built in
        human history. As such, every empire builder in the world, always desired to occupy,
        subjugate and possess Persia. This also resulted in Persia becoming one of the most invaded
        civilizations in history, the big ones being Greeks from the West, Mongols from the North
        and Islamic rulers from South. In spite of these frequent run-overs and destructions, the
        Persian civilization cast an immense influence on most of the world including India. <br />
        <br />
        The earliest known civilization in Persia dates back to the Elamite kingdom around 2700 BCE.
        The Achaemenid Empire, founded by Cyrus the Great in the 6th century BCE, became the first
        recognizable Persian Empire, coinciding with the decline of Egyptian civilization . It was
        known for its vast territorial expansion, including the conquest of Babylon by Cyrus and the
        construction of Persepolis. Subsequently, Darius the Great further expanded the Achaemenid
        Empire and introduced the famous Royal Road, connecting the empire's distant regions. This
        spurred enormous growth. The empire was eventually defeated by Alexander the Great in the
        4th century BCE, leading to Hellenistic rule in Persia. Then between 247 BCE and 651 BCE,
        the Parthian and Sassanian empires ruled Persia, until the Islamic rulers conquered Persia
        in the 7th century BCE. Despite the Arab conquest, Persian culture and language continued to
        flourish and exerted a significant influence on Islamic civilization. In the 13th century,
        the Mongol Empire, led by Genghis Khan and later his grandson Hulagu Khan, invaded Persia,
        causing widespread destruction. By early 16th century, the Safavids established a Shiite
        Muslim dynasty and played a crucial role in shaping modern Iran. Isfahan became a center of
        Persian culture and art during this period. Later, the Qajar dynasty ruled Persia in the
        18th and 19th centuries and faced various challenges, including European imperialist
        interests and social upheaval. Subsequently, Reza Shah Pahlavi founded the Pahlavi dynasty
        in 1925, marking the end of the Qajar era. Reza Shah Pahlavi modernized Iran but ruled as an
        authoritarian monarch. His son, Mohammad Reza Shah Pahlavi, continued modernization efforts
        but faced growing opposition due to his extravagant and western ways of life, leading to the
        Iranian Revolution in 1979. The revolution resulted in the establishment of an Islamic
        Republic, with Ayatollah Ruhollah Khomeini as its leader. Iran has since experienced
        political and social changes, including conflicts with neighbours, sanctions from the west,
        and efforts to balance Islamic values with modernization. <br />
        <br />
        Persian history demonstrates how integrated and interconnected the world has always been
        because Persia remains central to our understanding of human civilization.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
