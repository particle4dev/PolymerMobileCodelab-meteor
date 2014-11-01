/**
 *
 * @Meteor.Collection
 */

TodosCollection = new Meteor.Collection('todos',{
    transform: function(doc) {return new TodoDocument(doc);}
});

TodosCollection.allow({
    insert: function() {return true;},
    update: function() {return true;},
    remove: function() {return true;}
});

TodoDocument = function(doc){
    var self = this;
    _.extend(self, doc);
};
_.extend(TodoDocument.prototype, {
    constructor: TodoDocument
});

/**
 * Method
 * Latency Compensation.
 * On the client, use prefetching and model simulation to make it look like you have a zero-latency connection
 * to the database.
 */
Meteor.methods({

});

/**
 * Function or class
 */

/**
 * export
 */
(function(){
    var self = this;

}).apply(APP.namespace('TODOS'));