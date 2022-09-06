import React from "react";
import { Box } from '@mui/material';
import './header.css'
import Logo from '../../assets/violao.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Box sx={{width:'26vw'}} >
            <img src={Logo} className="fundo" alt="violao" />

            <Box className="container" >
                <ul>
                    <Link  to={"/"} ><li>MEUS REPERTÓRIOS</li></Link>
                    <Link  to={"/add-musica"} ><li>ADD NOVA MUSICA</li></Link>
                    <Link  to={"/add-repertorio"} ><li>ADD NOVO REPERTÓRIOS</li></Link>
                </ul>
            </Box>
        </Box>

    )
}