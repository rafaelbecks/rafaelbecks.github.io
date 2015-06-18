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


});