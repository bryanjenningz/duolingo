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
const arrowUpCircle = require('./arrowUpCircle.svg');
const dotCircle = require('./dotCircle.svg');
const volumeUp = require('./volumeUp.svg');
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
    className={`${minutes === 5 ? '' : 'border-top-gray'} checkbox btn`}
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
    <div className="text-dark-gray">{minutes} minutes a day</div>
  </div>
);

type Goal = 5 | 10 | 15 | 20;
type ChooseGoalState = { goal: Goal };

class ChooseGoal extends React.Component {
  state: ChooseGoalState = { goal: 10 };
  render() {
    const { goal } = this.state;
    return (
      <div className="full-screen bg-gray">
        <div className="top-bar">
          {isMobile() ? (
            <Link to="/choose-language">
              <img src={arrowLeftBlack} className="top-bar-back-button" />
            </Link>
          ) : (
            <div />
          )}
          <div className="text-bold">Pick a Daily Goal</div>
          <div />
        </div>
        <div className="main-container mt-5 d-flex flex-col space-between vh-90">
          <div>
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
          <Link
            to="/choose-path"
            className="btn btn-block bg-green text-white text-normal"
          >
            CONTINUE
          </Link>
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

const ChoosePath = () => (
  <div className="full-screen bg-gray">
    <div className="top-bar">
      {isMobile() ? (
        <Link to="/choose-goal">
          <img src={arrowLeftBlack} className="top-bar-back-button" />
        </Link>
      ) : (
        <div />
      )}
      <div className="text-bold">Choose a path</div>
      <div />
    </div>
    <div className="main-container mt-5 d-flex flex-col space-around align-center vh-90">
      <Link
        to="/question"
        className="flex-1 d-flex  btn w-100 text-normal text-black"
      >
        <img src={dotCircle} className="path-icon mr-2" />
        <div>
          <div className="text-bold">New to Chinese?</div>
          <div>Start at the basics</div>
        </div>
      </Link>
      <div className="flex-1 d-flex btn w-100 border-top-gray">
        <img src={arrowUpCircle} className="path-icon mr-2" />
        <div>
          <div className="text-bold">Already now some Chinese?</div>
          <div>Try this Placement Test</div>
        </div>
      </div>
    </div>
  </div>
);

type MultipleChoiceState = {
  selectedIndex: null | number;
  hasAnswered: boolean;
  correctAnswers: number;
  correctAnswersNeeded: number;
};
class MultipleChoice extends React.Component {
  state: MultipleChoiceState = {
    selectedIndex: null,
    hasAnswered: false,
    correctAnswers: 1,
    correctAnswersNeeded: 5
  };

  render() {
    const {
      selectedIndex,
      hasAnswered,
      correctAnswers,
      correctAnswersNeeded
    } = this.state;
    return (
      <div className="full-screen bg-gray">
        <div className="main-container">
          <div className="d-flex align-center space-around">
            <div className="gray-progress-x btn">✕</div>
            <div className="gray-progress-bar">
              <div
                className="bg-green green-progress-bar"
                style={{
                  width: `${correctAnswers / correctAnswersNeeded * 100}%`
                }}
              />
            </div>
          </div>
          <h2 className="text-center">What sound does this make?</h2>
          <div className="rounded-card">
            <img src={volumeUp} className="rounded-card-play-icon" />
            <div className="rounded-card-text">你好</div>
          </div>
          <div>
            {['ni2hao3', 'hao3', 'ni3'].map((text, i) => (
              <div
                key={i}
                className={
                  'btn-block multiple-choice-btn ' +
                  (selectedIndex === i ? 'selected' : '')
                }
                onClick={() => this.setState({ selectedIndex: i })}
              >
                <div className="multiple-choice-btn-circle">
                  <div className="circle" />
                </div>
                <div>{text}</div>
                <div />
              </div>
            ))}
          </div>
          <div
            className={`btn btn-block ${
              selectedIndex === null
                ? 'bg-dark-gray text-darker-gray'
                : 'bg-green text-white'
            }`}
            onClick={() => {
              if (typeof selectedIndex === 'number') {
                if (!hasAnswered) {
                  this.setState({ hasAnswered: true });
                }
              }
            }}
          >
            {hasAnswered ? 'CONTINUE' : 'CHECK'}
          </div>
          <div
            className={`solution-banner ${hasAnswered ? 'shown' : 'hidden'}`}
          >
            {selectedIndex === 0 ? 'You are correct' : 'You are wrong'}
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
    <Route exact={true} path="/choose-path" component={ChoosePath} />
    <Route exact={true} path="/question" component={MultipleChoice} />
  </div>
);

export default App;
