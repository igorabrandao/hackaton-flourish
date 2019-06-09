import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
  /**
   * Define the APP name
   */
  public APP_NAME: string = 'Siorganize Mobile';

  /**
   * Define the APP version
   */
  public APP_VERSION: string = '1.0.2';

  /**
   * Define the APP last update
   */
  public APP_LAST_UPDATE: string = '09/06/2019';

  /**
   * Define the initial page URL
   */
  public PAGE_URL: string = 'http://hackaton.igorabrandao.com.br/';

  /**
   * Define the API URL
   * 
   * development: 'http://api.url.com/'
   * production: 'http://api.url.com/'
   * sandbox: 'http://api.url.com/'
   */
  public API_URL: string = '';
}