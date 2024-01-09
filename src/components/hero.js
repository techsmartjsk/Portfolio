export default function Hero() {
  return (
    <div
      id='hero'
      className='mx-10 my-20 lg:mb-[300px] lg:mx-32 flex flex-col gap-10 lg:gap-[30px] z-10'
    >
      <p className='text-md'>Hi, I am</p>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl lg:text-6xl font-bold'>Jaskirat Singh</h1>
        <h2 className='text-3xl lg:text-6xl font-bold'>
          I build seamless, innovative softwares.
        </h2>
      </div>
      <p className='text-sm lg:text-xl lg:w-3/4'>
        I am a remote Software Engineer, specializing in crafting innovative
        solutions with expertise in React, Django and Typescript. With a keen
        eye for detail and a commitment to clean code, I excel in global
        collaboration.
      </p>
      <button className='p-2 border-[1px] border-black w-fit rounded-sm text-sm lg:text-xl px-20 py-2'>
        Get In Touch
      </button>
    </div>
  )
}
