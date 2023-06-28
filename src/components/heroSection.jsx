/* eslint-disable jsx-a11y/anchor-is-valid */
const heroSection = () => {
    return (
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2 pb-3">
                        <h1 className="text-base font-semibold text-primary md:text-xl">
                            Hi 👋, my name is <span className="block font-bold text-dark text-4xl mt-1">M Nuh Ibnu AT</span>
                        </h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Front End Developer</h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed">
                            Learn code from Zero to <span className="text-dark font-bold">Hero!</span>
                        </p>
                        <a
                            href="https://wa.me/6289660500203"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="mt-10 relative lg:mt-9 lg:right-0">
                            <img src="./img/pas_foto_remove_bg.png" alt="pas_foto" className="max-w-full mx-auto" />
                            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                <img src="./img/blob.svg" alt="blob.svg" className="max-w-xs" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default heroSection;
