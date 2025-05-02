import { saveprofile } from "@/app/actions/Profileinfoaction";
import uploadactions from "@/app/actions/uploadactions";
import { ChangeEvent, useState } from "react";

function Profileinforform() {
  const save = async (formdata: FormData) => {
    const data = await saveprofile(formdata);
    console.log(data);
  };
  
  const [url, setUrl] = useState<string | null>(
    "https://res.cloudinary.com/dwm23rqao/image/upload/v1746161439/rglxwt3q351cocwhqtj1.png"
  );

  const upload = async (ev: ChangeEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      console.log("upload the file", file);
      const uploadedUrl = await uploadactions(file);
      setUrl(uploadedUrl); // Set the uploaded URL as banner
      console.log("uploaded banner url:", uploadedUrl);
    }
  };

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
            <div className="bg-gray-300 size-24 rounded-full p-4">
              avatar
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
            <label htmlFor="usernameIn" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
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
              id="displaynameIN"
              type="text"
              name="displayName"
              placeholder="Display name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="bioIn" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
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
