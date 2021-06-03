import React from 'react'
import { Bar } from "react-chartjs-2";

function Progress() {
    const date = new Date(2021,6,2)
return (
	<div className="App">
	<h1>Your Progress</h1>
	<div style={{ maxWidth: "650px" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: [ '27/5/2021','28/5/2021','29/5/2021','30/5/2021','31/5/2021','1/6/2021',`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`],
			datasets: [
			{
				// Label for bars
				label: "goal set",
				// Data or value of your each variable
				data: [50, 45, 58, 49 , 29 , 45 , 65],
				// Color of each bar
				backgroundColor: [ '#003f5c'],
				// Border color of each bar
				
			},
            {
				// Label for bars
				label: "goal achieved",
				// Data or value of your each variable
				data: [50, 23, 40, 34 , 12 , 22 ,38],
				// Color of each bar
				backgroundColor: [ "#ffa600"],
				// Border color of each bar
			
				
			},
			],
           
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
                
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default Progress;

