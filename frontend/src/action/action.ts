import axios, { AxiosError } from 'axios'
import { PostTheme } from 'src/domain/postThemes'
import { isNullishCoalesce } from 'typescript'

import { PostUserTaps } from '../domain/postUserTaps'
import { UserInfo, LoginInfo } from '../domain/userInfo'

//サーバー接続の切り替え
let domain: string
switch (window.location.host) {
   case 'localhost:3000':
      domain = 'https://d1-tiptap.herokuapp.com'
      break
   case '': //本番
      domain = ''
      break
   default:
      domain = 'https://d1-tiptap.herokuapp.com'
}

const headers = {
   headers: {
      client: '',
      uid: '',
      'access-token': '',
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
   getThemes: (name: string | undefined, headers: any): Promise<Error> => {
      const requestConfig = {
         headers,
      }
      const api = name
         ? `${domain}/api/themes?name=${name}`
         : `${domain}/api/themes`
      return axios
         .get(api, requestConfig)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   postThemes: (postThemeData: PostTheme, headers: any): Promise<Error> => {
      const requestConfig = {
         headers,
      }
      return axios
         .post(`${domain}/api/themes`, postThemeData, requestConfig)
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
   postUserTaps: (postUserTaps: PostUserTaps, headers: any): Promise<Error> => {
      const requestConfig = {
         headers,
      }
      return axios
         .post(`${domain}/api/user_taps`, postUserTaps, requestConfig)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   signIn: (
      loginInfo: LoginInfo
   ): Promise<Error> | Promise<void | UserInfo> => {
      return axios
         .post(`${domain}/api/auth/sign_in`, loginInfo)
         .then((response) => {
            return response.headers
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   getMyInfo: (headers: any): Promise<Error> => {
      const requestConfig = {
         headers,
      }
      return axios
         .get(`${domain}/api/users/myinfo`, requestConfig)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
   logout: (headers: any): Promise<Error> => {
      const requestConfig = {
         headers,
      }
      return axios
         .delete(`${domain}/api/sign_out`, requestConfig)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
}
