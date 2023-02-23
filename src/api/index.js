import axios from "axios";
import _merge from 'lodash/merge'

export default {
    post(url, data, config={}){
        config = _merge({},config)
        const promise = axios.post(url,data,config)
        return promise
    },
    get(url, config={}){
        config = _merge({},config)
        const promise = axios.get(url,config)
        return promise
    }
}