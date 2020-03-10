import React from 'react';
// import logo from './logo.svg';
// import './App.css';   how u import css
import marked from 'marked';

marked.setOptions({
  breaks: true
})

const mark = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`\
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

<p>i did write text</p>

`

class App extends React.Component {

  state= {
    input: mark
  }
  Changed = (e) => {
    this.setState({
      input: e.target.value
    })
     
    
      
  }
  render(){
   
    return (
      <div style={div_}>
          <textarea style={text} id='editor'  onChange={this.Changed}>{this.state.input}</textarea>
          <pre id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.input)}}/>
        {/* <pre id='preview' width='300px' value={this.state.input}>{this.state.input}</pre> */}
         {/* <input id='preview' width='300px' type='text'/> */}
      </div>
      );
      
  }

}
const div_ = {
   display: 'grid',
   gridTemplateColumns: 'auto',
   gridTemplateRows: '1fr 2fr',
   padding: '15px'
}

const text = {
  width: '500px',
  margin: '40px'

  
}

export default App;
