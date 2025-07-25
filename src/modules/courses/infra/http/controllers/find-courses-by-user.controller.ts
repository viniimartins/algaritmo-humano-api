import {
  COURSE_BASE_ROUTE,
  FIND_COURSES_USER_ROUTE,
} from '@modules/courses/constants';
import { FindCoursesByUserService } from '@modules/courses/services/find-courses-by-user.service';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPropertyOptional,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@providers/jwt-provider/decorators/user.decorator';
import type { UserDTO } from '@providers/jwt-provider/dtos/userDTO';
import { JwtAuthGuard } from '@providers/jwt-provider/guards/jwt-auth.guard';
import { instanceToPlain, Transform, Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { toArray } from 'helpers/transformers';

export class FindCoursesByUserDTO {
  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({ description: 'Limit per page', default: 10 })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @Min(1)
  limit: number = 10;

  @ApiPropertyOptional({
    description: 'Filters in format field,value',
    type: [String],
    example: ['status,ACTIVE'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => toArray(value))
  filters?: string[];
}

@ApiTags(COURSE_BASE_ROUTE)
@Controller(COURSE_BASE_ROUTE)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
class FindCoursesByUserController {
  constructor(
    private readonly findCoursesByUserService: FindCoursesByUserService,
  ) {}

  @Get(FIND_COURSES_USER_ROUTE)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search Courses by user' })
  @ApiResponse({ status: 200, description: 'Courses retrieved successfully.' })
  async handle(@User() user: UserDTO, @Query() query: FindCoursesByUserDTO) {
    const { userId } = user;

    const { limit, page, filters } = query;

    const courses = await this.findCoursesByUserService.execute({
      limit,
      page,
      filters,
      userId,
    });

    return instanceToPlain(courses);
  }
}

export { FindCoursesByUserController };
