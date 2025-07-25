namespace IDeleteCourse {
  export type Request = {
    id: string;
    userId: string;
  };

  export type Response = void;
}

interface IDeleteCourseService {
  execute(params: IDeleteCourse.Request): Promise<IDeleteCourse.Response>;
}

export { IDeleteCourse, type IDeleteCourseService };
