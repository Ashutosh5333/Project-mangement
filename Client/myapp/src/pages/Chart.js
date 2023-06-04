import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Bar} from "react-chartjs-2"

export const Chart = () => {
    // const [data, Setdata] = useState()
  
 
    return (
    <>
      <Box> 
        
          
         
      

      </Box>
    </>
  )
}

/**
 * {/* <Bar  
           data={{
            labels:["Januaray","Febuaray","March","April","May","June","July","August","September", "October","November","December" ],  
            datasets:[{
                        label:"attendence",
                        data:[100,80,95,56,75,85,60,80,90,100,75,85,],
                        backgroundColor:"red"
                            // createColor(225)
                   },
                   {
                        label:"Performance",
                        data:[80,70,85,45,65,75,55,70,75,95,56,75],
                        backgroundColor:"green"
                   }
                ],     
          }} 
                height={500}
                 width={600}
                 options={{maintainAspectRatio:false}}
          /> 

 * chart = new Chart(ctx, {
        type:"bar",
        data:{
          labels:["Januaray","Febuaray","March","April","May","June","July","August","September", "October","November","December" ],
            datasets:[{
                 label:"attendence",
                 data:[100,80,95,56,75,85,60,80,90,100,75,85,],
                 backgroundColor:
                     createColor(225)
                   
            },
            {
                 label:"Performance",
                 data:[80,70,85,45,65,75,55,70,75,95,56,75],
                 backgroundColor:createColor(225)
            }
         ],
         borderWidth:1,
        },

        options:{
         scales:{
             yAxes:[
                 {
                     ticks:{
                         beginAtzero:true
                     }
                 }
             ]
         }
        }

     })

 */
