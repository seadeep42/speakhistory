import React from "react";
import { isArray, map, join } from "lodash";

import ImgChevron from "../assets/chevron_blue.svg";
import Header from "../components/header";
import Footer from "../components/footer";


const SpeakerItem = ({ speakerInfo }) => {
    if(isArray(speakerInfo)) {
        return join(
            map(speakerInfo, "name"),
            " and ");
    }
    return speakerInfo.name;
}

const SessionDetails = ({ sessionInfo, children, synopsis, prev, next }) => {
    return (
        <div id="page-contents">
        <Header />
        <div className='width-limit section'>
            <h1>{sessionInfo.title}</h1>
            <div id="session-details-speaker-date">
                <SpeakerItem speakerInfo={sessionInfo.speaker} />
                <br />
                {sessionInfo.date}
            </div>
            <p id="session-details-synopsis">{synopsis}</p>
            <div className="session-details-separator" />
            {/* TODO: Session date */}
            { children }
            <div className="session-details-separator" />
            <div id="session-details-bottom-nav">
                <div className="prev">
                    {
                        prev && (
                            <a href={`/sessions/${prev.slug}/`}>
                                <img src={ImgChevron} className="chevron" />
                                <div>
                                    <h5>{prev.title}</h5>
                                    {<SpeakerItem speakerInfo={prev.speaker} />}
                                </div>
                            </a>
                        )
                    }
                </div>
                <div className="next">
                    {
                        next && (
                            <a
                                href={`/sessions/${next.slug}/`}
                            >
                                <div>
                                    <h5>{next.title}</h5>
                                    {<SpeakerItem speakerInfo={next.speaker} />}
                                </div>
                                <img src={ImgChevron} className="chevron" />
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
        <Footer />
        </div>      
    )
};

export default SessionDetails;
