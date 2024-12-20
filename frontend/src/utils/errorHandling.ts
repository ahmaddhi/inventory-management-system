export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function isApiError(error: any): boolean {
  return error && error.status && typeof error.status === 'number';
}

export function getErrorMessage(error: any): string {
  if (isApiError(error)) {
    return `API Error: ${error.message}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}