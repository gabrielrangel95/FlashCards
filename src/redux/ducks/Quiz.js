export const Types = {
  SET_QUIZ_QUESTIONS: 'quiz/SET_QUIZ_QUESTIONS',
  SET_QUIZ_FINAL_SCORE: 'quiz/SET_QUIZ_SCORE',
  SET_QUIZ_PROGRESS: 'quiz/SET_QUIZ_PROGRESS',
  SET_CURRENT_QUESTION: 'quiz/SET_CURRENT_QUESTION',
  SHOW_ANSWER: 'quiz/SHOW_ANSWER',
  HIDE_ASNWER: 'quiz/HIDE_ASNWER',
  RESTART_QUIZ: 'quiz/RESTART_QUIZ',
};

const initialState = {
  questions: [],
  finalScore: null,
  progress: null,
  currentQuestion: null,
  showAnswer: false,
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case Types.SET_QUIZ_QUESTIONS:
      return { ...state, questions: action.payload.questions };
    case Types.SET_QUIZ_FINAL_SCORE:
      return { ...state, finalScore: action.payload.finalScore };
    case Types.SET_QUIZ_PROGRESS:
      return { ...state, progress: action.payload.progress };
    case Types.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload.currentQuestion };
    case Types.SHOW_ANSWER:
      return { ...state, showAnswer: true };
    case Types.HIDE_ASNWER:
      return { ...state, showAnswer: false };
    case Types.RESTART_QUIZ:
      return { ...initialState }

    default:
      return state;
  }
}

export const Creators = {
  setQuizQuestions: questions => ({
    type: Types.SET_QUIZ_QUESTIONS,
    payload: {
      questions
    }
  }),
  setQuizFinalScore: finalScore => ({
    type: Types.SET_QUIZ_FINAL_SCORE,
    payload: {
      finalScore
    }
  }),
  setQuizProgress: progress => ({
    type: Types.SET_QUIZ_PROGRESS,
    payload: {
      progress
    }
  }),
  setQuizCurrentQUestion: question => ({
    type: Types.SET_QUIZ_FINAL_SCORE,
    payload: {
      question
    }
  }),
  showQuizAnswer: () => ({
    type: Types.SHOW_ANSWER,
  }),
  hideQuizAnswer: () => ({
    type: Types.HIDE_ASNWER,
  }),
  restarQuiz: () => ({
    type: Types.RESTART_QUIZ,
  }),
};
