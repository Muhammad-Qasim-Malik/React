import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/cdbd0c3ac2069eb2cd1e2157/latest/${currency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.conversion_rates);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching currency data:", err);
      });
  }, [currency]);

  console.log(data);

  // Return empty object in case of error
  return error ? {} : data;
}

export default useCurrencyInfo;
