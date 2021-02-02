import './App.css';
import Hello from './Hello'

function App() {
  return (
    <div className="App">
     <Hello helloTranslations={['Hola', 'Bonjour', 'Hello', 'Guten tag', 'Yasou', 'Shalom', 'Namaste']} />
    </div>
  );
}

export default App;
