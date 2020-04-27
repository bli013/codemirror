import React from 'react'
import './style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'

require('../../node_modules/codemirror/mode/xml/xml')
require('../../node_modules/codemirror/mode/javascript/javascript')


function Ide () {
  return (
    <div className="Ide">
     <h2>IDE component</h2>
        <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
        />
    </div>
  );
}

export default Ide;

 