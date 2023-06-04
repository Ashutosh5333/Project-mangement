import { Box, Flex, Image, Text } from '@chakra-ui/react'
import axios from "axios"
import {
    Chart as ChartJS,
    BarElement, CategoryScale, LinearScale } from 'chart.js'
import React, { useEffect, useState } from 'react'
import {Bar} from "react-chartjs-2"
ChartJS.register(LinearScale,CategoryScale,BarElement)

export const Chart = () => {
     const [Financetotal, SetFinancetotal] = useState(0)
     const [Financeclosed, SetFinanceclosed] = useState(0)
     const [Maintenancetotal, SetMaintenancetotal] = useState(0)
     const [Maintenanceclosed, SetMaintenanceclosed] = useState(0)
     const [Storetotal, SetStoretotal] = useState(0)
     const [Storeclosed, SetStoreclosed] = useState(0)
       const [Strategytotal, SetStrategytotal] = useState(0)
     const [Strategyclosed, SetStrategyclosed] = useState(0)
     const [Qualitytotal, SetQualitytotal] = useState(0)
     const [Qualityclosed, SetQualityclosed] = useState(0)

        useEffect(() =>{
          FinanceFetchtotal()
          StratgyFetchtotal()
          StoreFetchtotal()
          MaintainnaceFetchtotal()
          QualityFetchtotal()
        },[])

      const FinanceFetchtotal = async () =>{
        const res = await axios.get(`http://localhost:8000/department/Finnace`)
            console.log(res.data)  
            SetFinancetotal(res.data.totatlCount)
            SetFinanceclosed(res.data.closedCount)
      }

      const StratgyFetchtotal = async () =>{
        const res = await axios.get(`http://localhost:8000/department/Strategy`)
            console.log(res.data)  
            SetStrategytotal(res.data.totatlCount)
            SetStrategyclosed(res.data.closedCount)
      }

      const StoreFetchtotal = async () =>{
        const res = await axios.get(`http://localhost:8000/department/Stores`)
            console.log(res.data)  
            SetStoretotal(res.data.totatlCount)
            SetStoreclosed(res.data.closedCount)
      }

      const MaintainnaceFetchtotal = async () =>{
        const res = await axios.get(`http://localhost:8000/department/Maintenance`)
            console.log(res.data)  
            SetMaintenancetotal(res.data.totatlCount)
            SetMaintenanceclosed(res.data.closedCount)
      }
      
      const QualityFetchtotal = async () =>{
        const res = await axios.get(`http://localhost:8000/department/Quality`)
            console.log(res.data)  
            SetQualitytotal(res.data.totatlCount)
            SetQualityclosed(res.data.closedCount)
      }



    const data = {
        labels:["STR","FIN","QLT","STO","MAN" ],

        datasets:[
              {
                type:"bar",
                label:"Total",
                data:[Storetotal,Financetotal,Strategytotal,Qualitytotal,Maintenancetotal],
                borderWidth:.5,
                backgroundColor:"blue",
              },
              {
                type:"bar",
                label:"Closed",
                data:[Storeclosed,Financeclosed,Strategyclosed,Qualityclosed,Maintenanceclosed],
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
      //  border="3px solid red"
       p="3"
       w={{base:"100%",md:"100%",lg:"99%"}}
       h="50vh"
        m={{base:"auto"}}
       borderRadius={"5px"}
       boxShadow={"rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 1px 3px 1px "}
      >
      
       <Bar data={data} height={300} options={options} />

        
        <Flex mt="10" justifyContent={"space-evenly"} mb="20">
          
          <Box display="flex"  justifyContent={"space-between"}> 
             <Box>
           <Text color={"gray"} fontSize={"1.1rem"} fontWeight={"500"}> Total  </Text>
             </Box>

            <Box mr="5"  m="auto">
            <Image m="auto" w="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAdVBMVEUAAP////////0AAPX///j09O7g4O7Ozu66uuidneF9feBcXOA/P98rK+QaGucREezs7PQgIPPZ2d+WluJfX+sAAOzPz+iPj+EAAOanp988POwAAPrm5uqDg+MmJu/f3+Vzc+Dz8/PIyN01Ne9qat11ddqzs94LF8UiAAADH0lEQVR4nO3biZKqMBAF0CaAiorgrogbLv//ie8hA4OQZEBCcmtq7g9wqkgCSbrJMh8yDbB+h4E5jsOMGJg7GI688WTqz4IgmPnTydgbDQfuZ5r2BhZulqtoblM19jxaLZOwvaOlwVksV+va08tZr5YLpz+Ds9nupM/Ps9tu2jAaG1i4jw6NBGkO0b75S2loYPHx1BiQ5XSMGyqaGc6P+hD8OfbjrMwQX5q/hPccLrESw9ULPhSkCbxrd0MSdRCkiZKOBvfRUZDm4XYwsOFNAYHoNpTOEJmBeZ/MBl5sT4aQGNy7IkGau+R9iA1nXyGByBevFUJD0mVG8hII54fIkKgaCt+xRQiB4ame8B/xbGN4fro4y3PgI7iGHl5EFv7r4Bl6IwgQHMNZ9YwoJ+BM0brBVbsuVOPXF6uagalcHXm515btqoF5PROIat+OqmHY33jMYw/lBlfNx1qemys1qPhl+TkPmSHRQiBKxIZr13/HpomuQkP/cyKPJzLEfS6Q7wligeGijUB04RvO/Xyw+TmceQamZ17meTCOIe5/hSzHjusGdtRKIDqymiFse77QNaewZthrJhDtqwZH1xL5ncipGDY6J2aWw6Zi2GonEG3fDU6zQz+12TlvhoUBAtHizbA0YliWDWxlxLBiJUMoP4PuK+uwZND1D1fNpmQwMxzyAUEGh0M+IF4GV/9CnSVyC8NgbsgwHxQGDRs8frJt38swMkQgGhUGffuKarzCMDZmGBeGiTHDpDBMjRmmhaHfEyhZ/NzAZsYMM/ZlcPTtdasJnD/DmwFhPCDMC4j1AWGdRPheIHw3Ef4fEP6jEP4nEf6rEfYXCPssiP0mwr4b4fwB4RwG4jwK4VwO4XwS4pwW4bwa4dwe4v4C4R4H4T4L4l4P4X4T4p4X4r4b4d4fov4BoQ4Eoh4Goi4IoT4Kok4MoV4Oom4Qon4Soo4Uop4Woq4Yor4aos4cot4eou8Aov8Cog8Foh/HQuhLSmO+P8uC6FOzEPr10pjvW7Qg+jcthD7WV4z3834xTPc1ZzHe3507DPe5VzTG+v3V5s+Q5R+AizkdEvQlhQAAAABJRU5ErkJggg==" />
            </Box>
            
           </Box>

           <Box display="flex"  justifyContent={"space-between"}> 
             <Box>
           <Text color="gray" fontSize={"1.1rem"} fontWeight={"500"}> Closed </Text>
             </Box>

            <Box mr="5"  m="auto">
            <Image w="20px" src="data:image/png;base64,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" />
            </Box>
            
           </Box>

        </Flex>


      </Box>
       
    </>
  )
}
