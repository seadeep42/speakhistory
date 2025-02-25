import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-13-water"]}
            synopsis={
                <>
                    In a synoptic sense, the water bodies are like shimmering jewels of the landscape. They have always played an important role in settling our nomadic ancestors and inducing them to build their habitations and lives around them. Mysore is no exception to it and Mysorean identity owes to the life support we have derived from our water bodies.<br /><br />
                    Since the rains in our region are scanty, it required royal patronage to build impoundments and sustain lakes and a social system for operating and maintaining them. The security and prosperity of the people of our region and our survival through drought and famine depended on this act for centuries. But piped water supply from the rivers and the emergence of tube wells some 50 years ago led to negligence and abuse of natural water bodies and what were once sources, turned into sinks.<br /><br />
                    This is a transitional story of our water bodies and how we have undermined the vision of the Maharajas and abused a natural heritage that built and sustained Mysore.
                </>
            }
            prev={SESSIONS["01-12-restore"]}
            next={SESSIONS["01-14-arunachal"]}
        >
            <p>
                By 5000 BC, the nomadic man had started settling down in the Indian subcontinent as evidenced by the Indus valley civilization - Harappa Mohenjo-Daro and Dholavira. A good water management system was behind their success, which is evidenced by the presence of diversion channels , canals, wells and storage structures. One reality of the Indian subcontinent has been the fact that a whole year's supply of the water through rains is delivered in about 100 rainy days of monsoon. Managing this seasonal bounty over the remaining days of the year has been a challenge of survival. Opportunities for harvesting this rain water running off in seasonal streams by putting bunds across them for drinking, agriculture and other uses require great ingenuity. This challenge resulted in the dispersed nature of numerous villages across India. Then,  success in agriculture saw claims over lands and territories, leading to the rise of kingdoms and dynasties. Eventually,  the rulers built more lakes, assuring food security and prosperity for the people and the region. Thus, immense socio cultural values got associated with water and people worshipped water. Building spiritual and religious spaces around them, people revered water and and conserved it.  Endowments of lands (Bittuvatta) were made for the maintenance of the lakes and social systems of 'Nirgantis' to manage the upkeep of canals  and distribution of water. The period between 600 AD and 1700 AD saw establishment of most of the lakes we see today. The recurrence of droughts were also responsible for spurt in lake building activity  as a response strategy of survival.<br /><br />
                In Karnataka, 60% of all the lakes are present in the  10 southern districts. The territories of Mysuru region were under the Gangas for a long time, followed by Cholas in 1100 AD, showing a spurt in lake building activity during that period.  During the rule of Vijayanagara, the water management projects reached their zenith. In the following times of history, the Wodeyar dynasty also gave high importance to agriculture. <br /><br />
                In the year 1799 AD after the fall of Tipu Sultan,  Purniah  became the Dewan of Mysore Kingdom.  He believed that making water available to Mysore was a top priority and explored many possibilities from different sources. One of them was a deep canal in the north-west that brought water to the palace.   This Purnaiah Nala was later covered up to make way for the 'Sayajirao road'. Later, another 25 km long canal by the same name was laid around the Yelwal ridge to bring water to Kukkarahalli kere in the city.  Dodda kere, Dalvoy kere, Karanji kere and Gobli kere already existed. Varuna and Lingambudhi kere were built in 1828 AD and Kukkarahalli kere in 1881 AD.<br /><br />
                Early 20th century saw electrification and pumping of water to Mysore city from the Cauvery river.  Since 1970s borewells have emerged as an important source of water to the city. In the last 60 years,  the lakes that were once a source of water, became 'sinks' or receptacles for sewage and garbage. Many lakes were breached to prevent mosquito breeding and to make way for 'development' projects. Bangalore has lost nearly 600 lakes while Mysore has lost 26 lakes. Now, some 42 lakes exist, although all are not looked after well.  <br /><br />
                Through the history of water bodies, the main purpose of the lakes as sources of water for urban habitats, has changed. They still serve to manage floods and droughts, recharge of ground water and nurture biodiversity.  And in the times of climate change, lakes are becoming even more relevant than before as a response and resilience elements of our survival and dependence on nature.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
