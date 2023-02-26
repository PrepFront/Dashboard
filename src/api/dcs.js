import api from ".";
import URL from '../constants/urls'

export function getDCSLinks(){
    return api.get(URL.ROUTES.SERVICES.DCS.GET)
}