import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if (this.props.data) {
            var education = this.props.data.education.map(function(edu) {
                return <div key={edu.school}>
                        <h3>{edu.school}</h3>
                        <p className="info">{edu.degree} <span>&bull;</span><em className="date">{edu.graduated}</em></p>
                        <p>{edu.description}</p></div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                </div>
            })
            console.log("description: " + this.props.data.work.description);

            if (this.props.data.work.description) {
                console.log("description: " + this.props.data.work.description);
                var description = this.props.data.work.description.map(function(description){
                    return <li key={description.name}>{description.name}</li>
                })
            }
            var skills = this.props.data.skills.map(function(skills){
                var className = 'bar-expand '+skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width:skills.level}} className={className}></span><em>{skills.name}</em></li>
            })
        }
    
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {education}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Experiences</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                        <ul className="skills">
                            {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;