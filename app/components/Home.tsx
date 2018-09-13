import * as React from 'react';
import SplitPane from 'react-split-pane';
import Editor from './Editor';
const WebView = require('react-electron-web-view');
let styles = require('./Home.scss');
interface IState {
  markdownSrc?: string;
}
interface IProps {
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      markdownSrc: "# Hello World",
    }
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <SplitPane  split='vertical' defaultSize='50%'>
            <div className='editor-pane'>
              <Editor className='editor' value={this.state.markdownSrc}/>
            </div>
            <div className='web-pane'>
              <WebView src="https://www.github.com/" className="WebView"></WebView>
            </div>
          </SplitPane>
        </div>
      </div>
    );
  }
}
