export default [
  {
    label: 'Visits',
    data: [93, 25, 95, 59, 46, 68, 4, 41],
    //borderWidth: 1
  },
  {
    label: 'Returns',
    data: [83, 1, 43, 28, 56, 82, 80, 66],
    // borderWidth: 1,
    // borderDash: [5, 5]
  }
];
export const chart1Options = {
    scales: {
        xAxes: [{
        gridLines: {
            display: false
        },
        ticks: {
            fontColor: '#aaa'
        }
        }],
        yAxes: [{
        gridLines: {
            display: false
        },
        ticks: {
            fontColor: '#aaa'
        }
        }]
    },
    responsive: false,
    maintainAspectRatio: false
};
export const chart1Colors = [{
    backgroundColor: 'rgba(28,180,255,.05)',
    borderColor: 'rgba(28,180,255,1)'
    }, {
    backgroundColor: 'rgba(136, 151, 170, 0.1)',
    borderColor: '#8897aa'
}]
