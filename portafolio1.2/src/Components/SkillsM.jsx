import React from "react";

import img from "../assets/icons/IconColage.png"

export default function SkillsM(){
    return(
        <div className="skillsMobile" >
            <h1 className="MSectionTittle2">My Skills</h1>
            <img className="skillsColage" src={img}/>
            <p className="skillsTxtM" id="projects">During the last few years, I’ve worked on several projects that have helped me develop my coding skills. I learned Python for problem solving algorithms, C++ to build smart object-oriented systems. I’ve thought myself the basics of web design, learned HTML 5, CSS and Java Script online. I also learned React online to work as a full-time developer for Proyecto 99.</p>
        </div>
   )
}