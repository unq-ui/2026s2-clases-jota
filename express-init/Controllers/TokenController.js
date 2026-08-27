import jwt from 'jsonwebtoken';

const JWT_SECRET = 'super-secret'; // No tendria que estar harcodeada en el codigo!
const HEADER = 'Authorization';

class TokenController {
  constructor(service) {
    this.service = service;
  }

  generateToken = (userId) => jwt.sign({ userId }, JWT_SECRET);

  validateToken = (token) => jwt.verify(token, JWT_SECRET);

  validateUser = (req, res, next) => {
    const authHeader = req.headers[HEADER.toLowerCase()];
    if (!authHeader) {
      res.status(401).json({ error: 'Authorization header is required' });
      return;
    }
    try {
      const decoded = this.validateToken(authHeader);
      const user = this.service.getUser(decoded.userId);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
}

export default TokenController;
