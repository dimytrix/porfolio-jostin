import React, { useRef } from "react"
import {motion, useScroll } from "framer-motion"
import LiIcon from '@/components/LiIcon';



const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:my-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                {position}&nbsp;<a href={companyLink} 
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return(
     <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
        </h2>

        <motion.div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            

            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  
            origin-top  dark:bg-primaryDark dark:shadow-3xl " />

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                
                <Details 
                position="Web Development" company="JRCode"
                time="2022-present" address="Maranhao, Brasil"
                  
                work="Worked Independent Computer Assembly and Maintenance Technician (2016-present). 
                     Independent Spanish Translator and Interpreter, Global Youth Biodiversity Network Association (2021)
                     Expertise in HTML5, CSS3, and jQuery.
                     Proficiency in PHP/MYSQL and AJAX (preferred). 
                
                    "


                />

                <Details 
                position="international translator" company="Global Youth Biodiversity Network Association"
                time="2021" address="Maranhao, Brasil"
                  
                work="
                Work as an interpreter at various events translating from Spanish to Portuguese and the opposite.
                    "


                />

                <Details 
                position="Graphic Designer" company="Cyan Graphic"
                time="2016" address="Santo Domingo,Dominican Republic"
                  
                work="
                I worked as a graphic designer, making graphic designs, I know how to work with Photoshop, Canva, Excel, Word, etc.
                    "


                />

                <Details 
                position="Independent Computer Assembly and Maintenance" company="JRCode"
                time="2016-present" address="Santo Domingo,Dominican Republic"
                  
                work="I work in independent computer assembly and maintenance,
                 I work with new technologies on the market and I can assemble the computer of your dreams.
                    "


                />
            </ul>
        </motion.div>
     </div>
    )
}


export default Experience