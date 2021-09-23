import axios, { AxiosError } from 'axios'

//サーバー接続の切り替え
let api: string
switch (window.location.host) {
   case 'http://localhost:3000':
      api = 'http://localhost:5000'
      break
   case '': //本番
      api = ''
      break
   default:
      api = ''
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
   test: async (): Promise<Error> => {
      return await axios
         .post(`${api}/test`)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            errorHandler(error)
         })
   },
}
