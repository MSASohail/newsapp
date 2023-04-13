// import React, { Component } from 'react'
import React from 'react'
import loading from './loading.png';
// export default class Spinner extends Component {
  // render() {
const Spinner=()=>{
    return (
      <div className='text-center my-3' >
        <img src={loading}  alt="........" />
        <h1>Scroll  down for News...</h1>
      </div>
    )
  }
  export default Spinner;
// }

