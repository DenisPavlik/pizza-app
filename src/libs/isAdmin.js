import { authOptions } from "@/libs/authOptions";
import { getServerSession } from 'next-auth';
import { UserInfo } from "@/models/UserInfo";


export async function isAdmin() {
  const session = await getServerSession(authOptions)
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false
  }

  const userInfo = await UserInfo.findOne({email: userEmail})
  if (!userInfo) {
    return false;
  }

  return userInfo.admin;
}