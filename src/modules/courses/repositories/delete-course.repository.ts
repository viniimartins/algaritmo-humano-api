namespace IDeleteCourse {
  export type Params = {
    id: string;
  };

  export type Response = void;
}

interface IDeleteCourseRepository {
  delete: (params: IDeleteCourse.Params) => Promise<IDeleteCourse.Response>;
}

export { IDeleteCourse, IDeleteCourseRepository };
