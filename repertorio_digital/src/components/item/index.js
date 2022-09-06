import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import {api} from "../../service/api";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


function Item() {

    const [repertorios, setRepertorios] = useState([]);


    useEffect(() => {

        async function loadRepertorios() {
            const response = await api.get("repertorio")

            setRepertorios(response.data);
        }
        loadRepertorios();

    }, [])


    return (

        <>

            <Box sx = {{width:"50%"}} >
                
                    {
                        repertorios.map((repertorio) => {

                            return (
                                <Link key={repertorio.id} to={`/repertorio/${repertorio.id}`} style = {{textDecoration:'none'}} >
                                <Box sx = {{
                                    bgcolor:'#3B3C2F',
                                    
                                    height:150,
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    borderRadius:'10px',
                                    border:1,
                                    borderColor:'#3B3C2F',
                                    mb:'50px',
                                    
                                    
                                }} >
                                    <Typography sx = {{
                                        fontSize: 50,
                                        color:'#EBE1AB',
                                        fontFamily:'Galdeano'
                                    }}>
                                    {repertorio.nome}
                                    </Typography>

                                    <Typography sx = {{
                                        fontSize: 25,
                                        color:'#EBE1AB',
                                        fontFamily:'Galdeano'
                                    }}>
                                        Quantidade de músicas:
                                    {` ${repertorio.qtdMusicas}`}
                                    </Typography>
                                
                                </Box>
                                </Link>
                        )

                        })
                    }
                
            </Box>

        </>


    );

}

export default Item;