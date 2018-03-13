import React, {Component} from 'react';

class Contact extends Component {
    constructor() {
        super(); 
        this.state = {
            nameContact: '',
            emailContact: "",
            subjectContact: "",
            messageContact: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        const target = event.target;
        const value = event.target.value;
        console.log("target " + event.target);
        const nameContact = target.nameContact;
        console.log(nameContact);
        
        this.setState({
            nameContact: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({nameContact: ''});
    }
    render() {
        if(this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }
        return (
            <section id="contact">

            <div className="row section-head">

            <div className="two columns header-col">

                <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                    <p className="lead">{message}</p>
            </div>

            </div>

            <div className="row">
            <div className="eight columns">

                <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
                    <fieldset>

                    <div>
                            <label htmlFor="contactName">Name <span className="required">*</span></label>
                            <input type="text" size="35" id="contactName" name="contactName" value={this.state.nameContact} onChange={this.handleChange}/>
                    </div>

                    <div>
                            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                            <input type="text" size="35" id="contactEmail" name="contactEmail" value={this.state.emailContact} onChange={this.handleChange}/>
                    </div>

                    <div>
                            <label htmlFor="contactSubject">Subject</label>
                            <input type="text" size="35" id="contactSubject" name="contactSubject" value={this.state.subjectContact} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.messageContact} onChange={this.handleChange}></textarea>
                    </div>

                    <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                        </span>
                    </div>
                    </fieldset>
                    </form>

            <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                    <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
            </div>


            <aside className="four columns footer-widgets">
                <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            {name}<br />
                            {street} <br />
                            {city}, {state} {zip}<br />
                            <span>{phone}</span>
                        </p>
                    </div>
            </aside>
        </div>
        </section>
        )
    }
}

export default Contact;