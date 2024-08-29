import supertest, { Response } from "supertest";

const request = supertest('')

class RequestAPI{
   

    async makeGETCall(endpoint: string, payload?: object, headers?: any){
        if (payload && headers) return request.get(endpoint).set(headers).send(payload);
        else if (payload) return request.get(endpoint).send(payload);
        else return request.get(endpoint);
    }

    async makePOSTCall(endpoint:string, payload: string | object, headers?: any){
        if (headers) return request.post(endpoint).set(headers).send(payload);
        return request.post(endpoint).send(payload);
    }

    
    async makeDELETECall(endpoint: string, payload?: object){
        if (payload) return request.delete(endpoint).send(payload);
        return request.delete(endpoint);
    }
   
    
}


export default new RequestAPI();