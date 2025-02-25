import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-03-bighunger"]}
            synopsis={
                <>
                    Rains failed, Governance failed and destiny failed its people in hordes. Millions found a deadly fate at their doorsteps in Mysore. Eventually, we forgot it all as if it was a lesser death. The cause, effect and consequences of this part of our history, which occurred over a century ago, changed the life in South India.
                </>
            }
            prev={SESSIONS["01-02-yadavagiri"]}
            next={SESSIONS["01-04-persia"]}
        >
            <p>
                After the excessive rainfall and flood in 1874 that inundated granaries and destroyed standing crop in South India, especially on the axis of Mysore – Bangalore – Madras, drought crept in and intensified through 1877.  This caused one of the largest famines of human history during 1876 and 1877, killing over 2 million people in Mysore kingdom alone and over 8 million in India.  The famine spread out widely and killed about 50 million in the tropical world.  Mysore kingdom never ever had nor would have in future, human fatalities of such a scale and number.  In the subsequent famine episodes over the next few decades, hundreds of thousands of additional fatalities occurred, but 1876-77 has been termed as a great famine in the history of humanity.  The fact that it occurred here and it is so widely forgotten by this generation adds to the mysteriousness of its occurrence.<br /><br />
                In the modern times, the reasons for this great famine have been described.  The administrative errors made by the British officers in charge of the region, particularly the Viceroy of India - Lord Lytton and the Famine Commissioner - Sir Temple are highlighted.  Continued export of grains from famine stricken areas to England, change of landuse, reduction of free food to the affected and depreciated level of wages were amongst the errors of judgement that led to the intensification of the disaster.  The political dynamics of England at the time, especially the coronation of Queen Victoria as the Empress of India was yet another incident that lacked empathy, because this development enabled by the introduction of Royal Titles Act by the then Prime Minister Benjamin Disraeli led to the first Delhi Durbar, which splurged huge resources that could have been used in containing the famine.<br /><br />
                Recent researchers have discovered that some climatological reasons, such as the 11 year solar cycle and simultaneous occurrence of El Nino and Indian Ocean Dipole were responsible for the spectacular failure of monsoon in 1876-77.  This knowledge was not available at the time of great famine, which in a way was also responsible for not knowing how to predict or address natural disasters.<br /><br />
                All said and done, the great famine of 1876-77, subsequent famines in the next 30 years and the untold sufferings of the people of Mysore, seem to have catalysed decision making in respect of a dam on the river Kaveri.  The KRS dam that the kingdom built between 1911 and 1931 was a direct consequence, which provided the region a safeguard against recurring famines.  In all, the drama of life in Mysore that occurred from 1875 till about 1831 was extraordinary in nature.  And the regional development was unfortunately necessitated by an inexplicable human tragedy.  
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
