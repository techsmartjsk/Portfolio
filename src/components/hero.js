export default function Hero() {
  return (
    <div
      id='hero'
      className='mx-10 my-20 lg:mb-[300px] lg:mx-44 flex flex-col gap-10 lg:gap-[30px] z-1000'
    >
      <p className='text-xl text-[#64ffda]'>Hi, I am</p>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl lg:text-5xl font-bold text-white'>
          Jaskirat Singh
        </h1>
        <h2 className='text-3xl lg:text-5xl text-gray-300 font-bold'>
          I build seamless, innovative softwares.
        </h2>
      </div>
      <p className='text-sm lg:text-lg text-gray-300 lg:w-3/4'>
        I am a remote Software Engineer, specializing in crafting innovative
        solutions with expertise in React, Django and Typescript. With a keen
        eye for detail and a commitment to clean code, I excel in global
        collaboration.
      </p>
      <a
        href='mailto:techsmartjsk@gmail.com'
        className='p-2 border-[1px] cursor-pointer text-[#64ffda] border-[#64ffda] w-fit rounded-md text-sm lg:text-[18px] px-16 py-5'
      >
        Get In Touch
      </a>
    </div>
  )
}
