/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [top, setTop] = useState(true);

    const handleOpen = () => {
        setMobileMenuOpen(true);
    };
    const handleClose = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header
            className={`sticky left-0 top-0 right-0 ${!top && mobileMenuOpen === false && `bg-white bg-opacity-80 backdrop-blur-sm shadow-lg z-20`}`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-auto w-auto" src="./img/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={handleOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-dark hover:text-primary">
                        Home
                    </a>
                    <a href="#about" className="text-sm font-semibold leading-6 text-dark hover:text-primary">
                        About Me
                    </a>
                    <a href="#portfolio" className="text-sm font-semibold leading-6 text-dark hover:text-primary">
                        Portfolio
                    </a>
                    <a href="#contact" className="text-sm font-semibold leading-6 text-dark hover:text-primary">
                        Contact
                    </a>
                </div>
            </nav>
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog onClose={handleClose}>
                    {/* Use one Transition.Child to apply one transition to the backdrop... */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-10 bg-black/50">
                            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" onClick={handleClose} className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img className="h-auto w-auto" src="./img/logo.png" alt="logo" />
                                    </a>
                                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="sr-only">Close menu</span>
                                        {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <a
                                                href="#"
                                                onClick={handleClose}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark hover:bg-gray-50 hover:text-primary"
                                            >
                                                Home
                                            </a>
                                            <a
                                                href="#about"
                                                onClick={handleClose}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark hover:bg-gray-50 hover:text-primary"
                                            >
                                                About Me
                                            </a>
                                            <a
                                                href="#portfolio"
                                                onClick={handleClose}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark hover:bg-gray-50 hover:text-primary"
                                            >
                                                Portfolio
                                            </a>
                                            <a
                                                href="#contact"
                                                onClick={handleClose}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark hover:bg-gray-50 hover:text-primary"
                                            >
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    );
}
