import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // For screen dimensions
import { useSpring, animated } from "react-spring"; // For extra animations


const OrderSuccess = () => {

    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();


    // React Spring animation for success message
    const successMessageAnimation = useSpring({
        opacity: 1,
        transform: "scale(1)",
        from: { opacity: 0, transform: "scale(0.5)" },
        config: { tension: 200, friction: 13 }, // Add some springy effect
    });



    useEffect(() => {

        // Show confetti when component mounts
        setShowConfetti(true);

        const timer = setTimeout(() => setShowConfetti(false), 9000);
        return () => clearTimeout(timer); // Cleanup

    }, [])



    return (

        <div className="order-success-container">

            {/* Confetti */}
            {showConfetti && <Confetti width={width} height={height} numberOfPieces={500} />}


            <div className="cont">

                <div className="confirmation">
                    <div className="icon">✔️</div>
                    <h1 className="heading">🎉YOUR ORDER IS CONFIRMED🎉</h1>
                    <p className="text">Thank you! We will be sending you an email confirmation shortly.</p>
                </div>


                <animated.button
                    style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 })}
                    className="continue-shopping-btn"
                >
                    See Your Orders
                </animated.button>


            </div>


        </div>

    )
}

export default OrderSuccess;
