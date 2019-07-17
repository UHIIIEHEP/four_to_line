import React from 'react';
import './App.css';
import Players from './components/Players/Players';
import Field from './components/Field/Field';
import HintWin from './components/HintWin/HintWin';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeFirstPlayer: true,
      whooWin: 'none',
    }
  }

  updatePlayers = (value, whoo) => {
    this.setState({activeFirstPlayer: value, whooWin: whoo});
  }

  restartGameApp = (value) => {
    console.log('Здесь должна быть перезагрузка :-(')
  }

  render(){
    return (
      <div className="App">
        <Players users = {this.state.activeFirstPlayer}/>
        <Field
          users = {this.state.activeFirstPlayer}
          updatePlayersField = {this.updatePlayers}/>
        <HintWin whooWin={this.state.whooWin} restartGameHint = {this.restartGameApp}/>
      </div>
    );
  }
}

export default App;
