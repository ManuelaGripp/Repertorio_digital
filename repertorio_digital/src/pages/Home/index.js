import { Box } from '@mui/material';
import React from 'react';
import Botao from '../../components/Botao';
import Header from '../../components/Header';
import Item from '../../components/item';
import Titulo from '../../components/Titulo';

function Home() {

    return (

        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100vw'}} >
            <Header />
            <Box sx={{ pt: '5vw', width: '74vw' }}  >
                <Titulo>Meus repertórios</Titulo>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}  >
                    <Item />
                    <Box sx={{  }} >
                        <Botao rota = "add-repertorio">CRIAR NOVO REPERTÓRIO</Botao>
                        <Botao rota = "add-musica" >ADICIONAR NOVAS MÚSICAS</Botao>
                        <Botao rota = "musica-no-repertorio" >ADICIONAR MUSICAS NO REPERTÓRIO</Botao>
                    </Box>
                </Box>
            </Box>
        </Box>
    );

}

export default Home;