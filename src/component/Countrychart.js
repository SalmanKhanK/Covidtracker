import React, { useContext } from 'react';
import {Bar} from 'react-chartjs-2';
import {Context} from '../component/CountryState'


function Countrychart(){
      let {death,totalcases,recovered}=useContext(Context);
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
        data: [totalcases,death, recovered]
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
export default Countrychart;