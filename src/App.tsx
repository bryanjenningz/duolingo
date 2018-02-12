import * as React from 'react';
import './App.css';
const cloud = require('./cloud.svg');

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i);

type State = { slideIndex: number };

class App extends React.Component {
  state: State = { slideIndex: 0 };

  render() {
    const { slideIndex } = this.state;
    return (
      <div className="bg-blue text-white full-screen">
        <div className="main-container d-flex flex-col vh-100">
          <div className="flex-2 d-flex flex-col z-index-1">
            <div className="flex-1 d-flex flex-col justify-end align-center text-xl text-bold">
              duolingo
            </div>
            <div className="flex-1 d-flex flex-col space-around align-center">
              <div>Free language education for the world.</div>
              <div className="d-flex align-center">
                {range(4).map(i => (
                  <div
                    key={i}
                    className={`dot mx-1 ${i === slideIndex ? 'lg' : 'sm'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 d-flex flex-col space-around align-center z-index-1">
            <div className="btn btn-block bg-white text-blue">GET STARTED</div>
            <div className="btn">I ALREADY HAVE AN ACCOUNT</div>
          </div>
        </div>
        <div>
          <img
            src={cloud}
            className="cloud"
            style={{ top: 0, animationDelay: '10s' }}
          />
          <img
            src={cloud}
            className="cloud"
            style={{ top: '30vh', animationDelay: '20s' }}
          />
          <img src={cloud} className="cloud" style={{ top: '60vh' }} />
        </div>
      </div>
    );
  }
}

export default App;
