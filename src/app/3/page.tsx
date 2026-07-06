'use client';

import { useEffect, useState } from 'react';
import CodingAdventureFlow from '@/components/coding-adventure-flow';
import { Button } from '@/components/ui/8bit/button';

const questionBank = [
  {
    prompt: 'Which sentence best describes coding?',
    options: [
      'It is a set of instructions for a computer.',
      'It is only for drawing pictures.',
      'It is a type of music.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is one thing code lets you do?',
    options: [
      'Tell a computer how to solve problems.',
      'Make a sandwich automatically.',
      'Grow plants with music.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Who uses coding?',
    options: [
      'People building websites, apps, and tools.',
      'Only musicians.',
      'Only video game players.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is a program?',
    options: [
      'A set of instructions a computer follows.',
      'A type of computer screen.',
      'A computer mouse.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is a bug in programming?',
    options: [
      'A mistake or error in the code.',
      'An insect inside the computer.',
      'A fast computer.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What does debugging mean?',
    options: [
      'Finding and fixing errors in code.',
      'Deleting your project.',
      'Making your computer faster.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Which of these is a programming language?',
    options: [
      'JavaScript',
      'Keyboard',
      'Monitor',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What does a variable do?',
    options: [
      'Stores information that can change.',
      'Turns off the computer.',
      'Draws pictures automatically.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is an algorithm?',
    options: [
      'A step-by-step plan to solve a problem.',
      'A computer game.',
      'A type of keyboard.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is an "if" statement used for?',
    options: [
      'Making decisions in code.',
      'Playing music.',
      'Charging a laptop.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Why do programmers use loops?',
    options: [
      'To repeat instructions automatically.',
      'To make the monitor bigger.',
      'To connect to Wi-Fi.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What happens if a program has a syntax error?',
    options: [
      'The code cannot run correctly.',
      'The computer explodes.',
      'The internet becomes faster.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is the purpose of comments in code?',
    options: [
      'To explain the code to people.',
      'To make the program run faster.',
      'To store passwords.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Which device can run a program?',
    options: [
      'A computer or smartphone.',
      'A pencil.',
      'A notebook.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is the first thing a computer does?',
    options: [
      'Follows the instructions it is given.',
      'Guesses what you want.',
      'Writes its own homework.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is the goal of coding?',
    options: [
      'To create programs that solve problems or perform tasks.',
      'To make computers heavier.',
      'To replace keyboards.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Which skill is important for coding?',
    options: [
      'Problem solving.',
      'Running fast.',
      'Playing every musical instrument.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What is an app?',
    options: [
      'A program designed to perform specific tasks.',
      'A computer cable.',
      'A type of printer.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'Why is testing code important?',
    options: [
      'To make sure it works as expected.',
      'To make the computer louder.',
      'To change the keyboard color.',
    ],
    correctIndex: 0,
  },
  {
    prompt: 'What can coding be used to create?',
    options: [
      'Games, websites, apps, and robots.',
      'Only calculators.',
      'Only spreadsheets.',
    ],
    correctIndex: 0,
  },
];
export default function StepThreePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('Choose the best answer to earn your next badge.');
  const [question, setQuestion] = useState<{
    prompt: string;
    options: string[];
    correctIndex: number;
  } | null>(null);

  // Utility: Fisher-Yates shuffle that preserves original indices
  const shuffleWithIndex = <T,>(arr: T[]) => {
    const a = arr.map((v, i) => ({ v, i }));
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    // pick a random question from the bank
    const idx = Math.floor(Math.random() * questionBank.length);
    const q = questionBank[idx];
    // shuffle options but keep track of which is correct
    const shuffled = shuffleWithIndex(q.options);
    const options = shuffled.map((s) => s.v);
    const correctIndex = shuffled.findIndex((s) => s.i === q.correctIndex);
    setQuestion({ prompt: q.prompt, options, correctIndex });
    // reset any selected answer/feedback
    setSelected(null);
    setFeedback('Choose the best answer to earn your next badge.');
  }, []);

  const handleCheck = () => {
    if (!question) return;
    if (selected === question.options[question.correctIndex]) {
      setFeedback('Correct! Nice work — that is a great description.');
      return;
    }
    setFeedback('Almost — the best answer is the one that describes coding as instructions for a computer.');
  };

  return (
    <CodingAdventureFlow
      step={3}
      title="Quick Quiz"
      subtitle="Guess the right idea"
      description="Esther challenges you with a tiny multiple-choice puzzle to test how coding is understood."
      nextRoute="/4"
      prevRoute="/2"
      primaryLabel="Enter the demo"
    >
      <div className="space-y-4 rounded-none border border-cyan-400/40 bg-slate-900/70 p-4">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Question</p>
        <p className="text-lg font-semibold text-white">{question ? question.prompt : 'Loading question...'}</p>
        <div className="space-y-2">
          {question && question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`w-full rounded-none border p-3 text-left text-sm transition ${selected === option ? 'border-cyan-300 bg-cyan-500/20 text-cyan-100' : 'border-slate-700 bg-slate-950/70 text-slate-200'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <Button font="retro" className="bg-cyan-500 text-slate-950" onClick={handleCheck}>
          Check answer
        </Button>
        <p className="text-sm leading-7 text-slate-300">{feedback}</p>
      </div>
    </CodingAdventureFlow>
  );
}
