let recipes ={

}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign({},object,object[key])
  return newObj
}

updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign(object,object[key])
  return newObj
}
