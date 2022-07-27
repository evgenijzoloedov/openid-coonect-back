import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FlatService } from "./flat.service";
import { UpdateFlatDto } from "./dto/update-flat.dto";
import { Flat } from "./entities/flat.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { LockerService } from "../locker/locker.service";
import { CreateFlatDto } from "./dto/create-flat.dto";
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from "@nestjs/platform-express";
import { yandexApi } from "../api/axiosConfig";
import axios from "axios";

@Controller("flat")
export class FlatController {
  constructor(private readonly flatService: FlatService) {}
  @Get('test')
  testRoute(){
    return yandexApi.get('').then(res=>res.data).catch(e=>console.error("Yandex Error " + e))
  }
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: "file",
        maxCount: 3,
      },
    ])
  )
  // add typing ts
  create(
    @UploadedFiles() files,
    @Body() dto: CreateFlatDto
  ) {
    const {file} = files
    return this.flatService.create(dto,file);
  }

  @ApiOperation({ summary: "Get all list of flats" })
  @ApiResponse({ status: 200, type: [Flat] })
  @Get()
  findAll() {
    return this.flatService.findAll();
  }

  @ApiOperation({ summary: "Get list of flats" })
  @ApiResponse({ status: 200, type: [Flat] })
  @Get()
  findPagination(
    @Query("limit") limit: number,
    @Query("offset") offset: number
  ) {
    return this.flatService.findPagination(offset, limit);
  }

  @ApiOperation({ summary: "Get special flat" })
  @ApiResponse({ status: 200, type: Flat })
  @Get(":uuid")
  findById(@Param("uuid") uuid: string) {
    return this.flatService.findById(uuid);
  }

  @ApiOperation({ summary: "Update date for special flat" })
  @ApiResponse({ status: 204, type: [Flat] })
  @Put(":uuid")
  updateFlat(
    @Param("uuid") uuid: string,
    @Body() updateFlatData: UpdateFlatDto
  ) {
    return this.flatService.updateFlat(uuid, updateFlatData);
  }

  @ApiOperation({ summary: "Delete date for special flat" })
  @ApiResponse({ status: 204, type: [Flat] })
  @Delete(":uuid")
  deleteFlat(@Param("uuid") uuid: string) {
    return this.flatService.deleteFlat(uuid);
  }
}
