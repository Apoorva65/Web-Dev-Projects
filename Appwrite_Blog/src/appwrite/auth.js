import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService{
    client = new Client;
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create({userId:ID.unique(),email,password,name});
            if(userAccount){
                this.Login({email,password});
            }
        } catch (error) {
            throw error;
        }
    }

    async Login({email,password}){
        const session = await this.account.createEmailPasswordSession({email,password});
        return session;
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
        
    }
}


const authServicee = new AuthService();
export default authServicee;