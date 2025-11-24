class ResponseError extends Error {
  message: string = '';
  statusCode: string = '';
  error: boolean = true;
  errorType: string = '';
  native: boolean = true;
  name: string = 'ResponseError';

  constructor(err: any) {
    super();
    this.message = err?.message;
    this.statusCode = err?.statusCode || 0;
    this.errorType = err?.errorType;
  }
}

export default ResponseError;
