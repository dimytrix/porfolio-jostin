import React from "react"
import {motion} from "framer-motion"



const Skill = ({name, x, y}) => {

    return(
     <motion.div className='fex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y, transition: {duration:1.5}  }}
        viewport={{once: true}}
        >
         {name}
         </motion.div>

    )
}

const Skills = () => {
    return (
        <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">skills</h2>
        <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-64 md:mb-32 rounded-full lg:dark:bg-circularDarkLg md:dark:bg-circularDarkMd sm:dark:bg-circularDarkSm 
        lg:h-[80vh] sm:h-[60vh] xs:h-[60vh]
         lg:bg-circularLightLg lg:dark:-bg-circularDarkLg
         md:bg-circularLightMd md:dark:-bg-circularDarkMd
         sm:bg-circularLightSm sm:dark:-bg-circularDarkSm
        ">


            

            <motion.div 
            className='fex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
            '
            whileHover={{scale:1.05}}
            >
                web
            </motion.div>

            <Skill name="HTML" x="-20vw" y="7vh" />
            <Skill name="CSS" x="-20vw" y="-14vh" />
            <Skill name="JavaScript" x="20vw" y="6vh" />
            <Skill name="WordPress" x="0vw" y="25vh" />
            <Skill name="NextJS" x="20vw" y="-15vh" />
            <Skill name="Web Designer" x="0vw" y="-25vh" />
            <Skill name="GitHub" x="32vw" y="-5vh" />
            <Skill name="PHP" x="-32vw" y="-4vh" />

        </div>
        </>
    )
}

export default Skills