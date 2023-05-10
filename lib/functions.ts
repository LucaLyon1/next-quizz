// Shuffle answers using Fisher-Yates shuffle
export function mapAnswersRandomly(answers: Array<string>): Array<string> {
    let shuffled: string[] = answers
    for (let i = answers.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled
}