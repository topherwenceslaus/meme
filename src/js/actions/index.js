import store from '../store/index'
export const transfer_balance =(data)=>({
	type: "TRANSFER_BALANCE",
	data: data
})

export const initial_balance = ()=>(
	{type: "INITIAL_BALANCE"}
	)

export const thunk_action_creator = (user)=>{

		store.dispatch(initial_balance());
	
		return (dispatch , getState)=>{
			return fetch(`https://codepen.io/andismith/pen/oqzxyP.js`)
				   .then(data => data.json())
				   .then(data=>{
					   if(data.message === ' Not Found') {
						   throw new Error('balance not found')
					   } else {
						   dispatch(initial_balance(data))
					   }
				   })
				   .catch(err => dispatch(initial_balance()))
		} 
	}