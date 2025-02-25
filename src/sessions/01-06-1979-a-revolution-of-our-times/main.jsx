import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-06-1979"]}
            synopsis={
                <>
                    Reading about the French Revolution, Bolshevik Revolution and such others give us an idea that the revolutions that change a nation's history are to be dug out from the books of yore. But the 1979 Iranian revolution happened in our times and we witnessed how civilizations changed their course and walked into the windward side of belief. In 1979, Iran changed. Iranian society transformed. The world grappled with the contemporary clash of ideas.
                </>
            }
            prev={SESSIONS["01-05-jordan"]}
            next={SESSIONS["01-07-potato"]}
        >
            <p>
                Philosophers and social analysts have for long analysed why revolutions occur in civilization.  While it may so appear that societies undo an existing organization by way of a revolution, the revolution itself too is an act of reorganization.  Aristotle said that the revolutions are triggered by the need for equality and honour.  Plato said they are an expression of social decay.  Revolutions have also strengthened a social identity or nationalism.  Poverty, lack of access to amenities and deteriorating quality of life too have sustained revolutions.  But the Iranian revolution that culminated in 1979 was a combination of many such factors, including an extraordinary self assertion of religious forces.  <br /><br />
                The central story of Iranian revolution was that a longstanding monarchy  was undone.  But unlike the social order of peasants, nationalists or proletariats that sought to infuse socio-economic equality to the society through the revolutions the world had so far seen, a religious order undid westernization and a pompous monarchy in Iran.<br /><br />
                Iran under its last monarch - Mohammad Reza Pahlavi was turning into a modern capitalistic State during the middle of last century.  What's called a 'White Revolution' from 1963 had begun to modernise infrastructure and industry and had overlooked the increasing depravation in the lower rungs of society.  The Monarch established rights of education and inheritance to women and deliberately attempted to undo the traditional values of Islamic attire.  These sudden changes enraged the clergy and the poorer sections of society increasingly sought solace under Islamic guidance.  Ayatollah Ruhollah Khomeini, a religious teacher from the holy city of Qom, emerged as the leader, bitterly opposing the excessive westernization and white revolution programmes of Shah.  Khomeini was quickly exiled to Iraq, which proved to be an error of judgement of the Shah, as he could no longer be silenced and his voice resonated widely and deeply through the free speeches he made from across the border.  The Shah increasingly looked unsympathetic in his pompous way of living, which was amply exemplified by a grand celebration he arranged in Persepolis in 1971 to commemorate 2,500 years of monarchy in Iran.  Besides being very extravagant, the Shah also undid the Islamic Hijri calendar and replaced it with a calendar that began with the Ascent of Cyrus, the Persian Emperor.  <br /><br />
                In the next few years, Iran descended into utter chaos as the influence of Khomeini increased and the public found the Shah as a western agent that destroyed both Islamic principles as well as the social fibre of Iran.  In 1979, Shah had to flee the country and the Ayatollah flew in to take charge.  The 'Imperial State of Iran' changed into the 'Islamic Republic of Iran'.  This gave rise to the emergence and perception of Islam as an adversary to westernization in the world.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
