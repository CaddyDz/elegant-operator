import { Module } from '@nestjs/common';
import { HellosignController } from './hellosign.controller';
import { HellosignService } from './hellosign.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { MailHandlerService } from 'src/mail-handler/mail-handler.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/client.entity';

@Module({
  imports: [NestjsFormDataModule,HttpModule,TypeOrmModule.forFeature([ClientEntity])],
  controllers: [HellosignController],
  providers: [HellosignService,MailHandlerService]
})
export class HellosignModule {}