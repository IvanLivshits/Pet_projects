function findShort(str) {
  return Math.min(
    ...str.split(" ").map(function (x) {
      return x.length;
    })
  );
}

console.log(findShort(`bitcoin take over the world maybe who knows perhaps`));
