import React from 'react';
import './BlockInput.scss';

class BlockInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  onChange = (event) => {
    this.props.returnValue(event.target.value, this.props.ident);
  }

  render(){
    return (
      <div className='blockInput'>
        <label>{this.props.label}</label>
        <input onChange = {this.onChange}/>
      </div>
    );
  }
};

export default BlockInput;
