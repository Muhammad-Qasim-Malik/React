import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import '/Downloader-La-974610.jpg';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);                      /* Using State for set amount */
  const [from, setFrom] = useState('usd');                      /* Using State for set From Currency */
  const [to, setTo] = useState('inr');                          /* Using State for set To Currency */
  const [convertedAmount, setConvertedAmount] = useState(0);    /* Using State for set Converted Amount */
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {                  /* Creating Swap Function to Swap Values */
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {               /* Creating Convert Function to convert */
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);    /* Multiply {From} with {to} if exists */
    }
  };

  return (
    <div
      className="w-full h-screen bg-black flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/Downloader-La-974610.jpg')`,    /* Setting Background Image */
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();               /* Using Prevent Default on Form Submit */
              convert();                        /* Calling convert function on Form Submit */
            }}
          >
            <div className="w-full mb-1">
              <InputBox                         /* Creating From Input From Inputbox */
                label="From"                    /* Label */
                amount={amount}                 /* Setting amount from state */
                currencyOptions={options}       /* Setting Currency Options got from API */
                onCurrencyChange={(currency) => setFrom(currency)}   /* Setting Currency to {From} */
                selectCurrency={from}           /* Setting Currency from the {from} */
                onAmountChange={(amount) => setAmount(amount)}  /* Set New Amount in the state */
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}        /* Setting Convertedamount from state to {to}*/
                currencyOptions={options}       /* Setting Currency Options got from API */
                onCurrencyChange={(currency) => setTo(currency)} /* Setting Currency to {to} */
                selectCurrency={to}             /* Setting Currency from the {to} */
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
