import React from "react";

import Me from "../assets/photos/carlosNormal.jpeg"

import { Container,Row, Col} from "react-bootstrap";
import { useState, useEffect } from "react";

// IMport Paralax

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Banner(){

    const [loopNum, setLoopNum]= useState(0);
    const [isDeleiting, setIsDeleting] = useState(false);
    const toRotate = ["Fullstack Developer", "Web Dessigner", "Computer Engineer" ];
    const [text, setText] = useState('');
    // Time while tiping letters
    const [delta, setDelta] = useState( 300 - Math.random()*100);
    // Time between words
    const period = 1000;

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
            setDelta(500);
        }
    }


    return(

        <div>
        <div id= "home"></div>
        <section className="banner" id="home">

            <Parallax pages={1.44} style={{height: '80vh'}}>

                <ParallaxLayer
                sticky={{start:0 ,end:2}}
                >
                    <img className= "profilePhoto" src={Me}/>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.7}>
                    <div className="banner-text-wrap">
                         <h3 className="banner-greeting">Hello I'm</h3>
                         <h1 className="banner-tittle"> Carlos Martínez </h1>
                         <h2 className="banner-subtittle">{text}</h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.7} speed={1}>
                    <div className="banner-text-wrap">

                         <h1 className="banner-tittle"> About Me </h1>
                         <p className="banner-paragraph">I’m a Software Developer currently studying Computer Science at Tecnologíco de Monterrey, I’ve been passionate about technology for as long as I remember, I love participating on Hackathons and ICPC competitive coding tournaments where I can put my skills to the test and develop problem solving skills and complex programs. Recently participated on the “ICPC Gran Premio de Mexico 2022”, “HackMTY”, “Imperial college of London Hackathon” and had the opportunity to work as a full-time React developer during winter break for Proyecto 99, building their inscription system, they are education Non-profit Organization that gives free courses to vulnerable people to help their academic formation. </p>

                    </div>
                </ParallaxLayer>

            </Parallax>


        </section>

        </div>
    )
}