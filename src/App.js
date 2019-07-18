import React from 'react';
import './App.css';
import Players from './components/Players/Players';
import Field from './components/Field/Field';
import HintWin from './components/HintWin/HintWin';
import BlockParams from './components/BlockParams/BlockParams';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeFirstPlayer: true,
      whooWin: 'none',
      params: {
        user1: "Игрок 1",
        user2: "Игрок 2"
      }
    }
  }

  updatePlayers = (value, whoo) => {
    this.setState({activeFirstPlayer: value, whooWin: whoo});
  }

  restartGameApp = (value) => {
    console.log('Здесь должна быть перезагрузка :-(')
  }

  objParams = (value) => {
    let resultObj = {};
    resultObj['user1'] = value.result.user1 !== undefined ? value.result.user1 : this.state.params.user1;
    resultObj['user2'] = value.result.user2 !== undefined ? value.result.user2 : this.state.params.user2;

    this.setState({params: resultObj});
  }

  render(){
    return (
      <div className="App">
        <BlockParams objParams={this.objParams}/>
        <Players 
          users = {this.state.activeFirstPlayer}
          username = {this.state.params}/>
        <Field
          users = {this.state.activeFirstPlayer}
          updatePlayersField = {this.updatePlayers}/>
        <HintWin
          whooWin={this.state.whooWin}
          restartGameHint = {this.restartGameApp}
          username = {this.state.params}/>
      </div>
    );
  }
}

export default App;
