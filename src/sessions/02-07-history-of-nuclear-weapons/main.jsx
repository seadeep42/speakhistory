import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";

import ImgNuclear01 from "./images/nuclear_01.jpg";
import ImgNuclear02 from "./images/nuclear_02.jpg";
import ImgNuclear03 from "./images/nuclear_03.jpg";
import ImgNuclear04 from "./images/nuclear_04.jpg";
import ImgNuclear05 from "./images/nuclear_05.jpg";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/02-07/01.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-07/02.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-07/03.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-07/04.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-07/05.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-07/06.jpg", width: 720, height: 1600 },
  // { src: "/session-imgs/02-07/07.mp4", width: 478, height: 850 },
];

const SessionsPage = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-07-nuclear-weapons"]}
      synopsis={
        <p>
          With a Master's Degree in International Relations from the University of Southern
          California, Mr. Suryanarayan Rao has worked as Director of Administrative Services at the
          International Hospital Federation (a Healthcare NGO) and as Financial Controller at
          Charity Bank (set up to fund social profit organisations) in London. A Chartered
          Accountant by training, he had worked with firms, both in India and abroad before moving
          to the UK to pursue his Higher Studies. After a successful career spanning over two and a
          half decades in the UK, he chose to take early retirement before returning to India. As
          part of the Faculty at St Philomena's College, Mysuru, he has taught International
          Relations.
          <br />
          <br />
          In his session, he will speak about the relevance of Nuclear Weapons in our times and
          trace its Early History along with the Technological Developments in the field.
          <br />
          <br />
          Elaborating on the various Global Nuclear Weapon Treaties, he will lead us through the
          different Concepts. He will familiarise us with India's position in the Nuclear Domain,
          the probable future along with data and statistics to present a comprehensive scenario.
        </p>
      }
      prev={SESSIONS["02-06-cartography"]}>
      <div className="paragraph">
        The history of nuclear weapons is a critical study of scientific progress, military
        strategy, and diplomatic evolution, reflecting the complexities of global power dynamics.
        This talk explored key milestones in the development and management of nuclear technology,
        beginning with the theoretical foundations and wartime research that led to the first
        nuclear bombs. Landmark events like the bombings of Hiroshima and Nagasaki, the formation of
        NATO as a collective defense against nuclear threats, and the Cuban Missile Crisis, a tense
        standoff that brought the world to the brink of nuclear conflict.
      </div>
      <h3>Why talk about nuclear weapons ?</h3>
      <div className="paragraph">
        Nuclear weapons pose unparalleled risks due to their catastrophic potential for mass
        civilian casualties, environmental devastation, and intergenerational harm. A single
        detonation can obliterate cities, leaving survivors with severe health issues and no
        resources for recovery. Nuclear fallout contaminates ecosystems, while even limited use
        could trigger climate disruptions. Additionally, the irreversible nature of a launch and the
        danger of “trigger-happy” political climates heighten the risk of accidental or impulsive
        conflict. Maintaining arsenals diverts vital resources from societal needs. These global,
        long-term impacts make nuclear weapons a uniquely dangerous threat, underscoring the
        importance of regulation and disarmament efforts.
      </div>
      <h3>Early History</h3>
      <div className="paragraph">
        In the 1930s, breakthroughs in atomic physics revealed the potential for nuclear energy. The
        United Kingdom launched its Tube Alloys project in 1941, the first nuclear weapons
        initiative, which later merged with the U.S. -led Manhattan Project under J. Robert
        Oppenheimer. In 1942, this team achieved a controlled chain reaction with Chicago Pile-1,
        the first nuclear reactor, using Uranium- 235. Though the U.S. kept these developments from
        the Soviet Union, espionage gave the USSR limited insight. On July 16, 1945, the first
        successful nuclear test, "Trinity, " in New Mexico yielded 22 kilotons, marking the dawn of
        the nuclear age.
      </div>
      <h3>Hiroshima and Nagasakî</h3>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgNuclear01} alt="" />
          <p className="session-img-desc">
            Atomic bomb mushroom clouds over Hiroshima (left) and Nagasaki (right)
          </p>
        </div>
        Following the Potsdam Declaration on July 26, 1945, an ultimatum was issued to Japan
        demanding surrender. When Japan refused, the U.S. dropped the atomic bomb "Little Boy" on
        Hiroshima on August 6, 1945, yielding 12.5 kilotons of TNT. This attack killed an estimated
        90,000-140,000 people, mostly civilians, and destroyed 50,000 buildings.
        <br />
        Japan still resisted, leading to the deployment of a second bomb, "Fat Man, " over Nagasaki
        on August 9, killing another 40,000–75,000 civilians and causing widespread destruction.
        Radiation exposure led to cancers such as leukemia among survivors, though no long- term
        environmental damage was reported.
      </div>
      <h3>Technological advances</h3>
      <div className="paragraph">
        <b>Nuclear Bombs:</b>
        <ul>
          <li>
            Fission bombs: Harness nuclear energy through fission, a process where atomic nuclei
            split, releasing energy.
          </li>
          <li>
            Boosted fission bombs: Use a small amount of fusion energy to enhance fission reactions.
          </li>
          <li>
            Fusion bombs (Thermos-nuclear or Hydrogen bombs): Combine atomic nuclei to release vast
            energy through fusion.
          </li>
        </ul>
        <b>Missile Development:</b>
        <ul>
          <li>
            Ballistic and cruise missile development: Advances in technology led to more efficient
            and precise missile systems.
          </li>
          <li>
            Improvements in range and accuracy: Missiles now travel farther and hit targets with
            greater precision.
          </li>
          <li>
            Miniaturisation of warheads: Smaller, more compact warheads are designed for increased
            lethality
          </li>
        </ul>
      </div>
      <div className="session-full-width">
        <img src={ImgNuclear02} alt="" />
      </div>
      <div className="session-full-width">
        <img src={ImgNuclear03} alt="" />
      </div>
      <div className="paragraph">
        The Cold War (1947-1991) was a period of intense geopolitical tension between the United
        States and the Soviet Union, largely stemming from the reorganization of Europe after World
        War II and the competing ideologies of capitalism and communism. Both superpowers sought to
        spread their political systems globally, with nuclear arms technology playing a central
        role. The primary factions were the U.S. -led NATO and the USSR-led Warsaw Pact. The Cold
        War led to the nuclear arms race and proxy wars in Korea and Vietnam.
      </div>
      <div className="paragraph">
        The Cuban Missile Crisis of October 1962 marked a dangerous confrontation between the
        nuclear- armed U.S. and USSR. It was triggered by a failed U.S. invasion of Cuba and led to
        a secret missile agreement. After intense negotiations, nuclear war was avoided, marking the
        beginning of disarmament efforts, including the establishment of a direct communication
        hotline between the White House and the Kremlin.
      </div>
      <div className="session-highlight-text">
        <div className="session-float-image left">
          <img src={ImgNuclear04} alt="" />
        </div>
        <p>
          Banner headlines of Britain's daily newspapers Oct. 23 announcing President Kennedy's
          blockade of Cuba. U.S. planes and ships, armed with orders to shoot if necessary, began
          taking up positions in the Caribbean Oct. 22 to cut off shipments of Communist offensive
          weapons to Cuba. The action aw ordered by President Kennedy who soberly told the nation in
          a national television address that Soviet missiles and other weapons had turned Cuba into
          an armed camp capable of hurling destruction into the heart of America.
        </p>
      </div>

      <h3>Nuclear Weapons Treaties</h3>
      <div className="paragraph">
        Many nuclear weapons treaties emerged at the global level as well as between the two major
        nuclear weapons countries. The global treaties beginning with the Partial Test Bangalore
        Treaty (PTBT) the Nuclear Non-Proliferation Treaty (NPT) the Comprehensive Test Bangalore
        Treaty (CTBT) the Total Prohibition of Nuclear Weapons (TPNW) were all signed. However they
        have not been very successful in their main objective of stopping the spread of nuclear
        weapons - witness the new nuclear weapons countries since the signing of the NPT. Treaties
        between United States and the Soviet Union have achieved some success in reducing the
        quantity of nuclear weapons and missiles.
      </div>

      <div className="session-full-width">
        <img src={ImgNuclear05} alt="" />
      </div>
      <h3>Nuclear Weapons and India</h3>
      <div className="paragraph">
        India's journey into nuclear technology began in the post-independence era. In 1949, the
        Indian government established the Atomic Energy Commission (AEC) to oversee the development
        of atomic energy. Initially, the focus was on peaceful applications of nuclear technology,
        particularly for energy generation and medical purposes. However, during this period, India
        faced limited government support, both in terms of funding and resources, for nuclear
        research and development. Under the leadership of Jawaharlal Nehru, and later Lal Bahadur
        Shastri, the commitment to peaceful nuclear research remained strong. In 1954, India
        established the Bhabha Atomic Research Centre (BARC) in Trombay, which became the hub for
        its nuclear research. The geopolitical environment shifted dramatically after the 1962
        Sino-Indian war, prompting India to re-evaluate its security concerns. In 1963, India signed
        the Partial Test Ban Treaty (PTBT), a move seen as balancing national security interests
        with global nuclear non-proliferation efforts. Despite this, India would continue to develop
        nuclear capabilities, eventually leading to its nuclear tests in 1974.
      </div>
      <div className="paragraph">
        India's first nuclear test, codenamed Smiling Buddha, took place on May 18, 1974, at the
        Pokhran Test Range in Rajasthan. Conducted under the leadership of Prime Minister Indira
        Gandhi, the test marked India's entry into the group of nuclear-armed nations. The
        explosion, which was a peaceful nuclear explosion (PNE), had an estimated yield of 8-12
        kilotons of TNT. Though India maintained that the test was for peaceful purposes, it
        demonstrated the nation's growing technological and military capabilities. The Pokhran test
        sparked global reactions, leading to sanctions but solidifying India's stance on
        self-reliance in defense and energy. "Buddha Smiles Again" refers to India’s second series
        of nuclear tests conducted in 1998, codenamed Operation Shakti. On May 11 and 13, India
        successfully detonated five nuclear devices at the Pokhran Test Range, demonstrating
        significant advancements in its nuclear capabilities. This marked India's formal nuclear
        weapons status.
      </div>
      <h3>Going Forward</h3>
      <div className="paragraph">
        Post-Cold War, new nuclear-armed nations have emerged, raising global security concerns.
        Non-state actors also seek nuclear capabilities, complicating efforts to control
        proliferation. National interests now conflict with the risks of nuclear escalation, with
        two current wars involving explicit threats of nuclear use. Tensions continue between
        nuclear and non-nuclear states.
      </div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
