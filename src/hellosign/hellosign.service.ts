import {  Injectable } from '@nestjs/common';
import { MailHandlerService } from 'src/mail-handler/mail-handler.service';

@Injectable()
export class HellosignService {
    constructor( private  mailHandlerService: MailHandlerService) {}
    async agreementSigned(emailAddress,recipient): Promise<any> {
        const run = await this.mailHandlerService.agreementSigned(emailAddress,recipient)
        console.log(run)
        return run;
    }
}