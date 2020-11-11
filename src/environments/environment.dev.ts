import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.OFF,

  api: {
    isFakeBackend: true,
    logs: {
      url: 'localhost',
    },
    auth: {
      url: 'https://localhost/api',
      token: {
        name: 'tokenString',
        userId: 'nameid'
      }
    },
    movies: {
      url: 'https://api.themoviedb.org/',
      version: '3',
      key: '',
    }
  }
};
