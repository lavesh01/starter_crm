import { apiDeleteBlog, apiGetBlogData, apiPostBlogData } from '@/services/BlogService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blog/data/fetchBlogs', async () => {
    const response = await apiGetBlogData()
    return response.data;
})

type PostBlogData = { title:string,description:string,category:string }

export const postBlogs = createAsyncThunk('blog/data/postBlogs', async (data: PostBlogData) => {
    const response = await apiPostBlogData(data)
    return response.data;
})

export const deleteBlog = createAsyncThunk('blog/data/deleteBlog', async (params: {id: string}) => {
    const response = await apiDeleteBlog(params)
    return response.data;
})



type Blog = {
    id: string;
    title: string;
    description: string;
    category: string;
};

export type BlogState = {
    loading: boolean
    blogData: Blog[],
    isError: boolean
}

const initialState: BlogState = {
    loading: true,
    blogData: [],
    isError: false
}

export const SLICE_NAME = 'blog'

const blogSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loading = false
                state.blogData = action.payload
            })
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchBlogs.rejected, (state,action) => {
                console.log("Error: ", action.payload)
                state.isError = true
            })
    },
})

export default blogSlice.reducer;