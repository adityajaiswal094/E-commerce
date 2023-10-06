export default function FormatPrice({ price }) {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export const sortByName = (value, tempData) => {
  if (value === "a-z") {
    return tempData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (value === "z-a") {
    return tempData.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
};

export const sortByPrice = (value, tempData) => {
  if (value === "lowest") {
    const sortByPrice = (a, b) => {
      return a.price - b.price;
    };

    return tempData.sort(sortByPrice);
  }
  if (value === "highest") {
    const sortByPrice = (a, b) => {
      return b.price - a.price;
    };

    return tempData.sort(sortByPrice);
  }
};