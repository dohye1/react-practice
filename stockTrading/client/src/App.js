import './App.css';
import WebSocketProvider from './WebSocketProvider';
import Stock from './components/Stock';

function App() {
  return (
    <div className='App'>
      <WebSocketProvider>
        <Stock />
      </WebSocketProvider>
    </div>
  );
}

export default App;
