import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-07-potato"]}
            synopsis={
                <>
                    The potatoes remained underground for millions of years but were discovered by Inca people in the Peruvian Andes some 10,000 years ago. It is only some 500 years ago that the modern world found them useful. And in the past 300 years, the potatoes turned into a superfood of gigantic importance to human race. More than all that, potatoes influenced the human history of agriculture, war and migrations to an extent that no other natural resource may ever have reached.
                </>
            }
            prev={SESSIONS["01-06-1979"]}
            next={SESSIONS["01-08-palanquins"]}
        >
            <p>
                Potatoes may have developed over 200 million years ago, but they became geographically isolated in the Peruvian Andes of South America due to the land’s continental drift from Pangea.  And it is only through the Columbian Exchange that occurred in the 16th century, just some 500 years ago, that the potatoes were rediscovered by the human race and spread across the continents.<br /><br />
                The mountain communities of Peru learnt to domesticate and use potatoes in the late Stone Age to early Bronze Age.  With their high nutrition value, potatoes sustained the Incan civilization.  During the 16th century, Conquistador Francisco Pizarro brought the first samples of potatoes from Peru to Europe.  Although potatoes sustained the nutritional requirements of cross Atlantic voyages, they did not find immediate popularity in Europe, but were stigmatised as dirty, tasteless and leprosy causing.  <br /><br />
                During the 16th century, the Lord Protector of England, Oliver Cromwell conquered Ireland and destroyed its social fabric of landholding pattern, demography and peasant economy.  In the process of recovery and reorganization in the next 100 years, Ireland took to potatoes like duck to water.  During the 18th and early 19th centuries, potatoes had become the prime Irish staple food.  Around the same time, potatoes also began emerging in mainland Europe as a cheap substitution to other staple foods like bread.  Notable in efforts of popularising potatoes was Frederick the 2nd of Prussia, who promoted their farming and usage in a big way in his country and his military campaigns were greatly supported by potato stocks as the prime food source for soldiers.  Incidentally, Antoine Parmentier, a French agronomist and Pharmacist was on military service and had been arrested in a war with Prussia. He was served with potatoes in his prison cell and he liked them so immensely that upon his release, he campaigned for the consumption of potatoes in France, including with the Royal court.  He was also instrumental in repealing the ‘potato ban law’ that existed in France and making the vegetable popular during the French Revolution and beyond.<br /><br />
                In the meantime, a potato blight fungus, suspected to have come along with the guano fertilizer from Peru, began destroying potato crops in Europe.  By mid 19th century, the potato crops were decimated in Ireland, causing one of the biggest famines in Irish history, which resulted in the death of over a million and migration of over 2 million.<br /><br />
                In India, although potatoes were brought in by Portuguese in the 16th/17th centuries, they were not widely grown, until the 19th century.  Benjamin Hynes, a British Officer was assigned to popularise potatoes as part of a solution to the nutritional problems caused by the ravaging famines in the 19th century. Thereafter, India assimilated potatoes in its cuisine very imaginatively and took to its production so strongly that today,  India is the second largest producer of potatoes in the world.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
