import { serviceUrl } from "@/shared/lib/axios";
import {
  Author,
  BookWork,
  MorphologicFilters,
  CorpusSearchTextResult,
  Statistics,
  FilterType,
  BookWithoutPages,
  Book,
} from "@/shared/types/mock";

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

  /**
   * GET /info-stats
   */
  export const getStatistics = async () => {
    const response = await serviceUrl.get<{ data: Statistics }>("/info-stats");
    return response.data;
  };

  /**
   * GET /books
   */
  export const getBooks = async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    startDate?: string;
    endDate?: string;
    filterType?: FilterType;
  }) => {
    const response = await serviceUrl.get<{
      books: BookWithoutPages[];
      pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
      };
    }>("/books", { params });
    return response.data;
  };

  /**
   * GET /books/:id
   */
  export const getBookById = async (id: string) => {
    const response = await serviceUrl.get<{ book: Book }>(`/books/${id}`);
    return response.data;
  };
}
