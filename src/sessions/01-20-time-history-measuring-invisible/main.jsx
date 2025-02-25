import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";
import PhotoGallery from "../../components/photo-gallery";

const photos = [
  { src: "/session-imgs/01-20/01.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-20/02.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/03.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-20/04.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/05.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-20/06.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/07.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/08.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/09.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/10.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/11.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-20/12.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/13.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/14.webp", width: 1600, height: 720 },
  { src: "/session-imgs/01-20/15.webp", width: 720, height: 1600 },
  { src: "/session-imgs/01-20/16.webp", width: 720, height: 1600 },
];

const SessionsPage = () => {
  return (
    <SessionDetails
      sessionInfo={SESSIONS["01-20-time"]}
      synopsis="Time is one of the greatest abstractions of civilization. It is a fundamental reference in our lives, without pegging to which, no story or no progress can ever be perceived. Without even knowing what it is, even the earliest humans felt it in the passing of the day and night. But the clever Egyptians and Babylonians began organizing calendars some 5,000 years ago. Then, the eras, epochs, hours, seconds, years and millennia were measured, quantified and the pages of history were hung by the strings of time. And in the process, we learnt to link the sun, the moon, the earth, the universe and everything fundamentally physical in measuring the most practical imagination we ever had - the time."
      prev={SESSIONS["01-19-transatlantic"]}
      next={SESSIONS["02-01-etruscan"]}>
      <p>
        Ever since humans developed awareness about their surroundings, they have been seeing
        sunrises, sunsets, seasons, new moon, full moon, stars, constellations and their movements
        across the sky. The question is since when did they begin to 'feel' the passage of time and
        how a primitive concept of time evolved into a complex perception that underlines almost
        every activity that we undertake now!
        <br />
        <br />
        If one looks at history, it is quite evident that there are two ways to asses time. ONE - by
        looking at the regularly recurring natural events in the environment and TWO - by
        artificially dividing it to suit our everchanging lifestyle. Ancient Sumerians set the ball
        rolling by dividing time on a ‘Base 60’ method, which was adopted by Babylonians through
        times of wars and famines, during which the inter-civilizational interactions increased due
        to either aggression or migration. By the time the Roman Empire was established, the concept
        of calendar was well formed but it further metamorphosized into Julian and later Gregorian
        calendars for what appears to be the sole purpose of fixing a date for Easter. However, that
        exercise of juggling between the calendars required addition or deletion of months and days
        at the whims and fancies of the ruling and the priestly classes. Introduction of Julian and
        Gregorian calendars had a separation of over a 1000 years and as could be expected, editing
        some days in the calendar became necessary as all measurements, however intricate they were
        structured, had to finally depend on the fixed physical relationship between the stellar
        bodies, particularly the sun and the earth.
        <br />
        <br />
        Alexander the Great's conquests also helped spread these western ideas of timekeeping to the
        Greeks and Indians. This was aided by various luminaries postulating then that the earth was
        flat and could be marked with coordinates. The coordinates were drawn on the map through
        geometrical precision, which were divided initially into degrees by Hipparchus, whose
        successors like Ptolemy then divided the degree into minutes and seconds. Persian scholars
        like Al Baruni also divided the coordinates into minutes, seconds, thirds and fourths while
        other Persian scholars like Al Khwarizmi were busy inventing Algebra based upon the
        inventions of Brahmagupta and others, who by then had established zero and the Indian
        numerical system of 0 to 9. This knowledge went back and forth for a long time between East
        and west. But in the process, timekeeping was becoming refined and essential in
        understanding nature.
        <br />
        <br />
        By the time the renaissance began, the system of timekeeping and calendars had come of age
        and most ambiguities were getting gradually ironed out. In the 16th century, Danish
        astronomer Tycho Brahe prudently used degrees minutes and seconds and developed a large
        array of celestial data. This helped Kepler to come up with the laws of planetary motions,
        which in turn helped Newton to propound the laws of gravity, thereby laying foundation to
        modern physics and precision knowledge of the nature of the universe. These findings further
        helped the development of mechanical clocks which begat spring clocks that delivered higher
        accuracy to the measurement of time. Pendulums made further difference to the measurement of
        time as they relied more on physical principles unlike the arbitrary sand clocks which had a
        long run in civilization. The pocket watches and wrist watches that came later were followed
        by automatic, quartz and atomic clocks improving the accuracy of time measurement to
        fractions of a second, resulting in an insignificant error of 1 second per 300 billion
        years!
        <br />
        <br />
        Thus, the measurement of time has also been an aspect of development in human civilizations.
        It has gone through a long process of trial and error. From being just a recognition of day
        and night in the early part of civilization, atomic clocks of high accuracy have enabled
        space exploration and precision computing. In the background, an argument has always
        remained whether time is a physical entity or a grand illusion of the mind. Regardless of
        that debate about time per se, the measurement of time is a highly evolved entity, without
        which a systematic progress in civilization would not have been possible.
      </p>
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
