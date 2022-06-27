export const shorten = (address) =>
  `${address.slice(0, 5)}...${address.slice(
    address.length - 3,
    address.length
  )}`;
