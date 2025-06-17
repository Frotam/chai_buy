'use server';
import Profileinforform from '@/components/Profileinforform';
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/authoptions';
import mongoose from 'mongoose';
import { Profilemodel } from '../models/Profileinfo';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Not logged in
      </div>
    );
  }

  const email = session.user.email;
  const image = session.user.image || '';

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }

  const profileInfoDoc = await Profilemodel.findOne({ email });
  const plainProfile = JSON.parse(JSON.stringify(profileInfoDoc));

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Profileinforform profileinfo={plainProfile} avatar={image} />
      <div>Donation list</div>
    </div>
  );
}
