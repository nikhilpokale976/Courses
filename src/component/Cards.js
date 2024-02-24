
import { useState } from "react";
import Card from "./Card";
function Cards(props){
    let course = props.course;
    let category=props.category;
    const [likedcourse, setLikedcourse]=useState([]);
    const [errors , seterrors] = useState(course);

          
   
        const getcourses = ()=> {
                    if(category === "All"){
                        let allcourses=[];
                    Object.values(course).forEach(array =>{
                        array.forEach(coursedata =>{
                            allcourses.push(coursedata);
                        })
                    })
                    return allcourses;
                    }
                    else{
                        return course[category];
                    }
                }
    return(

        <div className="flex flex-wrap justify-center gap-4 mb-4">
                {
            
                  
                       !errors ? (<p1>Error </p1> ):( getcourses().map( (cours) =>{
                        return(
                            <Card  key={cours.id} cours={cours} likedcourse={likedcourse} setLikedcourse={setLikedcourse}/>
                        )
                        
                       }))
                    
                 
                }

        </div>
    )

}

export default Cards;