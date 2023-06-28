/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const aboutSection = () => {
    return (
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">My Journey as a Frontend Developer</h2>
                        <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                            Experienced Frontend Developer specializing in creating engaging user interfaces. Skilled in HTML, CSS, JavaScript, and
                            React. Passionate about delivering seamless web experiences that delight users. Let's build something amazing together!
                        </p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Follow Me</h3>
                        <p className="font font-medium text-base text-secondary mb-6 lg:text-lg">
                            Join me on an exciting journey as a Frontend Developer, creating captivating user interfaces. Get insights on the latest
                            tech trends and design inspiration. Follow my social media accounts now!
                        </p>
                        <div className="flex items-center">
                            {/* logo instagram */}
                            <a
                                href="https://www.instagram.com/inu20/"
                                target="_blank"
                                rel="noreferrer"
                                // eslint-disable-next-line max-len
                                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            {/* logo linkedin */}
                            <a
                                href="https://www.linkedin.com/in/inu-aimar/"
                                target="_blank"
                                rel="noreferrer"
                                // eslint-disable-next-line max-len
                                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            {/* logo github */}
                            <a
                                href="https://github.com/Kuro830"
                                target="_blank"
                                rel="noreferrer"
                                // eslint-disable-next-line max-len
                                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default aboutSection;
