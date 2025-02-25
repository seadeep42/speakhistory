import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-05-jordan"]}
            synopsis={
                <>
                    Sense of ownership and sense of belonging to a piece of land may be one of the greatest human desires, individually or collectively. It is so much so that the land disputes have a potential to remain for centuries. And so, 'conflict' has reigned stronger than 'peace' in human history. The land across the river Jordan (shown above) till the Mediterranean has been one such longstanding and unsettled issue, where mythology and history mix and mystify perceptions
                </>
            }
            prev={SESSIONS["01-04-persia"]}
            next={SESSIONS["01-06-1979"]}
        >
            <p>
                The 'promised land' is a phrase popularly used for the landscape across the river Jordan till the shores of the Mediterranean, which in the present time is mired in a deep conflict between Palestine and Israel.  The phrase 'promised land' has come to philosophically mean 'mirage' as the stakeholders of the land have had a longstanding crisis of identity and existential challenge.<br /><br />
                Being the epicenter of Abrahamic religions, the lands of Palestine and Israel were called Canaan in the pre-historic times and have seen alternating times of prosperity, drought, conflicts, conquests, destruction and human suffering through ages.  <br /><br />
                Canaan was one of the earliest human settlements. Cities like Jericho, Jerusalem, and Nablus are among the oldest urban centers in the world.  They were established in the Bronze age and were strategically situated in the midst of several other great civilizations like Greek, Egyptian, Babylonian, Mesopotamian and Phoenician, spanning across productive lands between the rivers - Nile and Tigris, called the 'fertile crescent'.  Mythological sources like the Old Testament mention about the Israelite ownership to the land of Canaan while Archaeological texts trace Late Bronze Age migrations of people from the rim and islands of Eastern Mediterranean and Levant into the region.  Since the ancient times, especially since the Late Bronze Age, there has been ample mixing of people, cultures, trade and beliefs in the region.  However, in the past 3,000 years, three major religions, namely Judaism, Christianity and Islam took birth one after the other in this region and demarcated distinct and separating identity to the inhabitants of Canaan, while they all continued to share and revere the land's heritage assets.  Jews, Greeks, Romans, Persians, Babylonians, Assyrians, Muslims and finally British held the region for different periods of time. However, the differences grew exponentially between the Muslim Palestinians and Jewish Israelites, both of whom trace their origin and ownership to the land and devotedly guard their access to the shared heritage assets.   A British plan to divide the land into two nations – Israel and Palestine, polarized the issue further in the end of the First World War.  Then rising from the worldwide sympathy for the Jewish cause after the genocide of millions during the Second World War, the nation of Israel declared independence in 1948.  This became a turning point in the conflict between Islamic/Arab nations and Israel and several wars ensued in regular interval between them.  Huge displacement of people also occurred.<br /><br />
                The borders of the two Nations - Israel and Palestine, drawn by the international negotiating processes of the last century have not remained honoured.  The two Nations have not been equally recognized by the international community. Aggressions, emotions and suffering have all been hugely unleashed between the two communities.  And the dispute between Israel and Palestine has come to stay as one of the foremost conflicts in human civilization.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
