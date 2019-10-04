import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'


const api = axios.create({
    /* baseURL: 'https://ditudo-backend.herokuapp.com', */
    baseURL: 'https://ditudo.herokuapp.com/',

})

api.interceptors.request.use(async function (config) {
    
    await AsyncStorage.getItem('@Capivara:token').then(token => {
        if (token) {
            config.headers.Authorization = 'Bearer '+token;
        }
      });
   
    return config;
})

export default api