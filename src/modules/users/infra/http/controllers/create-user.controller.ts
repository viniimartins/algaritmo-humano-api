import { UserRole } from '@modules/users/constants';
import { USER_BASE_ROUTE } from '@modules/users/constants/routes';
import { CreateUserService } from '@modules/users/services/create-user.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

class CreateUserDto {
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

  @ApiProperty()
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

@ApiTags(USER_BASE_ROUTE)
@Controller(USER_BASE_ROUTE)
class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 201, description: 'User successfully created.' })
  @ApiResponse({ status: 409, description: 'Email already registered.' })
  async handle(@Body() createUserDto: CreateUserDto) {
    const { name, email, password, role } = createUserDto;

    const createdUser = await this.createUserService.execute({
      name,
      email,
      password,
      role,
    });

    return instanceToPlain(createdUser);
  }
}

export { CreateUserController }