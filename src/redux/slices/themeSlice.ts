import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  darkTheme?: boolean;
  fontTheme?: string | null;
  background?: string;
}

const initialState: ThemeState = {
  darkTheme: false,
  fontTheme: null,
  background: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
}


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state, action:PayloadAction<boolean>) => {
      state.darkTheme = action.payload
    },
    setBackground: (state, action:PayloadAction<string>) => {
      state.background = action.payload
    },
    setFontTheme: (state, action:PayloadAction<string>) => {
      state.fontTheme = action.payload
    },
    resetTheme : (state) => {
      state.darkTheme = false
      state.fontTheme = null
      state.background = 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)'
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDarkTheme,setBackground,setFontTheme,resetTheme  } = themeSlice.actions

export default themeSlice.reducer