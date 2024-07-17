import {Link} from "react-router-dom";
export default function BottomWarning({label, buttonText, to}){
      return(
            <div className="py-2 flex justify-center text-sm ">
                  <div>
                        {label}
                  </div>
                  <Link className="underline pointer cursor-pointer pl-1" to={to}>
                        {buttonText}
                  </Link> 
            </div>
      )
}