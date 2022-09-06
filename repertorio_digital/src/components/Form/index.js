import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "./InputText/inputs"
import "./formMusica.css"
import { Button, Paper } from "@mui/material";
import {api} from "../../service/api.js";

export default function Form() {

    let novoRepertorio = {nome:''}





    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data) =>{

        novoRepertorio.nome = data.nomeRepertorio;    
        api.post("repertorio",novoRepertorio)
        .then(reponse => console.log(reponse.data) )
        .catch(error => console.log(error))
        
    } 

    return (


        <Paper sx={{ width: '50%', border:"1px solid #3B3C2F", bgcolor:'#FCE8A7' }} >
            <form id="formMusica"  >

                <TextInput
                    name={"nomeRepertorio"}
                    control={control}
                    label={"Nome do repertório"}
                />
                <Button onClick={handleSubmit(onSubmit)} sx={{ color: '#FCE8A7', height: 45 }} type="submit" variant="contained" >Adicionar novo repertório</Button>
            </form>
        </Paper >


    )
}