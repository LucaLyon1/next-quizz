export default function signin() {
    return (
        <div className="flex flex-row my-24 m-auto w-3/5">
            <div className="w-2/3 p-4 spacer waves">
                <h1 className="text-4xl pl-32 pt-32">Welcome on NextQuiz</h1>
                <p className="pl-32 pr-32 pt-12 text-xl">
                    Welcome to our quiz application!
                    Are you ready to test your knowledge and challenge your brain?
                    Our application offers a wide variety of quizzes on different topics,
                    including history, science, literature, pop culture, and more.
                    You can choose from multiple difficulty levels and challenge yourself or compete
                    with your friends.
                    Our quizzes are designed to be fun and engaging,
                    and you'll learn something new with every question.
                    So, what are you waiting for?
                    Let's get started and see how much you know!
                </p>
            </div>
            <form action="" className="bg-slate-700 p-8 flex flex-col gap-4 w-2/5 pt-36 text-gray-500">
                <input className="w-4/5 m-auto rounded-3xl my-1 h-10 pl-4 focus:outline outline-purple-500" type="email" name="email" id="email" placeholder="Email" />
                <input className="w-4/5 m-auto rounded-3xl my-1 h-10 pl-4 focus:outline outline-purple-500" type="password" name="password" id="password" placeholder="Password" />
                <input className="w-4/5 m-auto text-white font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 h-10 mt-8" type="submit" value="Sign In" />
            </form>
        </div>
    )
}