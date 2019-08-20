app.controller('adminCtrl', ['$scope', '$http', '$window', '$compile', function($scope, $http, $window, $compile) {
  
  $scope.storeItems = [];
  
  $scope.newItem = {
    name:'',
    room:'',
    category:'',
    description:'',
    set:'',
    price:0.00,
    stock:1,
    tags:[],
    images:[]
  }
  
  function buildAdmin() {
    $http.get('/getItems')
    .then(function(res) {
      // console.log(res.data);
      var storeItems = res.data;
      for (var i = 0; i < storeItems.length; i++) {
        storeItems[i].images = JSON.parse(storeItems[i].images);
        if (i = storeItems.length-1) {
          $scope.storeItems = storeItems;
        }
      }
    })
  }
  buildAdmin();
  
  $scope.insertImages = function(event) {
    
    console.log('hit');
    
    var i = 0;
    var input = event.target;
    
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('newItemImagesInput');
      output.src = dataURL;
      // console.log(dataURL);
      $scope.newItem.images.push(dataURL);
      if (i < input.files.length) {
        i++;
        console.log('this hit');
        var imgHtml = "<img src='"+dataURL+"' class='imgPreviews'/>";
        angular.element($('#adminImgPreviewDiv')).append($compile(imgHtml)($scope));
        return reader.readAsDataURL(input.files[i]);    
      } else {
        console.log($scope.newItem);
        return;
      }
    };
    
      return reader.readAsDataURL(input.files[i]);
    
    console.log($scope.newItem);
    
  }
  
  $scope.addItem = function() {
    console.log($scope.newItem);
    $http.post('/newItem', $scope.newItem)
    .then(function(res) {
      console.log(res)
    })
    .catch(function(err) {
      console.log(err);
    })
    
  }
  
}])
