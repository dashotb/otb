import {Player} from "@lottiefiles/react-lottie-player";


export default function AIPlayer(){
    const animationURL = "https://lottie.host/353ded5b-a00c-40d7-8c32-2989e88be4f5/KxbT5j9Gci.json";

    return(
        <div >
            <Player
                src={animationURL}
                autoplay
                loop
                speed={1}
                style={{marginTop: 56}}
                /> 
        </div>
    )
}