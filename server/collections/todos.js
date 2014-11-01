/**
 * Todos collection
 */

/**
 * 
 *
 * @param {userId} 
 * @api public
 */
function insert (doc) {
    // FIXME: validate
    if(!doc.updatedAt)
        doc.updatedAt = new Date();
    if(!doc.createdAt)
        doc.createdAt = new Date();

    return TodosCollection.insert(doc);
};

/**
 * export
 */
(function(){
    var self = this;
    self.insert = insert;
}).apply(APP.namespace('TODOS'));