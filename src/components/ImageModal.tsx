'use client';

import BlurBackground from '@/public/images/blur-background.jpeg';
import BornDay from '@/public/images/born-day.jpeg';
import Certification from '@/public/images/certification.webp';
import Monster from '@/public/images/monster.jpeg';
import President from '@/public/images/president.jpeg';
import RecommendationLetter from '@/public/images/recommendationLetter.webp';
import School from '@/public/images/school.jpeg';
import useImageModal from '@/stores/imageModal';
import { Dialog, Transition } from '@headlessui/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment } from 'react';

export default function Example() {
  const { open, setOpen } = useImageModal();
  const searchParams = useSearchParams();
  const router = useRouter();

  const item = searchParams.get('item') ?? '';

  let image: StaticImport = BornDay;
  let title = '';
  let alt = '';

  switch (item) {
    case 'born-day':
      image = BornDay;
      title = "This isn't the day I was born, but it's close enough";
      alt = "It's baby me";
      break;
    case 'president':
      image = President;
      title = "I'm the one in the middle, please don't google AEPi UCF 2017";
      alt = 'Me with my brothers';
      break;
    case 'school':
      image = School;
      title = 'Like most people I felt very lost and did not know what I wanted to do, but *spoilers* it was not law';
      alt = 'Me in front of the UCF sign';
      break;
    case 'certification':
      image = Certification;
      title =
        "I know some aren't too impressed by a bootcamp certification, but this truly means so much to me. This is the first thing that I worked hard for that I was truly excited about. I have since way exceeded the skills I learned here, but I will be forever grateful.";
      alt = 'Thinkful Certification';
      break;
    case 'rob':
      image = RecommendationLetter;
      title =
        'I know this might be difficult to read, but this is a recommendation letter I received after working at Rob Graham Enterprises from the President, my boss, Mark Ingles';
      alt = 'Recommendation Letter from Rob Graham Enterprises';
      break;
    case 'monster':
      image = Monster;
      title =
        'I have built hundreds of tools, both internal and external, am the lead developer and continue to impress myself with my own ability every day. I know that there has been some humor so far, but I mean that sincerely; I am truly proud of myself and what I have been able to achieve at this company and in my career.';
      alt = 'Monster Transmission & Performance';
      break;
    default:
      image = BlurBackground;
      alt = 'Default Image';
      break;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-forest-green bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-30 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-flat-green px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title as='h3' className='text-base font-semibold leading-6 text-background'>
                      {title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <Image className='rounded-lg' placeholder='blur' alt={alt} src={image} />
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='transition-all duration-200 ease-in-out inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-almost-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                    onClick={() => {
                      router.push('/');
                      setOpen(false);
                    }}
                  >
                    Back to it
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
