import Children  from "react";


const ScrollPageContainer = ({children}) => {
  return (
    <div className='w-screen h-screen relative flex flex-col justify-center items-center  '>
            {children}
     </div>
  
  );
}
export default ScrollPageContainer;