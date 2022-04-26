import React from 'react';
/*import linkedInLogo from '../assets/img/linkedin-logo.png';
import githubLogo from '../assets/img/github-logo.png';
import emailLogo from '../assets/img/email-logo.png';*/

const Contact = () => {
    return (
        <div className='bg-black text-white'>
            <h2 className='text-4xl text-center p-4 m-5'>
                <strong>Contact Sloan</strong>
            </h2>
            <div className='flex flex-col md:flex-row text-white justify-center p-3 m-5
                text-xl tracking-tight snap-center lg:text-3xl place-items-center'>
                <p className='text-center max-w-prose'>
                    Connect on Linkdin, check out Sloan's code on Github or,
                    send him an email. <strong>He will be in touch soon.</strong>
                </p>
            </div>
        </div>
    )
};

export default Contact;