let users = [
  {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL:
      'https://w7.pngwing.com/pngs/510/349/png-transparent-computer-icons-teacher-avatar-miscellaneous-child-heroes-thumbnail.png',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL:
      'https://sun6-23.userapi.com/s/v1/ig1/jgJChoUwkgOV159CjwE0LVYoccA0z7hVA0MraX5IGkX8d8SUEw6n3M1ZlksiC0iEFmpAGoeq.jpg?size=400x0&quality=96&crop=0,0,1024,1024&ava=1',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL:
      'https://w7.pngwing.com/pngs/229/332/png-transparent-riddarens-vårdcentral-computer-icons-avatar-user-computer-software-others-computer-network-angle-orange-thumbnail.png',

    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
];

let questions = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory',
    },
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain',
    },
  },
  {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic',
    },
  },
  {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer',
    },
  },
  {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500',
    },
  },
  {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift',
    },
  },
];

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res(users), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res(questions), 1000);
  });
}

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function formatQuestion({ optionOne, optionTwo, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      const newQuestions = questions.slice();
      newQuestions.push(formattedQuestion);
      questions = newQuestions;

      const newUsers = users.slice();
      const user = newUsers.find((user) => user.id === authedUser);

      if (user) {
        user.questions.push(formattedQuestion.id);
      }

      users = newUsers;

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qId, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newUsers = users.slice();
      const user = newUsers.find((user) => user.id === authedUser);

      if (user) {
        user.answers[qId] = answer;
      }

      users = newUsers;

      const newQuestions = questions.slice();
      const question = newQuestions.find((question) => question.id === qId);

      if (question) {
        question[answer].votes.push(authedUser);
      }

      questions = newQuestions;

      res({ users, questions });
    }, 500);
  });
}
