app.controller('mainCtrl', ['$scope', '$http', '$window', '$compile', function($scope, $http, $window, $compile) {
  
  $scope.storeItems = [
    {
      name:'Rustic Chair',
      category:'Dining Room',
      images:[],
      tags:['wood','chair','red','rustic'],
      set:'Super Set',
      quantity:4
    },
    {
      name:'Rustic Table',
      category:'Dining Room',
      images:[],
      tags:['wood','table','red','rustic'],
      set:'Super Set',
      quantity:1
    },
    {
      name:'Modern Couch',
      category:'Family Room',
      images:[],
      tags:['wood','couch','grey','modern'],
      set:'Super Duper Set',
      quantity:1
    },
    {
      name:'Modern Arm Chair',
      category:'Family Room',
      images:[],
      tags:['wood','arm_chair','grey','modern'],
      set:'Super Duper Set',
      quantity:2
    }
  ];
  
  $scope.categories = [
    {
      name:'Family Room',
      image:''
    },
    {
      name:'Dining Room',
      image:''
    }
  ];
  
  $scope.floorLayout = {
    cat:'all',
    set:'all'
  }
  
  $scope.storeFloor = [];
  $scope.sets = [];
  
  function buildStore() {
    
  }
  
  $scope.filterBy = function(f,t) {
    
    $scope.storeFloor = [];
    
    if (t == 'cat') {
      
      $scope.floorLayout.set = 'all'
      
      if (f == 'all') {
        $scope.floorLayout.cat = 'all'
        $scope.storeFloor = $scope.storeItems;
        
      } else {
        
        $scope.floorLayout.cat = f;
        for (var i = 0; i < $scope.storeItems.length; i++) {
          if (f == $scope.storeItems[i].category) {
            $scope.storeFloor.push($scope.storeItems[i])
          }
        }
        
      }
      
      $scope.sets = [];
      for (var i = 0; i < $scope.storeFloor.length; i++) {
        console.log('hit');
        if ($scope.sets.length) {
          var push = true;
          for (var j = 0; j < $scope.sets.length; j++) {
            if ($scope.sets[j] == $scope.storeFloor[i].set ) {
              push = false;
            }
            if (j == $scope.sets.length - 1) {
              if (push == true) {
                console.log('push');
                $scope.sets.push($scope.storeFloor[i].set);
              }      
            }
          }
        } else {
          console.log('first push');
          $scope.sets.push($scope.storeFloor[i].set);
        }
      }
      
    } else if(t == 'set') {
      
      $scope.floorLayout.set = t;
      $scope.storeFloor = [];
      var tempFloor = [];
      
      for (var i = 0; i < $scope.storeItems.length; i++) {
        console.log('run');
        if ($scope.storeItems[i].category == $scope.floorLayout.cat && $scope.floorLayout.cat != 'all') {
          console.log('push to temp');
          tempFloor.push($scope.storeItems[i]);
        } else if($scope.floorLayout.cat == 'all') {
          tempFloor.push($scope.storeItems[i]);
        }
        if (i == $scope.storeItems.length-1) {
          // console.log(f);
          if (f != 'all') {
            // console.log(f);
            console.log('set ' + f);
            for (var j = 0; j < tempFloor.length; j++) {
              // console.log(f);
              // console.log(tempFloor[j].set);
              if (f == tempFloor[j].set) {
                if ($scope.floorLayout.cat != 'all') {
                  console.log($scope.floorLayout.cat + ' categories');
                  $scope.storeFloor.push(tempFloor[j]);
                } else if($scope.floorLayout.cat == 'all') {
                  console.log('all categories');
                  $scope.storeFloor.push(tempFloor[j]);
                }
              } 
            }
            
          } else {
            console.log('all sets');
            console.log(tempFloor);
            $scope.storeFloor = tempFloor;
          }
        }
      }
      
      
      
    }
    
    
  }
  
}]);
