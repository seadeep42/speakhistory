import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from "../components/header";
import Footer from "../components/footer";

const SpeakersPage = () => {
    return (
        <div id="page-contents">
        <Header />
        Membership page
        <Footer />

        </div>      
    );
};


const root = createRoot(document.getElementById('root'));
root.render(<SpeakersPage />);
