import React from 'react';
import './Players.scss';

class Players extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className='players'>
        <div className = {`players__player player player-0 player_${this.props.users ? 'active' : 'wait'}`}>{this.props.username.user1}</div>
        <div className = {`players__player player player-1 player_${!this.props.users ? 'active' : 'wait'}`}>{this.props.username.user2}</div>
      </div>
    );
  }
};

export default Players;
