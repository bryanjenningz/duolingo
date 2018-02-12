import * as React from 'react';
import './App.css';

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i);

type State = { slideIndex: number };

class App extends React.Component {
  state: State = { slideIndex: 0 };

  render() {
    const { slideIndex } = this.state;
    return (
      <div>
        <div>duolingo</div>
        <div>Free language education for the world.</div>
        <div className="dots">
          {range(4).map(i => (
            <div
              key={i}
              className={`dot ${i === slideIndex ? 'big' : 'small'}`}
            >
              .
            </div>
          ))}
        </div>
        <div>GET STARTED</div>
        <div>I ALREADY HAVE AN ACCOUNT</div>
      </div>
    );
  }
}

export default App;
