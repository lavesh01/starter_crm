import ApiService from './ApiService'

export async function apiGetCategoryData<T>() {
    return ApiService.fetchData<T>({
        url: '/blog/category',
        method: 'get',
    })
}
export async function apiPostBlogData<T>() {
    return ApiService.fetchData<T>({
        url: '/blog',
        method: 'post',
    })
}

