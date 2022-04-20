import { useState } from 'react';

const Works = () => {
    const [projects] = useState([
        {
            name: 'Critique Code',
            url: '../assets/img/critique-code',
            description: 'A unique place to kick back and talk code. Share bad code, talk about good code. Critique Code takes the good parts of Reddit and Stackoverflow, and throws the bad in the trash.'
        },
        {
            name: 'Password Generator',
            url: '../assets/img/password-generator',
            description: 'Need a password? Want it to take at least few million years for it to be brute forced? Password Generator!'
        },
        {
            name: 'Wordle-term',
            url: '../assets/img/wordle-term',
            description: 'Like word games? Want to take a coding break but dont want to leave your terminal? I know I sometimes do. That is why I created Wordle-term. Play Wordle in the terminal.'
        },
        {
            name: 'Weeb Keeper',
            url: '../assets/img/weeb-keeper',
            description: 'A place for anime fans to keep track of anime that they are currently watching, and to discover new anime.'
        }
    ]);

    return (
        <div className="bg-white text-black">
            <h2 className="text-4xl  text-center p-4 m-5 drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)]">
                <strong>Projects Sloan has worked on. </strong>
                All made with care and passion.
            </h2>
            <div className='flex flex-col justify-center md:flex-row'>
                {projects.map((project) => (
                    <div className='rounded-md text-lg py-3 m-4 shadow-xl border-2 w-80 mx-auto'>
                        <h1 className='mx-4 text-center'>{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Works;