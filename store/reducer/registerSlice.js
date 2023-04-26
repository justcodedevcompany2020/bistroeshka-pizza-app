import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '@env';

export const registerRequest = createAsyncThunk(
  'register',
  async (data, {rejectWithValue}) => {
    console.table(data);
    try {
      const response = await axios.post(`${API_URL}/api/registration`, data);
      console.log('====================================');
      console.log(response, 'mtav');
      console.log('====================================');
      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log(error, 'merjvec');
      console.log('====================================');
      return rejectWithValue(error.response.data);
    }
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    password_error: '',
    phone_error: '',
    loading: false,
    success: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerRequest.pending, state => {
        state.loading = true;
      })

      .addCase(registerRequest.fulfilled, (state, action) => {
        // if (action.payload.status) {
        //   localStorage.setItem('userToken', action.payload.token);
        //   state.loading = false;
        //   state.success = true;
        // }
      })

      .addCase(registerRequest.rejected, (state, action) => {
        // if (!action.payload.status) {
        //   state.phone_error =
        //     action.payload.message.phone || action.payload.message;
        //   state.password_error =
        //     action.payload.message.password || action.payload.message;
        //   state.loading = false;
        // }
      });
  },
});

export default registerSlice.reducer;
