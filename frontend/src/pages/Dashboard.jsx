import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useSearchParams } from "react-router-dom";
import axios from "axios";


export default function Dashboard(){
      const [searchParams] = useSearchParams();
      const [balance, setBalance] = useState(0);
      const user = searchParams.get("name");
      
      useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/accounts/balance",{
                  headers: {
                        Authorization: localStorage.getItem("token")
                  }
            })
            .then(response=>{
                  setBalance(response.data.balance);
            })
      },[])
      return(
            <div>
                  <Appbar user={user} />
                  <div className="ml-5 mt-5 mr-5">
                        <Balance balance={balance} />
                        <Users />
                  </div>
            </div>

      )

}