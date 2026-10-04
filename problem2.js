function diffObjects(oldObj, newObj) {
  const setA = new Set(Object.keys(oldObj));
  const setB = new Set(Object.keys(newObj));

  const removedKeys = [...setA.difference(setB)]; 
  const addedKeys   = [...setB.difference(setA)]; 

  const changedKeys = [];

  
  for (const key of setA) {
    if (setB.has(key)) {
      if (oldObj[key] !== newObj[key]) {
        changedKeys.push(key);
      }
    }
  }

  return {
    added: addedKeys,
    removed: removedKeys,
    changed: changedKeys,
    areEqual: addedKeys.length === 0 && removedKeys.length === 0 && changedKeys.length === 0
  };
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }