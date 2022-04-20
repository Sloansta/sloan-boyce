import headShot from '../assets/img/sloan-pic.jpg';

const About = () => {
    return (
        <div className="flex flex-col bg-black text-white animate-fade-in-down">
            <span className="text-4xl md:justify-start sm:justify-center text-center p-4 m-5">Who is <strong>Sloan?</strong></span>
            <div className='flex flex-col text-white justify-center text-center p-3 m-4 text-xl tracking-tight snap-center lg:text-3xl place-items-center'>
                <img className='rounded-full shadow-lg shadow-red-900 justify-center my-5 w-52 h-52' src={headShot} alt='Sloan Boyce'></img>
                <p className='text-center max-w-prose'>
                    Sloan is a task oriented programmer that loves solving complex puzzles and building beautiful user experiences.
                    He's bilingual (English/Japanese) and lived in Japan for awhile.
                    He loves JavaScript, but also is used to working in other languages such as Python, Java, C#, Go and a handfull more languages
                </p>
            </div>
        </div>
    )
};

export default About;