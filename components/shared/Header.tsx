import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-row justify-around pt-2">
            <h1 className="text-3xl">
                <Link href='/'>Quizzzzz</Link>
            </h1>
            <nav className="flex flex-row gap-8">
                <Link href='/'>Home</Link>
                <Link href='/'>Log In</Link>
                <Link href='/'>Sign In</Link>
            </nav>
        </header>
    )
}

export default Header;