import { serviceUrl } from "@/shared/lib/axios";
import {
  Author,
  BookWork,
  MorphologicFilters,
  CorpusSearchTextResult,
} from "@/shared/lib/msw/handlers/types";

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

  /**
   * GET /morphologic-filters
   */
  export const getMorphologicFilters = async () => {
    const response = await serviceUrl.get<{ filters: MorphologicFilters }>("/morphologic-filters");
    return response.data;
  };

  /**
   * GET /corpus-search
   */
  export const getCorpusSearch = async () => {
    const response = await serviceUrl.get<{ results: CorpusSearchTextResult[] }>("/corpus-search");
    return response.data;
  };
}
