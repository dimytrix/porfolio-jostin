import React, { useRef } from "react"
import {motion, useScroll } from "framer-motion"
import LiIcon from '@/components/LiIcon';



const Details = ({type, time, place, info}) =>{
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:my-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl">
            {type}
                </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                {time} | {place}
            </span>
            <p className="font-medium w-full">
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return(
     <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:">
        Education
        </h2>

        <motion.div ref={ref} className="w-[75%] mx-auto relative">

            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top 
             dark:bg-primaryDark dark:shadow-3xl" />

            <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details 
                type="Web Development" 
                time="2022-2023"
                place="Udemy" 
                info="course where I complete HTML5, CSS3, JS AJAX PHP and MySQL and create several projects"
                  
                />

                <Details 
                type="WordPress Development" 
                time="2022-2023"
                place="Udemy" 
                info="course where I completed WordPress and created several projects"
                  
                />


                <Details 
                type="High School Completion" 
                time="2012-2015"
                place=" Republic of Colombia Excellence Center" 
                info="Here I finished all my basic knowledge at school, which I have a certificate."
                  
                />

        <Details 
                type="Software and Networks" 
                time="2016"
                place=" Dominican Air Force Vocational School" 
                info="Here I finished all my knowledge in computing and computer assembly."
                  
                />
              
            </ul>
        </motion.div>
     </div>
    )
}


export default Education