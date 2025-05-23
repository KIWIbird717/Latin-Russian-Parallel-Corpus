import { serviceUrl } from "@/shared/lib/axios";
import { Author, BookWork } from "@/shared/lib/msw/handlers/types";

export namespace MockService {
  /**
   * GET /authors
   */
  export const getAuthors = async () => {
    const response = await serviceUrl.get<{ authors: Author[] }>("/authors");
    return response.data;
  };

  /**
   * GET /book-works
   */
  export const getBookWorks = async () => {
    const response = await serviceUrl.get<{ bookWorks: BookWork[] }>("/book-works");
    return response.data;
  };
}
