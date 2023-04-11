
import { createSlice } from '@reduxjs/toolkit';

export const callsReducer = createSlice({
	name: 'calls',
	initialState: {
		balance: 293,
		calls: []
	},
	reducers: {
        setCalls: (state, action)=> {
            state.calls = action.payload
        }
	}
})

export const { setCalls } = callsReducer.actions

export default callsReducer.reducer