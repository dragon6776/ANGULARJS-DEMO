angular.module('core.phone')
    .factory('Phone', ['', function ($resouce) {
        return $resouce('/clientapp/phones/:phoneId.js', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        })
    }]);