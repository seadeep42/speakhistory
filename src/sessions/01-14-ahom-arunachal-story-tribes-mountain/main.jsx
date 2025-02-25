import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionDetails from '../../components/session-details';
import { SESSIONS } from '../../utils';

const SessionsPage = () => {
    return (
        <SessionDetails
            sessionInfo={SESSIONS["01-14-arunachal"]}
            synopsis={
                <>
                    That's the highest mountain on the planet. And Lisu and Singpho - could be among the tribes that live on the very roof of the world.<br /><br />

                    In the nomadic culture of the Kingdom of Ahom, there were no rigid borders. The 'tougher than the terrain' tribal people roamed the landscapes that are now Tibet, China, Myanmar, Thailand and India, slashing and burning biomass and practicing farming on the go. As times went by, they settled down in pockets, while geo-politics drew geographic dominions. Then, Ahom became NEFA and just about 37 years ago, Arunachal Pradesh was born at the base of the clouds.
                </>
            }
            prev={SESSIONS["01-13-water"]}
            next={SESSIONS["01-15-cybercrime"]}
        >
            <p>
                At the foothills of the Himalayas and to the south of an imaginary border drawn by the British as McMahon line along the Main Central Thrust of the mountain, lies the beautiful state of Arunachal Pradesh.  The landscape of Arunachal Pradesh from north to south transits between high mountains and the plains, thereby establishing different geographic landuses, which have historically dictated custom and cultural differences among the resident tribes.  While the upper reaches are more culturally akin to Tibet, being ruled in the past by Monpa Kings, the lower reaches were ruled by Chutia kings of Assam.  The Ahom kingdom of Assam was constantly battling the tribes in a bid to establish their supremacy.  In any case, Arunachal was not a well defined kingdom of people and borders as the nomadic tribes brought in a dispersed diversity.  They mostly practiced jhum agriculture (slash and burn), animal husbandry and peaceful lifestyle in the hills, without a well defined alignment to any religion.  They roamed freely in a vast expanse of this mountainous terrain, extending into what’s now India, Tibet, China, Bhutan and Myanmar.  But with the drawing of McMahon line during 1914 as part of a delimitation exercise done by the British, Tibetans and Chinese, a geographic confinement gradually came into existence for the nomadic tribes of Arunachal.<br /><br />
                Mythologically speaking, the Dibang  valley region in the north east was ruled by King Bhishmaka, who was the father of Rukma and Rukmini and fought on the Kaurava side in the Mahabharata war.  Even today, a town bears his name here.  Since the migrations into Arunachal occurred both from the northern and southern regions, Tibetan Bhuddhist influence became predominant in the north while Hindu influences are visible in the south. Some tribes follow Donyi-polo (Sun-moon) religion of animistic and shamanic traits, while some follow a curious religion called Rang Frah.  Therefore, both ethnically and religiously, the Arunachal people have had a mixed and amorphous identity.  If the region was ruled over by Assamese royals in the middle ages, it became a British governed region only from the mid-1800s.   By 1919, the entire region had been organized  as the NEFT (North-East Frontier Tract) and in 1957 as NEFA (North-East Frontier Agency).  In 1972, it was renamed as Arunachal Pradesh and was a union territory of India until 1987 when it was made the 24th state of the Union. However, until very recently, the tribes lived in virtual isolation from the rest of India for want of roads, bridges and infrastructure. The development came late to Arunachal because in the nomadic ways of life, the intricate infrastructure was neither felt a necessity nor it was easy to establish it in the mountains.<br /><br />
                The socio-cultural linkages of the people to Tibet and China are obviously undeniable.  The escape of Dalai Lama in 1959 from Tibet and attaining asylum in India for himself and to Tibetans fleeing the aggression of Chinese have had an indelible impact on Arunachal Pradesh because Dalai Lama and over 80,000 Tibetan refugees entered India through Tawang district of the State.  Eventually, the demography of Arunachal also changed substantially by this influx.  As a result, the Indo-Chinese bilateral relations changed forever and China even usurped Arunachal Pradesh in 1962, only to withdraw behind McMahon line later.  These incidents of history that have over-shadowed the relations between China and India have frequently led to claims and counter claims on Arunachal Pradesh. There are 26 major tribes and more than 100 sub tribes in Arunachal Pradesh, the major ones of which are Adi (Abor), Aka (Hruso), Apatani, Nyishi, Tagin, Galo, Khampti, Mishmi, Momba (Monpa), "any Naga tribes", Sherdukpen, Singpho. Monpa (Chugpa, Takpa, Tshangla/Memba et al.).  And all the tribes have always expressed loyalty to the Indian Union due to the protection and development provided by India as well as due to the excellent Indo-Tibetan relationships.
            </p>
        </SessionDetails>
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SessionsPage />);
