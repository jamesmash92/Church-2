// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,

    firebase: {
      apiKey: 'AIzaSyAvn9R88v0rjvcz1lMiRARNh0wG4yqSCrk',
      authDomain: 'thegoodnewsmission-96420.firebaseapp.com',
      databaseURL: 'https://thegoodnewsmission-96420.firebaseio.com',
      projectId: 'thegoodnewsmission-96420',
      storageBucket: 'thegoodnewsmission-96420.appspot.com',
      messagingSenderId: '97955503349'
    }
  };
  export interface Blog {
    key?: string;
    heading: 'string';
    authorname: 'string';
    date1: 'string';
    time: 'string';
    content: 'string';
  }
  export interface Announcements {
    key?: string;
    heading: 'string';
    authorname: 'string';
    date1: 'string';
    time: 'string';
    content: 'string';
  }
  export interface Devotions {
    key?: string;
    heading: 'string';
    authorname: string;
    date1: string;
    time: 'string';
    content: 'string';
  }
  export interface Events {
    key?: string;
    heading: 'string';
    authorname: 'string';
    date1: 'string';
    time: 'string';
    content: 'string';
  }
  export interface Myfiles {
    key?: string;
    heading: 'string';
    authorname: 'string';
    date1: 'string';
    time: 'string';
    content: 'string';
  }
  export interface Profile {
    key?: string;
    username: 'string';
    firstname: 'string';
    lastname: 'string';
    email: 'string';
    year: 'string';
    month: 'string';
    day: 'string';
    postaladdress: 'string';
    poastalcode: 'string';
    country: 'string';
    town: 'string';
    landmark: 'string';
  }
  export interface Sermon {
    key?: string;
    heading: 'string';
    authorname: 'string';
    date1: 'string';
    time: 'string';
    content: 'string';
  }
  export interface User {
    email: string;
    password: 'string';
    firstname: 'string';
    lasttname: 'string';
    username: 'string';

  }
  export interface Verse {
    key?: string;
    bibleverse: 'string';
    date1: 'string';
    content: 'string';
  }


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
