import React from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>Book a Date</h3>
      <TextField
        id="date"
        label="Choose your date"
        type="date"
        defaultValue="2021-09-06"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default App;