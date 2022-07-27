import {Injectable} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import {UpdateFlatDto} from "./dto/update-flat.dto";
import {Locker} from "../locker/entity/Locker.entity";
import { CreateFlatDto } from "./dto/create-flat.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Flat, FlatDocument } from "./schemas/flat.schema";
import { FileService } from "../file/file.service";


@Injectable()
export class FlatService {
    constructor(@InjectModel(Flat.name) private flatModel: Model<FlatDocument>,
                private fileService: FileService) {}

    async create (dto:CreateFlatDto,files:Array<Express.Multer.File>):Promise<Flat> {
        const arrOfLinksOnImages=files.map(file=>this.fileService.createFile(file))
        const flat = this.flatModel.create({...dto,images:arrOfLinksOnImages})

        return flat
    }

    async findPagination(offset = 0, limit = 5) {
        // const flats = this.flats.slice(offset, offset + limit)
        //     .map(el => ({
        //         name: el.name,
        //         id: el.id
        //     }))
        // return flats
    }

    async findById(id: string):Promise<Flat> {
        return this.flatModel.findById({id})

    }

    async findAll ():Promise<Flat[]>{
        return this.flatModel.find()
    }

    async updateFlat(uuid:string,updateFlatData:UpdateFlatDto):Promise<Flat>{
        return this.flatModel.findByIdAndUpdate({uuid},updateFlatData)

    }

    async deleteFlat (uuid:string):Promise<string>{
        const flat:Flat = await this.flatModel.findByIdAndDelete({uuid})
        flat.images.forEach(imagePath=>this.fileService.removeFile(imagePath))
        return "success"
    }
}
