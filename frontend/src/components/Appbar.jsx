export const Appbar = ({user})=>{
      return(
            <div className="shadow h-14 flex justify-between">
                  <div className="flex flex-col font-bold text-xl justify-center ml-4">
                        Payments app
                  </div>
                  <div className="flex">
                        <div className="flex flex-col justify-center mr-4">
                              Hello, {user} 
                        </div>
                        <div className="flex h-12 w-12 justify-center bg-slate-300 mr-2 mt-1 rounded-full">
                              <div className="flex flex-col justify-center">
                                    {user[0].toUpperCase()}
                              </div>
                        </div>
                  </div>
            </div>
      )
}