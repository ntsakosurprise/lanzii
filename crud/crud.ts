class CrudError extends Error {
  message: string = '';
  method: string = '';
  name: string = 'CrudError';

  constructor(err: any) {
    super();
    this.message = err?.message;
    this.method = err?.method;
  }
}

export default CrudError;
