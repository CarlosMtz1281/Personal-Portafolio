import React from "react";

import { useState, useEffect } from "react";


import Me from "../assets/photos/carlosNormal.jpeg";


import git from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import linkdin from '../assets/icons/linkdin.svg';
import email from '../assets/icons/email.svg'

export default function BannerM(){

    const [loopNum, setLoopNum]= useState(0);
const [isDeleiting, setIsDeleting] = useState(false);
const toRotate = ["Fullstack Developer", "Web Dessigner", "Computer Engineer" ];
const [text, setText] = useState('');
// Time while tiping letters
const [delta, setDelta] = useState( 170 - Math.random()*100);
// Time between words
const period = 1500;

useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
    },delta)
    return() =>{clearInterval(ticker)};
},[text])

const tick= () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleiting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleiting){
        setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleiting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleiting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(170);
    }
}
    return(
        <div className="bannerM-wrap">

            <h1 className="mHeader">Carlos Martinez</h1>

            <div className="bannerSubContainer">
                <h2 className="bannerSubtittleM">{text}</h2>

            </div>

            <img src={Me} className="mobileCarlos"/>

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