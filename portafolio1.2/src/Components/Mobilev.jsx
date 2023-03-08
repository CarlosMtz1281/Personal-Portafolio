import React from "react";





import { BarraM } from "./BarraM";
import BannerM from "./BannerM";
import AboutMeM from "./AboutMeM";
import SkillsM from "./SkillsM";
import ProjectsM from "./ProjectsM";
import FooterM from "./FooterM";

export default function mobileV(){
    return(
        <div className="mobileWrap">
            <BarraM/>
            <BannerM/>
            <AboutMeM/>
            <SkillsM/>
            <ProjectsM/>
            <FooterM/>




        </div>
    )
}