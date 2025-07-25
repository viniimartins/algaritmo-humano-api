import {
  COURSE_BASE_ROUTE,
  DELETE_COURSE_ROUTE,
} from '@modules/courses/constants';
import { DeleteCourseService } from '@modules/courses/services/delete-course.service';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@providers/jwt-provider/decorators/user.decorator';
import type { UserDTO } from '@providers/jwt-provider/dtos/userDTO';
import { JwtAuthGuard } from '@providers/jwt-provider/guards/jwt-auth.guard';
import { instanceToPlain } from 'class-transformer';

@ApiTags(COURSE_BASE_ROUTE)
@Controller(COURSE_BASE_ROUTE)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
class DeleteCourseController {
  constructor(private readonly deleteCourseService: DeleteCourseService) {}

  @Delete(DELETE_COURSE_ROUTE)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Delete Course' })
  @ApiResponse({ status: 201, description: 'Course successfully deleted.' })
  @ApiResponse({
    status: 403,
    description: 'You do not have permission to delete this course.',
  })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  async handle(@User() user: UserDTO, @Param('id') id: string) {
    const { userId } = user;

    const deletedCourse = await this.deleteCourseService.execute({
      id,
      userId,
    });

    return instanceToPlain(deletedCourse);
  }
}

export { DeleteCourseController };
