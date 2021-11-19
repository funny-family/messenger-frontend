/* eslint-disable no-param-reassign, no-unused-vars */
export const assignToObject = (assignedObject, keyPath, value) => {
  const lastKeyIndex = keyPath.length - 1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = keyPath[i];
    if (!(key in assignedObject)) {
      assignedObject[key] = {};
    }

    assignedObject = assignedObject[key];
  }

  assignedObject[keyPath[lastKeyIndex]] = value;
};
