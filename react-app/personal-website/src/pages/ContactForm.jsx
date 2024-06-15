import React from "react";
import "./ContactForm.css"
import "../index.css"
import {useForm, ValidationError} from "@formspree/react";

class ContactForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            natureOfInquiry: ""
        };
        this.showValidationError = false;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log("name " + name + " new value " + value);

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        console.log("Attempting contact form submission.")
    }

    render(){
        return (
            <>
                <div class="contact-box">
                    <form id="contact-form" onSubmit={this.handleSubmit} action="https://formspree.io/f/xayrranl" method="post">
                        <input 
                            placeholder="Full Name" 
                            name="fullName"
                            value={this.state.fullName} 
                            onChange={this.handleChange}
                            required/>
                        <ValidationError field="fullName" prefix="Full Name" errors={this.state.errors}/>
                        <br/>
                        <input 
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={this.state.email} 
                            onChange={this.handleChange}
                            required/>
                        <ValidationError field="email" prefix="Email" errors={this.state.errors}/>
                        <br/>
                        <textarea 
                            placeholder="Nature of Inquiry"
                            name="natureOfInquiry"
                            value={this.state.natureOfInquiry} 
                            onChange={this.handleChange}
                            required/>
                        <ValidationError field="natureOfInquiry" prefix="Nature Of Inquiry" errors={this.state.errors}/>
                        <br/>
                    </form>
                    <button class="submit-button" type="submit" form="contact-form">Submit</button>
                </div>
            </>
        );
    }
}

export default ContactForm;