import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@Controller('file')
export class FileController {

  @Post('uploadFiles')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return "files"
  }


  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file:Express.Multer.File) {
    console.log(file);
    return "file"
  }
}
