import { Subject } from "rxjs/subject";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';
import { w3cwebsocket } from 'websocket';

import 'rxjs/add/observable/dom/webSocket';

@Injectable()
export class WebsocketService {
    public socket$: any;

    public connect(url) {
        this.socket$ = Observable.webSocket({
            url,
            WebSocketCtor: w3cwebsocket
        });

        return this.socket$;
    }

    emit(data) {
        this.socket$.next(JSON.stringify(data));
    }
}
