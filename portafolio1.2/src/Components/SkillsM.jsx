import React from "react";

import img from "../assets/icons/IconColage.png"

export default function SkillsM(){
    return(
        <div className="skillsMobile" >
            <h1 className="MSectionTittle2">My Skills</h1>
            <img className="skillsColage" src={img}/>
            <p id="projects">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit quam ratione aut natus, sapiente non fugiat temporibus, iste pariatur architecto repudiandae maxime minus alias a delectus voluptates corporis tempore!</p>
        </div>
    )
}