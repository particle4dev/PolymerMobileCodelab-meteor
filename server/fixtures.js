/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');
var Files = APP.namespace('Files');

/**
 * Methods, functions
 */
var Files = APP.namespace('Files');

var loadTodos = function(){
    var todos = Files.loadStaticJSONFile('todos.json');
    _.each(todos.data, function(todo){
        loginfo('FIXTURES - Todos', todo.body);
        if (!TodosCollection.findOne({body: todo.body}, {fields: {_id:1}})){
            todo.updated = new Date();
            try {
                TodosCollection.insert(todo);
            }
            catch (err){
                logerror('FIXTURES -- Todo Insert Failed', err.message);
            }
        }
    });
};

// export
(function(){
    var self = this;
    self.init = function(){
        loadTodos();
    };
}).apply(APP.namespace('FIXTURES'));