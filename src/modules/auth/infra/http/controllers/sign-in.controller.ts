import { AUTH_BASE_ROUTE, SIGN_IN_ROUTE } from '@modules/auth/constants/routes';
import { SignInService } from '@modules/auth/services/sign-in.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

class SignInDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}

@ApiTags(AUTH_BASE_ROUTE)
@Controller(SIGN_IN_ROUTE)
class SignInController {
  constructor(private readonly signInService: SignInService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User Sign In' })
  @ApiResponse({ status: 200, description: 'User successfully logged in.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async handle(@Body() signInDto: SignInDTO) {
    const { email, password } = signInDto;

    const user = await this.signInService.execute({
      email,
      password,
    });

    return instanceToPlain(user);
  }
}

export { SignInController };
