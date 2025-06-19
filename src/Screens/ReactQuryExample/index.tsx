import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
const getTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};
export const ReactQuryExample = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <div>okayy</div>;
};
