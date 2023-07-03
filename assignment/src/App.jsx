import { List } from './Components/List';
import './App.css';
import { Item } from './Components/Item';
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const [id,setId]=useState(null)
  const [name,setName]=useState("product")
  const [price,setPrice]=useState(0)

  return (
    <div className="App">
      
      <Box display={"flex"} >
        <List setId={setId} setName={setName} setPrice={setPrice}/>
        <Item id={id} name={name} price={price}/>
      </Box>
    </div>
  );
}

export default App;
