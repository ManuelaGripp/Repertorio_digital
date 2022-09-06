import axios from "axios";
export const api = axios.create({
  baseURL: "http://repertorio-digital.herokuapp.com/",
});

export async function getRepertorio(){

  return axios.get("http://repertorio-digital.herokuapp.com/repertorio")
  .then(res => res.data)

}