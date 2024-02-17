import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  // Conditionally set the initial value of the input field
  const inputValue = amount === 0 ? "" : amount.toString();

  return (
    <div className={`bg-white p-5 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/80 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none rounded-lg px-1 bg-gray-400 w-full bg-transparent py-1.5 "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={inputValue} // Use the conditional input value
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-4/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
