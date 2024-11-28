import { motion, useAnimate } from "motion/react"
import { useEffect } from "react";

function MainPage() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate('p', { y: ["100%", "0%"] }, { duration: 1, delay: 5 });
    },[])
  return (
    <main ref={scope} className=' text-black z-40 absolute top-0 h-screen w-screen flex flex-col justify-between items-center font-Bebas py-5'>
        <nav className="flex justify-evenly w-screen">
            <div>BAHDMANBABZO</div>
            <div>
                <img src="/logo_header.svg" alt="lamboghini_logo" />
            </div>
            <div>MUSEUM</div>
        </nav>
        <div className="overflow-hidden flex flex-col items-center">
            <div className="overflow-hidden font-light text-lg">
                <p>Concept Car </p>
            </div>
            <p className="text-5xl font-semibold">LAMBORGHINI TERZO MILLENNIO</p>
        </div>
    </main>
  )
}

export default MainPage
