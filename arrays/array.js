var data = [
  1,
  "Maua",
  true,
  null,
  undefined,
  { name: "mayank" },
  function (name) {
    return name;
  },
  ["Red", "blue", "yellow"],
]
console.log(data[6](data[7][1]))