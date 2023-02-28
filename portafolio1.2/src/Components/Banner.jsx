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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    {/* Image element on the banner */}
                    <Col xs={12} md={6} xl={7} className="align-items-center">
                        <img className= "profilePhoto" src={Me}/>
                    </Col>
                    {/* Text element of the banner */}
                    <Col xs={12} md={6} xl={5} className= "banner-text-container">
                        <div className="banner-text-wrap">
                            <h3 className="banner-greeting">Hello I'm</h3>
                            <h1 className="banner-tittle"> Carlos Martinez </h1>
                            <h2 className="banner-subtittle">{text}</h2>
                            <h2 className="banner-subtittle-spacer"></h2>

                            <p className="banner-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}