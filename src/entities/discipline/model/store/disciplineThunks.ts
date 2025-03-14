// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { executeApiRTK } from '@/shared/api/apiHelpers.ts'
// import { API_ENDPOINTS } from '@/shared/api/constEndpoints.ts'
// import { Discipline } from '@/entities/discipline/lib/types'

// interface AsyncThunkConfig {
//   rejectValue: string
// }

// export interface PaginationParams {
//   query: string
//   page: number
//   category: string
//   userName?: string
//   limit?: number
// }
// export interface PaginatedResponse {
//   countFolders?: number
//   items: FolderItem[]
//   status: string
// }

// export const getListDiscipline = createAsyncThunk<PaginatedResponse, PaginationParams, AsyncThunkConfig>(
//   'catalog/PaginationThunk',
//   async ({ query, page, category, userName = '', limit = 10 }: PaginationParams, { rejectWithValue }) => {
//     const response = await executeApiRTK<PaginatedResponse, PaginationParams>({
//       method: 'GET',
//       url: API_ENDPOINTS,
//       body: { query, page, category, userName, limit },
//       rejectWithValue,
//       errorMessage: 'Ошибка при загрузке данных пагинации',
//     })
//     return response.data
//   },
// )
