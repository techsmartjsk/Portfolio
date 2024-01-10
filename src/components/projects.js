import { FaGithub, FaLink } from 'react-icons/fa'
import dummyImage from '../assets/dummyImage.png'
import { IoMdLink } from 'react-icons/io'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Spotify Clone',
      description: `As of my last knowledge update in January 2022, Spotify's web app
            provides users with a seamless and accessible way to enjoy music and
            podcasts directly through their web browsers. While I don't have
            real-time updates, I can provide a general description based on the
            features available at that time`,
      tech: ['VS Code', 'Python', 'Node', 'Express'],
      github: 'link',
      app: 'link',
      img: 'link',
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: `As of my last knowledge update in January 2022, Spotify's web app
            provides users with a seamless and accessible way to enjoy music and
            podcasts directly through their web browsers. While I don't have
            real-time updates, I can provide a general description based on the
            features available at that time`,
      tech: ['VS Code', 'Python', 'Node', 'Express'],
      github: 'link',
      app: 'link',
      img: 'link',
    },
    {
      id: 3,
      title: 'Spotify Clone',
      description: `As of my last knowledge update in January 2022, Spotify's web app
            provides users with a seamless and accessible way to enjoy music and
            podcasts directly through their web browsers. While I don't have
            real-time updates, I can provide a general description based on the
            features available at that time`,
      tech: ['VS Code', 'Python', 'Node', 'Express'],
      github: 'link',
      app: 'link',
      img: 'link',
    },
  ]
  return (
    <div
      id='projects'
      className='px-10 mb-[200px] lg:px-44 flex flex-col gap-10 z-10'
    >
      <div className='flex gap-10 items-center'>
        <h2 className='text-2xl font-bold text-white'>
          <span className='text-[#64ffda] numbered'>03.</span> Some things I've
          built
        </h2>
        <div className='hidden lg:block lg:w-64 bg-white h-[1px]'></div>
      </div>
      <div className='flex flex-col gap-20'>
        {projects.map((project) => {
          const isEven = project.id % 2 === 0
          return (
            <div
              className={`flex items-center gap-10 ${
                isEven ? 'flex-row-reverse' : ''
              }`}
              key={project.id}
            >
              <div className='w-1/2'>
                <img
                  src={dummyImage}
                  className='rounded-md'
                  alt={`Project ${project.id} Image`}
                />
              </div>
              <div className='flex flex-col gap-5 w-1/2'>
                <div className='flex flex-col gap-2'>
                  <p
                    className={`text-sm text-${
                      isEven ? 'left' : 'right'
                    } text-[#64ffda]`}
                  >
                    Featured Project
                  </p>
                  <h4
                    className={`text-2xl text-white text-${
                      isEven ? 'left' : 'right'
                    }`}
                  >
                    {project.title}
                  </h4>
                </div>
                <div className='text-gray-300'>{project.description}</div>
                <div
                  className={`flex gap-2 text-gray-300 ${
                    isEven ? '' : 'ml-auto'
                  }`}
                >
                  {project.tech.map((skill) => (
                    <div key={skill}>{skill}</div>
                  ))}
                </div>
                <div className={`flex gap-5 ${isEven ? '' : 'ml-auto'}`}>
                  <a href={project.github}>
                    <FaGithub
                      color='white'
                      fontSize={25}
                      className='hover:color-[#64ffda] cursor-pointer'
                    />
                  </a>
                  <a href={project.app}>
                    <IoMdLink color='white' fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
