import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@providers/jwt-provider/guards/jwt-auth.guard';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('cruds')
  getProfile() {

    return {
      totalItems: 10,
      member: Array.from({ length: 10 }, () => ({
        id: randomUUID(),
        name: 'teste',
      })),
    };
  }
}
