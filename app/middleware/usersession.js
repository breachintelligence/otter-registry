const sessions = {};

export function retreiveSession(req) {
  const { params: { token } } = req;
  req.session = sessions[token] || null;  
}

export function saveSession(req, res, payload) {
  const { session, params: { token } } = req;
  token && (sessions[token] = req.session);

  !token && session && (sessions[session.token] = req.session);
  return payload;
}
