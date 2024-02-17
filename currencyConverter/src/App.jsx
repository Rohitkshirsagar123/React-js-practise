import { useState } from 'react';
import { InputBox } from './components';
import UseCurrencyInfo from './cHooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const handleFromCurrencyChange = (currency) => {
    setFrom(currency);
    setConvertedAmount(0); // Reset converted amount when changing currency
  };

  const handleToCurrencyChange = (currency) => {
    setTo(currency);
    setConvertedAmount(0); // Reset converted amount when changing currency
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    setConvertedAmount(0); // Reset converted amount when amount changes
  };

  return (
    <div className="flex flex-col min-h-screen" >
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center h-full justify-center"> {/* Adjusted height and flex properties */}
          <h1 className="text-3xl">Currency Converter</h1>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center "  
      style={{
        background:'rgb(177 184 214 / 90%)'
      }} >
      <div className="w-full">
        {/* <center><h1 >Currency Converter</h1></center> */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-4 backdrop-blur-sm bg-white/30">
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
                currencyOptions={options}
                onCurrencyChange={handleFromCurrencyChange} // Use proper handlers
                selectCurrency={from}
                onAmountChange={handleAmountChange} // Use proper handlers

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={handleToCurrencyChange} // Use proper handlers
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
