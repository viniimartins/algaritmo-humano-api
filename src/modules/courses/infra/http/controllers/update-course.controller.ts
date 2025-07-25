import {
  COURSE_BASE_ROUTE,
  CourseStatus,
  UPDATE_COURSE_ROUTE,
} from '@modules/courses/constants';
import { UpdateCourseService } from '@modules/courses/services/update-course.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Put,
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

class UpdateCourseDTO {
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
class UpdateCourseController {
  constructor(private readonly updateCourseService: UpdateCourseService) {}

  @Put(UPDATE_COURSE_ROUTE)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Update Course' })
  @ApiResponse({ status: 201, description: 'Course successfully deleted.' })
  @ApiResponse({
    status: 403,
    description: 'You do not have permission to updated this course.',
  })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  async handle(
    @User() user: UserDTO,
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDTO,
  ) {
    const { userId } = user;

    const { title, description, duration, image, status } = updateCourseDto;

    const updatedCourse = await this.updateCourseService.execute({
      id,
      data: {
        title,
        description,
        duration,
        image,
        status,
        userId,
      },
    });

    return instanceToPlain(updatedCourse);
  }
}

export { UpdateCourseController };
