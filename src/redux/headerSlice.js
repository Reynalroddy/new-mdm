import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    items:localStorage.getItem('itemsInvoice')?JSON.parse(localStorage.getItem('itemsInvoice')):[],
    addy:"",
    date:"",
    total:0,
  },

  reducers: {
    addItem:(state,action)=>{
state.items = [...state.items,action.payload];
localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
    },
    removeItem:(state,action)=>{
const id = action.payload;
const newItem = state.items.filter((item)=>item.id !==id);
state.items =newItem;
localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
    },
    toggleHeader: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },

    handleChange:(state,action)=>{
return {...state,[action.payload.name]:action.payload.value};

    }
  },
});

export const { addItem,removeItem,handleChange } = headerSlice.actions;

export default headerSlice.reducer;
