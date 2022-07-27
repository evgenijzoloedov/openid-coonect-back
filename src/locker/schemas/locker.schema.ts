import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'

export type LockerDocument = Locker & Document;

@Schema()
export class Locker {
    @Prop()
    uuid:string;

    @Prop()
    title: string;

    @Prop()
    description:string
}

export const LockerSchema = SchemaFactory.createForClass(Locker);