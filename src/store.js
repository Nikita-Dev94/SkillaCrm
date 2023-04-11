import { configureStore } from '@reduxjs/toolkit'
import  headerReducer  from './redux/headerSlice'
import callsReducer  from './redux/callsSlice'

export default configureStore({
  reducer: {
    header: headerReducer,
    calls: callsReducer,
  },
})