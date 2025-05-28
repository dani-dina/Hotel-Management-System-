
export const HTTP_STATUS = {
  // 2xx Success
  OK: {
    code: 200,
    message: 'OK',
    description: 'Standard response for successful HTTP requests.'
  },
  CREATED: {
    code: 201,
    message: 'Created',
    description: 'Request has been fulfilled and new resource created.'
  },
  ACCEPTED: {
    code: 202,
    message: 'Accepted',
    description: 'Request accepted but processing not completed.'
  },
  NO_CONTENT: {
    code: 204,
    message: 'No Content',
    description: 'Request succeeded but no content to return.'
  },

  // 3xx Redirection
  MOVED_PERMANENTLY: {
    code: 301,
    message: 'Moved Permanently',
    description: 'Resource has been permanently moved to new URI.'
  },
  FOUND: {
    code: 302,
    message: 'Found',
    description: 'Resource temporarily moved to different URI.'
  },
  NOT_MODIFIED: {
    code: 304,
    message: 'Not Modified',
    description: 'Resource not modified since last request.'
  },

  // 4xx Client Errors
  BAD_REQUEST: {
    code: 400,
    message: 'Bad Request',
    description: 'Server cannot process request due to client error.'
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'Unauthorized',
    description: 'Authentication required or failed.'
  },
  FORBIDDEN: {
    code: 403,
    message: 'Forbidden',
    description: 'Client lacks necessary permissions.'
  },
  NOT_FOUND: {
    code: 404,
    message: 'Not Found',
    description: 'Resource could not be found.'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: 'Method Not Allowed',
    description: 'Request method not supported for this resource.'
  },
  CONFLICT: {
    code: 409,
    message: 'Conflict',
    description: 'Request conflicts with current state of resource.'
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    message: 'Too Many Requests',
    description: 'User has sent too many requests in given time.'
  },

  // 5xx Server Errors
  SERVER_ERROR: {
    code: 500,
    message: 'Internal Server Error',
    description: 'Unexpected condition encountered by server.'
  },
  NOT_IMPLEMENTED: {
    code: 501,
    message: 'Not Implemented',
    description: 'Server doesn\'t support requested functionality.'
  },
  BAD_GATEWAY: {
    code: 502,
    message: 'Bad Gateway',
    description: 'Invalid response from upstream server.'
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: 'Service Unavailable',
    description: 'Server temporarily unable to handle requests.'
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: 'Gateway Timeout',
    description: 'Upstream server failed to respond in time.'
  },

  // Utility Methods
  isSuccess: function(statusCode) {
    return statusCode >= 200 && statusCode < 300;
  },
  isClientError: function(statusCode) {
    return statusCode >= 400 && statusCode < 500;
  },
  isServerError: function(statusCode) {
    return statusCode >= 500 && statusCode < 600;
  },
  getStatusByCode: function(code) {
    for (const key in this) {
      if (typeof this[key] === 'object' && this[key] !== null && this[key].code === code) {
        return this[key];
      }
    }
    return null;
  }
};

// Helper function to check if a value is an HTTP status object
HTTP_STATUS.isStatusObject = function(value) {
  return value && typeof value === 'object' && 'code' in value && 'message' in value && 'description' in value;
};