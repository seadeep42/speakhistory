import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-09/01.jpg", width: 1600, height: 848 },
  { src: "/session-imgs/01-09/02.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-09/03.jpg", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-09-wabisabi"]}
      synopsis={
        <>
          That Japanese aesthetic worldview is said to have sprung out of Song dynasty, but came to
          life's centrestage through Zen Buddhism of 15th century. It influenced generations of
          people over a long time and held relevance through the stresses and anxieties of urban
          life.
        </>
      }
      prev={SESSIONS["01-08-palanquins"]}
      next={SESSIONS["01-10-medicine"]}>
      <p>
        Wabi-sabi is Japan's deep acceptance, if not celebration, of the fact that in nature,
        nothing is permanent, nothing is perfect, and nothing is complete. It stands in direct
        opposition to the West's worldview founded on Plato's philosophy that holds the world to a
        fixed 'perfect' ideal. Wabi-sabi's foundational principles are inextricably linked to
        Buddhism that Japan readily embraced, 6th century CE onwards, especially Buddha's beliefs
        about the reality of life: Impermanence (anitta), Suffering (dhukka) and Non-Self (anicca).
        <br />
        <br />
        Chasing the history of wabi-sabi means chasing the history of Japan. And China. And Korea.
        While most wabi-sabi literature point to Zen Buddhism and the tea ceremony as key
        influences, both came to Japan from China, via Korea. Why then, did wabi-sabi arise uniquely
        in Japan? Also, why did it come to be infused with so much 'feeling'? Over a span of four
        centuries and two dynasties (Asuka and Nara, 592 CE - 794 CE) Japan imported Chinese culture
        en masse - three religious philosophies (Taoism, Confucianism, Buddhism), government and
        bureaucracy, script and calligraphy, painting and sculpture, tea and its drinking ceremony.
        After which, conflict in China meant the end of formal courtly relations for a period. But
        all the building blocks of wabi-sabi were in place. Having swallowed the whole meal of
        Chinese culture, Japan isolated itself during the Heain period (700-1185 CE), which helped
        blossom Japanese culture's golden age. Driven by the powerful aristocratic clans (that
        ruled, while the figurehead emperor reigned), Japan achieved a level of refinement and
        nuance that may be best summed up by a feeling - mono no aware, the 'pathos or melancholy of
        things' owing to their transience. This melancholy infused not just the period's culture -
        from the world's first novel, Lady Murasaki Shikibu's Tale of Genji, to waka poetry and
        yamato-e painting - but also Japan's aesthetic sensibility ever since.
        <br />
        <br />
        In the centuries that followed, powerful cultural forces like Samurai and Bushido,
        Confucianism and restraint, Zen Buddhism and simplicity, Taoism and 'flow', the rise of
        wealth and ostentation, and the Wabicha tea ceremonies came together in the crucible of a
        society in upheaval, giving rise to the wabi-sabi 'rustic simplicity' aesthetic and
        sensibility that percolated deep into the nature-loving Japanese psyche. Wabi-sabi's
        highpoint was also its low-point. Lord Toyotomi Hideyoshi, the second great unifier of
        Japan, saw his Grand Tea Master Rikyu's wabi-sabi experiments as undermining his authority,
        and a joke on his peasant roots. In a sadly befitting end that's the ultimate testament to
        transience, Sen no Rikyū was ordered to commit sepukku, which he did after having a final
        tea party with friends, and writing a jisei (death poem). <br />
        <br />
        Sen no Rikyū left behind a stunningly sophisticated legacy that represented the distillation
        of many millennia of human self-cultivation and mindfulness; as well as a return to nature,
        even as society was getting increasingly alienated from it; a worldview that brings welcome
        relief from the pursuit of perfection that the world is belabouring after, by simply
        accepting that nature is beautiful, never perfect, or perhaps, beautiful because it is
        imperfect.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
