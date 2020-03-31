angular.module('app', []);

//Create a service called 'messages'
angular.module('app').factory('messages', function() {
  // messages is the object that dependencies of this service will receive
  var messages = {};

  // we'll store messages on the list property
  messages.list = [];

  messages.add = function (message) {
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});

//Create controllers that will use the 'messages' service:
//The 'ListCtrl' controller injects the 'messages' service and exposes the list from the service to the view
angular.module('app').controller('ListCtrl', function (messages) {
  var self = this;

  self.messages = messages.list;
});

//The 'PostCtrl' controller injects the 'messages' service and contains an 'addMessage' function that uses the 'add' function we made in the service
angular.module('app').controller('PostCtrl', function (messages) {
  var self = this;

  //Set default newMessage to 'Hello world!'
  self.newMessage = 'Hello world!';

  self.addMessage = function (message) {
    messages.add(message);
    //Set newMessage to an empty string after calling .add() to clear out the form input field after it's been submitted
    self.newMessage = '';
  };
});