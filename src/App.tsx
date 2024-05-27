import Calander from './components/Calander';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <Calander SelectedDate={new Date()} /> 
  );
}

export default App;
