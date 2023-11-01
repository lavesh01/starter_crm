import reducers, { CmsState, SLICE_NAME } from './cmsSlice'

import type { RootState } from '@/store'
import type { TypedUseSelectorHook } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: CmsState
        }
    }
> = useSelector

export * from './cmsSlice'
export { useAppDispatch } from '@/store'
export default reducer
