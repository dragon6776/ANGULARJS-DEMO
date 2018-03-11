angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: '/clientapp/phone-list/phone-list.template.html',
        controller: ['$http',
            function PhoneListController($http) {
                var self = this;
                self.orderProp = 'age';

                //$http.get('/clientapp/phones/phones.json')
                //    .then(function (response) {
                //        self.phones = response.data;
                //    });

                self.phones = Phone.query();
            }
        ]
    });