
import Calender from './calender/calender';
import { useState } from 'react';
import { Sideleft } from './calender/sideleft'
import './App.css'
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className="Container">
      <Sideleft value={currentDate} />
      <Calender value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;
