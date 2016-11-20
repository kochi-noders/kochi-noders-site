angular.module('knjs')
    .controller('SignupCtrl', ['$scope', '$state', 'Member', function($scope, $state, Member) {
        $scope.data = {
            "password": "anoop@123",
            "phone": "9846242351",
            "residingLocation": "Vennala",
            "rating": 0,
            "photo": {},
            "branch": "",
            "company": "Heidelsoft Technologies",
            "companyLocation": "Infopark",
            "facebook": "",
            "linkedin": "",
            "name": "Anoop P A",
            "stackoverflow": "",
            "realm": "",
            "username": "anoop",
            "credentials": {},
            "challenges": {},
            "email": "sripaanoop@gmail.com",
            "emailVerified": true,
            "status": "",
            "created": Date(),
            "lastUpdated": Date()
        }

        $scope.save = function() {
            Member.create($scope.data).$promise.then(function(response) {
                $state.go('home');
            }, function(error) {
                alert(error.data.error.message);
            })
        };

        $scope.getDistinctLocations = function() {
            Member.distinctLocation().$promise.then(function(response) {
                $scope.locations = response;
            })
        }

        $scope.getDistinctCompanies = function() {
            Member.distinctCompany().$promise.then(function(response) {
                $scope.companies = response;
            })
        }

        $scope.init = function() {
            $scope.getDistinctLocations();
            $scope.getDistinctCompanies();
        }

    }])
