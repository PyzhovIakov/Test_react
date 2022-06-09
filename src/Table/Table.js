import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Speeddial from '../Speed_dial/Speed_dial'
import Forms from '../Forms/Forms'
import Pagination from "./Pagination/Pagination";

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
]

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
          setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [form, setForm] = React.useState(null);
    const formOpen = (F) => setForm(F);
    const [RowIndex, setRowIndex] = React.useState(null);
    const [RowName, setRowName] = React.useState(null);
    const [RowCalories, setRowCalories] = React.useState(null);
    const [RowFat, setRowFat] = React.useState(null);
    function ClickRow(event,row,index){
        if(form!==null){
            setRowName(row.name)
            setRowCalories(row.calories)
            setRowFat(row.fat)
            setRowIndex(index)
        }
    }
    function CreateRow(formData){
        if(formData.name!=="" && formData.calories!=="" && formData.fat!==""){
            rows.push(createData(formData.name, formData.calories, formData.fat))
            setForm(null)
            setRowName(null)
            setRowCalories(null)
            setRowFat(null)
            setRowIndex(null)
        }
    }
    function EditRow(formData,i){
        if(i>=0){
            if(formData.name!=="" && formData.calories!=="" && formData.fat!==""){
                rows[i] = createData(formData.name, formData.calories, formData.fat)
                setForm(null)
                setRowName(null)
                setRowCalories(null)
                setRowFat(null)
                setRowIndex(null)
            }
        }
    }
    function DeleteRow(i){
        if(i>=0){
            rows.splice(i,1)
            setForm(null)
            setRowName(null)
            setRowCalories(null)
            setRowFat(null)
            setRowIndex(null)
        }
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems: 'center',
                flexGrow:1
            }}>
                <TableContainer component={Paper} sx={{
                    bgcolor: 'grey.700',
                    color:'grey,50',
                    width:'600px',
                    zIndex:500
                }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableBody>
                            {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                            ).map((row,index) => {

                                return(
                                    <TableRow
                                        sx={{':hover':{color:'grey.700', bgcolor: 'grey.50'}}}
                                        key={index}
                                        onClick={(e)=>ClickRow(e,row,index)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} align="right">
                                            {row.calories}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} align="right">
                                            {row.fat}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                                <Pagination
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
            {
                (form!==null) ?
                    <Forms
                        name={RowName}
                        calories={RowCalories}
                        fat={RowFat}
                        index={RowIndex}
                        clicEdit={EditRow}
                        clicCreate={CreateRow}
                        clicDelete={DeleteRow}
                        clickClouseForm={formOpen}
                        formsV={form}
                    />:null
            }
            <Speeddial
                clickOpen={formOpen}
                index={RowIndex}
            />
        </>
    );
}