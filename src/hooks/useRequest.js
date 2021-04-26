import { useEffect, useState } from "react";

function useRequest(request, random = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    request
      .then((response) => {
        if (random) {
          setData(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          );
        } else {
          setData(response.data.results);
        }
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
}

export default useRequest;
