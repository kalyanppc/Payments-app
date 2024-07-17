import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Send() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const id = searchParams.get("id");
  const firstName = searchParams.get("firstName");
  return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center">
        <div className="flex flex-col justify-center h-full">
          <div className="border bg-white h-min w-96 rounded-lg shadow-lg space-y-8 max-w-md px-8 pb-6">
            <div className="flex flex-col p-6">
              <h2 className="text-center text-3xl font-bold">Send Money</h2>
            </div>
            <div>
              <div className="flex">
                <div className="flex justify-center bg-green-400 h-12 w-12 rounded-full">
                  <div className="flex flex-col justify-center text-white">
                        {firstName[0].toUpperCase()}
                  </div>
                </div>
                <div className="flex justify-center pl-4">
                  <div className="flex flex-col justify-center font-bold text-2xl">
                  {firstName}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                  <div className="font-bold text-sm">Amount (in Rs)</div>
                  <input onChange={(e)=>{setAmount(e.target.value)}} type="number" placeholder="Enter amount" className="w-full border px-2 py-2 rounded text-sm "/>
                  <button onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/accounts/transfer",{
                      to: id,
                      amount
                    },{
                      headers:{
                        Authorization: localStorage.getItem("token")
                      }
                    }).then(response=>{if(response.status == 200){alert("Transfer successful")}})
                  }} type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Initiate transfer</button>
                  <button onClick={()=>{navigate("/dashboard?name="+localStorage.getItem("name"))}} type="button" className="w-full text-white bg-blue-600 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back To Dashboard</button> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
