"use client"

import React from 'react'
import EmailClient from '../../shared/EmailClient'

export const ContactMe = () => {
    const nameRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const messageRef = React.useRef(null);
    
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const templateParams = {
            from_name: nameRef?.current?.value,
            from_email: emailRef?.current?.value,
            to_name: 'Shivam Samant',
            message: messageRef?.current?.value,
        };

        EmailClient.sendEmail(templateParams)
    }

    return (
        <section id="contact-me" className="bg-transparent pb-20 px-4 mx-auto max-w-screen-md">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                Contact Me
            </h1>
            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            
            <form onSubmit={sendEmail} className="contact-form space-y-8">
                <div>
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input ref={nameRef} type="text" name="user_name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
                </div>
                <div>
                    <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input ref={emailRef} type="email" name="user_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea ref={messageRef} name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">Send message</button>
            </form>
        </section>
    );
};
