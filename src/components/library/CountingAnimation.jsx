import React, { useEffect, useState } from 'react'

// Math.easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

const CountingAnimation = ({ result }) => {
    const [count, setCount] = useState(0)
    const finalResult = result

    useEffect(() => {
        // const duration = Math.min(3000, finalResult * 15)
        const duration = 10000
        const startTime = Date.now();

        function customEasing(t) {
            return (t * t) / (2.0 * (t * t - t) + 1);
        }

        function updateCount() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                const progress = Math.min(1, elapsedTime / duration);
                const easedProgress = customEasing(progress);
                const newCount = Math.round(easedProgress * finalResult);
                setCount(newCount);
                requestAnimationFrame(updateCount);
            } else {
                setCount(finalResult);
            }
        }

        setTimeout(() => {
            requestAnimationFrame(updateCount);
        }, 500); // Delay start by 500ms (half a second)
    }, [finalResult]);

    return <>{count}</>

    // return (
    //     <div className="counting-animation">
    //         {count}
    //     </div>
    // );
};

export default CountingAnimation;
