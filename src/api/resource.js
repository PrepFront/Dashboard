import api from '.';
import URLs from '../constants/urls'

export function getResources(_type){
    let requestUrl;
    switch(_type){
        case 'tech': requestUrl=URLs.ROUTES.SERVICES.TECH
                        break
        case 'non-tech': requestUrl=URLs.ROUTES.SERVICES.NON_TECH
                        break
        case 'init': requestUrl=URLs.ROUTES.SERVICES.INIT
                        break
        default: return Promise.resolve('bad request')
    }
    return api.get(requestUrl)
}