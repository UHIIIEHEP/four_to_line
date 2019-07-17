import React from 'react';
import './ButtonRestart.scss';

class ButtonRestart extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  clickRestart = () => {
    this.props.restartGame(true);
  }

  render(){
    return (
      <button
        className='buttonRestart'
        onClick = {this.clickRestart}>
        Заново
      </button>
    );
  }
};

export default ButtonRestart;
