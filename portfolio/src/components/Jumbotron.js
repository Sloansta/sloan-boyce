import Image from "../assets/img/back-drop.jpeg"

const Jumbotron = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-0 m-0">
            <img 
            className="absolute w-full h-full md:object-cover lg:object-cover sm:object-fill bg-fixed"
            src={Image} 
            alt="Osaka" 
            />
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] text-center flex-1 
            flex items-center justify-center flex-col animate-fade-in-down">
                <h1 className="mb-6 text-4xl xl:text-5xl">Hi, my name is Sloan<div className="animate-wiggle inline-block">👋</div></h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">I'm a fullstack developer based in Michigan</h2>
            </div>
        </div>
    )
};

export default Jumbotron;