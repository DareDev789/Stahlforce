import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 min-h-[60vh] relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[90%] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
                    <p className="text-xl mb-8">Sorry, this page doesn&apos;t exist.</p>
                    <Link href="/" style={{ fontSize: "1.2rem", color: "blue" }}>
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
