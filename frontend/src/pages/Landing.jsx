import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';

export default function Page() {
  const navigate = useNavigate();

  useEffect(() => {
      axios.get("http://localhost:3000/api/v1/user/auth",{
            headers: {
                  Authorization: localStorage.getItem("token")
            }
      })
      .then(response=>{
            if(response.status === 200)
            {
                  console.log(response.status);
                  navigate("/dashboard?name="+response.data.username);
            }
      })
  }, [navigate]);

  return (
      <>
      <div className='p-4 flex justify-between border-b-2 items-center'>
            <h1 className="text-xl font-bold text-blue-500">QuickPay</h1>
            <button onClick={() => {
                  navigate("/signup")
            }} className='p-2 min-w-24 bg-black text-white rounded-lg'>Sign up</button>
      </div>
      <hr />
    <div className="flex flex-col md:max-w-[90%] md:m-auto">
      <main className="flex-1">
        <section className="w-full p-4 mt-10">
          <div className="container -4 md:-6">
            <div className="grid gap-6 lg:grid-cols-2 grid-cols-1">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Paytm Wallet: Your Digital Companion
                  </h1>
                  <p className="max-w-[600] text-gray-500 md:text-xl dark:text-gray-400">
                    Securely manage your finances, make payments, and enjoy exclusive offers with the Paytm Wallet.
                    Download the app and experience the convenience of digital payments.
                  </p>
                </div>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/online-money-transfer-from-wallet-to-bank-2246210-1939259.png"
                alt="Paytm Wallet"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-[500px] sm:h-[500px] w-full"
              />
            </div>
          </div>
        </section>
        <section id="security" className="w-full p-4 ">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Secure Your Finances with Paytm Wallet
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Paytm Wallet employs advanced security measures to protect your financial information and ensure the
              safety of your transactions.
            </p>
          </div>
        </section>
        <section id="features" className="py-10">
          <div className="container md:-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 space-y-4">
              <h3 className="text-xl font-bold">Seamless Transactions</h3>
              <p className="text-gray-500">
                Paytm Wallet offers a seamless and hassle-free payment experience. Make payments with just a few taps.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 space-y-4">
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p className="text-gray-500">
                Your payments are secure with Paytm Wallet. We use the latest encryption technology to protect your
                data.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
