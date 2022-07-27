import { Body, Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { CreateLockerDto } from "./dto/create-locker.dto";
import { Locker, LockerDocument } from "./schemas/locker.schema";
import { InjectModel } from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {v4 as uuid} from 'uuid'
import { UpdateLockerDto } from "./dto/update-locker.dto";
@Injectable()
export class LockerService{

    constructor(@InjectModel(Locker.name) private lockerModel: Model<LockerDocument>) {
    }


    async create (dto:CreateLockerDto):Promise<Locker>{

        const locker =await this.lockerModel.create({
            ...dto,uuid: uuid()
        })


        return locker
    }


    async findAll():Promise<Locker[]>{
        const lockers = await this.lockerModel.find()

        return  lockers
    }

    async findOne(uuid:string):Promise<Locker>{
        const locker = await this.lockerModel.findOne({
            uuid
        })

        return locker
    }

    async update(uuid,dto:UpdateLockerDto):Promise<Locker> {
        const locker = await this.lockerModel.findOneAndUpdate({ uuid }, dto)
        return locker
    }

    async delete(uuid):Promise<string>{
        const locker = await this.lockerModel.findOneAndDelete({uuid})
        return `Delete locker by ID ${uuid}`
    }
}