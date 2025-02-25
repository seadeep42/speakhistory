import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-19/01.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/02.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-19/03.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/04.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/05.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/06.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/07.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/08.webp", width: 1600, height: 1200 },
  { src: "/session-imgs/01-19/09.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/10.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/11.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/12.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/13.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-19/14.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/15.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/16.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/17.webp", width: 900, height: 1600 },
  { src: "/session-imgs/01-19/18.webp", width: 900, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-19-transatlantic"]}
      synopsis={
        <>
          1492 is a landmark year associated with the trans-Atlantic voyage of Christopher Columbus.
          The voyage was more of a business venture than being an adventure. Lack of knowledge of
          the world paired itself with lady luck and reached this Italian Spaniard to the other
          shores of the ocean. And without knowing the consequences, he squeezed the world into one
          cohesive system of shared fate, ending endemism and exclusivity.
          <br />
          <br />
          Dramatic shifts in civilization are not often ascribed to one person and one point of time
          in history, the way they are identified with 1492 and Christopher Columbus. In 1972, Prof
          Alfred Crosby called it the Columbian Exchange. And that's the story of a side actor who
          jumped into the centre stage of civilization, without that intent.
        </>
      }
      prev={SESSIONS["01-18-curiosity"]}
      next={SESSIONS["01-20-time"]}>
      <p>
        Europe in the 15th century, just prior to the era of exploration and renaissance, was a
        civilizational experimental ground with clashing kingdoms, religions in conflict, shifting
        political power and rising ambitions of cultural consolidation. The Christian Byzantine
        empire in the east was under enormous pressure from an expanding Islamic empire of Ottoman
        Turks. And Andalucia around Granada in Spain under the Islamic Nasrid empire was facing
        pressure from the Kingdom of Castille.
        <br />
        <br />
        In 1453, the fall of Constantinople marked the demise of Byzantine empire and the rise of
        Ottoman empire in the east. Since Constantinople was a major gateway for eastern trade
        through Silk and Spice routes, the Western Europe faced a sudden but expected closure of
        these trade routes by the Ottoman empire. Then the kingdoms of Castille and Aragon in
        peninsular Spain (Iberia) felt the pressing need to come together to force out the Islamic
        footprint from Europe that existed in Granada. Queen Isabella of Castille and King Ferdinand
        of Aragon, married and consolidated their resources. They then successfully overran the
        Islamic Nasrid empire in Granada, thus eliminating the Islamic presence from mainland
        Europe.
        <br />
        <br />
        Christopher Columbus, a Genoan sailor of some maritime experience had a large ambition to
        strike gold from the current European predicament of loss of spice trade from Asia, and he
        convinced the Royal couple of unified Spain that he will find a trans-Atlantic route to the
        east. He then made his first voyage across the Atlantic and recorded a landfall in the
        Caribbean. His return to Spain with proof of finding land across the Atlantic not only gave
        him an enviable stature, but started a flurry of expeditions across the ocean in search of
        treasure. Within a century, the Spanish conquest had given rise to Western European
        expeditions to the entire continental stretch of Americas, resulting in a huge exchange of
        fauna and flora across the Atlantic, and inter-mixing of the hitherto separated human races.
        The European excesses on the natives and the import of Old World diseases to the New World
        decimated the indigenous populations from an estimated 140 million to around 6 to 7 million.
        <br />
        <br />
        Meanwhile, the expanding agriculture and animal husbandry in the Americas now required an
        urgent import of labour, which the European settlers in the New World catered to by forcibly
        transporting people from West Africa, initiating the largest recorded human trafficking in
        the history, termed as Slave Trade. Also, the Americas were getting evangelized and cultural
        life across the Atlantic was fast becoming homogenized. England too joined the race and one
        of the offshoots of this burst of activities was the licencing of East India Company by
        Queen Elizabeth I to re-establish trade with Asia, which dramatically gave rise to centuries
        of colonial rule in the East.
        <br />
        <br />
        Further, the intensive studies carried out on the specifics of the voyages of Columbus, gave
        rise to a whole new knowledge base in earth sciences. The explanation of Coriolis force,
        Trade winds, Ocean currents and large scale atmospheric phenomena as well as their
        fundamental differences in the two hemispheres of the planet owe their origin to the
        curiosity that followed the era of explorations.
        <br />
        <br />
        In 1972, Prof. Alfred Crosby collated the causes and effects of the voyage of Christopher
        Columbus in a book called ‘Columbian Exchange', throwing spotlight on the global
        consequences of an otherwise innocuous voyage of 1492. The enormity of Columbian Exchange is
        the essence of modern civilization taking a decisive turn at its crossroads, reminding us of
        the ‘Road not taken', which Robert Frost wrote centuries later, although he didn't mean to
        relate it to Columbus. <br />
        <br />
        Thus, 1492 became a year that resulted in a humungous dominoes effect on the planet with its
        uncontrolled and unpredictable consequences of historical magnitude.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
