/**
 * 
 * @param {function} func function to give it default values for it's params
 * @param {object} defaultParams function default params object
 * @returns func with default values passed for undefined params
 */
function defaultArguments(func, defaultParams = {}) {
  const argumentsNames = func.argumentsNames || getArgumentsNames(func);
  const defaultArgumentsValues = argumentsNames.map(argName => {
    return {
      name: argName,
      defaultValue: defaultParams[argName],
    }
  });

  const funcWithDefaultParams = (...passedParams) => {
    const newParams = defaultArgumentsValues.map((arg, index) => passedParams[index] !== undefined ? passedParams[index] : defaultArgumentsValues[index].defaultValue)
    return func(...newParams);
  }
  funcWithDefaultParams.argumentsNames = argumentsNames;
  return funcWithDefaultParams;
}

/**
 * 
 * @param {function} func function has arguments
 * @returns passed function arguments names
 */
function getArgumentsNames(func) {
  return func.toString().match(/\((?<params>.*)\)/).groups.params.split(", ");
}

module.exports = defaultArguments;