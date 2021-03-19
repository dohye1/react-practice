import './App.css';
import TickerProvider from './TickerProvider';
import Stock from './components/Stock';

function App() {
  return (
    <div className='App'>
      <TickerProvider>
        <Stock />
      </TickerProvider>
    </div>
  );
}

export default App;
