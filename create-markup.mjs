import lodash from "lodash";
import fs from "node:fs";

const { isArray, join, map } = lodash;

export const SPEAKERS = {
    mr_ajay_sharma: {
        name: "Mr. Ajay Sharma",
        profession: "Ex-Managing Partner, Ketchum Sampark India",
    },
    dr_sudarshana: {
        name: "Dr.Sudarshana",
        profession: "Farmer, Mysore",
    },
    dr_ramakrishna_rao: {
        name: "Dr.Ramakrishna Rao",
        profession: "Architect, Mysore",
    },
    dr_mahesh_rao: {
        name: "Dr.Mahesh Rao",
        profession: "Medical Practitioner, Mysore",
    },
    dr_kimberly_marsh: {
        name: "Dr.Kimberly Marsh",
        profession: "Faculty, Oxford University",
    },
    mr_venkatagiri_rao: {
        name: "Mr.Venkatagiri Rao",
        profession: "Creative Director, Mumbai",
    },
    dr_dakshayani: {
        name: "Ms.Dakshayani",
        profession: "Educationist, Mysore",
    },
    mr_subbaraman: {
        name: "Mr.Subbaraman",
        profession: "Archaeological chemist",
    },
    mr_ravikumar: {
        name: "Mr.Ravikumar",
        profession: "Engineer and environmental conservationist",
    },
    dr_usha_srinath: {
        name: "Dr.Usha Srinath",
        profession: "Medical professional",
    },
    dr_satish_venkatasubbu: {
        name: "Mr.Satish Venkatasubbu",
        profession: "Cybermithra, Cyber lawyer",
    },
    dr_poornima_mahishi: {
        name: "Dr.Poornima Mahishi",
        profession: "Biochemist and Educator",
    },
    divya_prathima: {
        name: "Divya Prathima",
        profession: "Art enthusiast and amateur artist",
    },
    rg_singh: {
        name: "Mr. R G Singh",
        profession: "Secretary of Ramsons Kala Pratisthana",
    },
    dr_vijaykumar_m: {
        name: "Dr. Vijay Kumar M",
        profession: "Head of Surgical Oncology and Robotic Surgery, Bharat Cancer Hospital",
    },
    pranav_mahishi: {
        name: "Master Pranav Mahishi",
        profession: "Student, Cartography enthusiast",
    },
    suryanarayan_rao: {
        name: "Mr. Suryanarayan Rao",
        profession: "Ex-Director of Administrative Services, International Hospital Federation"
    }
};

export const SPEAKERS_LIST = [
    SPEAKERS.dr_mahesh_rao,
    SPEAKERS.dr_ramakrishna_rao,
    SPEAKERS.dr_kimberly_marsh,
    SPEAKERS.mr_venkatagiri_rao,
    SPEAKERS.dr_dakshayani,
    SPEAKERS.dr_sudarshana,
    SPEAKERS.dr_usha_srinath,
    SPEAKERS.dr_poornima_mahishi,
    SPEAKERS.mr_ravikumar,
    SPEAKERS.dr_satish_venkatasubbu,
    SPEAKERS.mr_subbaraman,
    SPEAKERS.divya_prathima,
    SPEAKERS.rg_singh,
    SPEAKERS.dr_vijaykumar_m,
    SPEAKERS.pranav_mahishi,
    SPEAKERS.suryanarayan_rao,
    SPEAKERS.mr_ajay_sharma,
];

