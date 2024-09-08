import ImgSessionHyder from "../assets/sessions/img_hyder.webp";
import ImgSessionYadavagiri from "../assets/sessions/img_yadavagiri.webp";
import ImgSessionBigHunger from "../assets/sessions/img_big_hunger.webp";
import ImgSessionPersia from "../assets/sessions/img_persia.webp";
import ImgSessionJordan from "../assets/sessions/img_jordan.webp";
import ImgSession1979 from "../assets/sessions/img_1979.webp";
import ImgSessionPotato from "../assets/sessions/img_potato.webp";
import ImgSessionPalanquins from "../assets/sessions/img_palanquins.webp";
import ImgSessionWabisabi from "../assets/sessions/img_wabisabi.webp";
import ImgSessionMedicine from "../assets/sessions/img_medicine.webp";
import ImgSessionJalebi from "../assets/sessions/img_jalebi.webp";
import ImgSessionRestore from "../assets/sessions/img_restore.webp";
import ImgSessionWater from "../assets/sessions/img_water.webp";
import ImgSessionArunachal from "../assets/sessions/img_arunachal.webp";
import ImgSessionCybercrime from "../assets/sessions/img_cybercrime.webp";
import ImgSessionClay from "../assets/sessions/img_clay.webp";
import ImgSessionClay2 from "../assets/sessions/img_clay_2.webp";
import ImgSessionCuriosity from "../assets/sessions/img_curiosity.webp";
import ImgSessionTransatlantic from "../assets/sessions/img_transatlantic.webp";
import ImgSessionTime from "../assets/sessions/img_time.webp";



import ImgSpeakerDakshayani from "../assets/speakers/speaker_dakshayani.webp";
import ImgSpeakerKimberly from "../assets/speakers/speaker_kimberly.webp";
import ImgSpeakerMahesh from "../assets/speakers/speaker_mahesh.webp";
import ImgSpeakerPoornima from "../assets/speakers/speaker_poornima.webp";
import ImgSpeakerRamakrishna from "../assets/speakers/speaker_ramakrishna.webp";
import ImgSpeakerRavikumar from "../assets/speakers/speaker_ravikumar.webp";
import ImgSpeakerSatish from "../assets/speakers/speaker_satish.webp";
import ImgSpeakerSubbaraman from "../assets/speakers/speaker_subbaraman.webp";
import ImgSpeakerSudarshana from "../assets/speakers/speaker_sudarshana.webp";
import ImgSpeakerUsha from "../assets/speakers/speaker_usha.webp";
import ImgSpeakerVenkatagiri from "../assets/speakers/speaker_venkatagiri.webp";


export const ROUTES = {
    HOMEPAGE: "/",
    SESSIONS: "/sessions/",
    SPEAKERS: '/speakers/',
    GALLERY: "/gallery/",
    MEMBERSHIP: "/membership/",
};

export const SPEAKERS = {
    dr_sudarshana: {
        name: "Dr.Sudarshana",
        img: ImgSpeakerSudarshana,
        profession: "Farmer, Mysore",
    },
    dr_ramakrishna_rao: {
        name: "Dr.Ramakrishna Rao",
        img: ImgSpeakerRamakrishna,
        profession: "Architect, Mysore",
    },
    dr_mahesh_rao: {
        name: "Dr.Mahesh Rao",
        img: ImgSpeakerMahesh,
        profession: "Medical Practitioner, Mysore",
    },
    dr_kimberly_marsh: {
        name: "Dr.Kimberly Marsh",
        img: ImgSpeakerKimberly,
        profession: "Faculty, Oxford University",
    },
    mr_venkatagiri_rao: {
        name: "Mr.Venkatagiri Rao",
        img: ImgSpeakerVenkatagiri,
        profession: "Creative Director, Mumbai",
    },
    dr_dakshayani: {
        name: "Ms.Dakshayani",
        img: ImgSpeakerDakshayani,
        profession: "Educationist, Mysore",
    },
    mr_subbaraman: {
        name: "Mr.Subbaraman",
        img: ImgSpeakerSubbaraman,
        profession: "Archaeological chemist",
    },
    mr_ravikumar: {
        name: "Mr.Ravikumar",
        img: ImgSpeakerRavikumar,
        profession: "Engineer and environmental conservationist",
    },
    dr_usha_srinath: {
        name: "Dr.Usha Srinath",
        img: ImgSpeakerUsha,
        profession: "Medical professional",
    },
    dr_satish_venkatasubbu: {
        name: "Dr.Satish Venkatasubbu",
        img: ImgSpeakerSatish,
        profession: "Cybercrime Counsel",
    },
    dr_poornima_mahishi: {
        name: "Dr.Poornima Mahishi",
        img: ImgSpeakerPoornima,
        profession: "Biochemist and Educator",
    },
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
];

