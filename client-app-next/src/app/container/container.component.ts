import { Component, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

declare var angular: angular.IAngularStatic;

angular
  .module('sample')
  .directive('container', downgradeComponent({ component: ContainerComponent }) as angular.IDirectiveFactory);