import { motion, useAnimate } from "motion/react"
import { useEffect } from "react";

function MainPage() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate('p', { y: ["100%", "0%"] }, { duration: 1, delay: 0 });
    },[])
  return (
    <main ref={scope} className='text-3xl font-bold text-red-500 z-40 absolute top-0'>
        <div className="overflow-hidden">
            <p>LAMBORGHINI TERZO MILLENNIO</p>
        </div>
        <div className="overflow-hidden">
            <p>Concept Car</p>
        </div>
    </main>
  )
}

export default MainPage
