import axios, { AxiosError } from 'axios'
import { PostTheme } from 'src/domain/postThemes'
import { isNullishCoalesce } from 'typescript'

import { PostUserTaps } from '../domain/postUserTaps'
import { UserInfo, LoginInfo } from '../domain/userInfo'


//サーバー接続の切り替え
let domain: string
switch (window.location.host) {
   case 'localhost:3000':
      domain = 'http://localhost:8080'
      break
   case '': //本番
      domain = ''
      break
   default:
      domain = ''
}

const headers = {
   headers: {
      client: 'SVw5fDxYha8h23nSs0srKw',
      uid: 'test@example.com',
      'access-token': 'JhQx8e8LM0pIiTy21x9Ljw',
   },
}

const errorHandler = (error: AxiosError) => {
   if (error.response) {
      switch (error.response.status) {
         case 400:
            alert('400' + error.message)
            break
         case 401:
            alert('401' + error.message)
            break
         case 403:
            alert('403' + error.message)
            break
         case 404:
            alert('404' + error.message)
            break
         case 500:
            alert('500' + error.message)
            break
         default:
            alert(error.message)
      }
   } else if (error.request) {
      alert(error.request)
   } else {
      alert('Error' + error.message)
   }
}

export const Api = {
   getThemes: (name: string | undefined): Promise<Error> => {
      const api = name
         ? `${domain}/api/themes?name=${name}`
         : `${domain}/api/themes`
      return axios
         .get(api)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   postThemes: (postThemeData: PostTheme): Promise<Error> => {
      return axios
         .post(`${domain}/api/themes`, postThemeData, headers)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   getTheme: (id: string | undefined): Promise<Error> => {
      return axios
         .get(`${domain}/api/themes/${id}`, headers)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   postUserTaps: (postUserTaps: PostUserTaps): Promise<Error> => {
      return axios
         .post(`${domain}/api/user_taps`, postUserTaps, headers)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   signIn: (loginInfo: LoginInfo): Promise<Error> => {
      return axios
         .post(`${domain}/auth/sign_in`, loginInfo, headers)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   // getMyInfo: (): Promise<Error> => {
   //    return axios
   //       .get(`${domain}/api/users/myinfo`, null, userData)
   //       .then((response) => {
   //          return response.data
   //       })
   //       .catch((error) => {
   //          errorHandler(error)
   //       })
   // },
   // logout: (): Promise<Error> => {
   //    return axios
   //       .delete(`${domain}/api/sign_in`)
   //       .then((response) => {
   //          return response.data
   //       })
   //       .catch((error) => {
   //          errorHandler(error)
   //       })
   // },
}
