import React from 'react';
import './Players.scss';

class Players extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: ["Игрок-1", "Игрок-2"],
    }
  }

  render(){
    return (
      <div className='players'>
        <div className = {`players__player player player-0 player_${this.props.users ? 'active' : 'wait'}`}>{this.state.username[0]}</div>
        <div className = {`players__player player player-1 player_${!this.props.users ? 'active' : 'wait'}`}>{this.state.username[1]}</div>
      </div>
    );
  }
};

export default Players;
