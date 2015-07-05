if(document.URL.indexOf("#")==-1){
  location.href="#/";
}

var scuba_site=angular.module('scuba_site',['ui.router']);

scuba_site.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      //$urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl : 'home.html'
            })
            .state('cursos',{
                url: '/cursos',
                templateUrl: 'cursos.html'
            })

            .state('actividades',{
                url: '/actividades',
                templateUrl: 'actividades.html'
            })

            .state('tienda',{
                url: '/tienda',
                templateUrl: 'tienda.html'
            })

            .state('contacto',{
                url: '/contacto',
                templateUrl: 'contacto.html'
            })
            .state('staff',{
                url: '/staff',
                templateUrl: 'staff.html'
            })
            .state('eventos',{
                url: '/eventos',
                templateUrl: 'eventos.html'
            })  

});


function validarEntero(e){
    tecla = (document.all) ? e.keyCode : e.which;
    patron =/[\d]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

scuba_site.controller('cursosController', ['$scope', function($scope){

    $scope.templates=
    [ { name: 'discover.html', url: 'cursos/discover.html'},
    {name: 'open_water.html', url: 'cursos/open_water.html'},
    {name: 'advanced_open.html', url: 'cursos/advanced_open.html'},
    {name: 'navegacion_sub.html', url: 'cursos/navegacion_sub.html'},
    {name: 'buceo_profundo.html', url: 'cursos/buceo_profundo.html'},
    {name: 'aire_enriquecido.html', url: 'cursos/aire_enriquecido.html'},
    {name: 'naufragios.html', url: 'cursos/naufragios.html'},
    {name: 'multinivel.html', url: 'cursos/multinivel.html'},
    {name: 'corrientes.html', url: 'cursos/corrientes.html'},
    {name: 'busqueda.html', url: 'cursos/busqueda.html'},
    {name: 'nocturno.html', url: 'cursos/nocturno.html'},
    {name: 'desde_bote.html', url: 'cursos/desde_bote.html'},
    {name: 'rescue_diver.html', url: 'cursos/rescue_diver.html'}
    ];
    $scope.curso=function(curso,titulo){
      $scope.template=$scope.templates[curso];
      $scope.comentario=titulo;
    }

    if(sessionStorage.curso!=undefined){
        $scope.curso(sessionStorage.curso,sessionStorage.titulo);   
        $(".left_menu ul li").removeClass("active_menu");
        $("#"+sessionStorage.id_curso).toggleClass("active_menu");
    }
    else
        $scope.curso(1,"DISCOVER SCUBA DIVING");

    $scope.href_curso=function(curso,titulo,id){
        sessionStorage.curso=curso;
        sessionStorage.titulo=titulo;
        sessionStorage.id_curso=id;
        window.location.href="#/cursos";
    }
    
}]);(window.angular);