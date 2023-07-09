import {PiLightningDuotone} from 'react-icons/pi'
import {HiOutlineClock} from "react-icons/hi";
import {AiOutlineMessage} from "react-icons/ai";
import {FiEye} from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white">
          <div className="rounded-b-3xl bg-gradient-to-b from-[#7115cc] to-[#3201b8] h-[400px] w-[400px] flex flex-col items-center">
              <p className="py-8 text-xl">
                  Your Result
              </p>
              <div className="flex flex-col justify-center items-center bg-gradient-to-b from[#a371d6] to-[#34148e] rounded-full h-[150px] w-[150px]">
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
          <div className="bg-white w-[400px] h-[500px] flex flex-col my-5">
              <div className="mx-5">
                  <p className="text-black ml-1 mb-3 text-lg font-semibold">
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
                  <div className="flex items-center justify-center m-5 mt-10">
                      <button className="bg-black h-[60px] w-[500px] opacity-80 rounded-full">
                          Continue
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}
