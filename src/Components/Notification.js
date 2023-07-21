import { toast, ToastContainer } from 'react-toastify';

export  const Notification=(msg,type)=>{

    if(!type){
          toast.success(msg, {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});}
else if(type=='warning'){

   toast.warn(msg, {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
}
else{
   toast.error(msg, {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
}
}
export default Notification