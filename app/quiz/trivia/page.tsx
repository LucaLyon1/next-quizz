import Quiz from "@/components/Quiz";
import { question, quiz } from "@/types";


const propositions: Array<string> = ["Washington DC", "New York", "Boston", "Paris"]
const questions: Array<question> = [
    {
        id: 1,
        title: "Capital of United States ?",
        answer: "Washington DC",
        answers: propositions,
    },
    {
        id: 2,
        title: "Capital of France ?",
        answer: "Paris",
        answers: propositions,
    },
    {
        id: 3,
        title: "Capital of Germany ?",
        answer: "Paris",
        answers: propositions,
    },
    {
        id: 4,
        title: "Capital of England ?",
        answer: "Paris",
        answers: propositions,
    }
]


const triviaQuiz: quiz = {
    id: 1,
    title: "Trivia Quiz",
    slug: "trivia-quiz",
    questions: questions,
    answers: [],
}

export default function Trivia() {
    return (
        <div className="bg-slate-800 w-1/2 m-auto min-h-1/2 my-16 py-8 text-center text-xl">
            <Quiz quiz={triviaQuiz} />
        </div>
    )
}