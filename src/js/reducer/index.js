const initialState = {
	initailBalance:200000,
	spent:0,
	left:200000,
	transactions:[],
	isError: false
}

const asyncReducer = (state= initialState, action)=>{
	switch(action.type) {
		case "INITIAL_BALANCE": 
			return Object.assign({}, state)
		case "TRANSFER_BALANCE": 
		if(action.data.amount > state.left){
			console.log(4324234)
			return Object.assign({}, state, {isError: true})
		}
			return Object.assign({}, state, {
				spent: state.spent + Number(action.data.amount),
				left: state.left - Number(action.data.amount),
				isError: false,
				transactions : state.transactions.concat([{
						name:action.data.name,
						email: action.data.email,
						amount: action.data.amount,
						
				}])
			})	
		
		default :
			return state
	}
}

export default asyncReducer;