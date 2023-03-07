import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProyectCardM from "./ProjectCardM";

import data from "../assets/projects/projectsData";


export default function ProjectsM(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const cardMap = data.map(info =>{
        return(
            <ProyectCardM
            key={info.id}
            item ={info}

            />
        )
      })

      const CustomButtonGroup = ({ next, previous, ...rest }) => {
        return (
          <div className="customButtonGroup">
            <button className="customButton left" onClick={() => previous()} > &lt; </button>
            <button className="customButton right" onClick={() => next()} >&gt;</button>
          </div>
        );
      };


    return(
        <div>
            <h1 className="MSectionTittle3">Recent Projects</h1>
            <div className="MobileCarrousel">

            <section >

<div className="projectsWrapM">

{/*  Centrar contenedor con padding
*/}
    <div className="carouselContainer">
        <Carousel
        responsive={responsive}
        infinite={true}
        controls={false}
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside= {true}
        >
            {cardMap}
        </Carousel>

    </div>

</div>

</section>

            </div>


        </div>
    )
}