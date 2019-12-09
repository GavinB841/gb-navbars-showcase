import { Component } from '@angular/core';

@Component({
  selector: 'gb-navbar-showcase',
  templateUrl: './gb-navbar-showcase.component.html',
  styleUrls: ['./gb-navbar-showcase.component.scss']
})
export class GbNavbarShowcaseComponent {
  navigation: any;
  navigationFormatted: any;

  constructor() {

    this.navigation = [
      {
        id: 'componentsHeader',
        type: 'group',
        label: 'Components',
        items: [
          {
            id: 'pagination',
            type: 'link',
            label: 'Pagination',
            path: '/components/paginationDemo',
            iconClass: 'fas fa-home fa-2x'
          },
          {
            id: 'sidenav',
            type: 'link',
            label: 'Side Navigation',
            path: '/components/sidenavDemo',
            iconClass: 'fas fa-indent fa-2x'
          }

        ]
      },
      {
        id: 'filtersHeader',
        type: 'group',
        label: 'Filters',
        items: [
          {
            id: 'search',
            type: 'link',
            label: 'Search',
            path: '/filters/searchDemo',
            iconClass: 'fas fa-cogs fa-2x'
          }
        ]
      },
      {
        id: 'servicesHeader',
        type: 'group',
        label: 'Services',
        items: [
          {
            id: 'utils',
            type: 'link',
            label: 'Utilities',
            path: '/services/utilsDemo',
            iconClass: 'fas fa-search fa-2x'
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.navigationFormatted = JSON.stringify(this.navigation, null, 1);
  }
}
