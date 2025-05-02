// Example fix in uploadactions.ts
'use server'
const uploadactions = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const preset=process.env.NEXT_FILE_DATA_NAME
    formData.append("upload_preset", `${preset}`);
    const database=process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const res = await fetch(`https://api.cloudinary.com/v1_1/${database}/image/upload`, {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
    return data.secure_url; // This is the actual image URL
  };
  
  export default uploadactions;
  