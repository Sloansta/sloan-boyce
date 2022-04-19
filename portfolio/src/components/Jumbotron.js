import Image from "../assets/img/back-drop.jpeg"

const Jumbotron = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <img 
            className="absolute w-full h-full object-cover bg-fixed"
            src={Image} 
            alt="Osaka" 
            />
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] text-center flex-1 flex items-center justify-center flex-col">
                <h1 className="mb-6 text-4xl xl:text-5xl">Hi, my name is Sloan👋</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">I'm a fullstack developer based in Michigan</h2>
            </div>
        </div>
    )
};

export default Jumbotron;