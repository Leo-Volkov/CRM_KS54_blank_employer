import { store } from '@/app/store/configureStore'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
