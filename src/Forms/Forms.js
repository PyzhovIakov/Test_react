import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Forms(props) {
    const [formData, setFormData] = React.useState(
        {
            F:true,
            name:"",
            calories:"",
            fat: ""
        }
    )
    if(props.name!==null && formData.F===true){
        setFormData({
            F:false,
            name: props.name,
            calories:props.calories,
            fat: props.fat
        })
    }
    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
    }

    return(
        <Box
            component="form"
            sx={{
                border: '1px solid grey',
                boxShadow: 8,
                m:10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                required
                InputLabelProps={{ shrink: true }}
                id="name"
                name="name"
                label="Required"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                required
                id="calories"
                label="Number"
                name="calories"
                type="number"
                onChange={handleChange}
                value={formData.calories}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                required
                id="fat"
                name="fat"
                label="Number"
                type="number"
                onChange={handleChange}
                value={formData.fat}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {
                 props.formsV==='Edit'
                     ?<Button variant="text" onClick={()=>props.clicEdit(formData,props.index)}>{props.formsV}</Button>
                     : <Button variant="text" onClick={()=>props.clicCreate(formData)}>{props.formsV}</Button>
            }

        </Box>
    )
}