export default function Home() {
    return (
        <section className="h-[80vh] w-[100%] bg-gradient-to-b from-purple-400 to-purple-600 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 text-white drop-shadow-xl">
                <h1 className="text-[2rem] text-center flex md:text-[3rem] tracking-wide font-bold hover:scale-110 transition-all duration-500 ease-in-out">
                    react deployment testing
                </h1>
                <h1 className="text-[0.8rem] md:text-[1.2rem] hover:scale-110 transition-all duration-500">
                    don't mind me, this website is just for testing
                </h1>
            </div>
        </section>
    );
}
