import React, { FC } from "react";
import "./ContactUs.styles.scss";
import Tools from "../../sections/Tools/Tools.component";

const ContactUs: FC = () => {
    return (
        <>
            <section className="contact_us">
                <div className="contact_us__wrapper">
                    <div className="contact_us__content">
                        <h1>Contact us</h1>
                        <h3>
                            For any inquiries, questions, or assistance, please feel free to reach out to us via email at:{" "}
                            <a href="mailto:paulius@getrupert.com">paulius@getrupert.com</a>. We will get back to you as soon as possible. Thank you for your
                            interest!
                        </h3>
                    </div>
                </div>
            </section>
            <Tools />
        </>
    );
};

export default ContactUs;
