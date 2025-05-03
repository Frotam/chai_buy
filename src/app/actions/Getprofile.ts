// import { Mongoose } from "mongoose"
// import { Profilemodel } from "../models/Profileinfo"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../lib/authoptions"

// async function Getprofile() {
// const session=await getServerSession(authOptions)
// const email=session?.user?.email
// const userdoc=await Profilemodel.findOne({email})
// if(userdoc){
// return {
//     username:userdoc.username,
//     displayName:userdoc.displayName,
//     coverimage:userdoc.coverurl,
//     avatar:userdoc.avatar
// }
// }
// else{
//     return false
// }
// }

// export default Getprofile