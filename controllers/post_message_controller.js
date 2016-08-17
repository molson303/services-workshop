app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"

  $scope.vw.post_message = function(message){
    var messageObject = {}
    messageObject.text = $scope.message
    MessagesService.add(messageObject)
    $location.url("/");

}

})
