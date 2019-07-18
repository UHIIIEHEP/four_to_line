import React from 'react';
import './BlockParams.scss';
import BlockInput from '../BlockInput/BlockInput';

class BlockParams extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: {
      }
    }

  }

  inputValue = (value, ident) => {
    let resultObg = this.state.result;
    resultObg[ident] = value;
    this.setState({result: resultObg});
    this.props.objParams(this.state);
  }

  render(){
    return (
      <div className='blockParams'>
        <BlockInput ident='user1' label='Игрок 1' returnValue = {this.inputValue}/>
        <BlockInput ident='user2' label='Игрок 2' returnValue = {this.inputValue}/>
      </div>
    );
  }
};

export default BlockParams;
