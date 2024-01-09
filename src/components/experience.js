import { IoIosArrowForward } from 'react-icons/io'

export default function Experience() {
  const company_list = ['ITPEnergised', 'Futurestic']
  return (
    <div
      id='experience'
      className='px-10 mb-[200px] lg:px-32 flex flex-col gap-10 z-10'
    >
      <div className='flex gap-10 items-center'>
        <h2 className='text-2xl font-bold'>02. Where I've Worked</h2>
        <div className='hidden lg:block lg:w-64 bg-black h-[1px]'></div>
      </div>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='rounded-md p-5 border-[1px] lg:w-1/2'>
          <a href='https://itpenergised.com/' className='text-lg'>
            Lead Software Engineer @ITPEnergised
          </a>
          <p className='text-gray-500 font-bold my-2'>Jan 2021 - Present</p>
          <ul className='mt-5'>
            <li className='flex gap-2'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Spearheaded the development of a groundbreaking software
                solution, streamlining complex processes and enhancing overall
                project efficiency.
              </p>
            </li>
            <li className='flex gap-2'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Increased company's productivity upto 100%, contributing to a
                dynamic and responsive development environment that accelerated
                project timelines.
              </p>
            </li>
            <li className='flex gap-2'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Successfully led the delivery of over 50 software products,
                showcasing a consistent track record of meeting and exceeding
                project goals.
              </p>
            </li>
          </ul>
        </div>
        <div className='rounded-md p-5 border-[1px] lg:w-1/2'>
          <a href='https://futurestic.co.in/'>Founder @Futurestic</a>
          <p className='text-gray-500 font-bold my-2'>Aug 2019 - Dec 2020</p>
          <ul className='mt-5'>
            <li className='flex gap-2 items-start'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Successfully secured and served 15+ clients across three
                continents, demonstrating global reach and trust.
              </p>
            </li>
            <li className='flex gap-2'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Efficiently delivered and completed over 20 projects, showcasing
                our commitment to excellence and client satisfaction.
              </p>
            </li>
            <li className='flex gap-2'>
              <div>
                <IoIosArrowForward fontSize={15} />
              </div>
              <p>
                Expanded market presence through diverse projects, solidifying
                Futurestic's position as a sought-after industry partner
                worldwide.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
