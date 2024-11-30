import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import ImgHomoHabilis from "./images/migration_01.webp";
import ImgHomoErectus from "./images/migration_02.webp";
import ImgWorld from "./images/migration_03.webp";
import ImgRaft from "./images/migration_04.webp";
import ImgPainting from "./images/migration_05.webp";
import ImgDescendent from "./images/migration_06.webp";
import ImgEyes from "./images/migration_07.webp";

const photos = [
  { src: "/session-imgs/02-02/01.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-02/02.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-02/03.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-02/04.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-02/05.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-02/06.webp", width: 1600, height: 720 },
  { src: "/session-imgs/02-02/07.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-02/08.webp", width: 720, height: 1600 },
  { src: "/session-imgs/02-02/09.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-02-migration"]}
      synopsis={
        <p>
          Thousands of years ago, Homo sapiens migrated to Asia, Europe and as far away as Australia
          from Africa. The Savannah grasslands provided resources for humans to survive their
          journey, as per the Out of Africa migration theory. Does the theory explain the common
          genetics found in different parts of the globe corroborated by DNA samples?
          <br />
          <br />
          The interaction of Homo sapiens with other Hominid species, the capacity for building
          language over 50,000 years ago, the spread of Indo European languages, the profound
          historical and environmental impact through these migrations make for a fascinating study.
          <br />
          <br />
          The planetary background to migration in tandem with exhausting the opportunities on Earth
          with a trajectory towards inter planetary and galactic migrations would make an
          interesting continuum between the past, present and the future.
          <br />
          <br />
          Mahesh Rao is a medical graduate from KMC Mangalore. Widely traveled and self taught in
          history, his veritable scholarship and simplicity find him humbly dropping his privileged
          'Dr' prefix in introductions. He has keen interest in the study of comparative religions
          and study of how human behaviour shaped history. He presently runs two medical facilities
          in Mysore. He is the principal curator of the intellectual assets of the Speak History
          forum
          <br />
          <br />
          An oceanographer by education, Dr Sudarshan has served in senior positions in ISRO and has
          led and advised the endeavour of United Nations Security Council on war reparations,
          contributing extensively to the rebuilding of nations destroyed by human conflicts.
          Equally passionate about farming and history, he continues to share his knowledge with
          those who share a common quest.
        </p>
      }
      prev={SESSIONS["02-01-etruscan"]}
      next={SESSIONS["02-03-mysore_art"]}>
      <h3>Preamble</h3>
      <div className="paragraph">
        The migration of hominids, especially the Homo sapiens and its immediate ancestors became a
        necessity due to the onset of Pleistocene era. Being a warm blooded organism, the Ice age
        immensely challenged survival because the changing weather reduced moisture, brought in
        famine, increased glaciation, froze rivers and dropped the sea levels, expanded deserts,
        changing the productive landscapes into non productive ones. This necessitated the hominids
        to migrate from their existing locations in search of favourable locations, without clearly
        knowing where could the favourable land be.
      </div>
      <h3>May I see your passport please?</h3>
      <div className="paragraph">
        About 4 million years ago the first Bipedal hominid Australopithecus Afarensis came to be.
        Walking on two legs is more energy efficient than walking on all fours. This energy
        conservation allowed female individuals to give birth to one more child in their lifetime.
        Walking on two legs freed up the hand, an important feature in the furture of human
        evolution In the following millions of years many Hominids capable of walking upright
        appeared in Africa. HOMO HABILIS (Handy Man) who appeared 2 million years ago was the
        hardiest of them all surviving a very harsh living environment. The evolution of teeth
        structure, shift to an omnivorous diet, hunting for food and making of simple tools. In the
        next one million years, Earth underwent significant climate changes. HOMO HABILIS gradually
        evolved into HOMO ERECTUS.
        <br />
        The use of fire. A great leap in history. Fire to keep him warm, to ward off wild animals
        and most importantly, to cook food. Gathering around the fire helped social interaction and
        development of language.
      </div>
      <div className="paragraph">
        <div className="session-float-image left">
          <img src={ImgHomoHabilis} alt="" />
          <p className="session-img-desc">Homo habilis man</p>
        </div>
        <div className="session-float-image left">
          <img src={ImgHomoErectus} alt="" />
          <p className="session-img-desc">Homo erectus</p>
        </div>
        <div className="clearfloat"></div>
        <h4>The Homo Sapiens</h4>
        <div>
          300,000 years ago, HOMO SAPIENS appeared on earth making a turning point. He has more
          complex cognitive and thinking capabilities than any other Hominid before him and their
          advantage was development of advanced language and communication of abstract and complex
          ideas.
        </div>
      </div>
      <div className="session-full-width">
        <img src={ImgWorld} alt="" />
      </div>
      <div className="session-two-column paragraph">
        <div className="session-highlight-text">
          <h4>
            Agricultural Revolution
            <br />
            10000 Years ago
          </h4>
          - More stable food sources
          <br />- This led to rapid population growth
          <br />- Creating conditions for more complex societies. Development of agriculture led to
          formation of villages and later cities.
          <br />
          <br />
          This created division of labour
          <br />- Food Producers
          <br />- Craftsmen
          <br />- Traders
          <br />- Knowledge Developers
          <br />
          <br />
          For the first time in Human Society the Social Classes emerged.
          <br />
          5000 - 3000 BCE: Emergence of the major 4 river system civilisations:
          <br />- Mesopotamia
          <br />- Egypt
          <br />- Indus Valley
          <br />- China
        </div>
        <div>
          The arrival of humans in Australia is the first evidence of a major sea crossing by an
          early group of humans. The exact route they took and what sort of boats they used will
          never be known. Based on research, a group of explorers has now created a replica boat
          with which they plan to set sail from an Indonesian island all the way to Darwin,
          Australia, recreating the voyage of our ancient ancestors.
          <div className="session-full-width">
            <img src={ImgRaft} alt="" />
            <p className="session-img-desc">
              Ocean crossing of stone age people to Australia set to be re-enacted on ancient bamboo
              raft replica
            </p>
          </div>
        </div>
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={ImgPainting} alt="" />
          <p className="session-img-desc">
            One of the oldest known figurative paintings, a depiction of an unknown bovine, was
            discovered in the cave of Lubang Jerji Saléh , Indonesia and dated to be more than
            40,000 (perhaps as old as 52,000) years old
          </p>
        </div>
        <div className="session-full-width">
          <img src={ImgDescendent} alt="" />
          <p className="session-img-desc">
            Mesolithic Skeleton known as 'Cheddar Man' shares the same DNA with English Teacher of
            History!
          </p>
        </div>
      </div>
      <h3>What's the Code Word? - Genetics of human evolution</h3>
      <p>
        Every characteristic of an organism is dictated by its DNA. DNA in a living cell contains
        codes that give rise to a particular characteristic. Sometimes due to environmental changes
        and other unfavorable conditions, these codes in the DNA can randomly get altered. This is
        known as a mutation. When such mutations happen in reproductive cells like egg and sperm,
        they get transferred to the offspring. Such germline mutations play a significant role in
        evolution and diversity. Mutations can be beneficial or harmful. Mutations that give a
        survival edge to the genome are passed on to the next generation preparing the individual to
        overcome the challenge that caused the mutation.
      </p>
      <p>
        Historians track the mutations carried by the mitochondrial maternal DNA and Y chromosomal
        DNA to trace the migration pattern to the origin of that mutation. Mitochondrial maternal
        DNA helps in tracking the female origins while the Y haplotype helps in tracking the male
        origins.
      </p>
      <p>
        The Y haplotypes are named with alphabets and numbers to identify the migration pattern. One
        such gene mutation called the R1 gene, known as Yamnaya gene, is of particular interest.
      </p>
      <p>
        The Yamnaya people who lived between 3300-1500 BCE contributed to the ancestry of people in
        India and other parts of Eurasia. Some of the Yamnaya went to Anatoha, some to Siberia, some
        to Central Europe and mixed with the Western Corded Ware Culture whose members were fair
        skinned and the descendents were also fair skinned Celtic, Baltic, Germanic and Slavic
        people. Around 2900-2050 BCE, one Branch went on to form the Fatyanovo and Balyanovo
        Cultures. From these cultures arose the Sintashta Culture around 2200-1900 BCE. Here the Q1a
        and R1 DNA were added. Sintashta expanded into the Andronovo Culture (2000-1150 BCE). From
        here onwards, they can be designated as Aryan.
      </p>
      <div className="session-highlight-text">
        <h4>Lactose Intolerant</h4>
        <p>
          LCT gene mutation was responsible for coding of Lactase production. Those who lacked this
          gene were born with Lactose- intolerance.
          <br />
          <br />
          Who are genetically Lactose-intolerant:
          <br />
          Native Americans, Latin Americans, Mexicans, Africans (including African Americans),
          Asians.
          <br />
          Most people of European descent are Lactose tolerant
        </p>
      </div>
      <h3>The blue eyed boy of the class</h3>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={ImgEyes} alt="" />
        </div>
        All owners of blue eyes have a single common ancestor from 10000 years ago. Before that all
        had brown eyes. Someone in the Black Sea region had a gene mutation 10000 years ago that led
        to the Blue Eyes. A 7000 year-old male skeleton found in Spain is the first evidence of a
        Homo Sapien having blue eyesOCA2 was turned off in these people. The eyes were no more brown
        but blue. 20-40% of Europeans have blue eyes. The blue eye is thought to help evolutionarily
        to find a mate more quickly than those without. So Evolutionary intelligence decided to keep
        the Blue-Eye mutation
      </div>
      <h3>Languages- The Development of Languages along the Migration Path</h3>
      <div className="paragraph">
        <div className="session-highlight-text right session-float-image">
          The Anatolian farmers:
          <br />
          They spread Agriculture to Europe and formed two main cultures: The Cardia pottery culture
          and the Linear pottery culture.
          <br />
          The Minoan samples contain Anatolian Farmer Genes. These Minoans gave birth to the
          language Linear A, the first written language of Europe (1800-1450 BCE)
        </div>
        Around 70,000 years ago, the first group of Homo Sapiens migrated out of Africa. This split
        the population into:
        <ul>
          <li>Those who left Africa, the migrant group</li>
          <li>Those who stayed back</li>
        </ul>
        Around 60,000 years ago, the Migrant group split further into two more groups:
        <ul>
          <li>The Basal Eurasians: They probably went to North Africa and Arabian Peninsula</li>
          <li>The Eurasians: The Western and the Eastern Eurasians</li>
        </ul>
        Around 20,000 years ago -The Western Eurasians split into-
        <ul>
          <li>Western Hunter Gatherers: This group went to Europe and the Middle East</li>
          <li>Ancient North Eurasians: This group went to the Siberian Region</li>
        </ul>
        Eastern Eurasians
        <ul>
          <li>East Eurasians: Went to the Pacific</li>
          <li>South Eurasians: Migrated to India and became the ancient Indian people</li>
        </ul>
        Around 10,000 to 9,000 years ago, the first human farming community emerged in the Levant.
        These people were a mixture of Badal Eurasians and Western Hunter Gatherers. They gave birth
        to the Afro-Asiatic Group of Languages: Amharic(in Ethopia), Akkadian, Berber, Egyptian and
        Semitic Languages like Aramaic, Arabic, Hebrew, Nabatean etc. It' s likely that this could
        be the root of the Sumerian Language.
      </div>
      <div className="paragraph">
        <div className="session-highlight-text left session-float-image">
          Zagros farmers:
          <br />
          Found in the region of Zagros Mountains in Iran. They brought Agriculture to India and
          mixed with Ancient Indians whose progeny were Ancestral South Indians. They gave birth to
          the Dravidian languages including Brahui( in modern day Central Balochistan, Pakistan)
          <br />
          <br />
          Among the East Eurasian Farmers, The Yellow Riverine Culture: Gave rise to the
          Sino-Tibetan Language group and Upper Yellow River gave rise to Tibetan and Burmese while
          the Middle and Lower Yellow River to Chinese language. The Yangtze River System gave rise
          to Austraiatic languages- Vietnamese and Cambodian and Kra-Dai group of languages-Thai.
        </div>
        <div className="paragraph">
          In a different front: The Roman Empire conquered Iberia and introduces Latin which have
          rise to the romance languages: Spanish, Portuguese, Catalan etc
          <h4>Eastern Hunter Gatherers</h4>
          The Bulk of INDO-EUROPEAN group of languages originated with this
          <h4>Western Steppe group</h4>
          English, German, Hindi also possibly Urallic
          <br />
          Eastern Steppe Group were the progenitors of the Altaic Group of Languages
        </div>
        <div className="clearfloat"></div>
      </div>
      <div className="session-highlight-text">
        Trivia: 1600 BCE Ist written language in the Shang Dynasty period on the oracle bone.
        Diviners would submit questions to deities regarding weather, crop planting, the fortunes of
        members of the royal family, military endeavors, and similar topics. Depending on the sound
        of bone crackling, the soothsayer would predict someone's future.
      </div>
      <div className="paragraph">
        Two Hunter Gatherers Groups
        <ul>
          <li>Western HG: Basque and Etruscan</li>
          <li>
            Caucuses HG: Caucuses Languages, Hurrian and Urartian, both spoken North of
            Mesopotamia.This could also be the source of Indi-European languages
          </li>
        </ul>
        West African Farmers gave rise to the Niger Congo language group- Bantu language.
        <br />
        The East African People gave rise to Nilo-Saharan group of languages.
      </div>
      <h3>Future</h3>
      Now that the planet is fully occupied and there is no further scope for natural migration,
      except under economic and conflict considerations, the human attention has shifted to space.
      However, the migration in space and colonization of planets is still a distant dream, although
      very distinct forays have been made. Unlike the ancient migrations that were caused by nature
      and were carried out without the knowledge of the planet, the future migrations are induced by
      exploratory intelligence and increasing developments in science and technology.
      <br />
      <br />
      In all, Homo sapiens are a species with an in-built urge and necessity to move. And the
      popular adage that the sky is the limit, may not be true.
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
