const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c2dfc3961eb2037e1efdf32'}).then((todo) => {

// });

Todo.findByIdAndRemove('5c2dfc3961eb2037e1efdf32').then((todo) => {
    console.log(todo);
})
