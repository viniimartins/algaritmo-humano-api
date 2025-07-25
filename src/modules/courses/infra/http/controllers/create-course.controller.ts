import { COURSE_BASE_ROUTE, CourseStatus } from '@modules/courses/constants';
import { CreateCourseService } from '@modules/courses/services/create-course.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiPropertyOptional,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@providers/jwt-provider/decorators/user.decorator';
import type { UserDTO } from '@providers/jwt-provider/dtos/userDTO';
import { JwtAuthGuard } from '@providers/jwt-provider/guards/jwt-auth.guard';
import { instanceToPlain } from 'class-transformer';
import { IsEnum, IsOptional, IsString, IsUrl, Matches } from 'class-validator';

class CreateCourseDTO {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  @IsUrl()
  image: string;

  @ApiProperty()
  @IsString()
  @Matches(/^\d{1,3}:[0-5]\d$/)
  duration: string;

  @ApiPropertyOptional({ enum: CourseStatus, default: CourseStatus.ACTIVE })
  @IsOptional()
  @IsEnum(CourseStatus)
  status?: CourseStatus;
}

@ApiTags(COURSE_BASE_ROUTE)
@Controller(COURSE_BASE_ROUTE)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
class CreateCourseController {
  constructor(private readonly createCourseService: CreateCourseService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create Course' })
  @ApiResponse({ status: 201, description: 'Course successfully created.' })
  async handle(
    @User() user: UserDTO,
    @Body() createCourseDto: CreateCourseDTO,
  ) {
    const { userId } = user;

    const { title, description, image, duration, status } = createCourseDto;

    const createdCourse = await this.createCourseService.execute({
      title,
      description,
      duration,
      image,
      status,
      userId,
    });

    return instanceToPlain(createdCourse);
  }
}

export { CreateCourseController };
