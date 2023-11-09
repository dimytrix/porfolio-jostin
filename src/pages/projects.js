import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/GymFitness.jpg"
import project2 from "../../public/images/projects/loginjs.jpg"
import project3 from "../../public/images/projects/cripto.png"
import project4 from "../../public/images/projects/ps5-xbox.png"
import project5 from "../../public/images/projects/cards.png"
import project6 from "../../public/images/projects/porfolio.png"
import TrasitionEffect from '@/components/TransitionEffect';

const FeaturedProject =({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
         rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light  
            rounded-br-3xl
            ' />
        

        <Link href={link} 
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
            <Image src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg-pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>    
                <Link
                 href={link}
                 target='_blank'
                 className='hover:underline underline-offset-2'
                 >

            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'>
                {" "}
                 <GithubIcon />{" "} 
                 </Link>
            <Link
             href={link} 
             target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            '
            >
             Visit Project
             </Link>
            </div>
            </div>    
            
        </article>
    )
}

const Project = ({title, type, img, link, github}) =>{

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>

    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light  
            rounded-br-3xl
            ' />
            <Link href={link} 
            target='_blank'
         className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <Image src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>    
                <Link 
                href={link} 
                target='_blank' 
                className='hover:underline underline-offset-2'
                >

            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank'
            className='text-lg font-semibold underline md:text-base'
            >Visit
            </Link>
            <Link href={github} target='_blank' className='w-8 md:w-6'> 
            <GithubIcon /> 
            </Link>
            
            </div>
            </div>  
        </article>
    )
}

const projects = () => {
    return(
        <>
        <Head>
        <title>JRCode | Projects Page</title>
        <meta name="description" content='any description' />
       </Head>
       <TrasitionEffect />
       <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!"
            
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'

            />

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject 
                    
                title="GYM Fitness Academy "
                img={project1}
                summary="Page created with HTML 5, CSS3, JS, WordPress and PHP where you can configure all the data from an administration room."
                github="https://dev-gymfitnessjos.pantheonsite.io"
                link="https://dev-gymfitnessjos.pantheonsite.io"    
                type='Feature Project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    
                    title="Responsive Login & Registration"
                    img={project2}
                    summary="Page login created with HTML 5, CSS3 and JS "
                    github="https://github.com/dimytrix/Responsive-Login-Registration-JR.git"
                    link="https://resposivelogingjscode.netlify.app"    
                    type='Feature Project'
                        />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    
                    title="Split Landing Page"
                    img={project4}
                    summary="."
                    github="https://github.com/dimytrix/Split-Landing-Page"
                    link="https://landeripage.netlify.app"    
                    type='Feature Project'
                        /></div>

                <div className='col-span-12'>  <FeaturedProject 
                    
                    title="responsive crypto dashboard assets"
                    img={project3}
                    summary="Page login created with HTML 5, CSS3 and JS."
                    github="https://github.com/dimytrix/responsive-crypto-dashboard-assets"
                    link="https://criptorespotive.netlify.app"    
                    type='Feature Project'
                        /></div>
                
                <div className='col-span-6 sm:col-span-12'><Project
                    
                    title="Card Design in HTML CSS & JS"
                    img={project5}
                    summary="Page created with HTML 5, CSS3, JS, WordPress and PHP where you can configure all the data from an administration room."
                    github="https://github.com/dimytrix/Card-Design-in-HTML-CSS-JavaScript"
                    link="https://cardsjss.netlify.app"    
                    type='Feature Project'
                        /></div>
                <div className='col-span-6 sm:col-span-12'><Project
                    
                    title="Portfolio created with Js"
                    img={project6}
                    summary="Page created with HTML 5, CSS3, JS, WordPress and PHP where you can configure all the data from an administration room."
                    github="https://github.com/dimytrix/portfolioJRCode"
                    link="https://portfoliojscode.netlify.app"    
                    type='Feature Project'
                        /></div>
            </div>

        </Layout>
        </main>
        </>
    )
    
}

export default projects 