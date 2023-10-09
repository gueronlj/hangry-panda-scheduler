import Axios from 'axios';

const API_URL = 'http://localhost:3000';
const axios = Axios.create({ baseURL: API_URL });

export const getFromDB = async (endpoint) => {
   //GET request 
   await axios.get(endpoint).then((response) => { 
      console.log(response.data);
   }).catch((error) => { 
      console.log(error); 
   }); 
   console.log(appointmentData);
}

export const postToDB = async (endpoint, newData) => {
   //POST request 
   await axios.post(endpoint, newData).then((response) => {
      console.log(response.data);
   }).catch((error) => { 
      console.log(error); 
   });
   console.log(appointmentData);
}

export const deleteFromDB = async (endpoint, targetDoc) => {
   //DELETE request
   await axios.delete(endpoint, targetDoc).then((response) => {
      console.log(response.data);
   }).catch((error) => {
      console.log(error);
   });
   console.log(targetDoc);
}

export const updateDB = async (endpoint, targetDoc, newData) => {
   //PUT request
   await axios.put(endpoint, targetDoc, newData).then((response) => { 
      console.log(response.data); 
   }).catch((error) => { 
      console.log(error); 
   });
   console.log (targetDoc);
}