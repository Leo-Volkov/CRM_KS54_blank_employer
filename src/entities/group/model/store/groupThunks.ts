import { createAsyncThunk } from '@reduxjs/toolkit'
import { executeApiRTK } from '@/shared/api/apiHelpers.ts'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints.ts'
import { Group } from '../../lib/types'

interface AsyncThunkConfig {
  rejectValue: string
}

interface PaginatedResponse {
  disciplines: Group[]
}
export const getListGroups = createAsyncThunk<PaginatedResponse, void, AsyncThunkConfig>(
  'catalog/PaginationThunk',
  async (_, { rejectWithValue }) => {
    const response = await executeApiRTK<PaginatedResponse, void>({
      method: 'GET',
      url: API_ENDPOINTS.groups.getList,
      rejectWithValue,
      errorMessage: 'Ошибка при загрузке групп',
    })
    return response.data
  },
)
