import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./botao.css"

export default function Botao(props){

   
    return(
        <Link className="botao"  to={`/${props.rota}`} ><Button>{props.children}</Button></Link>
    )
} 