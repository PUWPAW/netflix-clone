export const truncate = (str, num) => {
  return str?.length > num ? str.substr(0, num - 1) + "..." : str;
};
