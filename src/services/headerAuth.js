import axios from 'axios';
import { retornaTokenLocal } from '../services/retornaTokenLocal';

export const http = axios.create({

  headers : {
    Authorization : `Bearer ${retornaTokenLocal()}`
  },

});
