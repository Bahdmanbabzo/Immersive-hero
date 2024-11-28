import { motion, useAnimate } from "motion/react"
import { useEffect } from "react";

function MainPage() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate('p', { y: ["100%", "0%"] }, { duration: 1, delay: 0 });
    },[])
  return (
    <main ref={scope} className=' text-black z-40 relative top-0 h-screen w-screen grid place-items-center'>
        <div className="overflow-hidden absolute bottom-0 m-5 flex flex-col items-center">
            <div className="overflow-hidden font-light text-lg">
                <p>Concept Car</p>
            </div>
            <p className="text-5xl font-semibold">LAMBORGHINI TERZO MILLENNIO</p>
        </div>
    </main>
  )
}

export default MainPage
