

import { SkeletonTheme } from 'react-loading-skeleton';
import Skeleton  from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
export default function HeroSkeleton() {
  

  return (
    <SkeletonTheme baseColor='#ff9248' highlightColor='#ffa500' >
    
    
    {/* #e35403'  */}
            
      
            <div style={{width:"100%"}} >  
              <Skeleton height={200}/> 
             
              
            </div>         
            
      

      </SkeletonTheme>

  )
}
