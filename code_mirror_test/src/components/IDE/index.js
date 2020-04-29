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
      code: '// Code here',
      mode: 'xml'
    };
  }

  componentDidMount(){
    this.setState({
      mode: 'xml'
    })
  }

  updateCode(newCode){
    this.setState({
      code: newCode,
    });
  }

  changeMode(e){
    var codeType = e.target.value;
    console.log(codeType);
    
    this.setState({
      mode: codeType
    })
  }

  render(){
    let options = {
      mode: this.state.mode,
      lineNumbers: true,
      autoCloseTags: true
    };
        
    const pCode = this.state.code;
  return (
    
    <div className="Ide">
     <h2>IDE for HTML</h2>
        <select onChange={this.changeMode.bind(this)} value={this.state.mode}>
          <option value="xml">HTML5</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>    
        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        <div dangerouslySetInnerHTML={{__html:pCode}}></div>
    </div>
    );
  }
}

export default Ide;

 