// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
  createEnumerableProperty.prototype = propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
  return Symbol(propertyName);
};

const createProtoMagicObject = () => {
  createProtoMagicObject.prototype = createProtoMagicObject.__proto__;
  return createProtoMagicObject;
};

const incrementor = () => {
  count++;
  incrementor.valueOf = function() {
    return  count;
  };
  return incrementor;
};
let count = 0;

const asyncIncrementor = () => {
  return ++asyncIncrementor.count;
};
asyncIncrementor.count = 0;

const createIncrementer = () => {


};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {


};
const getDeepPropertiesCount = (array, count = 0) => {
  for(let i in array) {
    count++;
    count += getDeepPropertiesCount(array[i]);
  }
  return count;
};
const createSerializedObject = () => {
  return new Number();

};
const toBuffer = () => {


};
const sortByProto = () => {


};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
