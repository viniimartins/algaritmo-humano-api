import { COURSE_BASE_ROUTE } from '@modules/courses/constants';
import { SearchCoursesService } from '@modules/courses/services/seach-courses.service';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPropertyOptional,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToPlain, Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class SearchCoursesDTO {
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
}

@ApiTags(COURSE_BASE_ROUTE)
@Controller(COURSE_BASE_ROUTE)
@ApiBearerAuth()
class SearchCoursesController {
  constructor(private readonly searchCoursesService: SearchCoursesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search Courses' })
  @ApiResponse({ status: 200, description: 'Courses retrieved successfully.' })
  async handle(@Query() query: SearchCoursesDTO) {
    const { limit, page } = query;

    const courses = await this.searchCoursesService.execute({
      limit,
      page,
    });

    return instanceToPlain(courses);
  }
}

export { SearchCoursesController };
