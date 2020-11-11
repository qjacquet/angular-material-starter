export interface Config {
    title: string;
    logoPath: string;
    theme: {
        class: string,
        canChange: boolean
    };
    sidebar: {
        mode: 'side' | 'over' | 'push',
        hasBackdrop: boolean,
        opened: boolean
    };
}

export const appConfig: Config = {
    title: 'Angular Starter',
    logoPath: '/assets/icons/icon-72x72.png',
    theme: {
        class: 'theme-default',
        canChange: true
    },
    sidebar: {
        mode: 'side',
        hasBackdrop: false,
        opened: true
    }
};


