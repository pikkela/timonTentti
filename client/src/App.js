import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer';
import EventContainer from './containers/EventContainer';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td><UserContainer/></td>
            <td><EventContainer/></td>
            <td></td>
          </tr>
        </thead>
      </table>
      
    </div>
  );
}

export default App;
