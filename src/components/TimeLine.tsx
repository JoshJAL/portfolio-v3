'use client';

import useImageModal from '@/stores/imageModal';
import TimeLineItem from '@/components/TimeLineItem';
import { createQueryString } from '@/utils/createQueryString';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function TimeLine() {
  const { setOpen } = useImageModal();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleBornDayClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'born-day', searchParams));
  }

  function handlePresidentClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'president', searchParams));
  }

  function handleSchoolClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'school', searchParams));
  }

  function handleCertificationClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'certification', searchParams));
  }

  function handleRobClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'rob', searchParams));
  }

  function handleMonsterClick() {
    setOpen(true);
    router.push(pathname + '?' + createQueryString('item', 'monster', searchParams));
  }

  return (
    <ul className='flex flex-col gap-3 bg-forest-green rounded-lg p-3'>
      <TimeLineItem
        onClick={() => handleBornDayClick()}
        date='August 25, 1997'
        info='I blessed this Earth with my presence'
      />
      <li className='text-center'>--- Nothing Happened For a While ---</li>
      <TimeLineItem
        onClick={() => handlePresidentClick()}
        date='2017 - 2018'
        info='I was President of my Fraternity Alpha Epsilon Pi for a while'
      />
      <TimeLineItem
        onClick={() => handleSchoolClick()}
        date='December 2019'
        info='I graduated form the University of Central Florida with a Legal Studies Degree'
      />
      <TimeLineItem date='2020' info='I was a legal intern at a family law practice called Open Palm Law' />
      <TimeLineItem
        date='2021'
        info='During COVID of all times I attended the Stetson College of Law and HATED it, this was not what I wanted to do with my life'
      />
      <TimeLineItem
        onClick={() => handleCertificationClick()}
        date='2022'
        info='I was certified by Thinkful as a full stack developer and I loved it; I truly did not know you could be passionate about something that was supposed to be your career until now.'
      />
      <TimeLineItem
        date='2022'
        info='Worked at Rob Graham Enterprises as a Full-Stack JavaScript Developer'
        onClick={() => handleRobClick()}
      />
      <TimeLineItem
        date='2023 - Present'
        info='I am now working at Monster Transmission & Performance as the lead developer and have built phone applications, numerous websites, internal, tools, and tons of backend infrastructure and there is still much more to come!'
        onClick={() => handleMonsterClick()}
      />
    </ul>
  );
}
