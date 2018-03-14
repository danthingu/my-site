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
        this.handleNameContactChange = this.handleNameContactChange.bind(this);
        this.handleEmailContactChange = this.handleEmailContactChange.bind(this);
        this.handleSubjectContactChange = this.handleSubjectContactChange.bind(this);
        this.handleMessageContactChange = this.handleMessageContactChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameContactChange(event) {
        const target = event.target;
        const value = event.target.value;
        const nameContact = target.nameContact;
        
        this.setState({
            nameContact: value
        });
    }
    handleEmailContactChange(event) {
        const target = event.target;
        const value = event.target.value;
        const emailContact = target.emailContact;
        
        this.setState({
            emailContact: value
        });
    }
    handleSubjectContactChange(event) {
        const target = event.target;
        const value = event.target.value;
        const subjectContact = target.subjectContact;
        
        this.setState({
            subjectContact: value
        });
    }
    handleMessageContactChange(event) {
        const target = event.target;
        const value = event.target.value;
        const messageContact = target.messageContact;
        
        this.setState({
            messageContact: value
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
                            <input type="text" size="35" id="contactName" name="contactName" value={this.state.nameContact} onChange={this.handleNameContactChange}/>
                    </div>

                    <div>
                            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                            <input type="text" size="35" id="contactEmail" name="contactEmail" value={this.state.emailContact} onChange={this.handleEmailContactChange}/>
                    </div>

                    <div>
                            <label htmlFor="contactSubject">Subject</label>
                            <input type="text" size="35" id="contactSubject" name="contactSubject" value={this.state.subjectContact} onChange={this.handleSubjectContactChange}/>
                    </div>

                    <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.messageContact} onChange={this.handleMessageContactChange}></textarea>
                    </div>

               
                    </fieldset>
                    </form>

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