class ExceptionError extends Error {
  error_code: string | null = null;
  error_message: string | null = null;
  error_detail: string | null = null;

  constructor() {
    super();
  }
}

export { ExceptionError };
