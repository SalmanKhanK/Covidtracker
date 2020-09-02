import React, { useContext } from 'react';
import {Bar} from 'react-chartjs-2';
function ChartInfo(props){
  const data = {
    labels: ['Total Cases', 'Deaths', 'Recovered'],
    datasets: [
      {
        label: 'Covid dataset',
         backgroundColor: [
          'rgba(34, 34, 139,1)',
          'rgba(139, 34, 34, 1)',
          'rgba(34, 139, 34, 1)',
      ],
      borderColor: [
          'rgba(34, 34, 120, 1)',
          'rgba(120, 34, 34, 1)',
          'rgba(34, 120, 34, 1)',
      ],
        borderWidth: 3,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [props.cases,props.deaths, props.recovered]
      },
      
    ]
  };
    return (
      <div>
        <Bar
          data={data}
          width={70}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
export default ChartInfo;