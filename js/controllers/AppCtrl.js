app.controller('AppCtrl', function ($scope, $timeout, $ionicPopover, $ionicLoading) {

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = '#/app/profil_2';
        window.open('#/app/profils', '_self');
    });

    var fab2 = document.getElementById('fab2');
    fab2.addEventListener('click', function () {
        //location.href = '#/app/profil_4';
        window.open('#/app/profil_4', '_self');
    });

    // .fromTemplate() method
    var template = '<ion-popover-view class="animated flipInX">' +
                    '   <ion-header-bar bar-calm>' +
                    '       <h1 class="title">Et ma famille ?</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
					'<div class = "row responsive-sm dark" style="height:55px">' +
					'  <div class="col">' +
					'    <div class = "row responsive-sm">' +
					'      <div class="col col-50" align="center">' +
					'        <h5>Rente conjoint</h5>' +
					'      </div>' +
					'      <div class="col col-50" align="center">' +
					'        <h5>Capital Orphelin</h5>' +
					'      </div>' +
					'    </div>' +
					'  </div>' +
					'</div>' +
					'<div class = "row responsive-sm light">' +
					'  <div class="col">' +
					'    <div class = "row responsive-sm">' +
					'      <div class="col col-50">' +
					'        <button class="button-full bar-assertive border2 border2b" style="height:200px">20 000&euro\;</button>' +
					'      </div>' +
					'      <div class="col col-50">' +
					'        <button class="button-full bar-assertive border2 border2b" style="height:180px">18 069&euro\;</button>' +
					'        <button class="button-full bar-calm border3" style="height:20px">1 931&euro\;</button>' +
					'      </div>' +
					'    </div>' +
					'  </div>' +
					'</div>' +					
                    '   </ion-content>' +
                    '</ion-popover-view>';
					
    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });


    $scope.popover2 = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };



	
});