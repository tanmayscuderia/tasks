import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: {} }

export const sidebarSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer