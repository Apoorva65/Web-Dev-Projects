import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query,TablesDB} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createRow({
                databaseId : conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId:slug,
                data: {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
        })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,slug,content,featuredImage,status}){
        try {
            return await this.databases.updateRow({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug,
                data : {
                    title,
                    content,
                    featuredImage,
                    status,
                }
        })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
                await this.databases.deleteRow({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug
            })
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries: queries
            })
        } catch (error) {
            throw error;
        }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
        })            
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        })
    }
}

const service = new Service();
export default service;