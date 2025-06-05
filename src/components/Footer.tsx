export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Gürkan Deniz. All rights reserved.
                </p>
                <p className="text-center text-sm">Made with <span className="text-blue-500">React</span> and <span className="text-blue-500">Tailwind CSS</span></p>
            </div>
        </footer>
    );
}