import React from 'react';
import './Line.scss';

class Line extends React.Component{
  constructor(props){
    super(props);
    let componentsLineArray = new Array(this.props.size);
    componentsLineArray.fill(0);
    this.state = {
      arrStatus: componentsLineArray,
      currentElement: 0,
      active: 'active'
    }
  }

  setStatus = () => {
    let index = [this.state.currentElement];
    let newArrStatus = this.state.arrStatus;
    let firstPlayer = this.props.users;
    if(index < this.props.size){
      newArrStatus[index] = firstPlayer ? 'u1' : 'u2';
      index++;
      this.setState({arrStatus: newArrStatus, currentElement: index})
      this.props.updatePlayers(!firstPlayer);
      if(index === this.props.size){
        this.setState({active: 'inactive'})
      }
    }
  }

  restartLine = () => {
    let componentsLineArray = new Array(this.props.size);
    componentsLineArray.fill(0);
    this.setState({arrStatus: componentsLineArray, currentElement: 0});
    this.setState({active: 'active'})
  }

  render(){
    this.firstElem = true;
      this.props.returnArr(this.state.arrStatus, this.props.index);
    return (
      <div className={`line ${this.state.active}`}
        onClick = {this.setStatus}>
        {
          this.state.arrStatus.map((elem, index) => {
            if (this.firstElem) {
              if (elem === 0 ) {
                elem = `active active-${this.props.users ? 'u1' : 'u2'}`;
                this.firstElem = false;
              }
            }
            return(
              <div
                className = {`point point_state-${elem}`}
                key={index}>
              </div>
            );
          })
        }
      </div>
    );
  }
};

export default Line;
