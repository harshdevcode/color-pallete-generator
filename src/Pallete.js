import React, {useState} from 'react'
import PalleteBox from './PalleteBox'
import './Pallete.css';

const Pallete = () => {
  const [reRendered, setReRendered] = useState(false);
  const handleNewPallete=() =>{
    setReRendered((prevReRendered) => !prevReRendered);
  }
  return (
    <div className="Palette">
      <h1>Palette Generator</h1>
      <PalleteBox reRendered={reRendered} />
      <button className="button-6" onClick={() =>handleNewPallete()}>Generate a new random palette</button>
    </div>
  )
}

export default Pallete