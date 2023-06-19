import React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

const BacktoTop = () => {
    
    const [backtotopButton, setbacktotopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setbacktotopButton(true);
            }
            else{
                setbacktotopButton(false); 
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return <SafeAreaView>
        {backtotopButton && (
            <button style = {{
                position: 'fixed',
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px",
            }}
            onClick = {scrollUp}
            > ^
            </button>
        )}
    </SafeAreaView>
}

export default BacktoTop;