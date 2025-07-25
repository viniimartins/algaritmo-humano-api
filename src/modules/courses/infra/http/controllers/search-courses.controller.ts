import {
  COURSE_BASE_ROUTE,
  SEARCH_COURSE_ROUTE,
} from '@modules/courses/constants';
import { SearchCoursesService } from '@modules/courses/services/search-courses.service';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiPropertyOptional,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToPlain, Transform, Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { toArray } from 'helpers/transformers';

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
class SearchCoursesController {
  constructor(private readonly searchCoursesService: SearchCoursesService) {}

  @Get(SEARCH_COURSE_ROUTE)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search Courses' })
  @ApiResponse({ status: 200, description: 'Courses retrieved successfully.' })
  async handle(@Query() query: SearchCoursesDTO) {
    const { limit, page, filters } = query;

    const courses = await this.searchCoursesService.execute({
      limit,
      page,
      filters,
    });

    return instanceToPlain(courses);
  }
}

export { SearchCoursesController };
