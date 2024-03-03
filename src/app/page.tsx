import ImageModal from '@/components/ImageModal';
import TimeLine from '@/components/TimeLine';
import Link from 'next/link';

export default function Home() {
  return (
    <article className='w-full flex flex-col gap-5'>
      <ImageModal />
      <section className='flex flex-col gap-3'>
        <h1 className='font-medium text-3xl'>Hi There</h1>
        <p>
          What&apos;s up? A lot has changed since I last updated my portfolio. I&apos;ll take a little bit of time to
          update you about my life on my{' '}
          <Link className='hover:underline underline-offset-4 text-flat-green' href={'/about'}>
            about
          </Link>{' '}
          page, my coding &quot;journey&quot; (I don&apos;t like that let&apos;s stop using that), and what I&apos;m
          doing now.
        </p>
        <p>
          First things first, of course, I am not doing a light and a dark mode this time, because I, personally,
          don&apos;t like light mode and everytime I did both I definitely felt like I was neglecting the light mode
          version, so why do that this time?
        </p>
      </section>
      <section className='w-full flex flex-col gap-3'>
        <h2 className='font-medium text-2xl'>Timeline</h2>
        <p>
          I like timelines, let&apos;s do a quick one for people with limited time (just say you don&apos;t like me).
        </p>
        <TimeLine />
      </section>
    </article>
  );
}
