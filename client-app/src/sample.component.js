angular
    .module('sample')
    .component('helloWorld', {
        template: `
            <h1> Hello world from AngularJS component </h1>
            <app-user-details></app-user-details>
        `
    })