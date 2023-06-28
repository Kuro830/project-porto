import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const footerSection = () => {
    return (
        <footer className="bg-dark pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-4xl text-white mb-5">Muhammad Nuh Ibnu Aimar Tamir</h2>
                        <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
                        <p>noe.abarai20@gmail.com</p>
                        <p>BTN Karangsembung Permai Blok E1 No. 25</p>
                        <p>Cirebon</p>
                    </div>
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h3 className="font-bold text-2xl mb-2">Connect With Us</h3>
                        <ul className="text-slate-300">
                            <li className="flex mb-3">
                                <a
                                    href="https://www.instagram.com/inu20/"
                                    target="_blank"
                                    rel="noreferrer"
                                    // eslint-disable-next-line max-len
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a
                                    href="https://www.instagram.com/inu20/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block text-base hover:text-primary mb-auto mt-auto"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="flex mb-3">
                                <a
                                    href="https://twitter.com/aimar_akatsuki"
                                    target="_blank"
                                    rel="noreferrer"
                                    // eslint-disable-next-line max-len
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a
                                    href="https://twitter.com/aimar_akatsuki"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block text-base hover:text-primary mb-auto mt-auto"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li className="flex mb-3">
                                <a
                                    href="https://www.linkedin.com/in/inu-aimar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    // eslint-disable-next-line max-len
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/inu-aimar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block text-base hover:text-primary mb-auto mt-auto"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h3 className="font-bold text-2xl mb-2">Link</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#home" className="inline-block text-base hover:text-primary mb-3">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="inline-block text-base hover:text-primary mb-3">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                                    Portofolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="inline-block text-base hover:text-primary mb-3">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-700">
                    <p className="font-medium text-xs text-slate-500 text-center">
                        Made with <span className="text-pink-500">❤️</span> by{' '}
                        <a href="https://www.instagram.com/inu20/" className="font-bold text-primary">
                            Muhammad Nuh Ibnu Aimar Tamir
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default footerSection;
