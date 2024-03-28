
import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

    function clickHander ()  {
        // logic
        if(likedCourses.includes(course.id)) {
            // pehele se like huwa pda h
            setlikedCourses( (prev) => prev.filter ((cid) => (cid !== course.id)));
            toast.warning("Like Remove!");
        }
        else {
            // pehelse se like nhi hai
            // insert karna h course liked course me
            if(likedCourses.length === 0) {
                setlikedCourses([course.id]);
            } else {
            // non empty pehele se
            setlikedCourses((prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt="img2"/>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-3 bottom-1
                 grid place-items-center ">
                    <button onClick={clickHander}>
                         {
                            likedCourses.includes(course.id) ? 
                            (<FcLike fontSize="2.0rem" />) :
                            (<FcLikePlaceholder fontSize="2.0rem" />)
                         }
                     </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6"> {course.title}</p>
                <p className="mt-2 text-white"> 
                {
                     course.description.length > 100 ? 
                    (course.description.substr(0,100)) + "..." : 
                    (course.description) 
                } 
                </p>
            </div>

        </div>
    )
}

export default Card