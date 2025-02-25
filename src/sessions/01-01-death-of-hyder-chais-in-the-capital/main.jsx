import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-01/01.webp", width: 1200, height: 1600 },
  { src: "/session-imgs/01-01/02.webp", width: 1200, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-01-hyder"]}
      synopsis={
        <>
          He never called himself a Sultan, but was undoubtedly the Sultan. He was keen to begin a
          dynasty but the grooming of his son was still incomplete. He did not expect to die, but
          death didn't bother about his preference. And when he died, it took effort to contain the
          chaos.
        </>
      }
      next={SESSIONS["01-02-yadavagiri"]}>
      <p>
        Hyder Ali, the de-facto ruler of Mysore, died of carbuncle on 7 December 1782 in Chittoor
        during a campaign. Although he was in pain for weeks or months, the death was not expected.
        His son, Tipu Sultan was out on campaign in faraway Malabar and due to the unexpected death
        of Hyder and a lack of any clear plan of transfer of powers, the kingdom suddenly turned
        vulnerable to external aggressions and internal conspiracies. The real threat was from the
        neighbouring kingdoms, while the British were frustrated that Mysore was their last
        un-surrendered hold out in India. Internally, the erstwhile ruling dynasty of Mysore too had
        felt placated and were waiting for an opportunity to regain the throne. There were factions
        within Hyder Ali's wider family and administration that wanted Tipu Sultan's younger brother
        Karim to ascend to power, so that they could rule by proxy. Karim was not considered as the
        correct choice to power by Hyder Ali himself, but there are mentions in the archives that
        Hyder Ali's wife had sworn during her days of difficulty in bearing a child that she will
        dedicate her first son to the service of God, which Hyder Ali did not honour as he found
        Tipu the king material.
        <br />
        <br />
        Thus, odds were against Tipu Sultan and his ascent to throne was fraught with deep
        difficulties. But Hyder Ali seems to have been determined that Tipu should inherit the
        throne, as he is believed to have asked from his senior officers their loyalty to Tipu,
        exactly the way they had given it to him. <br />
        <br />
        As a result, the news of the death of Hyder Ali was kept a secret until the time Tipu Sultan
        rushed back from his Malabar campaign. The casket bearing the body of Hyder Ali was secretly
        moved to Srirangapatna - the capital, in guise of treasure recovered in the war. The British
        at first did not believe that Hyder was dead when they heard the news and General Stuart in
        command of the army could not mobilise forces to attack Mysore immediately. Tipu Sultan
        swiftly neutralised a conspiracy to coronate his younger brother, by arresting and killing
        the military men responsible for the idea. He kept at bay the brewing conspiracy of the
        erstwhile rulers of Mysore by restricting them severely. And he placated the young commander
        of Bednur in the borderlands with Marathas, so that his conspiratorial plans of teaming up
        with the British and other adversaries could not be realised.
        <br />
        <br />
        The short period of time between the death of his father and his consolidation of power
        between 1782 and 1783 was a dramatic one, filled with conspiracies, treacheries, greed,
        power politics, a kingdom's vulnerability and a deep fear of the unknown. The young Sultan,
        with the help of loyal officers of the court, displayed immense courage and composure in
        ascending to the throne, which he successfully held for the next 16 years.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
