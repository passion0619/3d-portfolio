import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add scroll event listener to show/hide the back-to-top button
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const showThreshold = 200;

            if (scrollY > showThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className='py-3 px-5 bg-[#241865] rounded-md fixed bottom-[20px] right-[30px] hover:bg-[#2e1e87]'>
                    T
                </button>
            )}
        </div>
    );
};

export default BackToTop;
