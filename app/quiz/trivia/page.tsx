import { question, quiz } from "@/types";

const answers: Array<string> = ["Washington DC", "New York", "Boston", "Paris"]
const questions: Array<question> = [
    {
        id: 1,
        title: "Capital of United States ?",
        answer: "Washington DC",
        answers: answers,
    },
    {
        id: 2,
        title: "Capital of France ?",
        answer: "Paris",
        answers: answers,
    },
    {
        id: 3,
        title: "Capital of Germany ?",
        answer: "Paris",
        answers: answers,
    },
    {
        id: 4,
        title: "Capital of England ?",
        answer: "Paris",
        answers: answers,
    }
]


const triviaQuiz: quiz = {
    id: 1,
    title: "Trivia Quiz",
    slug: "trivia-quiz",
    questions: questions,
    answers: answers,
}

// Shuffle answers using Fisher-Yates shuffle
function mapAnswersRandomly(answers: Array<string>): Array<string> {
    let shuffled: string[] = answers
    for (let i = answers.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled
}

export default function Trivia() {
    return (
        <div className="bg-slate-800 w-1/2 m-auto min-h-1/2 my-16 py-8 text-center text-xl">
            <form className="w-full">
                {triviaQuiz.questions.map((q) => (
                    <div key={q.id} className="bg-slate-700 py-1 my-4 w-3/4 m-auto rounded-lg">
                        <h2>{q.title}</h2>
                        <div className="flex flex-row gap-8 justify-center my-8">
                            {mapAnswersRandomly(q.answers).map((a) => (
                                <div>
                                    <input type="radio" id={a} name={q.title} value={a} />
                                    <label htmlFor={a}>{a}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <input className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer" type="submit" value="Submit" />
            </form>
        </div>
    )
}