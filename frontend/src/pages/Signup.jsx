import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup(){
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();
      return(
            <div className="bg-slate-300 h-screen flex justify-center">
                  <div className="flex flex-col justify-center">
                        <div className="bg-white w-80 rounded-lg h-max text-center px-4">
                              <Heading label={"Sign up"} />
                              <SubHeading info={"Enter your information to create an account"} />
                              <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"First Name"} placeholder={"Kalyan"} />
                              <InputBox onChange={(e)=>{setLastName(e.target.value)}}  label={"Last Name"} placeholder={"PPC"} />
                              <InputBox onChange={(e)=>{
                                    setUsername(e.target.value)
                              }} label={"Email"} placeholder={"kalyan@gmail.com"} />
                              <InputBox onChange={(e)=>{
                                    setPassword(e.target.value)
                              }} label={"Password"} placeholder={"123456"} />
                              <div className="pt-4">
                                    <Button onClick={async()=>{
                                          console.log("button clicked")
                                          const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                                firstName,
                                                lastName,
                                                username,
                                                password
                                          })
                                          if(response.status == 200){
                                                localStorage.setItem("token",response.data.token);
                                                navigate('/dashboard?name='+response.data.name);
                                          }else{
                                                alert("no proper username or email sent");
                                          }
                                    }} label={"Sign up"} />
                              </div>
                              <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                        </div>                  
                  </div>
            </div>
      )
}