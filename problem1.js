function deepEqual(objA, objB) {
  if(objA === objB){
    return true
  }
   if(objA === null || typeof objA !== "object" || objB === null || typeof objB !== "object"){
   return false
   }
   const keysA =  Object.keys(objA);
   const keysB =  Object.keys(objB);
    if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA){
      if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }
   return true
  
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))                     // false