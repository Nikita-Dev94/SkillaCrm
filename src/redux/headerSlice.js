
import { createSlice } from '@reduxjs/toolkit';

export const headerReducer = createSlice({
	name: 'header',
	initialState: {
		date: null,
	},
	reducers: {
        setDate: (state, action)=> {
            state.date = action.payload
        }
	}
})

export const { setDate } = headerReducer.actions

export default headerReducer.reducer