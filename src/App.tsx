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
const volumeUpWhite = require('./volumeUpWhite.svg');
const fire = require('./fire.svg');
const ni2hao3 = require('./ni2hao3.m4a');
const hao3 = require('./hao3.m4a');
const zai4 = require('./zai4.m4a');
const jian4 = require('./jian4.m4a');
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
        to="/question/1"
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

const Modal = ({
  isShown,
  hideModal
}: {
  isShown: boolean;
  hideModal: () => void;
}) => (
  <div className={`full-screen ${isShown ? 'modal-shown' : 'modal-hidden'}`}>
    <div className="modal-backdrop" onClick={hideModal} />
    <div
      className="modal-container"
      onClick={e => {
        if (e.target === e.currentTarget) {
          hideModal();
        }
      }}
    >
      <div className="modal">
        <h2 className="text-bold">Are you sure about that?</h2>
        <div className="mb-3">All progress in this lesson will be lost.</div>
        <div className="w-100 d-flex justify-end">
          <div className="mr-2 btn" onClick={hideModal}>
            CANCEL
          </div>
          <Link to="/choose-path" className="mr-2 btn text-normal text-black">
            QUIT
          </Link>
        </div>
      </div>
    </div>
  </div>
);
type QuestionType = 'CHARACTER_TO_PRONUNCIATION' | 'PRONUNCIATION_TO_CHARACTER';
type MultipleChoiceProps = {
  questionType: QuestionType;
  question: string;
  answers: string[];
  correctIndex: number;
  correctAnswers: number;
  correctAnswersNeeded: number;
  answerCorrectly: () => void;
  answerIncorrectly: () => void;
  continueToNext: () => void;
};
type MultipleChoiceState = {
  selectedIndex: null | number;
  hasAnswered: boolean;
  isModalShown: boolean;
};
class MultipleChoice extends React.Component {
  props: MultipleChoiceProps;
  state: MultipleChoiceState = {
    selectedIndex: null,
    hasAnswered: false,
    isModalShown: false
  };

