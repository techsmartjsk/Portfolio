export default function Experience() {
  return (
    <div
      id='experience'
      className='px-10 mb-[200px] lg:px-44 flex flex-col gap-10 z-10'
    >
      <div className='flex gap-10 items-center'>
        <h2 className='text-2xl font-bold text-white'>
          <span className='text-[#64ffda] numbered'>02.</span> Where I've Worked
        </h2>
        <div className='hidden lg:block lg:w-64 bg-white h-[1px]'></div>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 experience-info'>
        <div className='rounded-md p-5 lg:w-1/2'>
          <a href='https://itpenergised.com/' className='text-lg text-white'>
            Lead Software Engineer{' '}
            <span className='text-[#64ffda]'>@ITPEnergised</span>
          </a>
          <p className='text-gray-500 font-bold my-2'>Jan 2021 - Present</p>
          <ul className='mt-5'>
            <li className='flex gap-2 text-white'>
              Spearheaded the development of a groundbreaking software solution,
              streamlining complex processes and enhancing overall project
              efficiency.
            </li>
            <li className='flex gap-2 text-white'>
              Increased company's productivity upto 100%, contributing to a
              dynamic and responsive development environment that accelerated
              project timelines.
            </li>
            <li className='flex gap-2 text-white'>
              Successfully led the delivery of over 50 software products,
              showcasing a consistent track record of meeting and exceeding
              project goals.
            </li>
          </ul>
        </div>
        <div className='rounded-md p-5 lg:w-1/2 experience-info'>
          <a className='text-white text-lg' href='https://futurestic.co.in/'>
            Founder <span className='text-[#64ffda]'>@Futurestic</span>
          </a>
          <p className='text-gray-500 font-bold my-2'>Aug 2019 - Dec 2020</p>
          <ul className='mt-5'>
            <li className='flex gap-2 text-white'>
              Successfully secured and served 15+ clients across three
              continents, demonstrating global reach and trust.
            </li>
            <li className='flex gap-2 text-white'>
              Efficiently delivered and completed over 20 projects, showcasing
              our commitment to excellence and client satisfaction.
            </li>
            <li className='flex gap-2 text-white'>
              Expanded market presence through diverse projects, solidifying
              Futurestic's position as a sought-after industry partner
              worldwide.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
