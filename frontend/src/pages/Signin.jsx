import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin(){
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();
      return(
            <div className="bg-slate-300 flex justify-center h-screen">
                  <div className="flex flex-col justify-center">
                        <div className="bg-white w-80 rounded-lg text-center p-2 h-max px-4">
                              <Heading label={"Sign in"} />
                              <SubHeading info={"Enter the credentials to access the account"} />
                              <InputBox onChange={(e)=>{
                                    setUsername(e.target.value)
                              }} label={"Email"} placeholder={"kalyan@gmail.com"}/>
                              <InputBox onChange={(e)=>{
                                    setPassword(e.target.value)
                              }} label={"Password"} placeholder={"123456"} />
                              <div className="pt-4">
                                    <Button onClick={async ()=>{
                                          const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                                                username,
                                                password
                                          })
                                          localStorage.setItem("token","Bearer "+response.data.token);
                                          localStorage.setItem("name",response.data.name);
                                          navigate("/dashboard?name="+response.data.name)
                                    }} label={"Sign in"} />
                              </div>
                              <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                        </div>
                  </div>
            </div>
      )
}