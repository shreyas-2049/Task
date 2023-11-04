import "./App.css";
import {BiArrowBack} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {HiMiniPhone} from "react-icons/hi2";
import {AiOutlineMail} from "react-icons/ai";
import {GiMuscularTorso,GiKneeCap} from "react-icons/gi";
import {CiMedicalCase} from "react-icons/ci";
import {LiaFileMedicalAltSolid} from "react-icons/lia";
import data from './data.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
function App() {
  // const progress = 40;
  
  return (
    <div className="w-[510px] mx-auto">


      <div className="ml-2 w-full flex gap-3 items-center text-[#012E57] mt-5 pb-2 border-b-2 overflow-y-hidden">
        <BiArrowBack className="mt-1 font-extrabold text-[1.25rem] hover:cursor-pointer"/>
        <h2 className="">View patient</h2>
      </div>
      {/* patient info */}
      <div className="w-full flex justify-between mt-5 mb-5">
        <div className="flex flex-col">
          <h2 className="ml-2">{data.name} {data.gender}/{data.age}</h2>
          <h2 className="ml-2">Patient ID :{data.ID}</h2>
        </div>
        <CgProfile className="text-[2rem] h-[48px]"/>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#002647] h-[130px] rounded-[1.5rem] ml-2 relative">
        <div className="w-full h-[100px] text-[#FFFFFF]  absolute top-0 -right-[40%] mt-1">Goal Reached</div>
        <div>

          <CircularProgressbar
            value={data.progress}
            // text="20%"
            circleRatio={0.5}
            strokeWidth={10}
            styles={{
              root: {
                transform: "rotate(0.75turn)"
              },
              text:{
                transform: "rotate(0.75turn)",
                color: "#000000",
                left: "50%",
              },
              path: { stroke: "#FCB000", strokeLinecap: "butt" },
              trail: { stroke: "#D9D9D9", strokeLinecap: "butt" },
              trailColor: "grey",
              backgroundColor: "red"
            }}
            className=" absolute w-[150px] top-8 right-[60%]"
          />
        </div>
        <div className="absolute text-[#FFFFFF]  text-[2rem] font-semibold top-16 left-[6.5rem]">{`${data.progress}%`}</div>
      </div>
      {/* test */}
      
      {/* Additional info div */}
      <div className="w-full mt-5 border-b-2 pb-2 ml-2 flex flex-col gap-3">
        <div className="w-full flex ml-2">
          <h2 className="text-[#BCBCBC] w-[50%]">Phone No.</h2>
          <div className="flex items-center gap-1 right-0">
            <HiMiniPhone/>
            <h2 className="">{data.phone}</h2>
          </div>
        </div>

        <div className="w-full flex  ml-2">
          <h2 className="text-[#BCBCBC] w-[50%]">Mail ID</h2>
          <div className="flex items-center gap-1 w-fit">
            <AiOutlineMail/>
            <h2 className="">{data.email}</h2>
          </div>
        </div>
        
        <div className="w-full flex ml-2">
          <h2 className="text-[#BCBCBC] w-[50%]">Affected Side</h2>
          <div className="flex items-center gap-1 right-0">
            <GiMuscularTorso className="text-[#DF0100]"/>
            <h2 className="">{data.affected_side}</h2>
          </div>
        </div>

        <div className="w-full flex ml-2">
          <h2 className="text-[#BCBCBC] w-[50%]">Condition</h2>
          <div className="flex items-center gap-1 right-0">
            <GiKneeCap/>
            <h2 className="">{data.condition}</h2>
          </div>
        </div>

        <div className="w-full flex ml-2">
          <h2 className="text-[#BCBCBC] w-[50%]">Speciality</h2>
          <div className="flex items-center gap-1 right-0">
            <CiMedicalCase/>
            <h2 className="">{data.speciality}</h2>
          </div>
        </div>
      </div>

      {/* Medical history */}
      <div className="mt-5 ml-2 flex pb-5 border-b-2 w-full ">
        <div className="flex items-center w-[60%]">
        <LiaFileMedicalAltSolid className="text-[2rem] rotate-[0deg]"/>
        <h2 className="text-[#012E7D] font-semibold">Medical history</h2>
        </div>
        
        <h2>Hypertension,DM,Hypothyrodism</h2>
      </div>
    </div>
  );
}

export default App;
