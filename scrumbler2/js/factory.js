/**
 * Created by Victor77 on 23.06.2014.
 */

angular.module('FactoryModule',[])
    .factory('TaskFactory',['$http',function($http){
        var task='/scrum/Task';
        return {
            Create:function(data)   {return $http.post(task+'/Create',data);},
            Update:function(data)   {return $http.post(task+'/Update',data);},
            Delete:function(data)   {return $http.delete(task+'/Delete/'+data);},
            Get:function(data,All)      {return $http.get(task + '/Get/'+data+'/'+All);},
            Get0:function(All)         {return $http.get(task + '/Get/'+All);},
            GetTask:function(ID)    {return $http.get(task + '/GetTaskByID/'+ID);},
            GetBreadcrumb:function(ID){return $http.get(task + '/GetBreadcrumb/'+ID);},
            ViewTask:function(ID){return $http.get(task + '/ViewTask/'+ID);},
            Recovery:function(ID){return $http.get(task + '/Recovery/'+ID);}
        }
    }])
    .factory('TreeFactory',['$http',function($http){
        var tree='/scrum/Tree';
        return {
            GetTrees:function()    {return $http.get(tree + '/GetTrees');},
            GetTreeByID:function(ID)    {return $http.get(tree + '/GetTreeByID/'+ID);},
            SetTree:function(ID,To)  {return $http.post(tree + '/SetTree/'+ID+'/'+To);}

        }
    }])
    .factory('RoomFactory',['$http',function($http){
        var room='/scrum/Room';
        return {
            GetActiveTasks:function()    {return $http.get(room + '/GetActiveTasks');},
            GetTasksInTheWork:function() {return $http.get(room + '/GetTasksInTheWork');},
            GetAFailedTasks:function()   {return $http.get(room + '/GetAFailedTasks');},
            GetCompletedTasks:function() {return $http.get(room + '/GetCompletedTasks');},
            CancelTask:function(ID) {return $http.post(room + '/CancelTask/'+ID);},
            StartTask:function(ID) {return $http.post(room + '/StartTask/'+ID);},
            EndTask:function(data) {return $http.post(room + '/EndTask',data);}
        }
    }])
    .factory('CompanyFactory',['$http',function($http){
        var company='/scrum/Company';
        return {
            GetCompany:function(ID)    {return $http.get(company + '/Get/'+ID);},
            GetCompanies:function()    {return $http.get(company + '/GetAll');},
            GetCompaniesFromVacancy:function()  {return $http.get('http://146.185.178.14:57772/API/json/Company/GetAll/2');},
            Create:function(data)    {return $http.post(company + '/Create',data);},
            Update:function(data)    {return $http.post(company + '/Update',data);},
            SetUserForCompany:function(data)    {return $http.post(company + '/SetUserForCompany',data);},
            DeleteUserFromCompany:function(data)    {return $http.post(company + '/SetUserForCompany',data);}
        }
    }])
    .factory('GroupFactory',['$http',function($http){
        var group='/scrum/Group';
        return{
            GetAllGroups:function(){return $http.get(group+'/GetAllGroups');},
            GetMyGroups:function(){return $http.get(group+'/GetMyGroups');},
            GetAdminGroups:function(){return $http.get(group+'/GetAdminGroups');},
            GetGroupsByCompany:function(){return $http.get(group+'/GetGroupsByCompany');},
            Create:function(data){return $http.post(group+'/Create',data);},
            Update:function(data){return $http.post(group+'/Update',data);},
            Delete:function(data){return $http.post(group+'/Delete',data);},
            GetGroupByID:function(ID){return $http.get(group+'/GetGroupByID/'+ID);},
            GetGroupByTask:function(ID){return $http.get(group+'/GetGroupByTask/'+ID);},
            AddUserToGroup:function(data){return $http.post(group+'/AddUserToGroup',data);},
            UserInvite:function(data){return $http.post(group+'/UserInvite',data);},
            RemoveUserFromGroup:function(ID){return $http.delete(group+'/RemoveUserFromGroup/'+ID);}
        }
    }])
    .factory('CommentFactory',['$http',function($http){
        var comment='/scrum/Comment';
        return{
            GetCommentByTask:function(ID){return $http.get(comment+'/GetCommentByTask/'+ID);},
            GetComments:function(){return $http.get(comment+'/GetComments');},
            GetCommentByID:function(ID){return $http.get(comment+'/GetCommentByID/'+ID);},
            CreateCommentForTask:function(data){return $http.post(comment+'/CreateCommentForTask',data);},
            GetLastCommentForTasks:function(data){return $http.post(comment+'/GetLastComment',data);},
            Update:function(data){return $http.post(comment+'/Update',data);}
        }
    }])
    .factory('EventFactory',['$http',function($http){
        var event='/scrum/Event';
        return{
            GetEvents:function(){return $http.get(event+'/GetEvents');}
        }
    }])
    .factory('LanguageFactory',['$http','$rootScope',function($http,$rootScope){
        return{
            'SetInterfaceLanguage': function(lang){
                return $http.get('lang/'+'ru'+'.json').success(function(data){
                    $rootScope.Page=data;
                });
            }
        }
    }])
    .factory('SystemUserFactory',['$http',function($http){
        var user='/scrum/SystemUser';
        return{
            Create:function(data){return $http.post(user+'/Create',data);},
            Registration:function(data){return $http.post(user+'/Registration',data);},
            Update:function(data){return $http.post(user+'/Update',data);},
            UpdateGitHubLogin:function(data){return $http.post(user+'/UpdateGitHubLogin',data);},
            GetUserByID:function(data){return $http.get(user+'/GetUserByID/'+data);},
            GetUsers:function(){return $http.get(user+'/GetUsers');},
            LoginIsValid:function(data){return $http.post(user+'/LoginIsValid',data);},
            GetUsersInGroupByTask:function(ID){return $http.get(user+'/GetUsersInGroupByTask/'+ID);}, //??????????????????????????? TODO
            GetUsersByGroup:function(ID){return $http.get(user+'/GetUsersByGroup/'+ID);},
            CheckUID:function(ID){return $http.get(user+'/CheckUID/'+ID);},
            GetUsersByCompanyOrAllNotIsGroup:function(Company,ID){return $http.get(user+'/GetUsersByCompanyOrAllNotIsGroup/'+Company+'/'+ID);}
        }
    }])
    .factory('SprintFactory',['$http',function($http){
        var sprint='/scrum/Sprint';
        return{
            GetSprints:function(){return $http.get(sprint+'/GetSprints');},
            GetSprintsByTask:function(ID){return $http.get(sprint+'/GetSprintsByTask/'+ID);},
            SetShooterForTask:function(data){return $http.post(sprint+'/SetShooterForTask',data);},
            TasksInTheWork:function(){return $http.get(sprint+'/TasksInTheWork');}
        }
    }])
    .factory('AuthFactory',['$http','$cookies',function($http,$cookies){
        var auth='/scrum/Auth';
        return{
            Login:function(data){return $http.post(auth+'/Login/',data);},
            Logout:function()   {return $http.post(auth+'/Logout');},
            Get:function(){

                return{
                    Name:function(){
                        var data=[];
                        $cookies.ScrumblerData? data=$cookies.ScrumblerData.split('|'):'';
                        if(data.length>0){return data[0];}else{return '';}
                    },
                    Gravatar:function(){
                        var data=[];
                        $cookies.ScrumblerData? data=$cookies.ScrumblerData.split('|'):'';
                        if(data.length>0){return data[1];}else{return '';}
                    }
                }
            }
        }
    }])
    .factory('SearchFactory',['$http',function($http){
    var search='/scrum/Search';
    return{
        SearchText:function(text){return $http.get(search+'/SearchText/'+text);},
        GetTags:function(text){return $http.get('/scrum/Tags/GetTags/'+text).success(function(data){
            return data.children;
        });},
        Create:function(data){return $http.post('/scrum/Tags/Create',data);}
    }
}])
    .factory('TagsFactory',['$http','$q',function($http,$q){
        var tag='/scrum/Tags';
        return{
            GetTags:function(text){ var deferred = $q.defer(); $http.get(tag+'/GetTags/'+text).success(function(data){ deferred.resolve(data.children);});
                return deferred.promise;
            },
            GetTags2:function(text){ return $http.get(tag+'/GetTags/');
            },
            Create:function(data){return $http.post(tag+'/Create',data);},
            DeleteTagFromTask:function(data){return $http.post(tag+'/DeleteTagFromTask',data);},
            DeleteTag:function(data){return $http.post(tag+'/DeleteTag',data);},
            GetUserStatistic:function(UserId){return $http.get(tag+'/GetUserStatistic/'+UserId)},
            GetStatistic:function(){return $http.get(tag+'/GetStatistic/')}
        }
    }])
    .factory('TemplateFactory',['$http',function($http){
        var temp='/scrum/Template';
        return{
            GetNameSpaceList:function(){return $http.get(temp+'/GetNameSpaceList');},
            GetClassList:function(text){return $http.get(temp+'/GetClassList/'+text);},
            Create:function(NameSpace,Package){return $http.get(temp+'/Create/'+NameSpace+'/'+Package);}
        }
    }])
    .factory('TipFactory',['$http',function($http){
        var tip='/scrum/Tips';
        return {
            Create:function(data)   {return $http.post(tip+'/Create',data);},
            Update:function(data)   {return $http.post(tip+'/Update',data);},
            Delete:function(ID)   {return $http.delete(tip+'/Delete/'+ID);},
            Get:function(ID)      {return $http.get(tip + '/Get/'+ID);},
            GetAll:function()      {return $http.get(tip + '/GetAll');},
            GetRnd:function()      {return $http.get(tip + '/GetRnd');}


        }
    }])
    .factory('GitHubFactory',['$http',function($http){
    var github='/scrum/GitHub';
    return{
        CreateRepo:function(data)   {return $http.post(github+'/CreateRepo',data);},
        //Update:function(data)   {return $http.post(tip+'/Update',data);},
        DeleteRepo:function(data)   {return $http.delete(github+'/DeleteRepo/'+data);},
        //Get:function(ID)      {return $http.get(tip + '/Get/'+ID);},
        //GetAll:function()      {return $http.get(tip + '/GetAll');},
        CreateIssue:function(data) {return $http.post(github+'/CreateIssue',data); },
        GetGitHubRepo:function(){return $http.get(github+"/GetGitHubRepo");}
    }
	}])
	.factory('FactotyUpload',['$http',function($http){
	var upload="/scrum/Upload";
	return{
		FileUpload:function(InputName, OutputName){
	        var formData = new FormData();
	        for(var i=0;i<document.getElementById(InputName).files.length;i++){
	            formData.append("file"+i, document.getElementById(InputName).files[i]);
	        }
	        var reader = new FileReader;
	        reader.readAsDataURL(document.getElementById(InputName).files[0]);
	        //var place = document.getElementById("rrr");
	        // Как только картинка загрузится
	        reader.onload = function(e) {
	          //  place.src = e.target.result;
	            console.log('nenene');
	        }
	        var xhr = new XMLHttpRequest();

	        // Отправим данные на сервер
	        xhr.open("POST", upload+"/FileUpload/", true);
	        xhr.upload.onprogress = function(e) { // <<<
	            if (e.lengthComputable) {
	                progressBar.value = (e.loaded / e.total) * 100;
	            }
	        };

	        xhr.onreadystatechange=function(e){
	            if (xhr.readyState == 4) {
	                var val = document.getElementById(OutputName);
	                val.value=xhr.responseText;
	            }
	        };
	        xhr.send(formData);
    	},
    	GetListFileUpload:function(){
	    	return $http.get(upload+"/GetListFileUpload/")
	    }
	}
}]);






