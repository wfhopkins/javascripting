const smartGarbage = function(trash, bins) {
  //comment for line #s
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  return bins;
};
const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
};
smartGarbage("recycling", bins);
