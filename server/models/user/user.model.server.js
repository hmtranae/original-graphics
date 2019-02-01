const mongoose = require("mongoose");
const UserSchema = require("./user.schema.server");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUsers = findUsers;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.populateClassesAndReminders = populateClassesAndReminders;
UserModel.addInterest = addInterest;
UserModel.deleteInterest = deleteInterest;
UserModel.clearAllInterests = clearAllInterests;
UserModel.findAllUserInfo = findAllUserInfo;

function addInterest(uid, interest) {
  return UserModel.updateOne(
    { _id: uid },
    { $addToSet: { interests: [interest] } }
  );
}

function deleteInterest(uid, interest) {
  return UserModel.updateOne({ _id: uid }, { $pull: { interests: interest } });
}

function clearAllInterests(uid) {
  return UserModel.updateOne({ _id: uid }, { $set: { interests: [] } });
}

function populateClassesAndReminders(uid) {
  return UserModel.findOne({ _id: uid })
    .populate("classes")
    .populate("reminders")
    .exec();
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(uid) {
  return UserModel.findById(uid);
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({ username: username, password: password });
}

function findUsers() {
  return UserModel.find( { admin: false } )
    .sort({ firstName: 1 })
    .select("-password");
}

function findAllUserInfo() {
  return UserModel.find( { admin: false } )
  .sort({ firstName: 1 })
  .select("-password")
  .populate('classes')
  .populate('reminders')
  .exec();
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}

function updateUser(uid, user) {
  return UserModel.updateOne({ _id: uid }, user);
}

function deleteUser(uid) {
  return UserModel.remove({ _id: uid });
}

module.exports = UserModel;
