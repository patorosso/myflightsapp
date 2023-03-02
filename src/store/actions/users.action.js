import { REALTIME_DATABASE_URL } from '../../constants/firebase';
import { usersTypes } from '../types';


const { CREATE_USER } = usersTypes;

export const createUser = (name, lastName) => ({
//   return : async (dispatch) => {
//     try {
//         const response = await fetch( `${REALTIME_DATABASE_URL}/users.json`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 date: Date.now(),
//                 name, lastName,
//             })
//         })
//     const result = await response.json();

//         dispatch({
//             type: CREATE_USER, 
//             result

//         })

//     } catch (error) {
//         dispatch({
//             type: CREATE_USER, 
//             error

//         })
        
//     }
//   }
});