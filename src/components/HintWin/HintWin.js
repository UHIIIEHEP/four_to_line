import React from 'react';
import './HintWin.scss';
import ButtonRestart from '../ButtonRestart/ButtonRestart';


class HintWin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  restartGameHint = (value)=> {
    this.props.restartGameHint(value);
  }

  render(){
    if(this.props.whooWin !== 'none'){
      if(this.props.whooWin === 'friends'){
        this.text = 'Победила ДРУЖБА'
      }else{
        this.text = `Победитель ${this.props.username[this.props.whooWin]}`
      }
    }
    return (
      <div
        className={`hintWin hintWin-${this.props.whooWin}`}>
        {
          this.text
        }

        <ButtonRestart
          restartGame = {this.restartGameHint}/>
      </div>
    );
  }
};

export default HintWin;
