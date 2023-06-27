import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar, Label} from 'recharts';
import './pages.css';

const UserData = () => {
    <style>
    
        }
    </style>
   // const handleDataGet =  async ()=>{
    //     try{
    //         let res = await  
    //     }
    // }
    const data = [
        {
            "time": "2023-06-27 23:00",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 65
          },{
            "time": "2023-06-27 20:41",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 75
          },{
            "time": "2023-06-27 23:21",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 55
          },{
            "time": "2023-06-27 12:34",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 60
          },{
            "time": "2023-06-28 23:21",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 55
          },{
            "time": "2023-06-28 12:34",
            "patient-id": 1,
            "measurement": "bpm",
            "value": 60
          }
    ]

    const groupedData = data.reduce((groups, item) => {
        const dateTime = new Date(item.time);
        const date = dateTime.toISOString().slice(0, 10); // Extract date portion of the ISO string
    
        if (!groups[date]) {
          groups[date] = {
            date: date,
            value: [
                item.value,
                item.value,
            ]
          };
        } else {
          if (item.value < groups[date][0]) {
            groups[date][0] = item.value;
          }
          if (item.value > groups[date][1]) {
            groups[date][1] = item.value;
          }
        }
    
        return groups;
      }, {});
    
    const d = [
        {
            date: "05-25",
            value: [55, 72]
        },
        {
            date: "05-26",
            value: [54, 80]
        },
        {
            date: "05-27",
            value: [45, 67]
        }
    ]

    return (
        <div className='chart'>
            <BarChart width={730} height={250} data={d} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
                 <XAxis dataKey="date" >
                 <Label value="Date of measurments" position="bottom"/>
                 </XAxis>
                 <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} >
                 <Label value="Values" position="iside-left"/>
                 </YAxis>
                <Tooltip />

                   
            
                <Bar dataKey="value" fill="#ED4365" fillOpacity={0.8} >
                   
                </Bar>
            </BarChart>
        </div>
    )
};

export default UserData;