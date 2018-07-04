import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions} from '@angular/http'
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {
  constructor(private _http: HttpClient, private http: Http) { }

  getConfig(): {[key: string]: string} {
      const env = localStorage.getItem('env');


      switch(env) {
          case 'develop': {
              return {
                baseUrl: 'localhost:5000'
              }
          }

          case 'staging': {
            return {
              baseUrl: 'go-tagmove.herokuapp.com'
            }
        }

        case 'production': {
            return {
              baseUrl: 'api.tagmove.uk/v1'
            }
        }
      }
  }

  loadEnv() {
    return new Promise(async (resolve) => {
        if(environment.production) {
            let options = new RequestOptions({
                method: 'GET'
            });

            let res: any = await this.http.request('/config', options).toPromise();

            if(res.statusText == 'OK' && res.status == 200) {
                let config = JSON.parse(res._body);
                console.log(config)
                localStorage.setItem('env', config.env);
            }
        } else {
            localStorage.setItem('env', 'development');
        }

        return resolve();
    });
  }

}
