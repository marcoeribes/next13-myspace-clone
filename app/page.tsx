import styles from './page.module.css'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session){
    //return <p>You must be signed in...</p>
    redirect('/api/auth/signin');
  }

  return (
    <main>

    </main>
  )
}
