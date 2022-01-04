

const UNSAFE_METHODS = /(?:POST|PATCH|DELETE)/i;

export function isAuthenticated(request) {
  const { method, session } = request;
  const isUnsafe = UNSAFE_METHODS.test(method);

  if (isUnsafe && !session) {
    return false; // 401 Unauthorized if the current user is not an admin.
  }
}