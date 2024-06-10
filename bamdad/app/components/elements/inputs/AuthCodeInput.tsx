import './style.css';

import React, { useRef, useState } from 'react';

import ReactCodeInput from 'react-code-input';

interface PropsItem{
  change:Function,
  value:string
}

const AuthCodeInput = ({change,value=''}:PropsItem) => {


  return (

    <ReactCodeInput
      type='number'
      value={value}
      //style={{flexDirection:"row", gap:".4rem" }}
      inputStyle={{ outline: "none", background: "var(--lightGray)", padding: "1rem", borderRadius: "15px", maxWidth: "70px" }}
      fields={5}
      name={''}
      inputMode={'numeric'}
      onChange={(data)=>change(data.toString())}
    />


  );
};

export default AuthCodeInput;