let recipes ={

}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign({},object,object[key])
  return newObj
}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign(object,object[key])
  newObj[key] = value
	return newObj
}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign({},object,object[key])
  newObj[key] = value
	return newObj
}
