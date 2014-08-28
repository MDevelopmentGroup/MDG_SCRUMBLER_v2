/**
 * Created by Victor77 on 22.05.2014.
 */

angular.module('FilterModule',[])
    .filter('MenuActiveFilter',[function(){
        return function (input){
            return input ? 'active' : '';
        }
    }])
    .filter('ViewTargetList',[function(){
        return function (input){
            return input ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-right';
        }
    }])
    .filter('TargetSorting',[function(){
        return function (input){
            return input ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }])
    .filter('ViewPanelType',[function(){
        return function (input,param){
            return param? 'panel panel-danger' : input ? 'panel panel-success' : 'panel panel-default';
        }
    }])
    .filter('TargetWeightTypes',[function(){
        return function (input){
            switch (input){
                case 1: return "label label-success"; break;
                case 2: return "label label-primary"; break;
                case 3: return "label label-danger"; break;
                case 4: return "label label-warning"; break;
                case 5: return "label label-default"; break;
                case 6: return "label label-info"; break;
                default : return "label label-default";
            }
        }
    }])
    .filter('ViewShowHideItem',['$rootScope',function($rootScope){
        return function (input,param){
            return param ? $rootScope.Page.Target.Open : $rootScope.Page.Target.Hide;
        }
    }])
    .filter('TasksWeightTypes',[function(){
        return function (input){
            switch (input){
                case 1: return "panel panel-success"; break;
                case 2: return "panel panel-primary"; break;
                case 3: return "panel panel-danger"; break;
                case 4: return "panel panel-warning"; break;
                case 5: return "panel panel-default"; break;
                case 6: return "panel panel-info"; break;
                default : return "panel panel-default";
            }
        }
    }])
    .filter('FilterSearchSystemUserImage',['$rootScope',function($rootScope){
        return function (input){
            return input ? input : 'img/interface/user.png';
        }
    }])
    .filter('FilterRequiredInput',[function(){
        return function(input,param){
            return input? param? 'alert-success' : 'alert-warning' : 'alert-warning';
        }
    }])
    .filter('FilterSuccessEmailStatus',['$rootScope',function($rootScope){
        return function(input,param){
            if(param!=undefined){
            if(input!=undefined){
                if(input!=""){return param? '':$rootScope.Page.CreateUser.EmailStatus;}
                else{return ''}
                }else{return ''}} else{return ''}
        }
    }])
    .filter('FilterSuccessPassword',[function(){
        return function(input,param){
            var st='alert-warning';
            if(input!=undefined&&param!=undefined){
                if(input.length>0&&param.length>0){
                    if(input==param){
                        st='alert-success';
                    }
                }
            }
            return st

                }

    }])
    .filter('FilterSuccessPasswordStatus',['$rootScope',function($rootScope){
        return function(input,param){
            var st='';
            if(input!=undefined&&param!=undefined){
                if(input.length>0&&param.length>0){
                    if(input!==param){
                        st=$rootScope.Page.CreateUser.PasswordStatus;
                    }
                }
            }
            return st
        }
    }])
    .filter('FilterSprintsSelectUser',[function(){
        return function (input){
            return input ? '' : 'disabled';
        }
    }])

    .filter('FilterSprintsSelectUserColor',[function(){
        return function (input){
            return input ? 'btn-info' : 'btn-default';
        }
    }]).filter('TreesFilter',[function(){
        return function (input,param){
            var str=' <span class="glyphicon glyphicon-folder-open"> </span> &nbsp; ';
            if(param.toString().length==1){
                str="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                str=str+' <span class="glyphicon glyphicon-arrow-right"></span> ';
            }
            if(param.toString().length>1){
                str="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                for(var i=0;i<=param.toString().split('|').length-2;i++){
                    str=str+' <span class="glyphicon glyphicon-minus"></span> ';
                }
                str=str+' <span class="glyphicon glyphicon-arrow-right"></span> ';
            }
            return str+input ;
        }
    }])

/*************************************************** Tree *************************************************************/
    .filter('FilterMasterTask',[function(){
        return function (input){
            return input=="" ? 0 : 1;
        }
    }])
    .filter('FilterSelectTreeItem',[function(){
        return function (input){
            return input==0 ? '' : 'label-success';
        }
    }])
/*************************************************** Tree *************************************************************/

