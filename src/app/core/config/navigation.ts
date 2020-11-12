export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsable';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  externalUrl?: boolean;
  openInNewTab?: boolean;
  function?: any;
  badge?: {
    title?: string;
    translate?: string;
    bg?: string;
    fg?: string;
  };
  children?: NavigationItem[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

export const navigation: Navigation[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    children: [
      {
        id: 'movies-group',
        title: 'Movies',
        type: 'collapsable',
        children: [
          {
            id: 'Movies',
            title: 'List',
            type: 'item',
            icon: 'movie',
            url: '/movies',
          },
        ],
      },
      {
        id: 'demo-group',
        title: 'Demo',
        type: 'collapsable',
        icon: 'science',
        children: [
          {
            id: 'demo',
            title: 'OTP',
            type: 'item',
            icon: 'phonelink_lock',
            url: '/demo/otp',
          },
        ],
      },
    ],
  },
  {
    id: 'external-links',
    title: 'External links',
    type: 'group',
    children: [
      {
        id: 'angular-link',
        title: 'Angular',
        type: 'item',
        icon: 'public',
        url: 'https://angular.io/',
        externalUrl: true,
        openInNewTab: true,
      },
      {
        id: 'angular-material-link',
        title: 'Angular Material',
        type: 'item',
        icon: 'public',
        url: 'https://material.angular.io/',
        externalUrl: true,
        openInNewTab: true,
      },
    ],
  },
];
