import { useState } from 'react';

export default function Test() {
  const [selectedTopping, setSelectedTopping] = useState('Medium');

  return (
    <div className="flex flex-col items-center">
      <input 
        type="radio" 
        name="topping" 
        value="Regular" 
        id="regular" 
        checked={selectedTopping === 'Regular'}
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="regular">Regular</label>

      <input 
        type="radio" 
        name="topping" 
        value="Medium" 
        id="medium" 
        checked={selectedTopping === 'Medium'}
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="medium">Medium</label>

      <input 
        type="radio" 
        name="topping" 
        value="Large" 
        id="large"
        checked={selectedTopping === 'Large'}
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="large">Large</label>
    </div>
  )
}