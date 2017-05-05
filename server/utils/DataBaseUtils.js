var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CreditSchema = new Schema({
    name    :{type: String, require:true},
    money   :{type: Number, require:true},
    secret  :{type: String, require:true},
    month   :[]
});

mongoose.model('Credit', CreditSchema);

var Credit = mongoose.model('Credit');

exports.setUpConnection = function() {
    mongoose.connect('mongodb://localhost/credits');
};

exports.listOfCredits = function() {
    var credit = mongoose.model('Credit');
    return credit.find();
};

exports.createCredit = function(data) {
    var credit = new Credit({
        name: data.name,
        money: data.money,
        secret: data.secret,
        month: []
    });
    return credit.save();
};

exports.payForCredit = function(data) {
    var credit = mongoose.model('Credit');
    credit.find({name: data.name}, function(err, credit) {
        credit.month.push(true);
        return credit.save();
    });
};