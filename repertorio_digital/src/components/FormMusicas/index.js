import React from "react";
import { useForm } from "react-hook-form";
import "../Form/formMusica.css"
import { Button, Paper } from "@mui/material";
import {api} from "../../service/api";
import { TextInput } from "../Form/InputText/inputs";

export default function FormMusicas() {

    let novaMusica = {
        nome: '',
        artista: '',
        genero: ''
    }

    let status = false;

    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {


        novaMusica.nome = data.nomeMusica
        novaMusica.artista = data.artista
        novaMusica.genero = data.genero

        console.log(novaMusica)

        api.post("musica", novaMusica)
            .then(reponse => {
                console.log(reponse.data)
                status = true
            })
            .catch(error => console.log(error))


    }

    return (


        <Paper sx={{ width: '50%', border: "1px solid #3B3C2F", bgcolor: '#FCE8A7' }} >
            <form id="formMusica"  >

                <TextInput
                    name={"nomeMusica"}
                    control={control}
                    label={"Nome da Musica"}
                />
                <TextInput
                    name={"artista"}
                    control={control}
                    label={"Artista"}
                />
                <TextInput
                    name={"genero"}
                    control={control}
                    label={"Gênero"}
                />
                {status && <p>Música adicionada com sucesso</p>}
                <Button onClick={handleSubmit(onSubmit)} sx={{ color: '#FCE8A7', height: 45 }} type="submit" variant="contained" >Adicionar novo repertório</Button>
            </form>
        </Paper >


    )
}