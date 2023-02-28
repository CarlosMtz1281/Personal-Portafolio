
import React from "react";



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//import img from "../assets/projects/uplink.png"

// <img src="projects/uplink.png" className="pFoto"/>

// Style del modal

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '70vh',
    bgcolor: 'text.primary',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ProyectCard(props){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="projectItem">

        <img src={("projects/"+ props.item.image)} className="pFoto"/>


        <div className="proyectsTxtWrap">
            <h3>{props.item.tittle}</h3>
            <h5 className="pLangTag">{props.item.langTag}</h5>
            <p className="pDescription">{props.item.description}</p>

            </div>


    </div>



    )

}