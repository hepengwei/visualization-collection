/**
 * 饼图
 */
 import React from "react";
 import GridContent from "components/GridContent";
 import Pie1 from "./components/Pie1";
 import styles from "./index.module.less";
 
 const { GridBox } = GridContent;
 
 const Pie = () => {
   return (
     <div className={styles.container}>
       <GridContent
         differentScreenCols={[2, 2, 2, 1, 1]}
         rowSpace={4}
         colSpace={4}
       >
         <GridBox key="1">
           <div className={styles.box}>
             <Pie1 />
           </div>
         </GridBox>
       </GridContent>
     </div>
   );
 };
 
 export default Pie;
 