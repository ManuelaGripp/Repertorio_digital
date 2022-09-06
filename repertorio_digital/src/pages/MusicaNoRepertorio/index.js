import { Box, Checkbox, Typography } from "@mui/material";
import { getRepertorio } from "../../service/api"
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Titulo from '../../components/Titulo';



export default function MusicaNoRepertorio() {

    /* GET repertorios */
    const [repertorios, setRepertorios] = useState([])

    async function fetchRepertorio() {
        await getRepertorio()
            .then(setRepertorios)
    }

    useEffect(() => {
        fetchRepertorio()
    }, [])



    return (

        <Box sx={{ display: 'flex', flexDirection: 'row' }} >
            <Header />
            <Box sx={{ pt: '5vw' }}  >
                <Titulo>Adicionar músicas no repertório</Titulo>
                <Box>
                    {repertorios.map((repertorio) => {
                        return(
                            <Box key={repertorio.id} sx = {{display:'flex', flexDirection:'row', alignItems:'center' }} >
                                <Checkbox/><Typography sx = {{color:'black'}}  >{repertorio.nome}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box sx = {{width:'26vw'}} >

            </Box>

        </Box>
    );


}