
function ChartData() {
  return new Promise((resolve)=>{
    const DATA = [
        {
          x: "Anxious",
          y: 6000
        },
        {
          x: "Happy",
          y: 4000
        },
        {
          x: "Sad",
          y: 2000
        },
        {
          x: "Angry",
          y: 3000
        },
        {
          x: "Joyful",
          y: 4500
        },
        {
          x: "Grumpy",
          y: 3000
        },
        {
          x: "Other",
          y: 4500
        }
      ];
      setTimeout(() => {
        resolve(DATA)
      }, 500);
  })
}

export default ChartData