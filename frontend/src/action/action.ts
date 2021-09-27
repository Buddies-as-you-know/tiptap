import axios, { AxiosError } from 'axios'
import { PostTheme } from 'src/domain/postThemes'

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
         .post(`${domain}/api/themes`, postThemeData)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
}
