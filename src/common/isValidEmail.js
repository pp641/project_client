export const ValidateEmail = (input) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) return true;
  else return false;
};
