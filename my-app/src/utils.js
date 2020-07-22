export const sortList = (sortBy, sortOrder) =>
  function(a, b) {
    let val1 = a[sortBy],
        val2 = b[sortBy],
        comparison = 0;

    if (typeof a[sortBy] === "string") {
      val1 = a[sortBy].toString().toLowerCase();
      val2 = b[sortBy].toString().toLowerCase();
    }
    if (val1 === val2) {
      comparison = 0;
    }
    if (sortOrder === "DESC") {
      if (val1 > val2) {
          comparison = -1;
      } else {
          comparison = 1;
      }
    } else {
      if (val1 < val2) {
          comparison = -1;
      } else {
          comparison = 1;
      }
    }
    return comparison;
};