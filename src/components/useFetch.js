import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        setIsPending(false);
        if (!res.ok) {
          throw Error("Something went wrong");
        } else {
          setError(null);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setIsPending(false);
        setData(data);
        setError(null);
      })

      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
