import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-08/01.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/02.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/03.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/04.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/05.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/06.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/07.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/08.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/09.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/10.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/11.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/12.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/13.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/14.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/15.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/16.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/17.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/18.jpg", width: 1600, height: 720 },
  { src: "/session-imgs/01-08/19.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/20.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/21.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/22.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/23.jpg", width: 576, height: 1280 },
  { src: "/session-imgs/01-08/24.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/25.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/26.jpg", width: 720, height: 1600 },
  { src: "/session-imgs/01-08/27.jpg", width: 576, height: 1280 },
  { src: "/session-imgs/01-08/28.jpg", width: 576, height: 1280 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-08-palanquins"]}
      synopsis={
        <>
          Picturesque visions of 19th century India often emerge in the accounts of British
          travellers in India at the time. Female travellers were particularly drawn to this mode of
          expression, none more so than Marianne Postans, Emily Eden, and Fanny Parks, who actively
          used the language of aesthetics to understand and connect with their new environment
        </>
      }
      prev={SESSIONS["01-07-potato"]}
      next={SESSIONS["01-09-wabisabi"]}>
      <p>
        The Picturesque was a visual aesthetic ideal that developed in England and was popular in
        the 18th and early 19th centuries. Initially applied to describe a kind of aesthetic
        composition of landscape, it gradually came to influence the ways in which nature and even
        people, came to be thought of as objects which could be “captured” and “collected” through
        the visual medium, long before the invention of photography. Because of their popularity
        within the public imagination, many travellers to India at the time arrived with
        preconceived notions of how the subcontinent and its people should be viewed and engaged
        with. In relation to the British administrative activities, women were particularly
        encouraged to engage in Picturesque pursuits (such as drawing and painting what they saw) as
        that meant that they could remain on the peripheries of colonisation.
        <br />
        <br />
        One example is Fanny Parks, the wife of a junior civil servant in the East India Company,
        who lived in India between June 1822 and August 1845. Parks kept a journal of her
        experiences for the benefit of her mother, and upon returning to England, published these
        accounts in 1850. Parks' collection also served as a way for her to situate herself within
        the traditionally male-dominated Orientalist discourses. She compares her acquisitions to
        those of her male contemporaries and famous Orientalists, and even concludes that much of
        what she has far surpasses that of even the British Museum at the time!
        <br />
        <br />
        In a similar manner, another female traveller, Marianne Postans, also makes use of the
        Picturesque as a means of carving out a space for her contribution to the British
        administrative project. While living in Cutch and Sindh with her husband, Postans gathered
        material on the region and its peoples, and published extensively. In all her works, Postans
        displayed an interest in the broader aesthetic concerns surrounding the use of the
        Picturesque, such as the manipulation of aesthetic knowledge and cultural authority, as well
        as the strictures that confined women travellers and their writings within the realm of
        Picturesque aesthetic engagement. <br />
        <br />
        In a markedly different shift, however, Emily Eden, sister of the then Governor-General of
        India, George Eden, appears to shy away from any political discourse despite being a
        significant presence during her brother's two-year official tour of the Upper provinces of
        India. During that time, she actively drew and painted the scenes and people she
        encountered, eventually publishing them. However, Eden does not totally refrain from
        commenting on the damages caused by the British involvement in India. Also, and perhaps more
        interestingly, her seemingly innocuous drawings display a level of colonial guilt especially
        when paired with the textual commentary she provides. <br />
        <br />
        In short, it is interesting to see how each of these women made use of the language and
        aesthetics of the Picturesque to not only conceptualise their experiences but also carve a
        space for themselves within the dominant discourses at the time
      </p>
      <PhotoGallery photos={photos} />
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
