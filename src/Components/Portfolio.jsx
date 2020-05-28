import React, { Component } from 'react'
import mongoimg from '../Components/public/image/mngodbimg.png'
import databasebimg from '../Components/public/image/database.jpg'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import reeact from '../Components/public/image/react.png'
import xnode from '../Components/public/image/node_express.jpg'
import jqry from '../Components/public/image/jquery.png'



class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Portfolio</h1>
                  <p>Please see my github page under contacts to find the link.  The technologies used there are listed below.</p>

                    <div id="skillheader" className="flex-project-container">
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={xnode} width="100" height="100" alt="js"/></div>
                    <div><img src={reeact} width="100" height="100" alt="html"/></div>  
                    <div><img src={jqry} width="100" height="100" alt="html"/></div>  
                    
            

                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


