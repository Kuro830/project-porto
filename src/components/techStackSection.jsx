/* eslint-disable jsx-a11y/anchor-is-valid */
const techStackSection = () => {
    return (
        <section id="tectstack" className="pt-36 pb-32 bg-slate-700">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Tech Stack</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">The tech stack used</h2>
                        <p className="font-medium text-md text-secondary md-text-lg">
                            Here are the technologies and tools used in the development project
                        </p>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/react.svg" alt="react" />
                        </a>
                        <a
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/nextjs.svg" alt="nextjs" />
                        </a>
                        <a
                            href="https://business.adobe.com/products/magento/magento-commerce.html"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/magento.svg" alt="magento" />
                        </a>
                        <a
                            href="https://www.figma.com/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/figma.svg" alt="figma" />
                        </a>
                        <a
                            href="https://helpx.adobe.com/support/xd.html"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/AdobeXD.svg" alt="figma" />
                        </a>
                        <a
                            href="https://graphql.org/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/GraphQL.svg" alt="GraphQL" />
                        </a>
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/tailwindcss.svg" alt="Tailwindcss" />
                        </a>
                        <a
                            href="https://mui.com/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/material-ui.svg" alt="MaterialUI" />
                        </a>
                        <a
                            href="https://vitejs.dev/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/vite.svg" alt="vite" />
                        </a>
                        <a
                            href="https://git-scm.com/"
                            target="_blank"
                            rel="noreferrer"
                            // eslint-disable-next-line max-len
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                        >
                            <img src="./img/techstack/git.svg" alt="git" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default techStackSection
