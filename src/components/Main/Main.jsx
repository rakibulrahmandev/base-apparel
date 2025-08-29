export default function Main() {
    return (
        <>
            <main>
                <div className="w-full">
                    <img src="/public/hero-mobile.jpg" alt="hero image" className="w-full h-full object-cover" />
                </div>
                <div className="w-full min-h-50 py-19 flex items-center justify-center flex-col">
                    <div className="w-full text-center flex items-center flex-col">
                        <div className="w-full text-center">
                            <h1 className="text-5xl font-light text-primary-pink-400 uppercase tracking-[0.8rem]">we're</h1>
                        </div>
                        <div className="w-full max-w-2xl">
                            <h1 className="text-5xl font-semibold text-neutral-gray-900 uppercase tracking-[0.8rem] leading-14">Coming<br />Soon</h1>
                        </div>
                    </div>
                    <div className="w-full max-w-2xl text-center px-5 mt-5">
                        <p className="text-base font-normal text-primary-pink-400">Hello fellow shoppers! We're currently building our new fashion store. Add you email below to stay up-to-date with announcements add our launch deals.</p>
                    </div>
                    <div className="w-full flex items-center justify-center px-5 mt-8">
                        <div className="w-full">
                            <form className="w-full relative" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Enter Address" className="w-full text-base font-normal text-neutral-gray-900 border border-primary-pink-400/60 rounded-full py-3.5 pl-7.5 outline-none transition-colors placeholder:text-primary-pink-400/60" />
                                <button type="submit" className="w-19 h-[54px] bg-gradient-to-r from-[hsl(0_80%_86%)] to-[hsl(0_74%_74%)] rounded-full flex items-center justify-center absolute top-0 right-0 cursor-pointer transition-colors duration-200 ease-in hover:from-[hsl(0_74%_74%)] hover:to-[hsl(0_80%_86%)]">
                                    <img src="/public/icon-arrow.svg" alt="arrow icon" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};