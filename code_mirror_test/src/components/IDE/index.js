import React, { Component } from 'react'
import './style.css'
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'


class Ide extends Component{
  constructor() {
    super();
    this.state = {
      code: '// Code here'
    };
  }

  updateCode(newCode){
    this.setState({
      code: newCode,
    });
  }

  render(){
    let options = {
      mode: 'xml',
      lineNumbers: true,
    };
  return (
    <div className="Ide">
     <h2>IDE component</h2>
        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
    </div>
    );
  }
}

export default Ide;

 