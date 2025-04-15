import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IGetTracksResponse} from "@/api/types";
// import {IGamePlatformsResponse} from "@/api/types";

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jamendo.com',
    prepareHeaders: (headers: Headers): Headers => {
      headers.set('accept', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getPlatformsList: builder.query<IGetTracksResponse, string>({
      query: (searchName) => ({
        url: `/v3.0/tracks/`,
        method: 'GET',
        params: {
          namesearch: searchName,
        }
      })
    })
  }),
})

export const {
  // useGetPlatformsListQuery
} = musicApi