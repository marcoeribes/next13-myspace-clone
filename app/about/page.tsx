import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About us!',
    description: 'We are a social media company',
}

export default function About() {
  return (
    <main>
        <h1>About us</h1>
        <p>We are a social media company!</p>
    </main>
  )
}
