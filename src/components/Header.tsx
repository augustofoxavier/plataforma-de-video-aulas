import { Logo } from "./logo";

export function Header(){
    return (
        <header className="w-full py-5 flex items-center justify-center border-gray-600 border-b bg-gray-700 ">
            <Logo />
        </header>
        
    )
}