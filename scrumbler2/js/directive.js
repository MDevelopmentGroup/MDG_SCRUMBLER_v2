/**
 * Created by Victor77 on 22.05.2014.
 */

angular.module('DirectiveModule',[])
    .directive("redactor", function() {
        return {
            require: '?ngModel',
            link: function($scope, elem, attrs, controller) {
                controller.$render = function() {
                    elem.redactor({
                        keyupCallback: function() {
                            $scope.$apply(controller.$setViewValue(elem.getCode()));
                        },
                        execCommandCallback: function() {
                            $scope.$apply(controller.$setViewValue(elem.getCode()));
                        }
                    });
                    elem.setCode(controller.$viewValue);
                };
            }
        };
    }); /*
    .directive("hotkeys", function() {
        return {
            controller: function($scope,$element,$cookies,$aside,$modal,TargetFactory){
                var Aside = $aside({scope: $scope, template: 'partials/modal/aside.html', show: false,placement:'left'});
                var modal="";
                //$scope.AsideView=false;
                $scope.GetTargets=function(){
                    TargetFactory.ReturnSlavesByUser($cookies.id).success(function(data){
                        $scope.Slaves=data.children;
                    });
                };
               $element.on('keydown',function($event){              /// Y
                  if($event.ctrlKey && $event.altKey && $event.which===89){
                      //$scope.AsideView=!$scope.AsideView;
                      $scope.GetTargets();

                      Aside.show();
                  }
               });  // 1...                     ..9
                var a=[48,49,50,51,52,53,54,55,56,57];

                $element.on('keydown',function($event){
                    if($event.ctrlKey && $event.altKey && a.indexOf($event.which)!=-1){
                        Aside.hide();
                        TargetFactory.ReturnSlavesByUser($cookies.id).success(function(data){
                            $scope.Slaves=data.children;
                            $scope.title=$scope.Slaves[a.indexOf($event.which)].ShortDescripion;
                        });

                        if(typeof modal=='object'){
                            modal.destroy();
                        }

                         modal=$modal({scope: $scope, backdrop:false, template: 'partials/modal/SuccessTask.html', show: true});

                    }

                });


            }
        };
    });

*/