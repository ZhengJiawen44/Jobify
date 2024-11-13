import { v2 as cloudinary } from "cloudinary";

export const uploadToCLoudinary = async(filePath)=>{
    const data = await cloudinary.uploader.upload(filePath);
    return data;
    
}
export const destroyImage = async(public_id)=>{
    cloudinary.uploader.destroy(public_id)
}