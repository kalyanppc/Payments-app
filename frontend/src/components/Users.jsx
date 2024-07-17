import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Users = ()=>{
      const [users,setUsers] = useState([]);
      const [filter, setFilter] = useState("");
      useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(response =>{
                  setUsers(response.data.users)
            })
      },[filter])
      return(
            <>
                  <div className="font-bold mt-6 text-lg">
                        Users
                        <br />
                        {filter}
                  </div>
                  <div className="my-2">
                        <input type="text" onChange={(e)=> {setFilter((e.target.value).toLowerCase())}} placeholder="Search users... " className="py-2 px-2  w-full border rounded border-slate-200" />
                  </div>
                  <div>
                        {users.map((user)=>(<User user={user} />))}
                  </div>
            </>
      )
}
function User({user}){
      const navigate = useNavigate();
      return(
            <div className="flex justify-between mb-3">
                  <div className="flex">
                        <div className="bg-slate-200 rounded-full h-12 w-12 flex justify-center mt-1 mr-2">
                              <div className="flex flex-col justify-center h-full text-xl">
                                    {user.firstName[0].toUpperCase()}
                              </div>
                        </div>

                        <div className="flex flex-col justify-center h-full font-bold">
                             {user.firstName} {user.lastName}
                        </div>
                  </div>
                  <div>
                       <div className="flex flex-col justify-center h-full">
                        <Button onClick={()=>{
                              navigate("/send?id="+user._id+"&firstName="+user.firstName);
                        }} label={"Send Money"} />
                       </div>
                  </div>
            </div>
      )
}