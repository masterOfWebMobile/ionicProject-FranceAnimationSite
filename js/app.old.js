// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


    .state('app.intro', {
        url: '/intro',
        views: {
            'menuContent': {
                templateUrl: 'templates/intro.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profils', {
        url: '/profils',
        views: {
            'menuContent': {
                templateUrl: 'templates/profils.html',
                controller: 'ListsCtrl'
            }
        }
    })

// ---------- PROFIL 1 ----------
    .state('app.profil_1', {
        url: '/profil_1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2', {
        url: '/profil_2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3', {
        url: '/profil_3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_4', {
        url: '/profil_4',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_4/profil_4.html',
                controller: 'GanCtrl'
            }
        }
    })

// --------- PROFIL 1  --------- 

    .state('app.profil_1_A1', {
        url: '/profil_1_A1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_A1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_A2', {
        url: '/profil_1_A2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_A2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_A3', {
        url: '/profil_1_A3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_A3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_B1', {
        url: '/profil_1_B1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_B1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_B2', {
        url: '/profil_1_B2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_B2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_B3', {
        url: '/profil_1_B3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_B3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_C1', {
        url: '/profil_1_C1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_C1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_C2', {
        url: '/profil_1_C2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_C2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_C3', {
        url: '/profil_1_C3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_C3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_D1', {
        url: '/profil_1_D1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_D1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_D2', {
        url: '/profil_1_D2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_D2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_1_D3', {
        url: '/profil_1_D3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_1/profil_1_D3.html',
                controller: 'GanCtrl'
            }
        }
    })



// --------- PROFIL 1  --------- 

    .state('app.profil_2_A1', {
        url: '/profil_2_A1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_A1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_A2', {
        url: '/profil_2_A2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_A2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_A3', {
        url: '/profil_2_A3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_A3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_B1', {
        url: '/profil_2_B1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_B1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_B2', {
        url: '/profil_2_B2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_B2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_B3', {
        url: '/profil_2_B3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_B3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_C1', {
        url: '/profil_2_C1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_C1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_C2', {
        url: '/profil_2_C2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_C2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_C3', {
        url: '/profil_2_C3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_C3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_D1', {
        url: '/profil_2_D1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_D1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_D2', {
        url: '/profil_2_D2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_D2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_2_D3', {
        url: '/profil_2_D3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_2/profil_2_D3.html',
                controller: 'GanCtrl'
            }
        }
    })


// --------- PROFIL 1  --------- 

    .state('app.profil_3_A1', {
        url: '/profil_3_A1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_A1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_A2', {
        url: '/profil_3_A2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_A2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_A3', {
        url: '/profil_3_A3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_A3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_B1', {
        url: '/profil_3_B1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_B1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_B2', {
        url: '/profil_3_B2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_B2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_B3', {
        url: '/profil_3_B3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_B3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_C1', {
        url: '/profil_3_C1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_C1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_C2', {
        url: '/profil_3_C2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_C2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_C3', {
        url: '/profil_3_C3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_C3.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_D1', {
        url: '/profil_3_D1',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_D1.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_D2', {
        url: '/profil_3_D2',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_D2.html',
                controller: 'GanCtrl'
            }
        }
    })

    .state('app.profil_3_D3', {
        url: '/profil_3_D3',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil_3/profil_3_D3.html',
                controller: 'GanCtrl'
            }
        }
    })







































	
    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })


    .state('app.pourquoi', {
        url: '/pourquoi',
        views: {
            'menuContent': {
                templateUrl: 'templates/pourquoi.html',
                controller: 'ListsCtrl'
            }
        }
    })



    .state('app.artisan_commercant', {
        url: '/artisan_commercant',
        views: {
            'menuContent': {
                templateUrl: 'templates/artisan_commercant.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.artisan_commercant_resume_prestations', {
        url: '/artisan_commercant_resume_prestations',
        views: {
            'menuContent': {
                templateUrl: 'templates/artisan_commercant_resume_prestations.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.artisan_commercant_invalidite', {
        url: '/artisan_commercant_invalidite',
        views: {
            'menuContent': {
                templateUrl: 'templates/artisan_commercant_invalidite.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
	
    .state('app.artisan_du_batiment', {
        url: '/artisan_du_batiment',
        views: {
            'menuContent': {
                templateUrl: 'templates/artisan_du_batiment.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
	
    .state('app.exploitant_agricole', {
        url: '/exploitant_agricole',
        views: {
            'menuContent': {
                templateUrl: 'templates/exploitant_agricole.html',
                controller: 'ComponentsCtrl'
            }
        }
    })
	
    .state('app.professions_liberales', {
        url: '/professions_liberales',
        views: {
            'menuContent': {
                templateUrl: 'templates/professions_liberales.html',
                controller: 'ComponentsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
});
