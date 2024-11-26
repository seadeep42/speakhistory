import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-16-clay1"]}
            synopsis={
                <>
                    If this one humble mineral did not exist in the soil, we wouldn't have a principal story teller on the planet. Clay is a mud that sticks. And it stuck so well to us that it became possible for us to count the time and mark our story. Clay made farming possible, cooking easier, documentation efficient and story telling definitive. We know that the cuneiform tablets and broken potteries are our way markers in the journey we made.<br /><br />
                    This is a story of an unsung hero in the mud that built the bricks of civilization.
                </>
            }
            prev={SESSIONS["01-15-cybercrime"]}
            next={SESSIONS["01-17-clay2"]}
        >
            <p>
                <b>Clay is a magical material.</b>
                Clay formed through complex weathering processes, some 2.5 to 3 billion years ago as the earth cooled from its primordial state.  And due to its unique chemistry and physical form at the molecular level, clay became a substrate on which the Ribonucleic Acids (RNAs) could form and lead to the Last Universal Common Ancestor (LUCA - the unicellular organism) of life.  Clay rested in soil, adsorbed nutrients and minerals and gradually became a very influential material amongst those that assisted organic evolution of biodiversity on earth.<br /><br />
                By the time the humans evolved some 2 million years ago, earth was already invested with a huge biomass and an intricately functioning ecology.  Presence of clay in the soil was one of the most critical factors that made this possible.  And the pre-historic humans began finding further uses of clay in their daily lives, even as they remained vastly nomadic and lived by hunting and gathering.  Although an absolutely clear story is difficult to construct on how many different applications of clay the early humans found, it is certain that they secured skills of making pots from clay, which marked a defining moment in civilization.  Clay figurines and pottery are found from different parts of the world like China, Japan, Russia and mainland Europe from as far back as 20,000 to 30,000 BCE.  Moulding and baking the clay to make the pots is regarded as an intelligent technological feet through a deep understanding of the power of “five elements” of the planet.<br /><br />
                Even as the state of the planet transited from a long ice age to a warming period in the Holocene era around 10,000 BCE, the receding glaciers began sustaining riverine flow and further weathering of rocks.  Formation of clay and its wide distribution as part of alluvium gave humans their first opportunity to domesticate crops in the fertile lands that contained clay and build settlements.  Stone age archaeological sites like Catalhuyik in Turkey have provided ample evidence to this.  During this time, along with the development of agricultural practices, the precision refinement of pottery also occurred.  The settlements required housing and the stone age people learnt how to make bricks from clay, bake it to strength and build the earliest form of houses.  By late stone age and around 7,000 BCE, large scale production of clay bricks through and kilns had begun in Mesopotamia, Levant, Egypt, Indus Valley and many other geographies.  With that, clay had irreversibly changed the civilization from a nomadic life style to sedentary nature and had enabled urbanization.<br /><br />
                Around the same time, in the Bronze age, clay tablets were made by people for writing information with a stylus.  The cuneiform language was developed in Mesopotamia and probably in other settlements as well and information of different kinds and transactions were written down on them.  Over 2 million cuneiform clay tablets are available in the museums of the world today, holding in their carvings the story of thousands of years of civilization of people in the late Stone age and Bronze age.<br /><br />
                Further, in the past 5,000 to 7,000 years, due to cumulative actions of weathering and river flows, clay dominated alluvium formed huge deltas like Sundarbans, Orinoco, Mississippi, Volga, Mekong, Yangtse, Nile, Euphrates, Tigris, Rhine, Congo, Niger and others, attracting huge human settlements and enhanced activities of agriculture and urbanization.<br /><br />
                Just as we can mould any figurine or shape with clay, the clay moulded life and civilization on the planet.  And the entanglement of life with the influence of clay is so much that for tens of thousands of years, we have relied on its capability to sustain life processes.  Our success as a species on earth is partly scripted in clay.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
