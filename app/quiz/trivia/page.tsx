import { quiz } from "@/types";

const questions = [
    {
        id: 1,
        title: "Capital of United States ?",
        answer: "Washington DC",
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
            <div className="w-1/3 m-auto">
                {triviaQuiz.questions.map((q) => q.title)}
                <input type="text" name="answer" id="answer" />
            </div>
        </div>
    )
}