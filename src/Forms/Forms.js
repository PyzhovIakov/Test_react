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
    if(props.row!==null){
        if(props.row.index!==formData.index){
            setFormData({
                F:false,
                name: props.row.name,
                calories:props.row.calories,
                fat:props.row.fat,
                index: props.row.index
            })
        }
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
                {
                    ['name', 'calories', 'fat'].map((input,index) => {
                        return(
                            <TextField
                                key={input+index}
                                required
                                InputLabelProps={{ shrink: true }}
                                type={props.typeI[index]}
                                label={props.labelI[index]}
                                id={input}
                                name={input}
                                value={formData[input]}
                                onChange={handleChange}
                            />)
                    })
                }
                {props.row!==null ?
                    <Button variant="text" onClick={()=>props.clicEdit(formData,formData.index)}>Edit</Button>
                    :<Button variant="text" onClick={()=>props.clicCreate(formData)}>Create</Button>}


            </Box>
            <Box sx={{
                backgroundColor:'#ccc',
                zIndex:600,
                position:'absolute',
                top:0,
                width: '100vw',
                height: '100vh',
                opacity:'80%'

            }} onClick={()=>props.clickClouseForm(false)}
            />
        </>
    )
}