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

const rows1=[]
const rows2=[]
const rows3=[]

export default function App() {
    //jsonplaceholder
    const [users, setUsers] = React.useState([]);
    const urlJson= 'https://jsonplaceholder.typicode.com/users';

    React.useEffect(()=>{
        const fetchData = async ()=>{
            fetch(urlJson)
                .then(response => response.json())
                .then(json => setUsers(json))
            // const users_data = await axios(urlJson);
            // setUsers(users_data);

        };
        fetchData();
    },[setUsers])

    if(rows1.length===0){
        users.map(user=>rows1.push(createData(user.username,user.address.geo.lat,user.address.geo.lng)))
        users.map(user=>rows2.push(createData(user.username,user.name,user.email)))
        users.map(user=>rows3.push(createData(user.username,user.name,user.website)))
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event,newValue) => {
        setValue(newValue);
    };
  return (

      <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Table one" value="1" />
                      <Tab label="Table Two" value="2" />
                      <Tab label="Table Three" value="3" />
                  </TabList>
              </Box>
              <TabPanel value="1"> <Table rows={rows1} textI={['text','number','number']} labelI={['user name','address geo lat','address geo lng']}/></TabPanel>
              <TabPanel value="2">  <Table rows={rows2} textI={['text','text','text']} labelI={['user name','name','email']}/></TabPanel>
              <TabPanel value="3">  <Table rows={rows3} textI={['text','text','text']} labelI={['user name','name','website']}/></TabPanel>
          </TabContext>
      </Box>

  );
}
