import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-02/01.jpg", width: 1273, height: 1600 },
  { src: "/session-imgs/01-02/02.jpg", width: 1600, height: 1200 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-02-yadavagiri"]}
      synopsis={
        <>
          Throughout history, most immigrations to Mysore occurred from the north eastern frontier
          and YADAVAGIRI became the welcome face of the kingdom. Then with tree lined boulevards,
          YADAVAGIRI stimulated growth and became an icon of development over time.
        </>
      }
      prev={SESSIONS["01-01-hyder"]}
      next={SESSIONS["01-03-bighunger"]}>
      <p>
        Mysore has had an interesting mix of mythological and historical origins. But one thing that
        everyone fully agrees upon - be it historians, archaeologists, people of the modern times or
        immigrants is that this geography is a great habitat for both general life and an empire's
        existence. <br />
        <br />
        At the intersection of time between the fall of Srirangapatna and the consolidation of
        British empire in India, Mysore secured prominence and a foundation for modern development.
        The resident kings bore a long term vision for the city, establishing most of the monumental
        heritages that we have proudly inherited today.
        <br />
        <br />
        Through this process, the rolling hill plains of Yadavagiri became prominent. During the
        late 19th and early 20th centuries, the existing city around the location of Mysore palace
        might have looked saturated and the Kings with head-full of ideas were looking at areas
        where wider developmental plans could be invested. In a way, probably not clearly
        articulated in the history, they were trying to establish a satellite town where
        institutions could be raised. Yadavagiri, which was geographically in the same axis of
        approach from Srirangapatna and Kaveri, the two important precursors of growth of this city,
        fit the bill very well.
        <br />
        <br />
        In 1870, the railway was brought to Mysore and a station was built just at the foot of the
        gentle hill of Yadavagiri. This accelerated the growth of the kingdom. In the later years,
        Yadvagiri hosted Vanivilasa Water Works, which brought drinking water from Kaveri river to
        the city. The All India Radio came up making Mysore an important broadcasting station,
        nearly 100 years ago. Ideal Jawa Ltd., India's most prestigious motorcycle manufacturing
        unit of that time was located in Yadavagiri by mid 20th century, making Mysore an industrial
        hub. When the Government moved to Bangalore, a number of aristocratic families and important
        personalities were given housing in Yadavagiri, making it a landmark destination of the
        city. Prestigious CFTRI was then housed in a large estate mansion of the royal family,
        making Yadavagiri an admixture of industry, residences, research and services.
        <br />
        <br />
        Wide boulevards, dozens of public parks and prime housing turned Yadavagiri into a model
        geography of development. Around the periphery of Yadavagiri, the public hospital, the
        University and several such important institutions also developed in addition to spiritual
        centres, temples, gurudwara, churches and mosques. Yadavagiri, over the years, became the
        heartland of Mysore and a jewel among city's symbols of urban heritage.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
