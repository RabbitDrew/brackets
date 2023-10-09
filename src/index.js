module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let open = []
  let close= []
  const pairs = {};
  for ( let i = 0; i<bracketsConfig.length; i++) {
    if (bracketsConfig[i].includes(bracketsConfig[i][0])) {
        open.push(bracketsConfig[i][0])
    }
    if (bracketsConfig[i].includes(bracketsConfig[i][1])) {
        close.push(bracketsConfig[i][1])
    }
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
   pairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
 }
 for (let i = 0; i < str.length; i++) {
   let el = str[i];
   if (open.includes(el)) {
     if (close.includes(el) && pairs[el] === stack[stack.length - 1]) {
       stack.pop();
     } else {
       stack.push(el);
     }
   } else if (close.includes(el)) {
     if (pairs[el] === stack[stack.length - 1]) {
       stack.pop();
     } else {
       return false;
     }
   }
 }
 return stack.length === 0;
}
