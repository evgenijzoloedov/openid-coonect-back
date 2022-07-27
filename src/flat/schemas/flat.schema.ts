import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";
import { Locker } from "../../locker/schemas/locker.schema";

export type FlatDocument = Flat & Document;

@Schema()
export class Flat {
  @Prop()
  id:string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  images:string[]

  @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Locker'})
  locker:Locker;

}

export const FlatSchema = SchemaFactory.createForClass(Flat);