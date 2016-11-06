import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import moves from './data/jiu-jitsu-v2.json';

class MoveView extends Component {
  findMarkdownFile(url) {
    // this is so error prone I can't even
    return Object.keys(moves)
      .map(key => moves[key][url])
      .filter(Boolean)[0].markdown;
  }
  render() {
    const { params } = this.props;
    const file = this.findMarkdownFile(params.moveUrl);

    return (
      <div>
        <ReactMarkdown source={require('raw!./' + file)} />
      </div>
    )
  }
}

export default MoveView;
