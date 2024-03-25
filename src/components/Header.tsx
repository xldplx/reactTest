export default function Header() {
    return (
        <header className="flex flex-col items-center md:flex-row justify-between bg-purple-400 md:px-[10rem] py-[0.5rem] ">
            <div className="text-[2rem] font-bold tracking-widest text-white drop-shadow-2xl hover:scale-110 transition-all duration-500">
                reactTest
            </div>

            <div className="flex items-center gap-8 text-white">
                <a
                    href=""
                    className="transition-all duration-500 hover:scale-110"
                >
                    home
                </a>
                <a
                    href=""
                    className="transition-all duration-500 hover:scale-110"
                >
                    about
                </a>
                <a
                    href=""
                    className="transition-all duration-500 hover:scale-110"
                >
                    quit lol
                </a>
            </div>
        </header>
    );
}
