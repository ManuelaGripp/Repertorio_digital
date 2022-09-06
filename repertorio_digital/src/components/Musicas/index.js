import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";

  

function Musicas(props){

      

    return (
        <Box  sx = {{display:'flex', justifyContent:'center'}} >
        <TableContainer sx = {{ bgcolor:'primary.main',  width:"90%" }} component={Paper}>
          <Table sx={{ }} aria-label="simple table">
            <TableHead  >/
              <TableRow>
                <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">Id</TableCell>
                <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">Nome</TableCell>
                <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">Artista</TableCell>
                <TableCell sx = {{color: 'secondary.light', fontSize:20}}s align="center">Gênero</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rprtr.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx = {{color: 'secondary.light', fontSize:20, height:100}} align="center">{row.id}</TableCell>
                  <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">{row.nome}</TableCell>
                  <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">{row.artista}</TableCell>
                  <TableCell sx = {{color: 'secondary.light', fontSize:20}} align="center">{row.genero}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      );

}

export default Musicas;