import {Controller, Get, MessageEvent, Param, Res, Sse} from '@nestjs/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller("sse")
export class SseController {

    public getBoolean () {
        return Math.random() < 0.1
    }
    @Sse(':uuid')
    sse(@Param('uuid') uuid: string,): Observable<MessageEvent> {
        return interval(1000).pipe(
            map((_) => ({ data:{open:this.getBoolean()} } as MessageEvent)),
        );
    }





}