import Link from "next/link";

export default async function Home() {


  return (
    <main>
      <div className="my-16 w-1/3 m-auto">
        <h1 className="text-3xl mb-8 text-center">Quizzzz</h1>
        <p>Welcome to our quiz application!
          Are you ready to test your knowledge and challenge your brain?
          Our application offers a wide variety of quizzes on different topics,
          including history, science, literature, pop culture, and more.
          You can choose from multiple difficulty levels and challenge yourself or compete with your friends.
          Our quizzes are designed to be fun and engaging, and you'll learn something new with every question.
          So, what are you waiting for?
          Let's get started and see how much you know!
        </p>
      </div>
      <div className="w-1/3 m-auto">
        <h1 className="text-3xl mb-8 text-center">Take some popular quizes</h1>
        <div className="flex flex-col gap-8 align-center mb-16">
          <Link className="w-1/4 m-auto text-center" href='quiz/trivia'>
            <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-400">Trivia</button>
          </Link>
          <Link className="w-1/4 m-auto text-center" href='quiz/sport'>
            <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-400">Sport</button>
          </Link>
          <Link className="w-1/4 m-auto text-center" href='quiz/cinema'>
            <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-400">Cinema</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
