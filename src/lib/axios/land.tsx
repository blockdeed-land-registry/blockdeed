import { api } from './index'

// register new account
async function registerLand(values: any) {
    try {
        
        const response = await api.post('/land/create', values)
        return response?.data
    } catch (error) {
        throw error?.response?.data || error;
    }
}

// get all my lands
async function getLandsByUserId(userId:string){
    try{
        const response = await api.get(`/land/owner/${userId}`);
        return response?.data;
    }catch(error){
        throw error?.response?.data || error;
    }
}

export { registerLand, getLandsByUserId }