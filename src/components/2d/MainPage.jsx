import { motion, useAnimate } from "motion/react"
import { useEffect } from "react";

function MainPage() {
    const [scope, animate] = useAnimate();
    const sequence = [
        ['.title-animate', { y: ["100%", "0%"] }, { duration: 0.75, delay: 5 }], 
        ['.info-animate', { x: ["100%", "0%"] }, { duration: 0.75}]
    ];

    useEffect(() => {
        animate(sequence);
    },[])
  return (
    <main ref={scope} className=' text-black z-40 relative top-0 h-screen w-screen flex flex-col justify-between items-center font-Bebas py-5 overflow-hidden pointer-events-none'>
        <nav className="flex justify-evenly w-screen">
            <div>BAHDMANBABZO</div>
            <div>
                <img src="/logo_header.svg" alt="lamboghini_logo" />
            </div>
            <div>MUSEUM</div>
        </nav>
        <div className="overflow-hidden flex flex-col items-center" >
            <div className="overflow-hidden font-light text-lg">
                <p className="title-animate">Concept Car </p>
            </div>
            <p className="text-5xl font-semibold title-animate">LAMBORGHINI TERZO MILLENNIO</p>
        </div>
        <div 
            className="absolute right-0 top-44 w-56 info-animate"
        >
            <p className="font-Bebas font-semibold mb-2 text-xl">THE SUPERSPORTS CAR OF THE FUTURE</p>
            <p className="font-Epilogue font-light">
                Dictating the requirements of the third millenium, the <span className="font-bold">Terzo Millennio</span> combines 
                efficiency and innovative materials to forge a path in the electric super sports car segment.
            </p>
        </div>
    </main>
  )
}

export default MainPage
