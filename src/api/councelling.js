import api from ".";
import URLs from '../constants/urls'
import { makeAuthenticatedPostRequests } from "./authenticatedRequests";

export function getExperts(){
    return api.get(URLs.ROUTES.EXPERT.GET)
}

export function scheduleMeeting(expert,date_time){
    return makeAuthenticatedPostRequests(URLs.ROUTES.SERVICES.COUNCELLING.SCHEDULE,{
        expert,
        date_time
    })
}