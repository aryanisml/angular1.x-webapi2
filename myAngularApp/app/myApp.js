(function () {
    'use strict';

    angular
        .module('myfirstApp',[])
        .controller('myfirstController', myfirstControllerfunc);

    myfirstControllerfunc.$inject = ['myfirstFactory'];

    function myfirstControllerfunc(myfirstFactory) {
       
        var vm = this;
        vm.saveData = saveData;

        function saveData() {
            
            vm.shippingRequest = {CompanyName : vm.CompanyName, Phone : vm.Phone};
            myfirstFactory.Create(vm.shippingRequest)
            .then(function (response) {
                if (response) {
                    alert(response);
                    vm.CompanyName = '';
                    vm.Phone = '';
                    
                } else { alert('Miss......');}
            })

        }


    }

})();