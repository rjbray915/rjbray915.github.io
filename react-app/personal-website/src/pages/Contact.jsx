import Helmet from "react-helmet"
import "./Contact.css"

function Contact() {
    return (
        <>
            <Helmet>
                <title>Robert Bray | Contact</title>
            </Helmet>
            <h2>Contact</h2>
            <form id="contact-form">
                <input placeholder="Full Name"></input>
                <br/>
                <input placeholder="Email"></input>
                <br/>
                <textarea placeholder="Nature of Inquiry"/>
                <br/>
            </form>
            <button type="submit" form="contact-form">Submit</button>
        </>
    );
}

export default Contact;