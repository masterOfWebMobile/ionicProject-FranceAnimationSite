app.controller('GanCtrl', function ($scope, $timeout, $stateParams, $ionicActionSheet, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk, $ionicPopover) {

    // Triggered on a button click, or some other target
    $scope.actionSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Action</b> 1'
            }, {
                text: 'Action 2'
            }],
            destructiveText: 'Supprimer',
            titleText: 'Modifier',
            cancelText: 'Annuler',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 200000);
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
        $timeout(function () {
            $scope.modal.hide();
        }, 0);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    $ionicModal.fromTemplateUrl('my-modal2.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal2) {
        $scope.modal2 = modal2;
    });

    $scope.openModal2 = function() {
        $scope.modal2.show();
        $timeout(function () {
            $scope.modal2.hide();
        }, 200000);
    };
    $scope.closeModal2 = function() {
        $scope.modal2.hide();
        $timeout(function () {
            $scope.modal2.hide();
        }, 0);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal2.remove();
    });

    // Popover
    $scope.popover = function() {
        $scope.$parent.popover.show();
        $timeout(function () {
            $scope.$parent.popover.hide();
        }, 200000);
    };

    // Confirm
    $scope.showPopup = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Informations',
            template: 'Texte'
        });

        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});




