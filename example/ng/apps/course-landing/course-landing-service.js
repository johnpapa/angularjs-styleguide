define(['angular'], function(angular) {
    'use strict';
    angular.module('courseLanding.courseLandingService')
      .factory('CourseLandingService', CourseLandingService)

    function CourseLandingService($http) {
      return {
        doesSomething: doesSomething
      };
    }
  }
});