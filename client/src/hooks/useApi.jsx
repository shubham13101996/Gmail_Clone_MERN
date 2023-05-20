import { useState } from "react";
import API from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const call = async (payload, type = "") => {
    setResponse(null);
    setError("");
    setIsLoading(true);
    try {
      let res = await API(urlObject, payload, type);
      setResponse(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { call, error, isLoading, response };
};

export default useApi;
