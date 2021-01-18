const formatCurrenciDecimal = (value) => {
  const splitValue = String(value)?.split("");

  splitValue.splice(-2, 0, ".");

  let newValue = splitValue.reduce((acc, current) => acc + current);

  return newValue
};

export default formatCurrenciDecimal;

