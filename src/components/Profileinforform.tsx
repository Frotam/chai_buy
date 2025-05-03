'use client'
// import Getprofile from "@/app/actions/Getprofile";
import { saveprofile } from "@/app/actions/Profileinfoaction";
import uploadactions from "@/app/actions/uploadactions";
import { authOptions } from "@/app/lib/authoptions";
import { Profileinfo } from "@/app/models/Profileinfo";
import { getServerSession } from "next-auth";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
type Props={
  profileinfo:Profileinfo|null
  avatar: string | null | undefined;
}

function Profileinforform({profileinfo,avatar}:Props  ) {



  const save = async (formdata: FormData) => {
    const data = await saveprofile(formdata);
    console.log(data);
  };
 
  
  const [url, setUrl] = useState<string | null>(
    null
  );
  const [avatarurl, setAvatarurl] = useState<string | null>(
    null
  );

  useEffect(() => {
    // Cover image
    if (profileinfo?.coverurl) {
      setUrl(profileinfo.coverurl);
    } else {
      setUrl(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1746175525/OIP_mm4lto.jpg`);
    }
  
    // Avatar image — use user's uploaded one if exists, else fallback to session avatar
    if (profileinfo?.avatar) {
      setAvatarurl(profileinfo.avatar);
    } else {
      setAvatarurl(avatar ?? "");
    }
  }, [profileinfo, avatar]);
  
  const upload = async (ev: ChangeEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      console.log("upload the file", file);
      const uploadedUrl = await uploadactions(file);
      setUrl(uploadedUrl);  
      console.log("uploaded banner url:", uploadedUrl);
    }
  };
  const uploadAvatar=async (ev:ChangeEvent<HTMLInputElement>)=>{
    const target=ev.target as HTMLInputElement
    if(target.files?.length){
      const file=target.files[0];
      const uploadedUrl = await uploadactions(file);
      setAvatarurl(uploadedUrl)
      console.log("uploaded avatar", uploadedUrl);

    }





  }
  return (
    <form action={save}>
      <div className="bg-gray-200 p-4 rounded-lg">
        {/* Wrapper for the image banner */}
        <div className="relative w-full h-40 bg-gray-300 mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('${url}')` }}
          ></div>
         <div className="relative z-10 flex justify-center items-center h-full">
  <div
    className="bg-gray-300 size-24 rounded-full p-4 flex justify-center items-center"
    style={{
      backgroundImage: `url('${avatarurl || "https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1746175525/OIP_mm4lto.jpg"}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '150px', // Adjust the size to fit your design
      width: '150px', // Same as height for a perfect circle
    }}
  >
    {/* Avatar upload icon */}
    <div className="absolute inset-0 flex justify-center items-center cursor-pointer">
      <input
        type="file"
        id="avatar-upload"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={uploadAvatar}
      />
      <label
        htmlFor="avatar-upload"
        className="bg-amber-600 text-white p-2 rounded-full absolute z-20"
        style={{ bottom: '5px', right: '5px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v4.618l2.707-2.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 8.618V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  </div>
</div>

        </div>


        {/* Upload Section */}
        <div className="relative w-full mt-5">
          <div className="flex items-center gap-5">
            <p>Cover Image</p>
            <input
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={upload}
            />
            <label
              htmlFor="file-upload"
              className="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Choose File
            </label>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="usernameIn" className="block text-sm font-medium text-gray-700" >
              Username
            </label>
            <input
              defaultValue={profileinfo?.username}
              id="usernameIn"
              type="text"
              name="username"
              placeholder="Username"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="displaynameIN" className="block text-sm font-medium text-gray-700">
              Display Name
            </label>
            <input
            defaultValue={profileinfo?.displayName}
              id="displaynameIN"
              type="text"
              name="displayName"
              placeholder="Display name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <input type="hidden" name="coverurl" value={url || ""} />
          <input type="hidden" name="avatar" value={avatarurl || ""} />

          <div>
            <label htmlFor="bioIn" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
            defaultValue={profileinfo?.bio}
              id="bioIn"
              name="bio"
              placeholder="Bio"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            ></textarea>
          </div>

          <div>
            <button className="bg-yellow-300 px-6 py-2 font-bold rounded-full w-full">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Profileinforform;
