
import { retornaTokenLocal } from '../services/retornaTokenLocal';

export const http = () => {
  let obj = {
    headers : {
      Authorization : `Bearer ${retornaTokenLocal()}`
    }
  }

  return obj;

}
