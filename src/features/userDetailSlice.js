import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create User Details action
export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:4000/insert', data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

//Read User Details action
export const showUser = createAsyncThunk('showUser', async ({ rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:4000/showdata')
        console.log("🚀 ~ file: userDetailSlice.js:19 ~ showUser ~ response:", response)
        return response.data;
    } catch (error) {
        console.log("🚀 ~ file: userDetailSlice.js:22 ~ showUser ~ error:", error)
        return rejectWithValue(error);
    }
})

//delete User Details action
export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`http://localhost:4000/delete/${id}`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

//update User Details action
export const updateUser = createAsyncThunk('updateUser', async (updateData, { rejectWithValue }) => {
    try {
        const response = await axios.put(`http://localhost:4000/update/${updateData._id}`, { updateData });
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state, action) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [showUser.pending]: (state, action) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteUser.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((item) => item._id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((item) =>
                item._id === action.payload.id ? action.payload : item
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
});

export default userDetail.reducer;