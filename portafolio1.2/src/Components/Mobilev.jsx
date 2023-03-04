import React from "react";

import Me from "../assets/photos/carlosNormal.jpeg";

import git from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import linkdin from '../assets/icons/linkdin.svg';
import email from '../assets/icons/email.svg'


export default function mobileV(){
    return(
        <div>
            <img src={Me} className="mobileCarlos"/>
            <h1 className="mHeader">Carlos Martinez</h1>
            <p className="mTxtWrap">Welcome to my personal portafolio page to see the complete version of this page please use a computer or tablet</p>
            <h3 className="mSHeader">Contact</h3>

            <div className="mIconWrap">
                <div className="social-iconM">
                    <a href="https://github.com/CarlosMtz1281" target="_blank"><img src={git} alt="" /></a>
                    <a href="https://www.linkedin.com/in/carlosmartinezrdz" target="_blank"><img src={linkdin} alt="" /></a>
                    <a href="https://www.instagram.com/carlos.mr.04/" target="_blank"><img src={instagram} alt="" /></a>
                    <a href="mailto:carlos.mtz@hotmail.com" target="_blank"><img src={email} alt="" /></a>

                </div>
              </div>


        </div>
    )
}