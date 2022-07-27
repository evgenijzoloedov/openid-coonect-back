import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'
import { Flat } from "../../flat/schemas/flat.schema";

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Prop()
  uuid:string;

  @Prop()
  title: string;

  @Prop()
  flats:[Flat]
}

export const GroupSchema = SchemaFactory.createForClass(Group);