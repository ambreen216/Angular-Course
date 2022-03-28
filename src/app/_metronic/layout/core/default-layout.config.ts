export interface ILayoutComponent {
  componentName: string;
}

export interface ILoader extends ILayoutComponent {
  display?: boolean;
  type: 'default' | 'spinner-message' | 'spinner-logo';
}

export interface IScrollTop extends ILayoutComponent {
  display: boolean;
}

export interface IHeader extends ILayoutComponent {
  display: boolean;
  width: 'fixed' | 'fluid';
  left: 'menu' | 'page-title';
  fixed: {
    desktop: boolean;
    tabletAndMobile: boolean;
  };
  menuIcon: 'svg' | 'font';
}

export interface IMegaMenu extends ILayoutComponent {
  display: boolean;
}

export interface IAside extends ILayoutComponent {
  display: boolean; // Display aside
  theme: 'dark' | 'light'; // Set aside theme(dark|light)
  menu: 'main' | 'documentation'; // Set aside menu(main|documentation)
  fixed: boolean; // Enable aside fixed mode
  minimized: boolean; // Set aside minimized by default
  minimize: boolean; // Allow aside minimize toggle
  hoverable: boolean; // Allow aside hovering when minimized
  menuIcon: 'svg' | 'font'; // Menu icon type(svg|font)
}

export interface IContent extends ILayoutComponent {
  width: 'fixed' | 'fluid';
  layout: 'default' | 'docs';
}

export interface IFooter extends ILayoutComponent {
  width: 'fixed' | 'fluid';
}

export interface ISidebar extends ILayoutComponent {
  display: boolean;
  toggle: boolean;
  shown: boolean;
  content: 'general' | 'user' | 'shop';
  bgColor: 'bg-white' | 'bg-info';
  displayFooter: boolean;
  displayFooterButton: boolean;
}

export interface IToolbar extends ILayoutComponent {
  display: boolean;
  width: 'fixed' | 'fluid';
  fixed: {
    desktop: boolean; // Set fixed header for desktop
    tabletAndMobileMode: boolean; // Set fixed header for talet & mobile
  };
}

export interface IPageTitle extends ILayoutComponent {
  display: boolean;
  breadCrumbs: boolean;
  description: boolean;
  layout: 'default' | 'select';
  direction: 'row' | 'column';
  responsive: boolean;
  responsiveBreakpoint: 'lg' | 'md' | 'lg' | '300px';
  responsiveTarget: string;
}

export interface IMain extends ILayoutComponent {
  body?: {
    backgroundImage?: string;
    class: string;
  };
  primaryColor: string;
  darkSkinEnabled: boolean;
  type: 'blank' | 'default' | 'none';
}

export interface ILayout {
  loader: ILoader;
  header: IHeader;
  content: IContent;
  footer: IFooter;
  main?: IMain;

}

export interface ILayoutCSSClasses {
  header: Array<string>;
  headerContainer: Array<string>;
  headerMobile: Array<string>;
  headerMenu: Array<string>;
  content: Array<string>;
  contentContainer: Array<string>;
  footerContainer: Array<string>;
}

export interface ILayoutHTMLAttributes {

  headerMobile: Map<string, string | number | boolean>;
  headerMenu: Map<string, string | number | boolean>;
  headerContainer: Map<string, string | number | boolean>;
}

export interface ILayoutCSSVariables {
  body: Map<string, string | number | boolean>;
}

export const DefaultLayoutConfig: ILayout = {
  main: {
    componentName: 'main',
    type: 'default',
    primaryColor: '#009EF7',
    darkSkinEnabled: true,
  },
  loader: {
    componentName: 'loader',
    display: true,
    type: 'default', // Set default|spinner-message|spinner-logo to hide or show page loader
  },

  header: {
    componentName: 'header',
    display: true, // Set true|false to show or hide Header
    width: 'fluid', // Set fixed|fluid to change width type
    left: 'menu',
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'svg',
  },


  content: {
    componentName: 'content',
    width: 'fixed', // Set fixed|fluid to change width
    layout: 'default',
  },
  footer: {
  componentName: 'footer',
    width: 'fluid', // Set fixed|fluid to change width type
},

};


// pageTitle: {
//   componentName: 'page-title',
//     display: true,
//     breadCrumbs: true,
//     description: false,
//     layout: 'default',
//     direction: 'row',
//     responsive: true,
//     responsiveBreakpoint: 'lg',
//     responsiveTarget: '#kt_toolbar_container',
// },

// aside: {
//   componentName: 'aside',
//     display: true,
//     theme: 'dark',
//     menu: 'main',
//     fixed: true,
//     minimized: false,
//     minimize: true,
//     hoverable: true,
//     menuIcon: 'svg',
// },
