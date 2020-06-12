import React, { useState } from 'react';
import {Container, Button} from '@material-ui/core'
import Counter from './component/Counter'
import './App.css';

function App() {

  let [count, updateCount] = useState(0) // passing initial value in useState
  let [morning, updateMorning] = useState(false) // passing initial value in useState

  return (

    <Container className={` box  ${ morning? '' : 'night' } `}>
      <br/>
      <h2>Good {morning ? 'Morning' : 'Night'}</h2>

      <Counter counter={count} /> {/* New Component */}

      <Button variant="contained" color="primary" onClick={() => updateCount(count + 1)}>
        Counter
      </Button>
    <br/> <br/>
      <Button variant="contained" color="secondary" onClick = { () => updateMorning(!morning) }>
        { !morning? 'Morning' : 'Night' } Theme
      </Button>
    <br/><br/>
    </Container>
  );
}

export default App;
