import Link from "next/link";

function Footer() {
    return (
        <footer className="w-1/2 m-auto text-center">
            <h2>Follow us on :</h2>
            <div className="flex flex-row gap-8 justify-center mt-16">
                <Link href='/'>Facebook</Link>
                <Link href='/'>Twitter</Link>
                <Link href='/'>Pinterest</Link>
                <Link href='/'>Instagram</Link>
                <Link href='/'>YouTube</Link>
            </div>
        </footer>
    )
}

export default Footer;