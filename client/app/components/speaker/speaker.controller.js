/**

    TODO:
    - insert and update
    - delete by admin
    - view by admin, organizer
    - view filter and sorting options
    -

 */
angular
    .module('knjs')
    .controller('SpeakerCtrl', ['$scope', '$state', '$window', 'Speaker', 'SessionType',
        function($scope, $state, $window, Speaker, SessionType) {
            $scope.sessionTypes = [];
            $scope.data = {
                "designation": "",
                "dateAlloted": null,
                "approvedOn": null,
                "company": "",
                "duration": 0,
                "name": "",
                "phone": "",
                "topic": "",
                "approvedBy": "",
                "audiencePreparation": "",
                "subTopic": [],
                "sessionType": [],
                "socialProfile": ""
            };

            /**
             * Insert or update a speaker registration form
             */
            $scope.upsert = function() {
                Speaker
                    .upsert($scope.data)
                    .$promise
                    .then(function(result) {
                        $scope.data = {};
                        $state.go('home');
                    }, function(err) {
                        console.log('> error:', err);
                        $window.alert(err.data.error.name);
                        console.log('Error: %s\nDetails:%s', err.data.error.name, err.data.error.message);
                    })
            }

            $scope.delete = function() {

            }

            $scope.get = function() {

            }

            $scope.init = function() {
                sessionTypeList();
            }

            $scope.checkAll = function() {
                $scope.data.sessionType = angular.copy($scope.sessionTypes);
            };

            $scope.uncheckAll = function() {
                $scope.data.sessionType = [];
            };

            $scope.checkFirst = function() {
                $scope.data.sessionType.splice(0, $scope.data.sessionType.length);
                $scope.data.sessionType.push(1);
            };


            // create new session-type if not already exists
            function addSessionType(sessionType) {

            }

            // get complete list of session-type from database/REST
            function sessionTypeList() {
                SessionType
                    .find({
                        filter: {
                            order: 'name asc'
                        }
                    })
                    .$promise
                    .then(function(result) {
                        $scope.sessionTypes = result;
                        console.log('> sessionTypes:')
                        console.log(result);
                    }, function(err) {
                        $window.alert(err.data.error.name);
                        console.log('Error: %s\nDetails:%s', err.data.error.name, err.data.error.message);
                    })
            }
        }
    ])
