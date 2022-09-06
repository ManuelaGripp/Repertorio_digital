import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Musicas from "../../components/Musicas";
import Titulo from "../../components/Titulo";
import {api} from "../../service/api";

function Repertorio() {

    const [musicas, setMusicas] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        async function loadMusicas() {
            const reponse = await api.get(`/repertorio/${id}`)
                .then((reponse) => {
                    setMusicas(reponse.data.musicasNoRepertorio)
                    console.log(reponse.data.musicasNoRepertorio)
                })
                .catch(() => {
                    console.log("Repertorio não encontrado")
                    navigate("/", { replace: true });
                    return;
                })



        }

        loadMusicas();
    }, [id, navigate])




    return (

        <Box sx={{ display:'flex', flexDirection:'row', width:'100vw' }}  >
            <Header />
            <Box sx={{ pl: '10vw', pt:'5vw' }} >
                <Box sx={{ pl: '2vw' }}>
                    <Titulo>Minhas músicas</Titulo>
                </Box>
                <Musicas rprtr={musicas} />
            </Box>
        </Box>
    );
}

export default Repertorio;