import React, { Component } from 'react'
import './style.css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'


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
      autoCloseTags: true
    };

    const pCode = this.state.code;
  return (
    
    <div className="Ide">
     <h2>IDE component</h2>
        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        <div dangerouslySetInnerHTML={{__html:pCode}}></div>
    </div>
    );
  }
}

export default Ide;

 