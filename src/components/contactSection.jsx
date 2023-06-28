/* eslint-disable max-len */
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const contactSection = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_3hpahjp', 'template_kkyq6al', form.current, '441ZESYe3hNU7Mmp0').then(
            (result) => {
                if (result) {
                    // console.log(result.text);
                    // alert('SUCCESS!');
                    setLoading(false);
                    toast.success('Message Sent');
                    form.current.reset();
                }
            },
            (error) => {
                if (error) {
                    // console.log(error.text);
                    // alert('FAILED...', error);
                    setLoading(false);
                    toast.error('Failed Send Message.');
                    form.current.reset();
                }
            }
        );
    };

    return (
        <section id="contact" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Let&apos;s get in touch!</h2>
                        {/* <p className="font-medium text-md text-secondary md:text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ullam molestiae doloribus sit quis reprehenderit
                            recusandae, sapiente dolore a. At?
                        </p> */}
                    </div>
                </div>
                <Toaster position="bottom-center" reverseOrder={false} />
                <form ref={form} onSubmit={sendEmail}>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base text-primary font-bold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                                name="user_name"
                            />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base text-primary font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                                name="user_email"
                            />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message" className="text-base text-primary font-bold">
                                Message
                            </label>
                            <textarea
                                type="text"
                                id="message"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                                name="message"
                            ></textarea>
                        </div>
                        {!loading ? (
                            <div className="w-full px-4">
                                <button
                                    type="submit"
                                    className="text-base uppercase font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                                >
                                    Submit
                                </button>
                            </div>
                        ) : (
                            <div className="w-full px-4">
                                <button
                                    type="button"
                                    className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full"
                                    disabled
                                >
                                    <svg
                                        className="mr-3 h-5 w-5 animate-spin text-white inline-flex"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span className="font-medium"> Processing... </span>
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default contactSection;
