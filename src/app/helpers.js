export const truncate = (str) =>{
  if (str.length <= 100){
    return str;
  } else {
    return `${str.slice(0,100)}...`
  }
}

