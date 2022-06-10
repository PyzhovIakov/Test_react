import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Forms(props) {

    const [formData, setFormData] = React.useState(
        {
            index:-2,
            F:true,
            name:"",
            calories:"",
            fat: ""
        }
    )
    if(props.name!==null  && props.index!==formData.index){
        setFormData({
            F:false,
            name: props.name,
            calories:props.calories,
            fat: props.fat,
            index: props.index
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
        <>

            <Box
                component="form"
                sx={{
                    backgroundColor: 'background.default',
                    zIndex:800,
                    border: '1px solid grey',
                    boxShadow: 8,
                    m:1,
                    position:'absolute',
                    top:'20%',
                    left:'42%',
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
                    type={props.typeI[0]}
                    label={props.labelI[0]}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="calories"
                    name="calories"
                    type={props.typeI[1]}
                    label={props.labelI[1]}
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
                    type={props.typeI[2]}
                    label={props.labelI[2]}
                    onChange={handleChange}
                    value={formData.fat}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {props.formsV==='Edit' ?<Button variant="text" onClick={()=>props.clicEdit(formData,formData.index)}>{props.formsV}</Button> :null}
                {props.formsV==='Create' ? <Button variant="text" onClick={()=>props.clicCreate(formData)}>{props.formsV}</Button>:null}


            </Box>
            <Box sx={{
                backgroundColor:'#ccc',
                zIndex:600,
                position:'absolute',
                top:0,
                width: '100vw',
                height: '100vh',
                opacity:'80%'

            }} onClick={()=>props.clickClouseForm(null)}
            />
        </>
    )
}