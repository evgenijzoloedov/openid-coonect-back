import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { FileModule } from './file/file.module';
import { FlatModule } from "./flat/flat.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as path from 'path'
import { ServeStaticModule } from "@nestjs/serve-static";


@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot("mongodb://rentpanel:rentpanelsecret@localhost:27017/rentpanel"),
    // EventsModule,
    FlatModule,
    // LockerModule,
    // SseModule,
    // GroupModule,
    // AuthModule,
    FileModule
  ],
  providers: [],
  controllers: [],
})
export class AppModule{}
