const judgeVegetable = function (vegetables, metric) {
  let highestRanked = vegetables.reduce(function (a,b) {
    return a[metric] > b[metric] ? a : b;
  });
  return highestRanked.submitter;
};
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const metric = 'redness';
judgeVegetable(vegetables, metric);
console.log(judgeVegetable(vegetables, metric));
//an attempt at using a series of for each loops to solve, but evalution failed
/*   if (metric === 'redness') {
    let mostRed = vegetables[0];
    vegetables.forEach(function (vegetable) {
      if (vegetable.redness > mostRed.redness) {
        mostRed = vegetable;
      }
    });    
    return mostRed.submitter;
    /* 
  } else if (metric === 'plumpness') {
    let mostPlump = vegetables[0];
    vegetables.forEach(function (vegetable) {
      if (vegetable.plumpness > mostPlump.plumpness) {
        mostPlump = vegetable;
      }
    });    
    return mostPlump.submitter;
  */