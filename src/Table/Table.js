import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Speeddial from '../Speed_dial/Speed_dial'
import Forms from '../Forms/Forms'

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

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
                justifyContent:'center',
                alignItems: 'center'
            }}>
                <TableContainer component={Paper} sx={{
                    bgcolor: 'grey.700',
                    color:'grey,50',
                    width:'600px'
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
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
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
                           formsV={form}
                       />:null
                }

            </Box>
            <Speeddial
                clickOpen={formOpen}
                index={RowIndex}
            />
        </>
    );
}