export const SESSIONS = {
    time: {
        img: ImgSessionTime,
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Time - The history of measuring the invisible",
        slug: "time-history-measuring-invisible",
        date: "Saturday, 20 July 2024",
    },
    transatlantic: {
        img: ImgSessionTransatlantic,
        speaker: SPEAKERS.dr_sudarshana,
        title: "1492 - Some greed, little luck and then the world shrank",
        slug: "1492-greed-luck-world-shrank",
        date: "Saturday, 15 June 2024",
    },
    curiosity: {
        img: ImgSessionCuriosity,
        speaker: SPEAKERS.dr_poornima_mahishi,
        title: "Curiosity - The game changer of human civilization",
        slug: "curiosity-game-changer-civilization",
        date: "Saturday, 15 June 2024",
    },
    clay2: {
        img: ImgSessionClay2,
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Clay: The human history in the mud - 2",
        slug: "clay-human-history-mud-2",
        date: "Saturday, 1 June 2024",
    },
    clay1: {
        img: ImgSessionClay,
        speaker: SPEAKERS.dr_sudarshana,
        title: "Clay: The human history in the mud - 1",
        slug: "clay-human-history-mud-1",
        date: "Saturday, 18 May 2024",
    },
    cybercrime: {
        img: ImgSessionCybercrime,
        speaker: SPEAKERS.dr_satish_venkatasubbu,
        title: "The invisible inflict - Cybercrime",
        slug: "invisible-inflict-cybercrime",
        date: "Saturday, 27 April 2024",
    },
    arunachal: {
        img: ImgSessionArunachal,
        speaker: [SPEAKERS.dr_usha_srinath, SPEAKERS.dr_mahesh_rao],
        title: "Ahom Arunachal - Story of the tribes at the foot of a mountain",
        slug: "ahom-arunachal-story-tribes-mountain",
        date: "Saturday, 13 April 2024",
    },
    water: {
        img: ImgSessionWater,
        speaker: SPEAKERS.mr_ravikumar,
        title: "The story of our water bodies - A forgotten heritage of Mysore",
        slug: "story-water-bodies-heritage-mysore",
        date: "Saturday, 23 March 2024",
    },
    restore: {
        img: ImgSessionRestore,
        speaker: SPEAKERS.mr_subbaraman,
        title: "Unearthing history, Restoring heritage",
        slug: "unearthing-history-restoring-heritage",
        date: "Saturday, 2 March 2024",
    },
    jalebi: {
        img: ImgSessionJalebi,
        speaker: SPEAKERS.dr_dakshayani,
        title: "A circle of sweet time, Jalebi",
        slug: "circle-of-sweet-time-jalebi",
        date: "Saturday, 10 February 2024",
    },
    medicine: {
        img: ImgSessionMedicine,
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "As ancient as the body, the medicine story",
        slug: "ancient-body-medicine-story",
        date: "Saturday, 27 January 2024",
    },
    wabisabi: {
        img: ImgSessionWabisabi,
        speaker: SPEAKERS.mr_venkatagiri_rao,
        title: "Origins of finding beauty in imperfection - The Wabi Sabi story",
        slug: "origins-beauty-imperfection-wabi-sabi",
        date: "Saturday, 6 January 2024",
    },
    palanquins: {
        img: ImgSessionPalanquins,
        speaker: SPEAKERS.dr_kimberly_marsh,
        title: "Paintings and palanquins, three british women travelers and their 19th century India",
        slug: "paintings-palanquins-british-women-19-india",
        date: "Saturday, 16 December 2023",
    },
    potato: {
        img: ImgSessionPotato,
        speaker: SPEAKERS.dr_sudarshana,
        title: "The magnificent root of history, Potato",
        slug: "the-magnificent-root-of-history-potato",
        date: "Saturday, 2 December 2023",
    },
    "1979": {
        img: ImgSession1979,
        speaker: SPEAKERS.dr_sudarshana,
        title: "1979, A revolution of our times",
        slug: "1979-a-revolution-of-our-times",
        date: "Saturday, 18 November 2023",
    },
    jordan: {
        img: ImgSessionJordan,
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Chequered history of a promised land",
        slug: "chequered-history-of-a-promised-land",
        date: "Saturday, 28 October 2023",
    },
    persia: {
        img: ImgSessionPersia,
        speaker: SPEAKERS.dr_mahesh_rao,
        title: "Persia, An enchanting history",
        slug: "persia-an-enchanting-history",
        date: "Saturday, 30 September 2023",
    },
    bighunger: {
        img: ImgSessionBigHunger,
        speaker: SPEAKERS.dr_sudarshana,
        title: "Big hunger, Death at the doorsteps",
        slug: "big-hunger-death-at-the-doorsteps",
        date: "Saturday, 16 September 2023",
    },
    yadavagiri: {
        img: ImgSessionYadavagiri,
        speaker: SPEAKERS.dr_ramakrishna_rao,
        title: "Yadavagiri, The gateway to Mysore kingdom",
        slug: "yadavagiri-gateway-to-mysore-kingdom",
        date: "Saturday, 2 September 2023",
    },
    hyder: {
        img: ImgSessionHyder,
        speaker: SPEAKERS.dr_sudarshana,
        title: "Death of Hyder - Chaos in the capital",
        slug: "death-of-hyder-chais-in-the-capital",
        date: "Saturday, 19 August 2023",
    },
}

export const SESSIONS_LIST = [
    SESSIONS.time,
    SESSIONS.transatlantic,
    SESSIONS.curiosity,
    SESSIONS.clay2,
    SESSIONS.clay1,
    SESSIONS.cybercrime,
    SESSIONS.arunachal,
    SESSIONS.water,
    SESSIONS.restore,
    SESSIONS.jalebi,
    SESSIONS.medicine,
    SESSIONS.wabisabi,
    SESSIONS.palanquins,
    SESSIONS.potato,
    SESSIONS["1979"],
    SESSIONS.jordan,
    SESSIONS.persia,
    SESSIONS.bighunger,
    SESSIONS.yadavagiri,
    SESSIONS.hyder,
];
