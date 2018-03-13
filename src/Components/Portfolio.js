import React, { Component } from 'react';
import Popup from "reactjs-popup"

class Portfolio extends Component {
    render() {
        if (this.props.data) {
            
            var portfolio = this.props.data.projects.map(function(project) {
                var imageUrl = 'images/portfolio/' + project.image;
                console.log("title: " + project.title);
                return  <div key={project.title} className="columns portfolio-item">
                    <div className="item-wrap">
                            <a href={project.modal} title="">
                                <img alt="" src={imageUrl} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{project.title}</h5>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
            });
        }
        
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Here are the works that I have done</h1>
                        {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {portfolio}
                        </div> */}
                        <Popup
                            trigger={
                                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                    {portfolio}
                                </div> 
                            } modal closeOnDocumentClick>
                            <span> {this.props.data.projects.map(function(item) {
                                console.log("item: " + item.description)
                                return <div key={item.name}> 
                                        <span>{item.description}</span>
                                    </div>
                                
                            })} </span>
                        </Popup>
                    </div>
                </div>
            </section>
        )
    }
}



export default Portfolio;