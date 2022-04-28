import React from 'react';
import linkedInLogo from '../assets/img/linkedin-logo.png';
import githubLogo from '../assets/img/github-logo.png';
import emailLogo from '../assets/img/email-logo.png';

const Contact = () => {
    return (
        <div className='bg-black text-white'>
            <h2 className='text-4xl text-center p-4 m-5'>
                <strong>Contact Sloan</strong>
            </h2>
            <div className='flex flex-col md:flex-row text-white justify-center p-3 m-5
                text-xl tracking-tight snap-center lg:text-3xl place-items-center'>
                <p className='text-center'>
                    Connect on Linkedin, check out Sloan's code on Github or,
                    send him an email. <strong>He will be in touch soon.</strong>
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center p-3 m-5 items-center'>
                    <a href="https://www.linkedin.com/in/sloan-boyce-3b89ba230/" className='p-2'>
                        <img src={linkedInLogo} alt="Sloan's linkedin account" className='object-scale-down h-48 bg-transparent' />
                    </a>
                    <a href="https://github.com/sloansta" className='p-2 justify-center'>
                        <img src={githubLogo} alt="Sloan's github profile" className='object-scale-down h-48 bg-transparent' />
                    </a>
                    <a href="mailto: sloan.boyce@gmail.com" className='p-2 justify-center'>
                        <img src={emailLogo} alt="Sloan's email" className='object-scale-down h-48 bg-transparent' />
                    </a>
            </div>
        </div>
    )
};

export default Contact;