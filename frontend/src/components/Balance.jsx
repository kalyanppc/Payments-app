export const Balance = ({balance})=>{
      return(
            <div className="flex">
                  <div className=" font-bold text-lg mr-4">
                        Your Balance
                  </div>
                  <div className="font-semibold text-lg">
                       Rs {balance}
                  </div>
            </div>
      )
}