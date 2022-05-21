import logo from './logo.svg';
import './App.css';
import { AppProvider } from './Context';
import News from './News';

function App() {
  return (
   <>
     <AppProvider>
       <News/>
     </AppProvider>
   </>
  );
}

export default App;
