

import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import ToggleCard from './components/ToggleCard';
import data from './data/data.json';
function App() {
  return (
    
    <div className='App'>
    <Table/>
    <ToggleCard/>
   
    
    </div>
  );
}

export default App;
// {data.map((data)=>
//   < Card  key ={data.id} english={data.english} transcription={data.transcription} translation ={data.russian}/>)}
