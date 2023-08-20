import React, { FC } from "react";
import "./Footer.styles.scss";

const Footer: FC = () => {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="text-2">© Rupert AI 2023</div>
                <div className="footer__navigation">
                    <a className="text-2" href="/privacy-policy">
                        Terms of Service
                    </a>
                    <a className="text-2" href="/privacy-policy">
                        Privacy
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
