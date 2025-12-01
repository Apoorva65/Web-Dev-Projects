import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmout] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const [convertedAmount,setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  function swap(){
    let temp = from;
    setFrom(to)
    setTo(temp)
  }

  function convert(){
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const BackgroundImage = 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg'

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
        style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                selectCurrency={from}
                                onAmountchange={(amount)=>setAmout(amount)}
                                onCurrencyChange={(curr)=>setFrom(curr)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                selectCurrency={to}
                                onAmountchange={(amt)=>setAmout(amt)}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                amountDisable = {true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
