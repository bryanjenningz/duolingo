import * as React from 'react';
import './App.css';
const cloud = require('./cloud.svg');
const gamepad = require('./gamepad.svg');
const trophy = require('./trophy.svg');
const chartBar = require('./chartBar.svg');
const heart = require('./heart.svg');
const chartLine = require('./chartLine.svg');
const arrowLeft = require('./arrowLeft.svg');
const arrowLeftBlack = require('./arrowLeftBlack.svg');
const google = require('./google.svg');
const facebook = require('./facebook.svg');
const ReactSwipe = require('react-swipe');
import { Route, Link } from 'react-router-dom';

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i);

const isMobile = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

type State = { slideIndex: number };

class Home extends React.Component {
  state: State = { slideIndex: 0 };

  render() {
    const { slideIndex } = this.state;
    return (
      <div className="bg-blue text-white full-screen">
        <div className="main-container d-flex flex-col vh-100">
          <ReactSwipe
            className="flex-3"
            swipeOptions={{
              continuous: false,
              callback: (i: number) => this.setState({ slideIndex: i })
            }}
          >
            <div className="d-flex flex-col z-index-1 vh-60">
              <div className="flex-1 d-flex flex-col justify-end align-center text-xl text-bold">
                duolingo
              </div>
              <div className="flex-1 d-flex flex-col space-around align-center text-center">
                Free language education for the world.
              </div>
            </div>
            <div className="d-flex flex-col z-index-1 vh-60">
              <div className="flex-1 d-flex space-around align-end text-xl text-bold">
                <div className="icon-container bg-red">
                  <img src={gamepad} className="icon" />
                </div>
                <div className="icon-container bg-lime">
                  <img src={trophy} className="icon" />
                </div>
                <div className="icon-container bg-orange">
                  <img src={chartBar} className="icon" />
                </div>
              </div>
              <div className="flex-1 d-flex flex-col space-around align-center text-center">
                Learning, gamified. Advance by unlocking bite-sized skills.
              </div>
            </div>
            <div className="d-flex flex-col z-index-1 vh-60">
              <div className="flex-1 d-flex space-around align-end text-xl text-bold">
                <div className="icon-container bg-red">
                  <img src={heart} className="icon" />
                </div>
                <div className="icon-container bg-red">
                  <img src={heart} className="icon" />
                </div>
                <div className="icon-container bg-red">
                  <img src={heart} className="icon" />
                </div>
              </div>
              <div className="flex-1 d-flex flex-col space-around align-center text-center">
                Finish each lesson without losing your hearts.
              </div>
            </div>
            <div className="d-flex flex-col z-index-1 vh-60">
              <div className="flex-1 d-flex space-around align-end text-xl text-bold">
                <img src={chartLine} className="icon lg" />
              </div>
              <div className="flex-1 d-flex flex-col space-around align-center text-center">
                Earn achievements to track your progress in the language.
              </div>
            </div>
          </ReactSwipe>
          <div className="d-flex align-center justify-center z-index-1 vh-5">
            {isMobile()
              ? range(4).map(i => (
                  <div
                    key={i}
                    className={`dot mx-1 ${i === slideIndex ? 'lg' : 'sm'}`}
                  />
                ))
              : null}
          </div>
          <div className="flex-2 d-flex flex-col space-around align-center z-index-1">
            <Link
              to="/choose-language"
              className="btn btn-block bg-white text-blue text-normal"
            >
              GET STARTED
            </Link>
            <Link to="/login" className="btn btn-block text-white text-normal">
              I ALREADY HAVE AN ACCOUNT
            </Link>
            {/* extra div below for layout */}
            <div />
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

type CheckboxProps = {
  isChecked: boolean;
  text: string;
  minutes: Goal;
  onClick: () => void;
};

const Checkbox = ({ isChecked, text, minutes, onClick }: CheckboxProps) => (
  <div
    className={`${minutes === 5 ? '' : 'border-top-gray'} checkbox`}
    onClick={onClick}
  >
    <div className="d-flex align-center">
      <div
        className={`checkbox-circle-container ${isChecked ? 'selected' : ''}`}
      >
        <div className={`checkbox-circle ${isChecked ? 'selected' : ''}`} />
      </div>
      <div className="ml-1">{text}</div>
    </div>
    <div className="text-faded">{minutes} minutes a day</div>
  </div>
);

type Goal = 5 | 10 | 15 | 20;
type ChooseGoalState = { goal: Goal };

class ChooseGoal extends React.Component {
  state: ChooseGoalState = { goal: 10 };
  render() {
    const { goal } = this.state;
    return (
      <div>
        <div className="top-bar">
          {isMobile() ? (
            <Link to="/choose-language">
              <img src={arrowLeftBlack} className="top-bar-back-button" />
            </Link>
          ) : (
            <div />
          )}
          <div>Pick a Daily Goal</div>
          <div />
        </div>
        <div className="main-container mt-5">
          <Checkbox
            isChecked={goal === 5}
            text="Casual"
            minutes={5}
            onClick={() => this.setState({ goal: 5 })}
          />
          <Checkbox
            isChecked={goal === 10}
            text="Regular"
            minutes={10}
            onClick={() => this.setState({ goal: 10 })}
          />
          <Checkbox
            isChecked={goal === 15}
            text="Serious"
            minutes={15}
            onClick={() => this.setState({ goal: 15 })}
          />
          <Checkbox
            isChecked={goal === 20}
            text="Insane"
            minutes={20}
            onClick={() => this.setState({ goal: 20 })}
          />
        </div>
      </div>
    );
  }
}

const languages: { flag: string; language: string }[] = [
  { flag: '🇺🇸', language: 'English' },
  { flag: '🇫🇷', language: 'French' },
  { flag: '🇪🇸', language: 'Spanish' },
  { flag: '🇮🇹', language: 'Italian' },
  { flag: '🇷🇺', language: 'Russian' },
  { flag: '🇯🇵', language: 'Japanese' },
  { flag: '🇰🇷', language: 'Korean' },
  { flag: '🇩🇪', language: 'German' },
  { flag: '🇨🇳', language: 'Mandarin' },
  { flag: '🇧🇷', language: 'Portuguese' },
  { flag: '🇳🇱', language: 'Dutch' },
  { flag: '🇮🇪', language: 'Irish' },
  { flag: '🇩🇰', language: 'Danish' },
  { flag: '🇸🇪', language: 'Swedish' }
];

const ChooseLanguage = () => (
  <div>
    <div className="top-bar bg-blue text-white">
      {isMobile() ? (
        <Link to="/">
          <img src={arrowLeft} className="top-bar-back-button" />
        </Link>
      ) : (
        <div />
      )}
      <div>I want to learn...</div>
      <div />
    </div>
    <div className="mt-5 main-container">
      {languages.map(({ flag, language }) => (
        <Link
          to="/choose-goal"
          key={language}
          className="language-container text-normal text-black"
        >
          <div className="flag">{flag}</div>
          <div className="language">{language}</div>
        </Link>
      ))}
    </div>
  </div>
);

type LoginState = { email: string; password: string };

class Login extends React.Component {
  state: LoginState = { email: '', password: '' };

  render() {
    const { email, password } = this.state;
    return (
      <div className="full-screen bg-blue text-white">
        <div className="top-bar bg-blue text-white">
          {isMobile() ? (
            <Link to="/">
              <img src={arrowLeft} className="top-bar-back-button" />
            </Link>
          ) : (
            <div />
          )}
          <div>Sign In</div>
          <div />
        </div>
        <div className="main-container mt-5 bg-blue text-white">
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Username or email"
            className="input-block"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="Password"
            className="input-block border-top-gray mb-3"
          />
          <div className="btn btn-block border-white mb-3">SIGN IN</div>
          <div className="btn btn-block">FORGOT PASSWORD</div>
        </div>
        <div className="social-login-container">
          <div className="main-container">
            <div className="mb-1">One-tap Sign In</div>
            <div className="d-flex">
              <div className="btn btn-block bg-white text-black mr-1">
                <img src={google} className="btn-icon mr-2" />
                <div>GOOGLE</div>
              </div>

              <div className="btn btn-block bg-dark-blue ml-1">
                <img src={facebook} className="btn-icon mr-2" />
                <div>FACEBOOK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/choose-language" component={ChooseLanguage} />
    <Route exact={true} path="/choose-goal" component={ChooseGoal} />
  </div>
);

export default App;
