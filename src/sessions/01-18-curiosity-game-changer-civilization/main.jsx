import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-18/01.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-18/02.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-18/03.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-18/04.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-18/05.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-18/06.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-18/07.jpg", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-18-curiosity"]}
      synopsis={
        <>
          At some stage in the evolution, the human mind bore some fundamental questions - what,
          why, how, where, when. That led to the breaking down of the 'obvious', leading to
          explorations in a multitude of physical and intellectual dimensions. Human story is
          replete with milestones on how 'curiosity' both rewarded us and punished us, bringing us
          to where we stand today.
          <br />
          <br />
          This is a story of how curiosity built civilization and made a world of a difference to
          human destiny
        </>
      }
      prev={SESSIONS["01-17-clay2"]}
      next={SESSIONS["01-19-transatlantic"]}>
      <p>
        Curiosity has been the driving force that led to some of the major developments during the
        history of mankind. Dating back to millions of years ago when Hominins explored their
        microenvironments leading to invention of various stone-based tools, language, agriculture
        and so on, the “curiosity” gene has evolved taking 'inquiry' go beyond just meeting the
        needs of survival. Curiosity lies at the heart of our civilization. It fires the imagination
        and creativity.
        <br />
        <br />
        Curiosity about nature: water, fire, plants and animals, the sky, and everything around us,
        triggered the first humans to produce the food they needed, new ways of cooking it, as well
        as materials and machines that enabled them to survive better. The ability to select and
        develop crops, fruit, and domesticated animals were founded on curiosity about the diversity
        seen in Nature, and then a realization this could be exploited by focused management. <br />
        <br />
        The debate goes on whether some of the major, path-breaking discoveries, were just for
        information seeking or do they come under the umbrella of 'curiosity'. An interesting
        question to ask is whether curiosity is unique to humans? Curiosity leads to intuitive and
        inquisitive mindset, then it requires imagination and creativity to find the answers. On
        these lines the level of “curiosity” seen in humans is unique! Other animals do show
        information seeking abilities but they are for the needs of survival. <br />
        <br />
        Curiosity can be of different types: art, exploration, research and invention. Each one of
        us have varied levels of each type of curiosity. This defines the interests that we develop
        in learning, exploration and questioning the unknowns of this world. It is beautiful to look
        into history and see how the development of arts, language, settlements, technology evolved
        and unfolded leading to the present day. Now as a species we have moved much beyond meeting
        our daily needs to more exciting explorations of this world and beyond. <br />
        <br />
        During the course of history, we can see that curiosity has been treated both as a virtue as
        well as vice. The few centuries of medieval ages were “dark” with respect to 'curiosity'.
        Questioning and inquiry were treated as sin and punished. We hear the stories of people like
        Socrates and Galileo who were punished for challenging the prevalent beliefs. Later, with
        more awareness in the society, 'curiosity' started being treated as a much-needed trait
        leading to scientific revolution and today 'curiosity' is very much talked about as a
        virtue. From education to employability, 'curiosity' is a much sought after trait. The
        nature has nurtured and safeguarded this trait during evolution and has let us continue to
        do so. The 'molecule of more', that is dopamine, is a chemical that is released in our
        brains as a reward when we seek and find answers to the unknown. This molecule allows us to
        experience and feel joy. <br />
        <br />
        So, the lesson of civilization is - stay curious and enjoy life!
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
