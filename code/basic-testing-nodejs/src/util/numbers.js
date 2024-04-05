function transformToNumber(value) {
  if(value === '')
    throw new Error('sth went wrong')
  return +value;
}

exports.transformToNumber = transformToNumber;
