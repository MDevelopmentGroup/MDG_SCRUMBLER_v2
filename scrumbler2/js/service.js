/**
 * Created by Victor77 on 10.07.2014.
 */

angular.module('ServiceModule',[])
    .service('CommentService',['CommentFactory','$rootScope','TagsFactory','$modal',function(CommentFactory,$rootScope,TagsFactory,$modal){
        return  {
            CreateCommentForTask:function(item,call){
                $rootScope.modal={title:item.Name};
                $rootScope.ViewCommentTypes=true;
                var modal;
                $rootScope.submit=function(data){
                    data.Task=item.ID;
                    CommentFactory.CreateCommentForTask(data).success(function(data){
                        modal.hide();
                        $rootScope.modal={};
                        $rootScope.ViewCommentTypes='';
                        $rootScope.comment="";
                        call(data)});
                };
                $rootScope.AddTag=function(item){
                    if(!item.ID){TagsFactory.Create(item).success(function(data){return  item.ID=data.ID;})}
                };
                $rootScope.LoadTags = function(query) {
                    return TagsFactory.GetTags(query);
                };
                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/CreateCommentForTask.html', show: true});
            },
            UpdateComment:function(ID,call){
                $rootScope.ViewCommentTypes=false;
                var modal;

                $rootScope.submit=function(data){
                    CommentFactory.Update(data).success(function(data){
                        modal.hide();
                        $rootScope.modal={};
                        $rootScope.comment="";
                        $rootScope.ViewCommentTypes='';
                        call(data)});
                };
                $rootScope.AddTag=function(item){
                    if(!item.ID){TagsFactory.Create(item).success(function(data){return  item.ID=data.ID;})}
                };
                $rootScope.LoadTags = function(query) {
                    return TagsFactory.GetTags(query);
                };
                CommentFactory.GetCommentByID(ID).success(function(data){
                    $rootScope.comment=data.children.filter(function(element,index, viewcatalog){
                        element.Tags=JSON.parse(element.Tags);
                        return true;
                    })[0];
                    modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/CreateCommentForTask.html', show: true});
                });

            }

        };
    }])
    .service('TaskService',['RoomFactory','$rootScope','TagsFactory','$modal',function(RoomFactory,$rootScope,TagsFactory,$modal){
        return  {
            EndTask:function(item,TechnoDoc,call){
                var modal;
                $rootScope.modal={title:item.Name};
                $rootScope.Sources=[];
                $rootScope.SourceTexts=[];
                $rootScope.TargetsList=TechnoDoc[0].Targets;
                $rootScope.Targets=[];

                $rootScope.submit=function(comment,Targets,Sources,SourceTexts){
                    comment.Task=item.ID;
                    comment.Lap=item.Lap;
                    comment.Targets=Targets;
                    comment.Sources=Sources;
                    comment.SourceTexts=SourceTexts;                    
                    RoomFactory.EndTask(comment).success(function(data){
                        modal.hide();
                        $rootScope.Sources=[];
                        $rootScope.SourceTexts=[];
                        $rootScope.TargetsList=[];
                        $rootScope.Targets=[];
                        $rootScope.modal={};
                        $rootScope.ViewCommentTypes='';
                        call(data)});
                };
                $rootScope.AddTag=function(item){
                    if(!item.ID){TagsFactory.Create(item).success(function(data){return  item.ID=data.ID;})}
                };
                $rootScope.LoadTags = function(query) {
                    return TagsFactory.GetTags(query);
                };
                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/EndTask.html', show: true});
            }

        };
    }])
    .service('GroupService',['GroupFactory','$rootScope','$modal',function(GroupFactory,$rootScope,$modal){
        return  {
            UserInvite:function(ID,call){


                var modal;
                $rootScope.Submit=function(data){
                    data.Group=ID;
                    //console.log(data)
                    GroupFactory.UserInvite(data).success(function(data){modal.hide();$rootScope.modal={};call(data);});
                   // RoomFactory.EndTask(data).success(function(data){modal.hide();$rootScope.modal={};$rootScope.ViewCommentTypes=''; call(data)});
                };

                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/UserInvite.html', show: true});
            },
            RemoveUserFromGroup: function(data,call){
                $rootScope.modal={
                    title:data.FullName,
                    Gravatar:data.Gravatar
                };
                var modal;
                $rootScope.ok=function(){
                    GroupFactory.RemoveUserFromGroup(data.ID).success(function(data){modal.hide();$rootScope.modal={};call(data);});
                };

                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/DeleteUser.html', show: true});
            }

        };
    }])
    .service('TipService',['TipFactory','$rootScope','$modal',function(TipFactory,$rootScope,$modal){
        return  {
            Create:function(call){
                var modal;
                $rootScope.tip={};
                $rootScope.submit=function(data){
                    TipFactory.Create(data).success(function(data){$rootScope.tip={};
                        modal.hide();
                        call(data);
                    });
                };
                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/Tips/CreateTip.html', show: true});

            },
            Update:function(item,call){
                var modal;
                $rootScope.tip=item;
                $rootScope.submit=function(data){
                    TipFactory.Update(data).success(function(data){$rootScope.tip={};
                        modal.hide();
                        call(data);
                    });
                };
                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/Tips/CreateTip.html', show: true});

            },
            View:function(){
                var modal;
                $rootScope.GetNext=function(){
                    TipFactory.GetRnd().success(function(data){
                        $rootScope.tip=data.children[0];
                    });
                };
                $rootScope.GetRandom=function(){
                    TipFactory.GetRnd().success(function(data){
                        $rootScope.tip=data.children[0];
                        modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/Tips/ViewTip.html', show: true});
                    });
                };
                $rootScope.GetRandom();

            }


        };
    }])
    .service('TechnoDocService',['$rootScope','$modal',function($rootScope,$modal){
        return  {
            Create:function(Annotation,Targets,Sources,SourceTexts,call){
                var modal;
                $rootScope.Annotation=Annotation;
                $rootScope.Targets=Targets;
                $rootScope.Sources=Sources;
                $rootScope.SourceTexts=SourceTexts;
                $rootScope.submit=function(Annotation,Targets,Sources,SourceTexts){
                    call(Annotation,Targets,Sources,SourceTexts);
                    modal.hide();
                    $rootScope.Annotation='';
                    $rootScope.Targets='';
                    $rootScope.Sources='';
                    $rootScope.SourceTexts='';
                };
                modal=$modal({scope: $rootScope, backdrop:false, template: 'partials/modal/TechnoDoc.html', show: true});

            }
        };
    }]);