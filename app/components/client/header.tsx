import Image from "next/image"
import DropdownMenu from "./hambuger"

export default function Header(){
    return(
        <header className="flex items center h-[40px] w-full top-0 fixed bg-black opacity-50">
            <div className="w-1/2 text-blue-300">
                <Image 
                className="mx-2 my-1"
                src="/img/logo.png"
                alt="logo"
                width={50}
                height={25}
                />
            </div>
            <div className="text-white w-1/2 justify-end flex items-center pr-2">
                    <DropdownMenu />
            </div>
        </header>
    )
}