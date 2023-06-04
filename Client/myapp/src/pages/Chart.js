import { Box, Text } from '@chakra-ui/react'
import {
    Chart as ChartJS,
    BarElement, CategoryScale, LinearScale } from 'chart.js'
import React, { useState } from 'react'
import {Bar} from "react-chartjs-2"
ChartJS.register(LinearScale,CategoryScale,BarElement)

export const Chart = () => {
    // const [data, Setdata] = useState()
  

    const data = {
        labels:["STR","FIN","QLT","STO","HR" ],

        datasets:[
              {
                type:"bar",
                label:"Total",
                data:[8,6,9,3,4,2],
                borderWidth:.5,
                backgroundColor:"blue",
              },
              {
                type:"bar",
                label:"Total",
                data:[6,4,7,1,3,1],
                borderWidth:1,
                backgroundColor:"green",
              }
        ]

    };
      const options ={
        maintainAspectRatio:false,
         scales:{
            y:{
                beginAtZero:true,
            }
         }
      }


 
    return (
    <>
      <Box
       p="4"
       w={{base:"100%",md:"100%",lg:"99%"}}
       h="45vh"
        m={{base:"auto"}}
       borderRadius={"5px"}
       boxShadow={"rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 1px 3px 1px "}
      >
      
       <Bar data={data} height={200} options={options} />

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