export const SESSIONS = {
    "02-10-conservation-restoration-antiques-art": {
        title: "Conserving, restoring antiques, works of art",
        speaker: SPEAKERS.mr_subbaraman,
        slug: "02-10-conservation-restoration-antiques-art",
        date: "Saturday, 11 January 2025",
    },
    "02-09-order-of-gandabherunda": {
        title: "Order of Gandabherunda: Mysore state honours",
        speaker: SPEAKERS.rg_singh,
        slug: "02-09-order-of-gandabherunda",
        date: "Saturday, 28 December 2024",
    },
    "02-08-phoenicians-trading-with-india": {
        title: "Phoenicians trading with india - First ever scientific proof",
        speaker: SPEAKERS.mr_ajay_sharma,
        slug: "02-08-phoenicians-trading-with-india-first-ever-scientific-proof",
        date: "Saturday, 30 November 2024",
    },
    "02-07-nuclear-weapons": {
        title: "History of Nuclear Weapons",
        speaker: SPEAKERS.suryanarayan_rao,
        slug: "02-07-history-of-nuclear-weapons",
        date: "Saturday, 9 November 2024",
    },
    "02-06-cartography": {
        title: "Picture of the world - A history of cartography",
        speaker: SPEAKERS.pranav_mahishi,
        slug: "02-06-cartography-history-of-cartography",
        date: "Saturday, 26 October 2024",
    },
    "02-05-robotic-surgery": {
        title: "Journey from traditional open surgery to technology driven robotic surgery",
        speaker: SPEAKERS.dr_vijaykumar_m,
        slug: "02-05-journey-open-surgery-technology-driven-robotic-surgery",
        date: "Saturday, 19 October 2024",
    },
    "02-04-mysore-palace": {
        title: "Mysore Palace - The construction of an iconic landmark",
        speaker: SPEAKERS.rg_singh,
        slug: "02-04-mysore-palace-iconic-landmark",
        date: "Saturday, 28 September 2024",
    },
    "02-03-mysore_art": {
        title: "Mysore - A glimpse of the city and its history through the lens of art",
        speaker: SPEAKERS.divya_prathima,
        slug: "02-03-mysore-city-history-lens-of-art",
        date: "Saturday, 14 September 2024",
    },
    "02-02-migration": {
        title:"Footsteps on the planet - The history of human migration",
        speaker: [SPEAKERS.dr_sudarshana, SPEAKERS.dr_mahesh_rao],
        slug: "02-02-footsteps-planet-history-human-migration",
        date: "Saturday, 31 August 2024",
    },
    "02-01-etruscan": {
        title:"History beyond the Romans - The Etruscan Enigma",
        speaker: SPEAKERS.dr_usha_srinath,
        slug: "02-01-beyond-romans-etruscan-enigma",
        date: "Saturday, 31 August 2024",
    },
    "01-20-time": {
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Time - The history of measuring the invisible",
        slug: "01-20-time-history-measuring-invisible",
        date: "Saturday, 20 July 2024",
    },
    "01-19-transatlantic": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "1492 - Some greed, little luck and then the world shrank",
        slug: "01-19-1492-greed-luck-world-shrank",
        date: "Saturday, 15 June 2024",
    },
    "01-18-curiosity": {
        speaker: SPEAKERS.dr_poornima_mahishi,
        title: "Curiosity - The game changer of human civilization",
        slug: "01-18-curiosity-game-changer-civilization",
        date: "Saturday, 15 June 2024",
    },
    "01-17-clay2": {
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Clay: The human history in the mud - 2",
        slug: "01-17-clay-human-history-mud-2",
        date: "Saturday, 1 June 2024",
    },
    "01-16-clay1": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "Clay: The human history in the mud - 1",
        slug: "01-16-clay-human-history-mud-1",
        date: "Saturday, 18 May 2024",
    },
    "01-15-cybercrime": {
        speaker: SPEAKERS.dr_satish_venkatasubbu,
        title: "The invisible inflict - Cybercrime",
        slug: "01-15-invisible-inflict-cybercrime",
        date: "Saturday, 27 April 2024",
    },
    "01-14-arunachal": {
        speaker: [SPEAKERS.dr_usha_srinath, SPEAKERS.dr_mahesh_rao],
        title: "Ahom Arunachal - Story of the tribes at the foot of a mountain",
        slug: "01-14-ahom-arunachal-story-tribes-mountain",
        date: "Saturday, 13 April 2024",
    },
    "01-13-water": {
        speaker: SPEAKERS.mr_ravikumar,
        title: "The story of our water bodies - A forgotten heritage of Mysore",
        slug: "01-13-story-water-bodies-heritage-mysore",
        date: "Saturday, 23 March 2024",
    },
    "01-12-restore": {
        speaker: SPEAKERS.mr_subbaraman,
        title: "Unearthing history, Restoring heritage",
        slug: "01-12-unearthing-history-restoring-heritage",
        date: "Saturday, 2 March 2024",
    },
    "01-11-jalebi": {
        speaker: SPEAKERS.dr_dakshayani,
        title: "A circle of sweet time, Jalebi",
        slug: "01-11-circle-of-sweet-time-jalebi",
        date: "Saturday, 10 February 2024",
    },
    "01-10-medicine": {
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "As ancient as the body, the medicine story",
        slug: "01-10-ancient-body-medicine-story",
        date: "Saturday, 27 January 2024",
    },
    "01-09-wabisabi": {
        speaker: SPEAKERS.mr_venkatagiri_rao,
        title: "Origins of finding beauty in imperfection - The Wabi Sabi story",
        slug: "01-09-origins-beauty-imperfection-wabi-sabi",
        date: "Saturday, 6 January 2024",
    },
    "01-08-palanquins": {
        speaker: SPEAKERS.dr_kimberly_marsh,
        title: "Paintings and palanquins, three british women travelers and their 19th century India",
        slug: "01-08-paintings-palanquins-british-women-19-india",
        date: "Saturday, 16 December 2023",
    },
    "01-07-potato": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "The magnificent root of history, Potato",
        slug: "01-07-the-magnificent-root-of-history-potato",
        date: "Saturday, 2 December 2023",
    },
    "01-06-1979": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "1979, A revolution of our times",
        slug: "01-06-1979-a-revolution-of-our-times",
        date: "Saturday, 18 November 2023",
    },
    "01-05-jordan": {
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Chequered history of a promised land",
        slug: "01-05-chequered-history-of-a-promised-land",
        date: "Saturday, 28 October 2023",
    },
    "01-04-persia": {
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Persia, An enchanting history",
        slug: "01-04-persia-an-enchanting-history",
        date: "Saturday, 30 September 2023",
    },
    "01-03-bighunger": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "Big hunger, Death at the doorsteps",
        slug: "01-03-big-hunger-death-at-the-doorsteps",
        date: "Saturday, 16 September 2023",
    },
    "01-02-yadavagiri": {
        speaker: SPEAKERS.dr_ramakrishna_rao,
        title: "Yadavagiri, The gateway to Mysore kingdom",
        slug: "01-02-yadavagiri-gateway-to-mysore-kingdom",
        date: "Saturday, 2 September 2023",
    },
    "01-01-hyder": {
        speaker: SPEAKERS.dr_sudarshana,
        title: "Death of Hyder - Chaos in the capital",
        slug: "01-01-death-of-hyder-chais-in-the-capital",
        date: "Saturday, 19 August 2023",
    },

};

