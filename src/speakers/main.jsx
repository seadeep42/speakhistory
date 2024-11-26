import React from 'react';
import { createRoot } from 'react-dom/client';
import { filter, includes } from 'lodash';

import Header from "../components/header";
import Footer from "../components/footer";
import { SPEAKERS_LIST, SESSIONS_LIST } from '../utils';

const SpeakersPage = () => {
    return (
        <div id="page-contents">
        <Header />
        <div className='width-limit section'>
            <h1>Speakers</h1>
            <p id='banner-text'>The speakers at the forum come from different walks of life and are not academically trained or skilled in history. They strive to pursue wide readings in history and interconnect their learnings through the experience of travelling. They have all delivered interesting and useful information in a storytelling and interactive manner, making learning a joyful endeavour.</p>
            <div id='speakers-flex'>
                {
                    SPEAKERS_LIST.map(s => {
                        const sessions = filter(SESSIONS_LIST, sess => (
                            sess.speaker === s || includes(sess.speaker, s)
                        ));
                        return (
                            <div className='speaker-list-item' key={s.name}>
                                <div style={{ backgroundImage: `url(${s.img})`}} className='speaker-list-item-image' />
                                <div>
                                    <h4 className='speaker-list-name'>{s.name}</h4>
                                    <p className='speaker-list-item-profession'>{s.profession}</p>
                                    {
                                        sessions.map(s => (
                                            <a className='speaker-list-item-session' href={`/sessions/${s.slug}/`} key={s.title}>{s.title}</a>
                                        ))
                                    }
                                </div>
                                {/* <p className='session-list-speaker'>{s.speaker.name}</p> */}
                            </div>
                        );
                    })
                }
            </div>
        </div>
        <Footer />

        </div>      
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SpeakersPage />);
