'use client';

import { getResult, mapAnswersRandomly } from "@/lib/functions";
import { quiz, userAnswer } from "@/types";
import { useEffect, useState } from "react";

export default function Quiz(props: { quiz: quiz }) {
    const quiz = props.quiz
    const [userAns, setUserAns] = useState<userAnswer[]>([])

    const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        let ansArr = userAns
        let id = ansArr.findIndex((a) => a.question == e.target.name)
        let ans: userAnswer
        console.log(id)
        if (id === -1) {
            ans = { question: e.target.name, value: e.target.value }
        } else {
            ans = ansArr.splice(id, 1)[0]
            ans.value = e.target.value
        }
        setUserAns([...ansArr, ans])
    }

    const submitQuiz = async () => {
        const res = await getResult()
        const json = await res?.json()
        const result = json.result
    }

    return (
        <form className="w-full" action={submitQuiz}>
            {quiz.questions.map((q, i) => (
                <div key={i} className="bg-slate-700 py-1 my-4 w-3/4 m-auto rounded-lg">
                    <h2>{q.title}</h2>
                    <div className="flex flex-row gap-8 justify-center my-8">
                        {q.answers.map((a, j) => (
                            <div key={j + (4 * i)}>
                                <input onChange={handleAnswer} type="radio" id={a} name={q.title} value={a} />
                                <label htmlFor={a}>{a}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <input className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer" type="submit" value="Submit" />
        </form>
    )
}