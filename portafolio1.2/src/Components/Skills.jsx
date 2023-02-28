import React from "react";

/* Import icons */

import pyI from "../assets/icons/pyI.png"
import cI from "../assets/icons/c++I.svg.png"
import htmlI from "../assets/icons/htmlI.svg.png"
import cssI from "../assets/icons/cssI.svg.png"
import jsI from "../assets/icons/jsI.png"
import reactI from "../assets/icons/reactI.svg.png"

export default function Skills(){
    return(
        <div>

        <div className="anchorTagSkills" id="skills">

        </div>

        <div className="skills-container" >
            <h1 className="skills-tittle">My Skills</h1>

            <p className="skillsParragraph">Throughout my classes, extracurricular Coding competitions and classes I’ve come to develop several programing skills; During courses and ICPC’s tournaments I’ve practiced solving and optimizing complex problems using data structures mainly with Python and in some cases C++. During my free Time and as a side-hustle I Learned the basics of Web Development using HTML, CSS and Java Script. For hackathons on the other hand, I’ve practiced a wider set of skills using a couple of frameworks to develop the frontend side of apps like React Native and Kivy.  I’ve also got the opportunity to work on a web app as a full-time developer for an education social project, during this time I learned how to use React To build functional Web Apps incorporating non-relational servers for the data base</p>

            <div className="iconContainer">
                <img className="lanIcon" src={pyI}/>
                <img className="lanIcon" src={cI}/>
                <img className="lanIcon" src={htmlI}/>
                <img className="lanIcon" src={cssI}/>
                <img className="lanIcon" src={jsI}/>
                <img className="lanIcon" src={reactI}/>

            </div>
        </div>

        </div>
    )
}

/* STASH

 <div className="skills-grid-container">

                <div className="skills-grid-item">
                    <h3 className="skills-subTittle">Web Development</h3>
                </div>
                <div className="skills-grid-item">
                     <h3 className="skills-subTittle">Object Oriented Programing</h3>
                </div>
                <div className="skills-grid-item">
                    <h3 className="skills-subTittle">Data Structures and Algorithms</h3>
                </div>

            </div>

*/


/* Skills contains. perregraph explaining expertice

icons of languages and frameworks
*/