
import { redirect } from 'next/navigation';

export default function OldHomePage() {
  redirect('/'); // Redirect to the root landing page
  // Return null or an empty fragment as redirect is a server-side operation
  // and this component won't render anything.
  return null;
}
