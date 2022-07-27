import { Module } from "@nestjs/common";
import { FlatService } from "./flat.service";
import { FlatController } from "./flat.controller";
import { LockerModule } from "../locker/locker.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Flat, FlatSchema } from "./schemas/flat.schema";
import { FileService } from "../file/file.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flat.name, schema: FlatSchema }]),
    // LockerModule,
  ],
  controllers: [FlatController],
  providers: [FlatService,FileService],
})
export class FlatModule {
}