  render() {
    const { selectedIndex, hasAnswered, isModalShown } = this.state;
    const {
      questionType,
      question,
      answers,
      correctIndex,
      correctAnswers,
      correctAnswersNeeded,
      answerCorrectly,
      answerIncorrectly,
      continueToNext
    } = this.props;
    return (
      <div className="full-screen bg-gray">
        <div className="main-container">
          <div className="d-flex align-center space-around">
            <div
              className="gray-progress-x btn"
              onClick={() => this.setState({ isModalShown: true })}
            >
              ✕
            </div>
            <div className="gray-progress-bar">
              <div
                className="bg-green green-progress-bar"
                style={{
                  width: `${correctAnswers / correctAnswersNeeded * 100}%`
                }}
              />
            </div>
          </div>
          <h2 className="text-center">
            {questionType === 'CHARACTER_TO_PRONUNCIATION'
              ? 'What sound does this make?'
              : questionType === 'PRONUNCIATION_TO_CHARACTER'
                ? `Select the correct character(s) for "${question}"`
                : ''}
          </h2>
          {questionType === 'CHARACTER_TO_PRONUNCIATION' ? (
            <div>
              <div className="rounded-card">
                <img src={volumeUp} className="rounded-card-play-icon" />
                <div className="rounded-card-text">{question}</div>
              </div>
              <div>
                {answers.map((text, i) => (
                  <div
                    key={i}
                    className={
                      'btn-block multiple-choice-btn ' +
                      (selectedIndex === i ? 'selected' : '')
                    }
                    onClick={() => {
                      if (!hasAnswered) {
                        this.setState({ selectedIndex: i });
                      }
                    }}
                  >
                    <div className="multiple-choice-btn-circle">
                      <div className="circle" />
                    </div>
                    <div>{text}</div>
                    <div />
                  </div>
                ))}
              </div>
            </div>
          ) : questionType === 'PRONUNCIATION_TO_CHARACTER' ? (
            <div className="answer-card-container">
              {answers.map((text, i) => (
                <div
                  key={i}
                  className="answer-card-inner-container"
                  onClick={() => {
                    if (!hasAnswered) {
                      this.setState({ selectedIndex: i });
                    }
                  }}
                >
                  <div
                    className={`answer-card ${
                      selectedIndex === i ? 'selected' : ''
                    }`}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          <div
            className={`btn btn-block ${
              selectedIndex === null
                ? 'bg-dark-gray text-darker-gray'
                : 'bg-green text-white'
            }`}
            onClick={() => {
              if (typeof selectedIndex === 'number') {
                if (hasAnswered) {
                  if (correctAnswers < correctAnswersNeeded) {
                    this.setState(
                      { selectedIndex: null, hasAnswered: false },
                      continueToNext
                    );
                  } else {
                    window.location.hash = '/lesson-complete';
                  }
                } else {
                  this.setState(
                    { hasAnswered: true },
                    selectedIndex === correctIndex
                      ? answerCorrectly
                      : answerIncorrectly
                  );
                }
              }
            }}
          >
            {hasAnswered ? 'CONTINUE' : 'CHECK'}
          </div>
          <div
            className={`solution-banner ${
              selectedIndex === correctIndex ? 'correct' : 'incorrect'
            } ${hasAnswered ? 'shown' : 'hidden'}`}
          >
            <div>
              {selectedIndex === correctIndex
                ? 'You are correct'
                : `Oops, that's not correct.`}
            </div>
            {selectedIndex === correctIndex ? null : (
              <div className="correct-solution">{answers[correctIndex]}</div>
            )}
          </div>
        </div>
        <Modal
          isShown={isModalShown}
          hideModal={() => this.setState({ isModalShown: false })}
        />
      </div>
    );
  }
}

class TapPairs extends React.Component {
  props: {
    pairs: string[];
    correctPairs: [string, string][];
    correctAnswers: number;
    correctAnswersNeeded: number;
    answerCorrectly: () => void;
    continueToNext: () => void;
  };

  state: {
    isModalShown: boolean;
    selectedIndex: null | number;
    unmatchedPairs: number[];
  } = {
    isModalShown: false,
    selectedIndex: null,
    unmatchedPairs: Array.from({ length: this.props.pairs.length }, (_, i) => i)
  };

  render() {
    const {
      pairs,
      correctPairs,
      correctAnswers,
      correctAnswersNeeded,
      answerCorrectly,
      continueToNext
    } = this.props;
    const { isModalShown, selectedIndex, unmatchedPairs } = this.state;
    return (
      <div className="full-screen bg-gray">
        <div className="main-container">
          <div className="d-flex align-center space-around">
            <div
              className="gray-progress-x btn"
              onClick={() => this.setState({ isModalShown: true })}
            >
              ✕
            </div>
            <div className="gray-progress-bar">
              <div
                className="bg-green green-progress-bar"
                style={{
                  width: `${correctAnswers / correctAnswersNeeded * 100}%`
                }}
              />
            </div>
          </div>
          <h2 className="text-center">Tap the pairs</h2>
          <div className="block-container">
            {pairs.map((block, i) => (
              <div
                key={i}
                className={`block ${selectedIndex === i ? 'selected' : ''} ${
                  unmatchedPairs.indexOf(i) >= 0 ? '' : 'faded'
                }`}
                onClick={() => {
                  if (typeof selectedIndex === 'number') {
                    if (i === selectedIndex) {
                      this.setState({ selectedIndex: null });
                    } else if (unmatchedPairs.indexOf(i) >= 0) {
                      const first = pairs[selectedIndex];
                      const second = pairs[i];
                      const isCorrectPair = correctPairs.some(
                        ([a, b]) =>
                          (a === first && b === second) ||
                          (b === first && a === second)
                      );
                      if (isCorrectPair) {
                        this.setState(
                          {
                            selectedIndex: null,
                            unmatchedPairs: unmatchedPairs.filter(
                              index => index !== i && index !== selectedIndex
                            )
                          },
                          () => {
                            if (this.state.unmatchedPairs.length === 0) {
                              answerCorrectly();
                            }
                          }
                        );
                      } else {
                        this.setState({ selectedIndex: null });
                      }
                    }
                  } else if (unmatchedPairs.indexOf(i) >= 0) {
                    this.setState({ selectedIndex: i });
                  }
                }}
              >
                {block}
              </div>
            ))}
          </div>
          <div
            className={`btn btn-block ${
              unmatchedPairs.length > 0
                ? 'bg-dark-gray text-darker-gray'
                : 'bg-green text-white'
            }`}
            onClick={() => {
              if (
                unmatchedPairs.length === 0 &&
                correctAnswers < correctAnswersNeeded
              ) {
                continueToNext();
              } else {
                window.location.hash = '/lesson-complete';
              }
            }}
          >
            {unmatchedPairs.length === 0 ? 'CONTINUE' : 'CHECK'}
          </div>
          <div
            className={`solution-banner correct ${
              unmatchedPairs.length === 0 ? 'shown' : 'hidden'
            }`}
          >
            You are correct
          </div>
        </div>
        <Modal
          isShown={isModalShown}
          hideModal={() => this.setState({ isModalShown: false })}
        />
      </div>
    );
  }
}

class SoundToPronunciation extends React.Component {
  props: {
    sound: string;
    answers: string[];
    correctIndex: number;
    correctAnswers: number;
    correctAnswersNeeded: number;
    answerCorrectly: () => void;
    answerIncorrectly: () => void;
    continueToNext: () => void;
  };

  state: {
    isModalShown: boolean;
    selectedIndex: null | number;
    hasAnswered: boolean;
  } = {
    isModalShown: false,
    selectedIndex: null,
    hasAnswered: false
  };

  componentDidMount() {
    new Audio(this.props.sound).play();
  }

  render() {
    const { selectedIndex, hasAnswered, isModalShown } = this.state;
    const {
      sound,
      correctAnswers,
      correctAnswersNeeded,
      answers,
      continueToNext,
      correctIndex,
      answerCorrectly,
      answerIncorrectly
    } = this.props;
    return (
      <div className="full-screen bg-gray">
        <div className="main-container">
          <div className="d-flex align-center space-around">
            <div
              className="gray-progress-x btn"
              onClick={() => this.setState({ isModalShown: true })}
            >
              ✕
            </div>
            <div className="gray-progress-bar">
              <div
                className="bg-green green-progress-bar"
                style={{
                  width: `${correctAnswers / correctAnswersNeeded * 100}%`
                }}
              />
            </div>
          </div>
          <h2 className="text-center">Select what you hear</h2>
          <div className="sound-btn" onClick={() => new Audio(sound).play()}>
            <img src={volumeUpWhite} />
          </div>
          <div className="answer-card-container">
            {answers.map((answer, i) => (
              <div key={i} className="answer-card-inner-container">
                <div
                  className={`answer-card sound-card ${
                    selectedIndex === i ? 'selected' : ''
                  }`}
                  onClick={() => {
                    this.setState({ selectedIndex: i });
                  }}
                >
                  {answer}
                </div>
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
                if (hasAnswered) {
                  if (correctAnswers < correctAnswersNeeded) {
                    this.setState(
                      { selectedIndex: null, hasAnswered: false },
                      continueToNext
                    );
                  } else {
                    window.location.hash = '/lesson-complete';
                  }
                } else {
                  this.setState(
                    { hasAnswered: true },
                    selectedIndex === correctIndex
                      ? answerCorrectly
                      : answerIncorrectly
                  );
                }
              }
            }}
          >
            {hasAnswered ? 'CONTINUE' : 'CHECK'}
          </div>
          <div
            className={`solution-banner ${
              selectedIndex === correctIndex ? 'correct' : 'incorrect'
            } ${hasAnswered ? 'shown' : 'hidden'}`}
          >
            <div>
              {selectedIndex === correctIndex
                ? 'You are correct'
                : `Oops, that's not correct.`}
            </div>
            {selectedIndex === correctIndex ? null : (
              <div className="correct-solution">{answers[correctIndex]}</div>
            )}
          </div>
        </div>
        <Modal
          isShown={isModalShown}
          hideModal={() => this.setState({ isModalShown: false })}
        />
      </div>
    );
  }
}

class TranslateSentence extends React.Component {
  props: {
    sentence: string;
    correctTranslations: string[];
    correctAnswers: number;
    correctAnswersNeeded: number;
    answerCorrectly: () => void;
    answerIncorrectly: () => void;
    continueToNext: () => void;
  };

  state: {
    isModalShown: boolean;
    hasAnswered: boolean;
    translation: string;
  } = {
    isModalShown: false,
    hasAnswered: false,
    translation: ''
  };

  render() {
    const { hasAnswered, isModalShown, translation } = this.state;
    const {
      sentence,
      correctTranslations,
      correctAnswers,
      correctAnswersNeeded,
      continueToNext,
      answerCorrectly,
      answerIncorrectly
    } = this.props;
    return (
      <div className="full-screen bg-gray">
        <div className="main-container">
          <div className="d-flex align-center space-around">
            <div
              className="gray-progress-x btn"
              onClick={() => this.setState({ isModalShown: true })}
            >
              ✕
            </div>
            <div className="gray-progress-bar">
              <div
                className="bg-green green-progress-bar"
                style={{
                  width: `${correctAnswers / correctAnswersNeeded * 100}%`
                }}
              />
            </div>
          </div>
          <h2 className="text-center">Translate this sentence</h2>
          <div className="text-center">{sentence}</div>
          <textarea
            className="translation-textbox"
            placeholder="Type the translation"
            value={translation}
            onChange={e => this.setState({ translation: e.target.value })}
          />
          <div
            className={`btn btn-block ${
              translation.length === 0
                ? 'bg-dark-gray text-darker-gray'
                : 'bg-green text-white'
            }`}
            onClick={() => {
              if (translation.length > 0) {
                if (hasAnswered) {
                  if (correctAnswers < correctAnswersNeeded) {
                    this.setState(
                      { selectedIndex: null, hasAnswered: false },
                      continueToNext
                    );
                  } else {
                    window.location.hash = '/lesson-complete';
                  }
                } else {
                  this.setState(
                    { hasAnswered: true },
                    correctTranslations.indexOf(translation) >= 0
                      ? answerCorrectly
                      : answerIncorrectly
                  );
                }
              }
            }}
          >
            {hasAnswered ? 'CONTINUE' : 'CHECK'}
          </div>
          <div
            className={`solution-banner ${
              correctTranslations.indexOf(translation) >= 0
                ? 'correct'
                : 'incorrect'
            } ${hasAnswered ? 'shown' : 'hidden'}`}
          >
            <div>
              {correctTranslations.indexOf(translation) >= 0
                ? 'You are correct'
                : `Oops, that's not correct.`}
            </div>
            {correctTranslations.indexOf(translation) >= 0 ? null : (
              <div className="correct-solution">{correctTranslations[0]}</div>
            )}
          </div>
        </div>
        <Modal
          isShown={isModalShown}
          hideModal={() => this.setState({ isModalShown: false })}
        />
      </div>
    );
  }
}

const LessonComplete = ({ streak = 1 }: { streak: number }) => (
  <div className="full-screen bg-gray">
    <div className="main-container text-center">
      <h2>Lesson Complete! +10 XP</h2>
      <h3 className="text-orange">Combo Bonus! +5 XP</h3>
      <div className="d-flex justify-center align-center mb-3">
        <div className="progress-circle big">
          <div className="progress-circle-inner">
            <img src={fire} className="icon" />
          </div>
        </div>
      </div>
      <div className="text-orange">{streak} day streak</div>
      <div className="d-flex my-3 space-around">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div
            key={i}
            className="progress-circle"
            style={{ background: i + streak >= 7 ? '' : '#ccc' }}
          >
            <div className="progress-circle-inner">{day}</div>
          </div>
        ))}
      </div>
      <div className="mb-3">You've met your daily goal!</div>
      <Link
        to="/lessons"
        className="btn text-normal text-white bg-green btn-block"
      >
        CONTINUE
      </Link>
    </div>
  </div>
);

const Lessons = () => (
  <div>
    <div className="shadow-top-bar">
      <div>Menu</div>
      <div>Chinese</div>
      <div>
        <div>Streak</div>
        <div>Options</div>
      </div>
    </div>
    <div className="d-flex justify-center">
      <Link
        to="/lessons/1"
        className="text-normal text-black mt-5 pt-3 d-block"
      >
        <div className="icon-container bg-green mb-1" />
        <div className="text-center">Greeting 1</div>
      </Link>
    </div>
    <div className="d-flex justify-center">
      <Link
        to="/lessons/2"
        className="text-normal text-black mt-5 pt-3 d-block"
      >
        <div className="icon-container bg-blue mb-1 mr-1" />
        <div className="text-center">Numbers</div>
      </Link>
      <Link
        to="/lessons/3"
        className="text-normal text-black mt-5 pt-3 d-block"
      >
        <div className="icon-container bg-green mb-1 ml-1" />
        <div className="text-center">Name</div>
      </Link>
    </div>
    <div className="shadow-bottom-bar">
      <Link to="/lessons" className="text-normal text-blue">
        Learn
      </Link>
      <Link to="/profile" className="text-normal text-black">
        Profile
      </Link>
      <Link to="/clubs" className="text-normal text-black">
        Clubs
      </Link>
      <Link to="/shop" className="text-normal text-black">
        Shop
      </Link>
    </div>
  </div>
);

const Profile = () => (
  <div>
    <div className="shadow-top-bar">
      <div>Menu</div>
      <div>Profile</div>
      <div>
        <div>Streak</div>
        <div>Options</div>
      </div>
    </div>
    <div className="main-container d-flex flex-col justify-center vh-100 text-center">
      <div className="mb-2">You need a profile to connect with friends</div>
      <div className="mb-2 btn btn-block bg-blue text-white">
        CREATE PROFILE
      </div>
      <div className=" btn btn-block bg-orange text-white">SIGN IN</div>
    </div>
    <div className="shadow-bottom-bar">
      <Link to="/lessons" className="text-normal text-black">
        Learn
      </Link>
      <Link to="/profile" className="text-normal text-blue">
        Profile
      </Link>
      <Link to="/clubs" className="text-normal text-black">
        Clubs
      </Link>
      <Link to="/shop" className="text-normal text-black">
        Shop
      </Link>
    </div>
  </div>
);

const Clubs = () => (
  <div>
    <div className="shadow-top-bar">
      <div>Menu</div>
      <div>Clubs</div>
      <div>
        <div>Streak</div>
        <div>Options</div>
      </div>
    </div>
    <div className="main-container d-flex flex-col justify-center vh-100 text-center">
      <div className="mb-2">
        You need a profile to join and create a language club.
      </div>
      <div className="mb-2 btn btn-block bg-blue text-white">
        CREATE PROFILE
      </div>
      <div className=" btn btn-block bg-orange text-white">SIGN IN</div>
    </div>
    <div className="shadow-bottom-bar">
      <Link to="/lessons" className="text-normal text-black">
        Learn
      </Link>
      <Link to="/profile" className="text-normal text-black">
        Profile
      </Link>
      <Link to="/clubs" className="text-normal text-blue">
        Clubs
      </Link>
      <Link to="/shop" className="text-normal text-black">
        Shop
      </Link>
    </div>
  </div>
);

const Shop = () => (
  <div>
    <div className="shadow-top-bar">
      <div>Menu</div>
      <div>Shop</div>
      <div>
        <div>Streak</div>
        <div>Options</div>
      </div>
    </div>
    <div className="main-container d-flex flex-col justify-center vh-100 text-center">
      <div className="mb-2">You need a profile to get items in the Shop</div>
      <div className="mb-2 btn btn-block bg-blue text-white">
        CREATE PROFILE
      </div>
      <div className=" btn btn-block bg-orange text-white">SIGN IN</div>
    </div>
    <div className="shadow-bottom-bar">
      <Link to="/lessons" className="text-normal text-black">
        Learn
      </Link>
      <Link to="/profile" className="text-normal text-black">
        Profile
      </Link>
      <Link to="/clubs" className="text-normal text-black">
        Clubs
      </Link>
      <Link to="/shop" className="text-normal text-blue">
        Shop
      </Link>
    </div>
  </div>
);

const LessonUnit = () => (
  <div className="full-screen bg-green">
    <div className="main-container">
      <div className="top-bar text-white">
        {isMobile() ? (
          <Link to="/lessons">
            <img className="top-bar-back-button" src={arrowLeft} />
          </Link>
        ) : (
          <div />
        )}
        <div>Greeting 1</div>
        <div />
      </div>
      <div className="lesson-card">
        <div>Lesson 1 of 2</div>
        <div>你, 好</div>
        <Link
          to="/question/1"
          className="btn btn-block bg-green text-white text-normal"
        >
          REDO
        </Link>
      </div>
      <div className="lesson-card">
        <div>Lesson 2 of 2</div>
        <div>再见, 再, 见</div>
        <Link
          to="/question/2"
          className="btn btn-block bg-green text-white text-normal"
        >
          START
        </Link>
      </div>
    </div>
  </div>
);

type QuestionState = {
  questionIndex: number;
  questionScores: number[];
};

type QuestionData =
  | {
      type: 'CHARACTER_TO_PRONUNCIATION';
      question: string;
      answers: string[];
      correctIndex: number;
    }
  | {
      type: 'PRONUNCIATION_TO_CHARACTER';
      question: string;
      answers: string[];
      correctIndex: number;
    }
  | {
      type: 'TAP_PAIRS';
      pairs: string[];
      correctPairs: [string, string][];
    }
  | {
      type: 'SOUND_TO_PRONUNCIATION';
      sound: string;
      answers: string[];
      correctIndex: number;
    }
  | {
      type: 'TRANSLATE_SENTENCE';
      sentence: string;
      correctTranslations: string[];
    };

const defaultQuestions: QuestionData[] = [
  {
    type: 'CHARACTER_TO_PRONUNCIATION',
    question: '你好',
    answers: ['ni2hao3', 'hao3', 'ni3'],
    correctIndex: 0
  },
  {
    type: 'CHARACTER_TO_PRONUNCIATION',
    question: '好',
    answers: ['hao3', 'zai4', 'ni3'],
    correctIndex: 0
  },
  {
    type: 'PRONUNCIATION_TO_CHARACTER',
    question: 'ni2hao3',
    answers: ['你好', '你', '好', '再'],
    correctIndex: 0
  },
  {
    type: 'TAP_PAIRS',
    pairs: ['你好', 'hao3', '好', 'ni2hao3'],
    correctPairs: [['hao3', '好'], ['ni2hao3', '你好']]
  },
  {
    type: 'SOUND_TO_PRONUNCIATION',
    sound: ni2hao3,
    answers: ['ni3', 'zai4', 'ni2hao3', 'hao3'],
    correctIndex: 2
  },
  {
    type: 'PRONUNCIATION_TO_CHARACTER',
    question: 'hao3',
    answers: ['再', '你', '好', '见'],
    correctIndex: 2
  },
  {
    type: 'TAP_PAIRS',
    pairs: ['ni2hao3', 'hao3', '你好', '好'],
    correctPairs: [['hao3', '好'], ['ni2hao3', '你好']]
  },
  {
    type: 'SOUND_TO_PRONUNCIATION',
    sound: hao3,
    answers: ['ni3', 'hao3', 'jian4', 'zai4'],
    correctIndex: 1
  },
  {
    type: 'TRANSLATE_SENTENCE',
    sentence: '好!',
    correctTranslations: ['good', 'ok', 'okay']
  }
];

const defaultQuestions2: QuestionData[] = [
  {
    type: 'CHARACTER_TO_PRONUNCIATION',
    question: '见',
    answers: ['jian4', 'hao3', 'zai4'],
    correctIndex: 0
  },
  {
    type: 'CHARACTER_TO_PRONUNCIATION',
    question: '再',
    answers: ['ni2hao3', 'zai4', 'jian4'],
    correctIndex: 1
  },
  {
    type: 'TAP_PAIRS',
    pairs: ['你好', '见', 'jian4', 'hao3', 'ni2hao3', 'zai4', '再', '好'],
    correctPairs: [
      ['hao3', '好'],
      ['ni2hao3', '你好'],
      ['jian4', '见'],
      ['zai4', '再']
    ]
  },
  {
    type: 'PRONUNCIATION_TO_CHARACTER',
    question: 'zai4',
    answers: ['好', '见', '再', '你好'],
    correctIndex: 2
  },
  {
    type: 'PRONUNCIATION_TO_CHARACTER',
    question: 'jian4',
    answers: ['好', '见', '再', '你好'],
    correctIndex: 1
  },
  {
    type: 'SOUND_TO_PRONUNCIATION',
    sound: zai4,
    answers: ['hao3', 'ni3', 'zai4', 'jian4'],
    correctIndex: 2
  },
  {
    type: 'SOUND_TO_PRONUNCIATION',
    sound: jian4,
    answers: ['jian4', 'ni2hao3', 'zai4', 'ni3'],
    correctIndex: 0
  },
  {
    type: 'TAP_PAIRS',
    pairs: ['ni2hao3', '再', 'hao3', 'jian4', '好', '你好', '见', 'zai4'],
    correctPairs: [
      ['hao3', '好'],
      ['ni2hao3', '你好'],
      ['jian4', '见'],
      ['zai4', '再']
    ]
  }
];

class Question extends React.Component {
  props: { questions: QuestionData[] };
  state: QuestionState = {
    questionIndex: this.props.questions.length - 1,
    questionScores: Array(defaultQuestions.length).fill(0)
  };
  answerCorrectly() {
    this.setState({
      questionScores: [
        ...this.state.questionScores.slice(0, this.state.questionIndex),
        this.state.questionScores[this.state.questionIndex] + 1,
        ...this.state.questionScores.slice(this.state.questionIndex + 1)
      ]
    });
  }
  answerIncorrectly() {
    this.setState({
      questionScores: [
        ...this.state.questionScores.slice(0, this.state.questionIndex),
        this.state.questionScores[this.state.questionIndex] - 1,
        ...this.state.questionScores.slice(this.state.questionIndex + 1)
      ]
    });
  }
  continueToNext() {
    const { questions } = this.props;
    const { questionIndex, questionScores } = this.state;
    const incrementedQuestionIndex = (questionIndex + 1) % questions.length;
    const nextQuestionIndex =
      questions
        .concat(questions)
        .findIndex((_, i) => questionScores[i] <= 0, incrementedQuestionIndex) %
      questions.length;
    this.setState({ questionIndex: nextQuestionIndex });
  }
  render() {
    const { questions } = this.props;
    const { questionIndex, questionScores } = this.state;
    const question = questions[questionIndex];
    if (
      question.type === 'CHARACTER_TO_PRONUNCIATION' ||
      question.type === 'PRONUNCIATION_TO_CHARACTER'
    ) {
      return (
        <MultipleChoice
          questionType={question.type}
          question={question.question}
          answers={question.answers}
          correctIndex={question.correctIndex}
          correctAnswers={questionScores.filter(score => score > 0).length}
          correctAnswersNeeded={questionScores.reduce(
            (total, score) => total - Math.min(0, score),
            questions.length
          )}
          answerCorrectly={() => this.answerCorrectly()}
          answerIncorrectly={() => this.answerIncorrectly()}
          continueToNext={() => this.continueToNext()}
        />
      );
    } else if (question.type === 'TAP_PAIRS') {
      return (
        <TapPairs
          pairs={question.pairs}
          correctPairs={question.correctPairs}
          correctAnswers={questionScores.filter(score => score > 0).length}
          correctAnswersNeeded={questionScores.reduce(
            (total, score) => total - Math.min(0, score),
            questions.length
          )}
          answerCorrectly={() => this.answerCorrectly()}
          continueToNext={() => this.continueToNext()}
        />
      );
    } else if (question.type === 'SOUND_TO_PRONUNCIATION') {
      return (
        <SoundToPronunciation
          sound={question.sound}
          answers={question.answers}
          correctIndex={question.correctIndex}
          correctAnswers={questionScores.filter(score => score > 0).length}
          correctAnswersNeeded={questionScores.reduce(
            (total, score) => total - Math.min(0, score),
            questions.length
          )}
          answerCorrectly={() => this.answerCorrectly()}
          answerIncorrectly={() => this.answerIncorrectly()}
          continueToNext={() => this.continueToNext()}
        />
      );
    } else if (question.type === 'TRANSLATE_SENTENCE') {
      return (
        <TranslateSentence
          sentence={question.sentence}
          correctTranslations={question.correctTranslations}
          correctAnswers={questionScores.filter(score => score > 0).length}
          correctAnswersNeeded={questionScores.reduce(
            (total, score) => total - Math.min(0, score),
            questions.length
          )}
          answerCorrectly={() => this.answerCorrectly()}
          answerIncorrectly={() => this.answerIncorrectly()}
          continueToNext={() => this.continueToNext()}
        />
      );
    } else {
      throw new Error(`Invalid question: ${JSON.stringify(question)}`);
    }
  }
}

const App = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/choose-language" component={ChooseLanguage} />
    <Route exact={true} path="/choose-goal" component={ChooseGoal} />
    <Route exact={true} path="/choose-path" component={ChoosePath} />
    <Route
      exact={true}
      path="/question/1"
      component={() => <Question questions={defaultQuestions} />}
    />
    <Route
      exact={true}
      path="/question/2"
      component={() => <Question questions={defaultQuestions2} />}
    />
    <Route exact={true} path="/lesson-complete" component={LessonComplete} />
    <Route exact={true} path="/lessons" component={Lessons} />
    <Route exact={true} path="/lessons/:lessonId" component={LessonUnit} />
    <Route exact={true} path="/profile" component={Profile} />
    <Route exact={true} path="/clubs" component={Clubs} />
    <Route exact={true} path="/shop" component={Shop} />
  </div>
);

export default App;
