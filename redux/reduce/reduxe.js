import { createSlice } from "@reduxjs/toolkit";

const sideBarFav = createSlice({
  name: "sideBarFav",
  initialState: {
    panier: [],
    connecter: false,
    text:'',
    modal:'translate-y-full',
    comptes:[]
  },
  reducers: {
    fermerModal(state){
      state.modal='translate-y-full'
    },
    retrait(state, action) {
    if (state.connecter == true) {

     const dansPanier = state.panier.some(article => article.id === action.payload.id);
      if (dansPanier) {
        state.modal='translate-y-0'
        return state; // Si l'article est déjà dans les favoris, ne rien faire
      } else {
        return {
          ...state,
          panier: [...state.panier, action.payload]
        }
      }
    
    }
  
  else{
    state.text='Connectez-vous ici'  
    alert('connectez-vous')
  }
    },
    ajoutPanier(state, action) {
      const newpanier = state.panier.filter(article => article.id !== action.payload);
      return {
        ...state,
        panier: newpanier
      };
  
  
    },
    simpleLogin(state) {
      
      state.text=''
      state.connecter=true
      
    }
  },
});

export const { retrait, ajoutPanier, simpleLogin, fermerModal } = sideBarFav.actions;

export default sideBarFav.reducer;

