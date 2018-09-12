import * as React from 'react';
const CodeMirror = require('@skidding/react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class Editor extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    var options = {
      mode: 'markdown',
      theme: 'monokai',
    }
    return (
      <CodeMirror value={this.props.value} 
        options={options} height='100%'/>
    );
  }
}
export default Editor;