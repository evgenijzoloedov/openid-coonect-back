import { Body, Controller, Delete, Get, MessageEvent, Param, Post, Put, Query, Sse } from "@nestjs/common";
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateLockerDto } from "./dto/create-locker.dto";
import { LockerService } from "./locker.service";
import { UpdateLockerDto } from "./dto/update-locker.dto";

@Controller('locker')
export class LockerController {
  public getBoolean() {
    return Math.random() < 0.1;
  }

  constructor(
    private readonly lockerService:LockerService,
  ) {}


  @Post()
  create (@Body() dto:CreateLockerDto){
    return this.lockerService.create(dto)
  }


  @Get()
  findAll(){
    return this.lockerService.findAll()
  }

  @Get(":id")
  findOne(@Param(":id") id:string){
    return this.lockerService.findOne(id)
  }

  @Put(':id')
  update(@Body() dto:UpdateLockerDto, @Param('id') id: string){
    return this.lockerService.update(id,dto)
  }

  @Delete(':id')
  delete(@Param("id") id:string){
    return this.lockerService.delete(id)
  }


  @Sse(':uuid')
  sse(@Param('uuid') uuid: string): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(() => ({ data: { open: this.getBoolean() } } as MessageEvent)),
    );
  }
}
