import http from 'k6/http'
import {sleep, check} from 'k6'
import { pegarBaseURL } from '../utils/variaveis.js'
const postLogin = JSON.parse(open("../fixtures/postLogin.json"))


//set K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js
export const options = {
    //iterations: 15,
    stages: [
        { duration: '10s', target: 10},
        { duration: '20s', target: 10},
        { duration: '10s', target: 30},
        { duration: '20s', target: 30},
        { duration: '20s', target: 0},
        
    ],
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']

    },

}

export default function () {
    const url = pegarBaseURL() + '/login'
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    }

    const res = http.post(url, payload, params)
    check(res, {
        'Validar que o Status é 200': (r) => r.status === 200,
        'Validar que o Token é string': (r) => typeof(r.json().token) == 'string',
    })

    
    sleep(2)

}