export const SESSIONS_LIST = [
    SESSIONS["02-10-conservation-restoration-antiques-art"],
    SESSIONS["02-09-order-of-gandabherunda"],
];








const getSpeakerName = ({ speakerInfo }) => {
    if (isArray(speakerInfo)) {
      return join(map(speakerInfo, "name"), " and ");
    }
    return speakerInfo.name;
  };


const getMarkupWithVariables = ({ title, speaker, slug, date }) => {
    const description = `A Speak History session by ${getSpeakerName({ speakerInfo: speaker })} on ${date}`;
    const [yearNo, sessionNo] = slug.split("-");
    const ogImage = `https://speak-history.org/session-imgs/${yearNo}-${sessionNo}/og-banner.webp`;
    const ogImageJpeg = `https://speak-history.org/session-imgs/${yearNo}-${sessionNo}/og-banner.jpeg`;
    const url = `https://speak-history.org/sessions/${slug}/`;
    title = `${title} | Speak History`;


    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>${title}</title>

    <!-- Common meta tags across all pages -->
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta http-equiv="Expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="
        default-src *.sentry.io *.google-analytics.com 'self';
        img-src * 'self' data:;
        style-src fonts.googleapis.com 'unsafe-inline' 'self';
        font-src fonts.gstatic.com;
        worker-src 'self' blob:;
      "
    />
    <meta name="title" content="${title}" />
    <meta
      name="description"
      content="${description}"
    />
    <meta
      name="keywords"
      content="speak,history,mysore"
    />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="en-US" />
    <meta name="author" content="speakhistory" />

    <!-- Twitter cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@speakhistory" />
    <meta name="twitter:creator" content="@speakhistory" />
    <meta name="twitter:title" content="${title} | Speak History" />
    <meta
      name="twitter:description"
      content="${description}"
    />
    <meta
      name="twitter:image"
      content="${ogImageJpeg}"
    />

    <!-- Open graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:site_name" content="Speak History" />
    <meta property="og:url" content="${url}" />
    <meta
      property="og:description"
      content="${description}"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="${ogImage}"
    />

    <link rel="manifest" href="/manifest.json" />
    <meta name="mobile-web-app-capable" content="yes" />

    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/icons/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/icons/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/icons/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/icons/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/icons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/icons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/icons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/icons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/icons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/icons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png"
    />
    <meta name="msapplication-TileColor" content="#174084" />
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
    <meta name="theme-color" content="#174084" />


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/main.scss" />
</head>
<body>
<div id="root"></div>
<script type="module" src="./main.jsx"></script>
</body>
</html>
`;
}


SESSIONS_LIST.forEach(session => {
    const { title, speaker, slug, date } = session;

    const markup = getMarkupWithVariables({ title, speaker, slug, date });

    try {
      fs.writeFileSync(`./src/sessions/${slug}/index.html`, markup);
      // file written successfully
    } catch (err) {
      console.error(err);
    }
});