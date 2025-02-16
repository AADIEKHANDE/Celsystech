import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplashScreen = ({ onComplete }) => {
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate text appearance
    gsap.fromTo(
      textRef.current,
      { opacity: 0, letterSpacing: "50px" },
      { opacity: 1, letterSpacing: "0px", duration: 2, ease: "easeOut" }
    );

    // After 2 seconds, morph into logo
    gsap.to(textRef.current, {
      scale: 0.1,
      opacity: 0,
      delay: 2,
      duration: 1,
      onComplete: () => {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 1.5 }
        );
      },
    });

    // Hide splash after 5 seconds
    setTimeout(onComplete, 3000);
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center h-screen bg-emerald-500 text-white">
      {/* Company Name */}
      <h1 ref={textRef} className="sm:text-8xl text-5xl font-bold absolute ">
      Celsystech<span className="text-blue-600">.</span>
      </h1>

      {/* Logo (Initially Hidden) */}
      <div
        ref={logoRef}
        className="absolute w-24 h-24 bg-blue-500 rounded-full hidden"
      />
    </div>
  );
};

export default SplashScreen;
