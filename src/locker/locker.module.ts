import { Module } from '@nestjs/common';
import {LockerController} from "./locker.controller";
import {LockerService} from "./locker.service";

@Module({
    controllers: [LockerController],
    providers: [LockerService],
    exports:[LockerService]
})
export class LockerModule {}