import { IoIosArrowForward } from 'react-icons/io'

export default function About() {
  const tech_list = [
    'React',
    'Typescript',
    'Javascript',
    'Node',
    'Django',
    'Flutter',
  ]
  return (
    <div
      id='about'
      className='px-10 mb-[200px] lg:px-44 flex flex-col gap-10 z-10'
    >
      <div className='flex gap-10 items-center'>
        <h2 className='text-2xl font-bold text-white'><span className='text-[#64ffda]'>01.</span> About Me</h2>
        <div className='hidden lg:block lg:w-64 bg-white h-[1px]'></div>
      </div>
      <div className='lg:w-1/2'>
        <p className='text-md lg:text-lg text-gray-300'>
          I specialize in TypeScript, JavaScript, React, Django, and the Nest
          framework. Guided by a collaborative ethos, I prioritize clean,
          user-centric solutions. <br />
          <br />
          Whether architecting intuitive frontend experiences or navigating
          robust backend frameworks, <span  className='text-[#64ffda]'>I emphasize adaptability and efficiency</span>. My
          journey is marked by continuous learning, a commitment to
          collaborative problem-solving, and a genuine passion for delivering
          impactful software solutions that resonate with both users and
          development teams.
        </p>
        <div className='flex flex-wrap gap-2 w-full mt-10'>
          {tech_list.map((tech) => {
            return (
              <div className='flex w-[45%] lg:w-[45%] items-center gap-2 cursor-pointer'>
                <IoIosArrowForward color='white' fontSize={20} />
                <p className='text-md lg:text-lg text-white'>{tech}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
