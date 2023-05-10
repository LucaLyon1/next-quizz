export type quiz = {
    id: number,
    title: string,
    slug: string,
    questions: Array<question>,
    answers: Array<string>
}

export type question = {
    id: number,
    title: string,
    answers: Array<string>,
    answer: string,
}

export type userAnswer = {
    question: question,
    value: string,
}