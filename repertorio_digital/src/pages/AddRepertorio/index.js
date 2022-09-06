import { Box } from "@mui/material";
import React from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Item from '../../components/item';
import Titulo from '../../components/Titulo';


export default function AddRepertorio(){

    return (

        <Box sx={{display:'flex', flexDirection:'row', width:'100vw'}} >
            <Header />
            <Box sx={{ pl: '10vw',pt:'5vw' }}  >
                <Titulo>Novo Repertório</Titulo>
                <Form/>
            </Box>

        </Box>
    );


}