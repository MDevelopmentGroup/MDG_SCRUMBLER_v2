/**
 * Created by Victor77 on 22.05.2014.
 */
angular.module('Scrumbler',['ngCookies','ngResource','ngRoute','ngSanitize','ngAnimate',
    'mgcrea.ngStrap',
    'textAngular',
    'ui.ace',
    'ngTagsInput',
    'angular-md5',
    'FactoryModule',
    'FilterModule',
    'DirectiveModule',
    'ServiceModule'


    //,'DirectiveModule'
]).config(['$routeProvider',  function($routeProvider) { $routeProvider.

    // Личный кабинет разработчика
    // PartId - Внитренний роутер по кабинету

    when('/Room/:PartId',       {templateUrl: 'partials/Room/Room.html',access:1, controller: ViewRoomCtrl}).
    when('/Room',               {templateUrl: 'partials/Room/Room.html',access:1, controller: ViewRoomCtrl}).


    when('/Tasks/:ID',          {templateUrl: 'partials/Task/Tasks.html', access:1,controller: ViewTasksCtrl}).
    when('/Tasks',              {templateUrl: 'partials/Task/Tasks.html',access:1,controller: ViewTasksCtrl}).
    when('/CreateTask',         {templateUrl: 'partials/Task/CreateTask.html',access:1, controller: CreateTaskCtrl}).
    when('/CreateTask/:ID',     {templateUrl: 'partials/Task/CreateTask.html',access:1, controller: CreateTaskCtrl}).
    when('/UpdateTask/:ID',     {templateUrl: 'partials/Task/CreateTask.html',access:1, controller: UpdateTaskCtrl}).
    when('/Task/:ID',           {templateUrl: 'partials/Task/Task.html',access:1, controller: ViewTaskCtrl}).


    when('/CreateUser/:uid',    {templateUrl: 'partials/SystemUser/CreateUser.html', access:1, controller: CreateSystemUserCtrl}).
    when('/CreateUser',         {templateUrl: 'partials/SystemUser/CreateUser.html',access:1, controller: CreateSystemUserCtrl}).

    when('/UpdateUser/:ID',     {templateUrl: 'partials/SystemUser/CreateUser.html',access:1, controller: UpdateSystemUserCtrl}).
    when('/User/:ID',           {templateUrl: 'partials/SystemUser/User.html',access:1, controller: ViewUserCtrl}).

    when('/SystemUsers',        {templateUrl: 'partials/SystemUser/SystemUsers.html',access:1, controller: SystemUsersCtrl}).


    when('/Sprints',            {templateUrl: 'partials/Sprints/Sprints.html',access:1, controller: ViewSprintsCtrl}).
    when('/Sprints/:ID',        {templateUrl: 'partials/Sprints/Sprints.html',access:1, controller: ViewSprintsCtrl}).

    when('/TasksInTheWork',        {templateUrl: 'partials/Sprints/TasksInTheWork.html',access:1, controller: ViewTasksInTheWorkCtrl}).
    when('/TasksInTheWork/:ID',    {templateUrl: 'partials/Sprints/TasksInTheWork.html',access:1, controller: ViewTasksInTheWorkCtrl}).



    when('/Groups/:PartID',      {templateUrl: 'partials/Groups/Groups.html',access:1, controller: ViewGroupsCtrl}).
    when('/Groups',              {templateUrl: 'partials/Groups/Groups.html',access:1, controller: ViewGroupsCtrl}).
    when('/Group/:ID',           {templateUrl: 'partials/Groups/Group.html',access:1, controller: ViewGroupCtrl}).

    when('/AdminGroup/:ID',           {templateUrl: 'partials/Groups/AdminGroup.html',access:1, controller: AdminGroupCtrl}).

    when('/CreateGroup',         {templateUrl: 'partials/Groups/CreateGroup.html',access:1, controller: CreateGroupCtrl}).
    when('/UpdateGroup/:ID',     {templateUrl: 'partials/Groups/CreateGroup.html',access:1, controller: UpdateGroupCtrl}).



    when('/Tree/:ID',             {templateUrl: 'partials/Trees/Trees.html',access:1, controller: ViewTreesCtrl}).
    when('/Tree',                 {templateUrl: 'partials/Trees/Trees.html',access:1, controller: ViewTreesCtrl}).

    when('/Messages',             {templateUrl: 'partials/Messages/Messages.html',access:1, controller: ViewMessagesCtrl}).
    when('/Messages/:ID',         {templateUrl: 'partials/Messages/Messages.html',access:1, controller: ViewMessagesCtrl}).


    when('/Events',               {templateUrl: 'partials/Events/Events.html', access:1, controller: ViewEventsCtrl}).
    when('/Search',               {templateUrl: 'partials/Search/Search.html', access:1, controller: ViewTopMenuCtrl}).



    when('/Company/:ID',           {templateUrl: 'partials/Company/Company.html', access:1, controller: ViewCompanyCtrl}).
    when('/Companies',              {templateUrl: 'partials/Company/Companies.html', access:1, controller: ViewCompaniesCtrl}).
    when('/CreateCompany',           {templateUrl: 'partials/Company/CreateCompany.html', access:1, controller: CreateCompanyCtrl}).
    when('/UpdateCompany/:ID',       {templateUrl: 'partials/Company/CreateCompany.html', access:1, controller: UpdateCompanyCtrl}).


    when('/Settings/:PartId',       {templateUrl: 'partials/Settings/Settings.html', access:1, controller: ViewSettingsCtrl}).
    when('/Settings',       {templateUrl: 'partials/Settings/Settings.html', access:1, controller: ViewSettingsCtrl}).

    when('/registration/:uid',    {templateUrl: 'partials/SystemUser/registration.html', access:0, controller: RegistrationCtrl}).

     /// Template

    when('/Template',    {templateUrl: 'partials/Template/Template.html', access:1, controller: ViewTemplateCtrl}).


    otherwise({redirectTo: '/Tasks'});
}])
    .run(function($rootScope,$location,LanguageFactory,AuthFactory){
        LanguageFactory.SetInterfaceLanguage('');
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if(next.access==$rootScope.Success){}
            else{$location.path('/Events');}
        });
    })
    .directive('upl',function(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                ngModel: '='
            },
            template: '<img ng-click="test()"  style="height: 100px;max-width: 100px;">',
            link: function (scope, element, attrs) {

            },
            controller:function($scope, $element, $attrs, $transclude,$modal){
                $scope.test=function(){
                    $scope.ngModel="img/images.jpg";
                    console.log($scope.ngModel);
                    $scope.src=$scope.ngModel;

                    var modal=$modal({scope: $scope, backdrop:false, template: 'partials/modal/Upload.html', show: true});
                }
            }
        };
    }).config(['$httpProvider', function ($httpProvider) {
        // enable http caching
        //$httpProvider.defaults.cache = true;
    }])
    .config(function($datepickerProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy',
            startWeek: 1
        });
    })

    .directive("masonry", function () {
        var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
        return {
            compile: function(element, attrs) {
                // auto add animation to brick element
                var animation = attrs.ngAnimate || "'masonry'";
                var $brick = element.children();
                $brick.attr("ng-animate", animation);

                // generate item selector (exclude leaving items)
                var type = $brick.prop('tagName');
                var itemSelector = type+":not([class$='-leave-active'])";

                return function (scope, element, attrs) {
                    var options = angular.extend({
                        itemSelector: itemSelector
                    }, scope.$eval(attrs.masonry));

                    // try to infer model from ngRepeat
                    if (!options.model) {
                        var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
                        if (ngRepeatMatch) {
                            options.model = ngRepeatMatch[4];
                        }
                    }

                    // initial animation
                    element.addClass('masonry');

                    // Wait inside directives to render
                    setTimeout(function () {
                        element.masonry(options);

                        element.on("$destroy", function () {
                            element.masonry('destroy')
                        });

                        if (options.model) {
                            scope.$apply(function() {
                                scope.$watchCollection(options.model, function (_new, _old) {
                                    if(_new == _old) return;

                                    // Wait inside directives to render
                                    setTimeout(function () {
                                        element.masonry("reload");
                                    });
                                });
                            });
                        }
                    });
                };
            }
        };
    });