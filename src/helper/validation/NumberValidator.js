export const numberValidator = (number) => {
  const isValidNumber = !isNaN(parseFloat(number)) && isFinite(number);

  // Update the state to reflect the validation result
  return isValidNumber;
};
