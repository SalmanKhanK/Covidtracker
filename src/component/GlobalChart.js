
import React from 'react';
import {Bar} from 'react-chartjs-2';
function Globalchart(props){
  const data = {
    labels: ['Total Cases', 'Deaths', 'Recovered'],
    datasets: [
      {
        label: 'Covid dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 3,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [props.total_cases,props.death,props.total_recovered]
      }
    ]
  };
    return (
      <div>
        <Bar
          data={data}
          width={70}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
export default Globalchart;