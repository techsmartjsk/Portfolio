
import { IoIosArrowForward } from "react-icons/io";

export default function About(){
    const tech_list = [
        'React',
        'Typescript',
        'Javascript',
        'Node',
        'Django',
        'Flutter'
    ]
    return(
        <div id="about" className="px-10 mb-[200px] lg:px-32 flex flex-col gap-10 z-10">
            <div className="flex gap-10 items-center">
                <h2 className="text-2xl font-bold">01. About Me</h2>
                <div className="hidden lg:block lg:w-64 bg-black h-[1px]">
                
                </div>
            </div>
            <div className="lg:w-1/2">
                <p className="text-md lg:text-lg">I specialize in TypeScript, JavaScript, React, Django, and the Nest framework. Guided by a collaborative ethos, I prioritize clean, user-centric solutions. <br/><br/>Whether architecting intuitive frontend experiences or navigating robust backend frameworks, I emphasize adaptability and efficiency. My journey is marked by continuous learning, a commitment to collaborative problem-solving, and a genuine passion for delivering impactful software solutions that resonate with both users and development teams.</p>
                <div className="flex flex-wrap gap-2 w-full mt-10">
                    {
                        tech_list.map((tech)=>{
                            return <div className="flex w-[45%] lg:w-[45%] items-center gap-2 cursor-pointer">
                            <IoIosArrowForward color="black" fontSize={20}/>
                            <p className="text-md lg:text-lg">{tech}</p>
                        </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}