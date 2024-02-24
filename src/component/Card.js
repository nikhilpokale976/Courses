import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {

    let cours=props.cours;
    let likedcourse=props.likedcourse;
    let setLikedcourse = props.setLikedcourse;

    function clickHandler(){

            if(likedcourse.includes(cours.id)){

                setLikedcourse((prev) => prev.filter((cid) => (cid!==cours.id)));
                toast.warning("like removed");


            }else{
                    if(likedcourse === 0){
                        setLikedcourse([cours.id]);

                    }
                    else{
                        setLikedcourse((prev)=> [...prev , cours.id]);
                    }
                    toast.success("liked successfull");

            }

    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={cours.image.url} alt="" />
                    <div className='w-[50px] h-[50px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center '>
                        <button onClick={clickHandler}>
                            {

                                likedcourse.includes(cours.id)? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                            }
                        </button>
                    </div>
            </div>
            <div className='p-4 '>
                <p className='text-white font-semibold text-lg leading-6'>{cours.title}</p>
                <p className='mt-2 text-white'>{
                    
                    cours.description.length > 100 ? (cours.description.substr(0,100)) + "...": (cours.description)
                    
                }</p>
            </div>
        </div>
    );
}

export default Card;
