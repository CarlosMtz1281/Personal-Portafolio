import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProyectCard from "./ProyectCard";

import data from "../assets/projects/projectsData";



export default function Projects(){
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
            <ProyectCard
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

          <div className="anchorTagProjects" id="projects">

          </div>
        <section >

            <div className="projectsWrap">
                <h1 className="pSectionTittle">Recent projects</h1>

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
    )
    // Mostrar los proyectos en banners verticales con una imagenes y la opcion de abrir un modal para mas informacion y generar un slider

    // Proyectos Para mostrar
    // P99 systema de inscripciones
    //Hackathon London
    //Atemoc --- Hack Mty
    // Html/CSS/JS -- dental web page
    //Python word procesing program
}