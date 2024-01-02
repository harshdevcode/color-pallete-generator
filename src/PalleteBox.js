import React from 'react'
import ColorBox from './ColorBox';
import './PalleteBox.css';

const PalleteBox = () => {

  const randomKey= () =>{
    return '_' + Math.random().toString(36).substring(2,9);
  }

  // const colorBoxes = Array.from({ length: 5 }, (_, index) => (
  //   <ColorBox key={index} />
  // ));
  return <div className='PalleteBox'>{[...Array(5)].map(()=><ColorBox key={randomKey()}/>)}</div>;
}

export default PalleteBox