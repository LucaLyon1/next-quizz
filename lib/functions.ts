// Shuffle answers using Fisher-Yates shuffle
export function mapAnswersRandomly(answers: Array<string>): Array<string> {
    let shuffled: string[] = answers
    for (let i = answers.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled
}

export const getResult = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/hello', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res
    } catch (err) {
        console.log(err)
    }
}