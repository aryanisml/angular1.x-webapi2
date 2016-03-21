(function () {
    'use strict';

    angular.module('myfirstApp')
       .factory('myfirstFactory', myfirstfactoryFunc);

    myfirstfactoryFunc.$inject = ['$http', '$httpParamSerializerJQLike'];

    function myfirstfactoryFunc($http, $httpParamSerializerJQLike) {

            var service = {};
            service.Create = Create;
            return service;

            function Create(shippingRequest) {

                var data = $httpParamSerializerJQLike(shippingRequest);
                var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
                return $http.post('http://localhost:63025/test/postlearn', data, config)
                           .then(handleSuccess, handleError('Error....'));
            }

            //private function
            function handleSuccess(result) {
                return result.data.success;
            }
            function handleError(error) {
                return function () {
                    return { success: false, message: error };
                };

            }

    }
})();