import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-11/01.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-11/02.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-11/03.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-11/04.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-11/05.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-11/06.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-11/07.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-11-jalebi"]}
      synopsis={
        <>
          Squeezed dough in hot oil is immersed in a sugary broth, giving rise to one of the
          sweetest twists of tale on the planet. First found as Zalabiyah in the 10th century Arab
          kitchens, Jalebis invaded the Jain texts of 15th century in India. But is that all? Was
          'Jalebi Pathak', the name of Shivaji's military formation, just a coincidence? Did the
          ancient Indians who invented 'chakravyuha' on the battle field, savour jalebis in peaceful
          times? As they melt in the mouth, Jalebis seem to burn the brain in thoughts.
        </>
      }
      prev={SESSIONS["01-10-medicine"]}
      next={SESSIONS["01-12-restore"]}>
      <p>
        The journey of Jalebi in human civilizations is not easily traceable as many other iconic
        foods and it leaves us with a feeling that the spiralling story of the delicacy may be far
        more deeper than we know.
        <br />
        <br />
        The earliest known history of Jalebi comes from the 10th century Arabic cookbook, Kitab
        al-Tabikh (the book of dishes) written by Ibn Sayyar al-Warraq. This suggests a Middle
        Eastern origin, possibly Persia (present-day Iran). The author describes the making of a
        crispy, juicy, crunchy, hollow and lattice-shaped dessert in sugar syrup called Zalabiyeh.
        Recipe according to the Al-Warraq is to mix all-purpose flour (maida), gram flour (from
        brown chickpea) saffron, cardamom, rose water, and yeast and Buraq-al-Ajin, i.e., borax
        (banned today by the govt of the world). Borax acts as a preservative and improves
        elasticity and crispiness of the jalebis. For the syrup the book says use sugar, honey,
        saffron, cardamom and lemon (adds clarity to the syrup), musk or camphor may be added to
        enhance taste. A coconut shell with a small hole was used then for streaming the flour into
        hot fat called Aliya, extracted from Awassi sheep. So, by 10th century, it looks quite well
        evolved and refined already. <br />
        <br />
        Zlaba is the city of Beja, Tunisia (North Africa). Tunisian people claimed that Abdurrahman
        Ibnou Nafaâ Ziriab, a Baghdad-born poet, singer, composer and oud player, who left the
        Abbasid Court to become the court musician in Al-Andalus (Cordoba, in present-day Spain),
        originated the dish and introduced it to India. He is credited, among many things, of
        standardizing the three-course meal, splitting it into soup, main course, and dessert. His
        favourite dessert is supposed to have been named after him as Ziriabiya.
        <br />
        <br />
        Jalebi was introduced to the Indian sub-continent during the 15th century by the Turkish or
        Persian traders and artisans. The ingredients being easily available and being saatvik, was
        easily adopted, and it became a popular addition to Indian festivals, weddings and even
        temples. The various names in the Indian sub-continent included jalavallika (sweet in
        water), kundalika (earring like) in Sanskrit and more. Jalavallika may have eventually,
        become known as jalebi. However, the first references to Jalebi may have been found in 1450
        in the Jain text by Jinasura, "Priyamkarnrpakatha" that mentions jalebi as part of a
        merchant's dinner menu. In 1600, a Sanskrit text "Gunyagunabodhini" details a recipe that
        resembles modern jalebi. In the later 16th century the book, "Bhojana Kutuhala" by Raghunath
        also mentions jalebi.
        <br />
        <br />
        Harprasad Badkul (Badkul Pratishthan sweet shop in Jabalpur-MP) in 1889 popularised khoya
        jalebi. The fourth generation of Harprasad Badkul (Motilal Badkul, Manish Badkul and Mohit
        Badkul), continues to sell khoya(black) jalebis in Jabalpur, even today. An Indian variation
        made of urad dal is called Imarti/Jangri/Jahangiri (may have been named after the Mughal
        Emperor Jahangir). <br />
        <br />
        There are also references as to how the spiral pattern inspired military formations, the
        most famous one being Jalebi Pathak, adopted by Chatrapati Shivaji’s army. There are
        conjectures about the similarity of the shape of the dish to military formations throughout
        history and mythology, although their relationship cannot be established with confidence.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
