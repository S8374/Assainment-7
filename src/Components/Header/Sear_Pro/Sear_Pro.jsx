import { CiSearch} from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const SearPro = () => {
    return (
        <div className="flex">
              <div className="w-64 h-12 bg-slate-200 flex justify-center items-center rounded-3xl">
                   <div className="flex w-full justify-evenly ">
                      <CiSearch />
                      <input className="bg-slate-200 border-none outline-none"  type="text" placeholder="Search....." />
                   </div>
              </div>
              <div className="w-12 h-12 bg-customGreen flex justify-center items-center rounded-full">
                   <div className="text-3xl">
                       <CgProfile />
                   </div>
               
              </div>
        </div>
    );
};

export default SearPro;