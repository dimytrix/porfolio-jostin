import handler from '@/pages/api/hello';
import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() =>{

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handlerChange = () => {
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
                let check = mediaQuery.matches ? "dark" : "ligth";
                setMode(check);
                window.localStorage.setItem(
                    "theme",
                    check
                );

                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handlerChange();

        mediaQuery.addEventListener("change", handlerChange)

        return () => mediaQuery.removeEventListener("change", handlerChange)

    },[])


    useEffect(() =>{
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }

        if(mode === "light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }

    }, [mode])



    return[mode, setMode]
}

export default useThemeSwitcher