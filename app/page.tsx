import {PiLightningDuotone} from 'react-icons/pi'
import {HiOutlineClock} from "react-icons/hi";
import {AiOutlineMessage} from "react-icons/ai";
import {FiEye} from "react-icons/fi";
import Head from "next/head";
import Header from "@/app/components/client/header";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center bg-white">
            <Header/>
            {/* <br/>
            <br/>
            <br/> */}
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-5WJ0EM90VM"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5WJ0EM90VM');
              `,
                    }}
                />

                <script
                    dangerouslySetInnerHTML={
                        {
                            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "hy5lx23rap");`,
                        }}
                />
            </Head>
            <div className="bg-white md:flex md:rounded-3xl m-20">
                <div
                    className="md:rounded-3xl md:h-[500px] rounded-b-3xl bg-gradient-to-b from-[#7115cc] to-[#3201b8] h-[400px] w-[400px] flex flex-col items-center">
                    <p className="py-8 text-xl">
                        Your Result
                    </p>
                    <div
                        className="flex flex-col justify-center items-center bg-gradient-to-b from[#a371d6] to-[#34148e] rounded-full h-[150px] w-[150px]">
                        <span className="text-6xl font-bold">76</span>
                        <p className="text-sm opacity-40">
                            of 100
                        </p>
                    </div>
                    <p className="py-5 text-xl font-bold">
                        Great
                    </p>
                    <p className="text-justify text-sm opacity-70">
                        <span>You scored higher than 65% of</span> <span>the <br/> people who have taken</span> <span>these
                  tests.</span>
                    </p>
                </div>
                <div className="bg-white w-[400px] h-[450px] flex flex-col mt-5 mb-2 md:my-0 md:rounded-r-3xl">
                    <div className="mx-5 md:h-[500px]">
                        <p className="text-black ml-1 mb-3 text-lg font-semibold md:mt-2">
                            Summary
                        </p>
                        <div className="bg-red-100 flex rounded-2xl h-[60px] p-2 items-center">
                            <div className="w-1/2 flex items-center">
                                <PiLightningDuotone className="mx-2 text-red-500"/>
                                <span className="text-red-500">Reaction</span>
                            </div>
                            <div className="w-1/2 flex justify-end mr-2">
                                <span className="text-black mr-1">80</span>
                                <span className="text-black opacity-50 ml-1">/  100</span>
                            </div>
                        </div>
                        <br/>
                        <div className="bg-yellow-100 flex rounded-2xl h-[60px] p-2 items-center">
                            <div className="w-1/2 flex items-center">
                                <HiOutlineClock className="mx-2 text-yellow-500"/>
                                <span className="text-yellow-500">Memory</span>
                            </div>
                            <div className="w-1/2 flex justify-end mr-2">
                                <span className="text-black mr-1">92</span>
                                <span className="text-black opacity-50 ml-1">/  100</span>
                            </div>
                        </div>
                        <br/>
                        <div className="bg-green-100 flex rounded-2xl h-[60px] p-2 items-center">
                            <div className="w-1/2 flex items-center">
                                <AiOutlineMessage className="mx-2 text-green-500"/>
                                <span className="text-green-500">Verbal</span>
                            </div>
                            <div className="w-1/2 flex justify-end mr-2">
                                <span className="text-black mr-1">61</span>
                                <span className="text-black opacity-50 ml-1">/  100</span>
                            </div>
                        </div>
                        <br/>
                        <div className="bg-indigo-100 flex rounded-2xl h-[60px] p-2 items-center">
                            <div className="w-1/2 flex items-center">
                                <FiEye className="mx-2 text-indigo-500"/>
                                <span className="text-indigo-500">Visual</span>
                            </div>
                            <div className="w-1/2 flex justify-end mr-2">
                                <span className="text-black mr-1">72</span>
                                <span className="text-black opacity-50 ml-1">/  100</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center m-5 mt-7 md:mt-10">
                            <button
                                className="h-[60px] w-[500px] px-4 py-2 text-white bg-blue-500 rounded-3xl hover:bg-blue-700 active:scale-90 transition duration-150 ease-in-out">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
