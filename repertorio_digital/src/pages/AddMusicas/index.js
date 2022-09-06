import { Box } from "@mui/system";
import React from "react";
import FormMusicas from "../../components/FormMusicas";
import Header from "../../components/Header"
import Titulo from "../../components/Titulo"



export default function AddMusicas() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100vw' }} >
            <Header />
            <Box sx={{ pl: '10vw', pt: '5vw' }}  >
                <Titulo>Nova Musica</Titulo>
                <Box>
                    <FormMusicas/>
                </Box>
            </Box>

        </Box>
    )


}