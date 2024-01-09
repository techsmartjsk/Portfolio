
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Experience(){
    const company_list = [
        'ITPEnergised',
        'Futurestic'
    ]
    return(
        <div id="experience" className="px-10 mb-[200px] lg:px-32 flex flex-col gap-10 z-10">
            <div className="flex gap-10 items-center">
                <h2 className="text-2xl font-bold">02. Where I've Worked</h2>
                <div className="hidden lg:block lg:w-64 bg-black h-[1px]">
                
                </div>
            </div>
            <div className="flex gap-10">
                <div className="rounded-md p-5 border-[1px] w-1/2">
                    <a href="https://futurestic.co.in/">Founder @Futurestic</a>
                    <ul className="mt-5">
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                    </ul>
                </div>
                <div className="rounded-md p-5 border-[1px] w-1/2">
                    <a href="https://itpenergised.com/" className="text-lg">Lead Software Engineer @ITPEnergised</a>
                    <ul className="mt-5">
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaArrowAltCircleRight/>
                            <p>This is me!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}