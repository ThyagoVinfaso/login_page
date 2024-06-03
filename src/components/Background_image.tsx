import Image from "next/image"

export default function Background(){

const background = require("../../public/assets/Background_image.png");

 return(

    <div className="flex flex-auto absolute z-0 w-[100wh] h-[100vh]">
        <Image className="object-cover" alt="background" src={background}/>

    </div>

)

}