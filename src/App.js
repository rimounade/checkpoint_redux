
import './App.css';
import AddCard from './Components/AddCard';
import ListCard from './Components/ListCards';

function App() {
  return (
    <div className="App">
       <img src='https://office-lernen.com/wp-content/media/to-do-740x414.png' alt='not found'/>
      <ListCard/>
      <br/>
      <br/>
      <AddCard/>
    </div>
  );
}

export default App;
