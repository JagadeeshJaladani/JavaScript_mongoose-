// src/components/NormalFunctionComponent.js
import React from 'react';

function NormalFunctionComponent() {
  const handleClick = () => {
    alert('Button clicked from Normal Function Component!');
  };
  return (
    <div>
      <h2>Normal Function Component</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default NormalFunctionComponent;

// src/components/ArrowFunctionComponent.js
import React from 'react';

const ArrowFunctionComponent = () => {
  const handleClick = () => {
    alert('Button clicked from Arrow Function Component!');
  };
  return (
    <div>
      <h2>Arrow Function Component</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ArrowFunctionComponent;

// src/components/ClassComponent.js
import React, { Component } from 'react';

class ClassComponent extends Component {
  handleClick = () => {
    alert('Button clicked from Class Component!');
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassComponent;

// src/App.js
import React from 'react';
import NormalFunctionComponent from './components/NormalFunctionComponent';
import ArrowFunctionComponent from './components/ArrowFunctionComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div>
      <h1>React Components</h1>
      <NormalFunctionComponent />
      <ArrowFunctionComponent />
      <ClassComponent />
    </div>
  );
}

export default App;

