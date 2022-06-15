import  * as  React from 'react';
import Table from'./Table/Table';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function createData(name, calories, fat) {
    return { name, calories, fat };
}
// let  loading=true
const urlJson= 'https://jsonplaceholder.typicode.com/users';



export default function App() {
    //jsonplaceholder
    const [tab1, setTab1] = React.useState([]);
    const [tab2, setTab2] = React.useState([]);
    const [tab3, setTab3] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            fetch(urlJson)
                .then(response => response.json())
                .then((json) => {
                    let rows1=[]
                    let rows2=[]
                    let rows3=[]

                    json.forEach((user) => {
                        rows1.push(createData(user.username,user.address.geo.lat,user.address.geo.lng))
                        rows2.push(createData(user.username,user.name,user.email))
                        rows3.push(createData(user.username,user.name,user.website))
                    })

                    setTab1(rows1)
                    setTab2(rows2)
                    setTab3(rows3)
                })
        })();
    }, []);

    const [value, setValue] = React.useState('1');
    const handleChange = (event,newValue) => {
        setValue(newValue);
    };
  return (

      <Box sx={{ width: '100vw', typography: 'body1' , p:0}}>
          <TabContext value={value} sx={{width:'100vw', p:0}}>
              <Box sx={{ width: '100vw', borderBottom: 1, borderColor: 'divider' , p:0}}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Table one" value="1" />
                      <Tab label="Table Two" value="2" />
                      <Tab label="Table Three" value="3" />
                  </TabList>
              </Box>
              <TabPanel value="1" sx={{ width: '100vw', p:0}}> <Table setTab={setTab1} rows={tab1} textI={['text','number','number']} labelI={['user name','address geo lat','address geo lng']}/></TabPanel>
              <TabPanel value="2" sx={{ width: '100vw', p:0}}> <Table setTab={setTab2} rows={tab2} textI={['text','text','email']} labelI={['user name','name','email']}/></TabPanel>
              <TabPanel value="3" sx={{ width: '100vw', p:0}}> <Table setTab={setTab3} rows={tab3} textI={['text','text','text']} labelI={['user name','name','website']}/></TabPanel>
          </TabContext>
      </Box>

  );
}
