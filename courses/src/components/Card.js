/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let SetLikedCourses = props.SetLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehele se liked hai
      SetLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Course Un-liked");
    }
    else {
      //pehele se liked nahi hai
      if(likedCourses.length === 0)
      {
          SetLikedCourses([course.id]);
      }
      else{
          SetLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Course Liked");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
      <div className='relative'>
        <img src = {course.image.url}></img>
        <div>
          <button onClick={clickHandler} className='w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-3 place-items-center'>
            {
              likedCourses.includes(course.id) ? <FcLike/> : <FcLikePlaceholder/>
            }
          </button>
      </div>
      </div>
      
      <div className='py-4 mx-5'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description.length > 100 ? course.description.substr(0,100) + "...":course.description }</p>
      </div>
    </div>
  )
}

export default Card