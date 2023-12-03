import { create } from "apisauce";

const api = create({
    //  baseURL: 'http://192.168.0.113:1337/api',
    baseURL:'http://192.168.1.13/api',
    headers: { 
        "X-API-Key":"b49dab9226aea1cf82d24336cd29aaea6f2347ebf6c176c9f260767ea8b00a525b5b132e9f864696da6e87c1c12e9a5a9897656b9f38eb3d971d27d540f69871aef1a92d18514b5345f977f0cd7b0d10f102fd2e465fd66823822b8d4c080029cc333615a88e42505f4f251758a039ab565fa1bf32bc0ea77c122e4135f65d9e"
      },
  })

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('video-courses?populate=*');
const getCourseList=(type)=>
api.get('course-lists?filters[type][$eq]='
+type+'&populate[Topic][populate][0]=Content&populate[image][populate][0]=image');

const setCourseProgress=(data)=>api.post('/course-progresses',data);

const getCourseProgress=(uid,courseId)=>
api.get('/course-progresses?filters[uid][$eq]='
+uid+'&filters[courseId][$eq]='+courseId)
export default{
    getSlider,
    getVideoCourse,
    getCourseList, 
    setCourseProgress,
    getCourseProgress
}
