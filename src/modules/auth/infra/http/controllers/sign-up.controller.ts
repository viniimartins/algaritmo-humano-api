import { AUTH_BASE_ROUTE, SIGN_UP_ROUTE } from '@modules/auth/constants/routes';
import { SignUpService } from '@modules/auth/services/sign-up.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

class SignUpDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  passwordConfirmation: string;
}

@ApiTags(AUTH_BASE_ROUTE)
@Controller(SIGN_UP_ROUTE)
class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'User Sign Up' })
  @ApiResponse({ status: 201, description: 'User successfully registered.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  async handle(@Body() signUpDto: SignUpDTO) {
    const { name, email, password, passwordConfirmation } = signUpDto;

    const user = await this.signUpService.execute({
      name,
      email,
      password,
      passwordConfirmation,
    });

    return instanceToPlain(user);
  }
}

export { SignUpController };
