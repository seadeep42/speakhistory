import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

import Img1 from "./images/surgery_01.jpg";
import Img2 from "./images/surgery_02.webp";
import Img3 from "./images/surgery_03.jpg";
import Img4 from "./images/surgery_04.jpg";
import Img5 from "./images/surgery_05.jpg";
import Img6 from "./images/surgery_06.jpg";

const photos = [
  { src: "/session-imgs/02-05/01.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/02-05/02.jpg", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-05-robotic-surgery"]}
      synopsis={
        <p>
          Dr Vijay Kumar is in the forefront of Cancer treatment and research in Mysore, being the
          Head of Surgical Oncology and Robotic Surgery at Bharat Cancer Hospital. With an academic
          distinction as a Gold Medalist, he has always campaigned for cancer preventive measures
          and early awareness. Pained by the fact that Cancer has a meteoric rise in incidents in
          Mysore, he has combined excellence in surgery with empathy and philanthropy. Ever eager to
          find solutions to the deep distress cancer brings, he is now the first Robotic Surgeon in
          town and is on a mission to help the community.
          <br />
          <br />
          Unlike the slow paced evolution of many human stories in history, cancer is a chronicle of
          lightning explosions amids our lives. And so, the methods of treatment and surgery have
          also evolved dramatically. Vijay will trace for us the story of the rapid rise of cancer
          and how surgical methods have now reached intelligent machines like robots.
          <br />
          <br />
          This is a story of untiring human resolve to tackle a deadly malaise - cancer.
        </p>
      }
      prev={SESSIONS["02-04-mysore-palace"]}
      next={SESSIONS["02-06-cartography"]}>
      <div className="paragraph">
        The word 'Cancer' comes from the Greek word karkinos, which means 'crab' . Coined by the
        Greek physician Hippocrates (5th century BCE), regarded as the Father of Medicine, possibly
        because the finger-like spreading projections from cancer resemble a crab's legs. He also
        used the terms carcinos (non-healing swellings) and carcinoma (non-healing cancer) which are
        still used in medical parlance. Hippocrates' Humoral theory stated that the body was a
        system of four fluids called 'humours': black bile, yellow bile, phlegm and blood. If the
        fluids were in balance, the body would be in good health. If not, there would be disease.
      </div>
      <div className="paragraph">
        Fighting cancer and finding a way to cure the condition has been a major challenge since
        many Decades. Humans won over many diseases like smallpox over the last centuries which
        resulted in increased life span. The increased life span favoured the increase in age
        related disorders like cancer. Over the last many years, methods to screen for early
        detection as well as methods to deal with the disorder after it had spread to different
        levels in the body have been developed. Cancer surgery, the surgical removal of cancerous
        tissue, has been a cornerstone of cancer treatment for centuries. While the techniques and
        technologies have evolved significantly over time, the underlying principle of surgically
        removing malignant growths remains the same.
      </div>
      <h3>Timeline of development of surgery</h3>
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={Img3} alt="" />
          <p className="session-img-desc">Dr William T. G. Morton</p>
        </div>
        Sushruta (6th Century BCE), the Father of Surgery, is credited with the advancement of
        medicine in ancient India. He describes various surgical procedures in Ancient India. He is
        credited with the first known plastic surgery. The punishment for numerous offenses during
        that time used to be chopping off of noses. And he specialized in treating such cases.
      </div>
      <div className="paragraph">
        Barber surgeries (5th to 15th Century) were a series of gruesome and often fatal procedures
        that were practiced in medieval Europe. These surgeries were characterized by their extreme
        brutality, lack of medical knowledge, and disregard for patient suffering.
      </div>
      <div className="paragraph">
        The 18th and 19th centuries were pivotal periods in the history of surgery, marked by the
        development of anesthesia and aseptic techniques, which dramatically improved patient
        outcomes and made surgery a safer and more effective procedure.
        <br />
        Dr William T. G. Morton, an American dentist who was the first to publicly demonstrate the
        use of ether as an anesthetic in surgery in 1846.
      </div>
      <div className="paragraph">
        Sir Joseph Lister, a British surgeon was a pioneer of antiseptic surgery. In 1867, he
        introduced carbolic acid as a sterilizer for surgical instruments, patients' skins, sutures,
        surgeons' hands, promoting the principle of antiseptics. He believed that many surgical
        infections were caused by germs that could be transmitted through contact with wounds. To
        reduce the risk of infection, he introduced the use of carbolic acid as a disinfectant and
        encouraged surgeons to wear gloves during procedures.
      </div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={Img1} alt="" />
          <div className="session-img-desc">Wilhelm Röntgen and the First X-Ray</div>
        </div>
        <div className="session-full-width">
          <img src={Img2} alt="" />
          <div className="session-img-desc">Use of Carbolic acid spray as disinfectant</div>
        </div>
      </div>
      <div className="paragraph">
        Dr Wilhelm Conrad Rontgen, German Physicist, in 1895, produced and detected electromagnetic
        radiation in a wavelength range known as X rays. This groundbreaking discovery
        revolutionized medicine, allowing for non-invasive imaging of the human body.
      </div>
      <div className="paragraph">
        Sir Alexander Fleming (1928), Scottish physician and microbiologist discovered the world's
        first broadly effective antibiotic, penicillin, considered widely to be the 'single greatest
        victory ever achieved over disease' .
      </div>
      During World War 2 (1942), an explosion of methane gas led to the beginning of chemotherapy.
      Autopsies revealed that the mustard gas killed the soldiers’ rapidly dividing white blood
      cells, prompting doctors to wonder if it could do the same for cancer cells, which also divide
      and grow quickly. The military hired pharmacologists to study the use of mustard gas
      chemicals, and from these trials the first chemotherapy drug, mechlorethamine, was created to
      treat lymphoma. Patients showed a remarkable improvement, and more drugs followed.
      <br />
      <div className="paragraph">
        <div className="session-float-image right">
          <img src={Img4} alt="" />
          <p className="session-img-desc">Use of methane gas in WW II</p>
        </div>
        Later, in the 1980s, Cancer treatments included: Chemotherapy, Radiotherapy, Cell therapy,
        Targeted therapy. Recent advances have made Cancer treatment more specialized:
        <ul>
          <li>Immunotherapy</li>
          <li>CAR T cell therapy</li>
          <li>Computerized Tomography scanning</li>
          <li>Next generation sequencing</li>
          <li>PET CT</li>
        </ul>
      </div>
      <div className="clearfloat"></div>
      <div className="session-two-column paragraph">
        <div className="session-full-width">
          <img src={Img5} alt="" />
          <div className="session-img-desc">Barber surgery tools</div>
        </div>
        <div className="session-full-width">
          <img src={Img6} alt="" />
          <div className="session-img-desc">Present day robotic surgery set up</div>
        </div>
      </div>
      <div className="paragraph">
        Minimal invasive techniques like Robotic Surgery uses a robotic arm to perform procedures.
        The surgeon controls the robotic arm with a viewing screen and controllers. Remote Surgery
        can be performed by the surgeon even when he is not present in the same location. It
        consists of one or more arms (controlled by the surgeon), a master controller (console), a
        sensory system giving feedback to the user.
      </div>
      <div className="paragraph">
        Robotic surgery offers several benefits over traditional open surgery: precision (small,
        precise movements), visualization (through a 3D camera), fewer Complications due to manual
        errors, Less pain and blood loss, shorter recovery time, smaller scars.
      </div>
      <div className="paragraph">
        Surgical methods have indeed come far from the barber surgeries to the latest robotic
        surgeries that can be remotely done!
      </div>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
