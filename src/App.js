import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "pages/Homepage/Homepage.component";
import PrivacyPolicy from "pages/PrivacyPolicy/PrivacyPolicy.component";
import TermsOfService from "pages/TermsOfService/TermsOfService.component";
import ContactUs from "pages/ContactUs/ContactUs.component";
import FAQ from "pages/FAQ/FAQ.components";
import Header from "./components/Header/Header.component";
import Footer from "sections/Footer/Footer.component";
import ExperiencePopup from "components/ExperiencePopup/ExperiencePopup.component";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <Router>
            <div className="main">
                <Header setShowPopup={setShowPopup} />
                {showPopup && <ExperiencePopup onClose={() => setShowPopup(false)} />}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Homepage setShowPopup={setShowPopup}></Homepage>
                            </>
                        }
                    />
                    <Route
                        path="/privacy-policy"
                        element={
                            <>
                                <PrivacyPolicy></PrivacyPolicy>
                            </>
                        }
                    />
                    <Route
                        path="/terms-of-service"
                        element={
                            <>
                                <TermsOfService></TermsOfService>
                            </>
                        }
                    />
                    <Route
                        path="/contact-us"
                        element={
                            <>
                                <ContactUs></ContactUs>
                            </>
                        }
                    />
                    <Route
                        path="/faq"
                        element={
                            <>
                                <FAQ></FAQ>
                            </>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
