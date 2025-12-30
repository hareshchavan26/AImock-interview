// Error types
export class AuthError extends Error {
    code;
    statusCode;
    constructor(message, code, statusCode = 400) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.name = 'AuthError';
    }
}
export class ValidationError extends AuthError {
    field;
    constructor(message, field) {
        super(message, 'VALIDATION_ERROR', 400);
        this.field = field;
        this.name = 'ValidationError';
    }
}
export class UnauthorizedError extends AuthError {
    constructor(message = 'Unauthorized') {
        super(message, 'UNAUTHORIZED', 401);
        this.name = 'UnauthorizedError';
    }
}
export class ForbiddenError extends AuthError {
    constructor(message = 'Forbidden') {
        super(message, 'FORBIDDEN', 403);
        this.name = 'ForbiddenError';
    }
}
export class NotFoundError extends AuthError {
    constructor(message = 'Not found') {
        super(message, 'NOT_FOUND', 404);
        this.name = 'NotFoundError';
    }
}
export class ConflictError extends AuthError {
    constructor(message = 'Conflict') {
        super(message, 'CONFLICT', 409);
        this.name = 'ConflictError';
    }
}