/*************************************************** Sorting **********************************************************/
    .filter('FilterReverseSorting',[function(){
        return function (input){
            return input ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }])
    .filter('FilterDisabled',[function(){
        return function (input){
            return input ? '' : 'disabled';
        }
    }])
/*************************************************** Sorting **********************************************************/

/*************************************************** Breadcrumb *******************************************************/

/*************************************************** Breadcrumb *******************************************************/

    .filter('FilterButtonsUpload',[function(){
        return function (input){
            return input ? 'active' : '';
        }
    }])
/*************************************************** Task *******************************************************/
    .filter('TaskWeightTypes',[function(){
        return function (input){
            if(input){input.toString()}
            //console.log(input.toString())
            switch (input){
                case '1': return "label label-success"; break;
                case '2': return "label label-primary"; break;
                case '3': return "label label-danger"; break;
                case '4': return "label label-warning"; break;
                case '5': return "label label-default"; break;
                case '6': return "label label-info"; break;
                default : return "label label-default";
            }
        }
    }])
/*************************************************** Task *******************************************************/

/*************************************************** Events *******************************************************/
    .filter('FilterEventTypes',[function(){
        return function (input){
            if(input){input.toString()}
            //console.log(input.toString())
            switch (input){
                case 1: return '<span class="fa fa-tumblr-square fa-2x"></span>'; break;
                case 2: return '<span class="fa fa-puzzle-piece fa-2x"></span>'; break;
                case 3: return '<span class="fa fa-wheelchair fa-2x"></span>'; break;
                case 4: return '<span class="fa fa-thumbs-o-up fa-2x"></span>'; break;
                case 5: return '<span class="fa fa-thumbs-o-down fa-2x"></span>'; break;
                case 6: return '<span class="fa fa-child fa-2x"></span>'; break;
                case 7: return '<span class="fa fa-users fa-2x"></span>'; break;
                case 8: return '<span class="fa fa-meh-o fa-2x"></span>'; break;
                case 9: return '<span class="fa fa-comments-o fa-2x"></span>'; break;
                case 10: return '<span class="fa fa-refresh fa-2x"></span>'; break;
                case 11: return '<span class="fa fa-refresh fa-2x"></span>'; break;
                case 12: return '<span class="fa fa-exclamation-triangle fa-2x"></span>'; break;

            }
        }
    }])
/*************************************************** Events *******************************************************/

/*************************************************** PhoneFilter *******************************************************/
    .filter('TelephoneFilter',[function(){
        return function (text){
            text = text.replace(/[^0-9]/g, '');
            if(text.length>11){text=text.substring(0,11)}
            switch (text.length){
                case 1: text = text.replace(/^8/, "7");    break;
                case 5: text = text.replace(/(\d{1})(\d{3})(\d{1})/, "$1 ($2) $3");    break;
                case 6: text = text.replace(/(\d{1})(\d{3})(\d{2})/, "$1 ($2) $3");    break;
                case 7: text = text.replace(/(\d{1})(\d{3})(\d{3})/, "$1 ($2) $3");    break;
                case 8: text = text.replace(/(\d{1})(\d{3})(\d{3})(\d{1})/, "$1 ($2) $3-$4");    break;
                case 9: text = text.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, "$1 ($2) $3-$4");    break;
                case 10: text = text.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, "$1 ($2) $3-$4");    break;
                case 11: text = text.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");    break;
            }
        }
    }])
/*************************************************** PhoneFilter *******************************************************/

/*************************************************** AdminGroupFilter *******************************************************/
    .filter('AddUserButtonFilter',[function(){
        return function (input){
            return input? '':'disabled'
        }
    }])
/*************************************************** AdminGroupFilter *******************************************************/

/*************************************************** TechnoDocFilter *******************************************************/
    .filter('TechnoDocTargetFilter',[function(){
        return function (input){
            return input? '':'Цели';
        }
    }])
    .filter('TechnoDocSourceFilter',[function(){
        return function (input){
            return input? '':'Ресурсы';
        }
    }])
    .filter('TechnoDocSourceTextFilter',[function(){
        return function (input){
            return input? '':'Исходный текст';
        }
    }])
    .filter('TechnoDocTargetTypeFilter',[function(){
        return function (type,index){
            switch (type){
                case '0':
                    return (index+1)+' <span class="glyphicon glyphicon-screenshot"> </span> ';
                    break;
                case '1':
                    return '&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"> </span> ';
                    break;
            }
        }
    }]);
/*************************************************** AdminGroupFilter *******************************************************/