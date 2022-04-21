import axios from "axios";

const ENDPOINT = "https://swapi.dev/api/people/";

const handleError = (err) => console.error(err.message);

export const getName = async () => {
  const randomNum = Math.floor(Math.random() * 82) + 1;
  const response = await axios
    .get(`${ENDPOINT + randomNum}`)
    .catch(handleError);
  return response;
};
