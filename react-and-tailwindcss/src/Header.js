import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="Header sticky top-0">
            <header className="w-full">
                <Link
                    to={"/sign-in"}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                </Link>
                <Link
                    to={"/sign-up"}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Sign up
                </Link>
            </header>
        </div>
    );
}

export default Header;
