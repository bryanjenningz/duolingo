import * as React from 'react';
import './App.css';

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i);

type State = { slideIndex: number };

class App extends React.Component {
  state: State = { slideIndex: 0 };

  render() {
    const { slideIndex } = this.state;
    return (
      <div className="bg-blue text-white full-screen">
        <div className="main-container d-flex flex-col vh-100">
          <div className="flex-2 d-flex flex-col">
            <div className="flex-1 d-flex flex-col justify-end align-center">
              duolingo
            </div>
            <div className="flex-1 d-flex flex-col space-around align-center">
              <div>Free language education for the world.</div>
              <div className="d-flex">
                {range(4).map(i => (
                  <div
                    key={i}
                    className={`dot ${i === slideIndex ? 'big' : 'small'}`}
                  >
                    .
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 d-flex flex-col space-around align-center">
            <div>GET STARTED</div>
            <div>I ALREADY HAVE AN ACCOUNT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
