import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-15/01.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/02.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/03.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/04.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/05.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/06.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/07.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-15/08.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-15/09.webp", width: 860, height: 1600 },
  { src: "/session-imgs/01-15/10.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-15/11.webp", width: 1600, height: 720 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-15-cybercrime"]}
      synopsis={
        <>
          Human brain is a very creative tissue mass. Its work is a grand strand of Newtonian logic
          because every imagination it constructs is met with an equal and opposite reaction. For
          example, it created computers, electronic convenience and a glorious digital world. When
          people began depending upon this invisible intelligence, the human brain created an
          anti-thesis too - the cybercrime.
          <br />
          <br />
          The story of cybercrimes may be a little over 150 years old, if you consider the earliest
          beginnings. But it is already a rich empire of aggression, coercion, conquests and
          devastation. And the modern history of cybercrimes is a story that mostly took birth and
          flourished in our times, amidst us.
        </>
      }
      prev={SESSIONS["01-14-arunachal"]}
      next={SESSIONS["01-16-clay1"]}>
      <p>
        Cybercrime has become alarmingly prevalent in our current world, where most of the
        transactions nowadays are conducted online using digital platforms. Cybercrime poses a
        serious threat to individuals, businesses, and government entities and can result in
        significant financial loss, privacy issues, damaged reputation, and compromised data. Based
        on current cybercrime trends, the cost of such attacks could reach upwards of $20 trillion
        worldwide by 2026 as per a research company Statista, and it was $8 trillion in 2023, making
        it the third biggest country in terms of GDP if we consider the cost as a country's GDP.
        <br />
        <br />
        Most people may think cybercrimes are a recent phenomenon but the first instance of a
        cybercrime is dated in 1834, when two thieves infiltrated the French telegraph system,
        gained access to financial markets, and stole data transmitted through telegraph between
        companies and used it for personal gains. The the word 'Cyber' entered the English language
        in 'Cybernetics', which is the 'Study of Systems of Control and Communication' and word
        “Cybercrime” was first coined in 1982 by William Gibson but it gained popularity in 1p984
        through his popular novel 'Neuromancer'.
        <br />
        <br />
        Alexander Graham Bell patented the telephone in 1876, two years later few teenage boys broke
        into Bell's telephone company and misdirected calls for personal gains and thereby ushering
        phone phreaking telephone scams. Cybercrimes was also used for good use, like when Rene
        Carmille, a French punch card computer expert, used his expertise to reprogram Nazi punch
        card machines after hacking into the Nazi data registry and blocked the Nazis' attempts to
        register and track Jewish people and thereby ushering the era of ethical hacking.
        <br />
        <br />
        In 1971, Creeper Virus (a self-replicating program), created by Bob Thomas is recognized as
        the first software virus, which was leashed on ARPANET (Internet's previous avatar). Robert
        Morris created “Morris worm” is the first one to cause major havoc and $100 million in
        damage by infecting computer systems at Stanford, Princeton, Johns Hopkins, NASA, Lawrence
        Livermore Labs, and UC Berkeley, among other institutions. Other major computer virus which
        has troubled the world include, Mellisa(1999), which impacted Microsoft documents and caused
        $80 million damages, ILOVEYOU(2000), which infected 10 million computers worldwide caused
        more than 15 billion dollar damage, and Mydoom(2004) which caused more than 52 billion
        dollars damage.
        <br />
        <br />
        Data breach or leak is another major cybercrime, where your personal and financial data is
        stolen and sold for profit, which the criminals later use it for committing many
        cybercrimes. First major data breach happened in 2005 when 1.4 million credit card details
        was leaked from DSW warehouse corp. Largest data breach recorded till now is of 10.88
        billion personal records from CAM4 database. In India, Aadhaar breach, wherein more than 810
        million citizen details including the biometric details was stolen and put on the darkweb
        for auction. Other prominent data breaches in India include: SBI data breach where 422
        million records were stolen and the Kudankulam nuclear power plant data breach.
        <br />
        <br />
        In India, till Information Technology Act 2000 & associated modifications to IPC was passed,
        there were no laws to recognize cybercrimes in India, though Indian Telegraph Act 1885 had
        some penal provisions for crimes associated with Telegraph & Telephone. Legal Jurisprudence
        or court rulings played a role in handling the cyber crimes in the mean time.
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
