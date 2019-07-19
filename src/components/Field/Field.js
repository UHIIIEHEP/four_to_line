import React from 'react';
import Line from '../Line/Line';
import WhooWin from '../../logics/WhooWin.js';

class Field extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fieldSize: {
        height: 6,
        width: 7,
      },
      restarts: 'true'
    }
    this.componentsArray = new Array(this.state.fieldSize.width);
    this.componentsArray.fill([]);
  }

  returnFieldPlayers = (value) => {
    this.props.updatePlayersField(value, WhooWin(this.componentsArray));
  }

  getArr = (value, index) => {
    this.componentsArray[index] = value;
  }

  restartField = () => {
    this.componentsArray.forEach((elem, index)=>{      
    this.refs[`line-${index}`].restartLine();
    })
  }


  render(){
    return (
      <div className='field' rendered = {this.state.restarts}>
        {this.arrLine = this.componentsArray.map( (elem, index) => {
          return (
            <Line
              ref = {`line-${index}`}
              users = {this.props.users}
              size = {this.state.fieldSize.height}
              updatePlayers = {this.returnFieldPlayers}
              returnArr = {this.getArr}
              index = {index}
              key={index}/>
          );
        })}
      </div>
    );
  }
};

export default Field;
