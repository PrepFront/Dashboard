export const BACKEND_LINK = 'https://prep-front-backend.onrender.com'
export default {
    ROUTES: {
        SERVICES: {
            TECH: `${BACKEND_LINK}/service/tech-skills`,
            NON_TECH: `${BACKEND_LINK}/service/non-tech-skills`,
            INIT: `${BACKEND_LINK}/service/init-step`,
            DCS:{
                GET: `${BACKEND_LINK}/service/dcs`
            },
            COUNCELLING: {
                SCHEDULE: `${BACKEND_LINK}/service/councelling/schedule`,
            }
        },
        USER: {
            SIGNUP: `${BACKEND_LINK}/user/signup`,
            LOGIN: `${BACKEND_LINK}/user/login`,
            TOKEN: `${BACKEND_LINK}/user/token`,
            USER_DETAIL: `${BACKEND_LINK}/user/me`,
        },
        EXPERT: {
            GET: `${BACKEND_LINK}/experts/get`
        },
    },
}
