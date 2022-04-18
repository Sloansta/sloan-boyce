import Image from "../assets/img/back-drop.jpeg"

const Jumbotron = () => {
    return (
        <div className="top-0 left-0 min-h-screen flex flex-col items-center justify-center bg-fixed">
            <img 
            className="absolute w-full h-full object-cover"
            src={Image} 
            alt="Osaka" 
            />
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] text-center items-center flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
                <h1 className="mb-6 text-4xl xl:text-5xl">Hi, my name is Sloan👋</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">I'm a fullstack developer based in Michigan</h2>
            </div>
        </div>
    )
};

export default Jumbotron;