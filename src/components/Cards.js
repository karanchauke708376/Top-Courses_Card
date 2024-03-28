import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const[likedCourses , setlikedCourses] = useState([]);


    // return you a list of all courses received from the api response
    const getcourses = () => {
        if(category === "All") {
            let allCourses = [];
                console.log("Printing Courses");
                console.log(courses);
                Object.values(courses).forEach( (courseCategory) => {
                    courseCategory.forEach( (course) => {
                        allCourses.push(course);
            })
        })
        return allCourses;
        } else {
            // mai sirf specific category ka data array pass karunga
            return courses[category];
        }
        
    }

    return (

        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {
             ( getcourses().map( (course) => (
                <Card key={course.id} 
                course = {course} 
                likedCourses = {likedCourses} 
                 setlikedCourses = {setlikedCourses}  />
             )
            )) 
            }

        </div>
    )
}

export default Cards