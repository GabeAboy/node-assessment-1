var util = require('./users.js')
module.exports = {

  readAll:()=>{
    var x = util.find()
    return x
  },
  findUserById:(param)=>{
    var user = util.findOne('id',param)

    return user
  },
  getAdmins:()=>{
    var admin = util.find('type','admin')
    if(admin.length)return admin
    else return null
  },
  getNonAdmins:()=>{
    var allNon = util.find('type','user')
    return allNon ? allNon : null

  },
  getUsersByFavorite:(param)=>{

    var users = util.find()
    var userFiltered = []
    
    for (var i = 0; i < users.length; i++) {
      if(users[i].favorites.includes(param)){
        userFiltered.push(users[i])
      }
    }
    return userFiltered

  },
  getUsersByAgeLimit:(age)=>{
    var users = util.find('age',age)

    if(users)return users
    else return null
  },
  findUserByQuery:(query,value)=>{
      var user = util.find(query,value)
      if(user)return user
      else return null
  },
  createUser:(obj)=>{
    var adding = util.add(obj)

    if(adding)return adding
    else return null
  },
  updateUser:(id,obj)=>{

    util.update('id',id,obj)
    var userFound = util.findOne('id',id)
    return userFound
  },
  removeUser:(id)=>{
    return util.remove('id',id)
  }


}
