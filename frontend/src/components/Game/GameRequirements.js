import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(component, minimum, recommended) {
  return { component, minimum, recommended };
}

const rows = [
  createData('OS', 'Windows® 7 SP1/ Windows® 8.1 / Windows® 10 64-bit', 'Windows® 7 SP1/ Windows® 8.1 / Windows® 10 64-bit'),
  createData('Processor', ' Intel® Core™ i5-2500（3.3GHz and above）/ AMD FX™-6100 （3.3GHz and above）', 'Intel® Core™ i7-3770（3.4GHz and above）/ AMD FX™-8350（4.0 GHz and above）'),
  createData('Memory', '8GB', '16' ),
  createData('Graphics Card', 'NVIDIA® GeForce® GTX 760 / NVIDIA® GeForce® GTX 1050 / AMD Radeon™ R9 280', 'NVIDIA® GeForce® GTX 1060 6 GB VRAM / Radeon™ RX 480'),
  createData('DirectX', '11', '11'),
  createData('Storage', '100GB', '100GB'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{borderRadius: '15px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Component</h3></TableCell>
            <TableCell align="right"><h3>Minimum</h3></TableCell>
            <TableCell align="right"><h3>Recommended</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.component}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.component}
              </TableCell>
              <TableCell align="right">{row.minimum}</TableCell>
              <TableCell align="right">{row.recommended}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}