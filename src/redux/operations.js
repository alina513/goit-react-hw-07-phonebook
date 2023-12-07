import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65702da009586eff6640d85c.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
async (_, thunkAPI) => {
    try{
    const response = await axios.get("/contacts");
    console.log(response)
     return response.data;}
     catch(e) {
        return thunkAPI.rejectWithValue(e.message);
     }
})



export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async ({ name, number }, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );