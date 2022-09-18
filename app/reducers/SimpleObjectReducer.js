const initialState = {
	data: {},
	isLoading: false,
	error: '',
};

export default function SimpleObjectReducer(modelName) {
	return (state = initialState, action) => {
		switch (action.type) {
			case `GET_${modelName}_BEGIN`:
				return {
					...state,
					isLoading: true,
					error: '',
				};
			case `GET_${modelName}_SUCCESS`:
				return {
					...state,
					data: {
						...state.data,
						...action.payload,
					},
					isLoading: false,
				};
			case `SET_${modelName}_DATA`:
				return {
					...state,
					data: {
						...state.data,
						...action.payload.data,
					},
				};
			case `GET_${modelName}_FAILURE`:
				return {
					...initialState,
					error: action.payload.error.status,
					isLoading: false,
				};
			case `RESET_${modelName}`:
				return {
					...initialState,
				};
			default:
				return state;
		}
	};
}
