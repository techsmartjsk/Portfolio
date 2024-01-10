export default function Contact() {
  return (
    <div
      id='contact'
      className='px-10 mb-[200px] lg:px-44 flex flex-col gap-10 z-10'
    >
      <h4 className='text-md font-bold text-[#64ffda] w-full text-center numbered'>
        04. What's Next?
      </h4>
      <h3 className='text-center font-bold text-4xl text-white'>
        Get In Touch
      </h3>
      <div className='lg:w-1/2 mx-auto'>
        <p className='text-gray-300 text-center'>
          I'm actively seeking new opportunities and would love to connect with
          like-minded individuals. If you have exciting projects, collaboration
          ideas, or just want to chat, I'm open to new possibilities. Let's get
          in touch and explore the potential for working together!
        </p>
      </div>
      <a
        href='mailto:techsmartjsk@gmail.com'
        className='border-[#64ffda] border-[1px] hover:border-r-[5px] w-fit flex mx-auto hover:border-b-[5px] transition-all duration-200 rounded-md px-10 py-4 text-lg text-[#64ffda]'
      >
        Say hello
      </a>
    </div>
  )
}
