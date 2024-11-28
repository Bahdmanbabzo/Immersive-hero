import { motion, useAnimate } from "motion/react"
import { useEffect } from "react";

function MainPage() {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate('p', { y: 0 }, { duration: 1, delay: 0 });
    },[])
  return (
    <main ref={scope} className='text-3xl font-bold text-red-500 z-40 absolute top-0'>
        <div className="overflow-hidden">
            <motion.p
                initial={{ y: "100%"}}
            >
                LAMBORGHINI TERZO MILLENNIO
            </motion.p>
        </div>
        <div className="overflow-hidden">
            <motion.p
                initial={{ y: "100%"}}
            >
                Concept Car
            </motion.p>
        </div>
    </main>
  )
}

export default MainPage
