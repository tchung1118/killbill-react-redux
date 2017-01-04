/*
 *  Account-related action creators
 */

// temporary ID assignments (once server is done, these IDs will be generated from server)
let uid = () => Math.random().toString(36).substr(2, 9);

export const addAccount = (name) => {
	return {
		type: ADD_ACCOUNT,
		payload: {
			id: uid(),
			name: name
		}
	};
}

export const editAcountInfo = (id, accountInfo) => {
	return {
		type: EDIT_ACCOUNT_INFO,
		payload: {
			id: id,
			accountInfo: accountInfo // Immutable.Map({name, description})
		}
	};
}

export const deleteAccount = (id) => {
	return {
		type: DELETE_ACCOUNT,
		payload: {
			id: id
		}
	};
}

// async actions
export const saveAccount = (id) => {
	return {
		type: SAVE_ACCOUNT,
		payload: {
			id: id
		}
	};
}

// TODO: add more async actions as API is built