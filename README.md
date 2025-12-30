# AI Mock Interview Platform

A comprehensive AI-powered mock interview platform that provides realistic interview experiences with multi-modal analysis and detailed feedback.

## Features

- **Realistic AI Interviews**: Conduct mock interviews with AI interviewers that adapt to your responses
- **Multi-Modal Analysis**: Analyze text, speech, emotion, and facial expressions
- **Comprehensive Feedback**: Get detailed performance reports with actionable insights
- **Subscription Management**: Tiered pricing with usage-based billing
- **Real-time Communication**: WebRTC-powered audio/video interviews
- **Progress Tracking**: Monitor improvement over multiple sessions
- **OAuth Integration**: Sign in with Google or GitHub
- **Secure Authentication**: JWT-based authentication with refresh tokens

## Architecture

The platform follows a microservices architecture with the following components:

- **Frontend**: React/Next.js application with TypeScript
- **API Gateway**: Nginx-based routing and load balancing
- **Authentication Service**: User management and OAuth integration
- **Interview Service**: AI-powered interview conductor
- **Analysis Service**: Multi-modal response analysis
- **Billing Service**: Stripe integration for subscriptions
- **Database**: PostgreSQL with Redis caching
- **Real-time**: WebRTC signaling and media streaming

## Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- Docker and Docker Compose
- PostgreSQL 15+
- Redis 7+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-mock-interview-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your configuration
   ```

4. **Start the development environment**
   ```bash
   # Start databases and services
   npm run docker:up
   
   # Run database migrations
   npm run db:migrate
   
   # Start development servers
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3001
   - API Gateway: http://localhost:80
   - Authentication Service: http://localhost:3001
   - User Service: http://localhost:3002
   - Interview Service: http://localhost:3003

## Development

### Project Structure

```
ai-mock-interview-platform/
├── packages/                 # Shared packages
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Shared utilities
├── services/                # Microservices
│   ├── auth/               # Authentication service
│   ├── user/               # User management service
│   ├── interview/          # Interview service
│   ├── analysis/           # Analysis service
│   ├── billing/            # Billing service
│   ├── database/           # Database scripts
│   └── api-gateway/        # Nginx configuration
├── apps/                   # Frontend applications
│   └── web/               # Next.js web application
└── docker-compose.yml     # Development environment
```

### Available Scripts

- `npm run dev` - Start all services in development mode
- `npm run build` - Build all packages and services
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint all code
- `npm run type-check` - Run TypeScript type checking
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services

### Testing

The project uses a comprehensive testing strategy:

- **Unit Tests**: Jest for component and function testing
- **Property-Based Tests**: fast-check for universal property validation
- **Integration Tests**: End-to-end service communication testing

Run tests:
```bash
# Run all tests
npm run test

# Run tests for specific package
cd packages/utils && npm test

# Run property-based tests
npm run test -- --testNamePattern="Property"
```

### Database Management

```bash
# Run migrations
npm run db:migrate

# Seed development data
npm run db:seed

# Reset database
npm run docker:down && npm run docker:up
```

## Configuration

### Environment Variables

Key environment variables (see `.env.example` for complete list):

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - JWT signing secret
- `OPENAI_API_KEY` - OpenAI API key for AI features
- `STRIPE_SECRET_KEY` - Stripe secret key for payments
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GITHUB_CLIENT_ID` - GitHub OAuth client ID

### OAuth Setup

1. **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

2. **GitHub OAuth**:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth App
   - Set authorization callback URL

### Stripe Setup

1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Set up webhook endpoints for subscription events
4. Configure subscription plans in the Stripe dashboard

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/oauth/google` - Google OAuth
- `GET /api/auth/oauth/github` - GitHub OAuth

### Interview Endpoints

- `POST /api/interviews` - Create interview session
- `GET /api/interviews/:id` - Get interview session
- `POST /api/interviews/:id/start` - Start interview
- `POST /api/interviews/:id/responses` - Submit response
- `POST /api/interviews/:id/pause` - Pause interview
- `POST /api/interviews/:id/end` - End interview

### User Endpoints

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/preferences` - Get user preferences
- `PUT /api/users/preferences` - Update user preferences

## Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set up production environment variables**
   ```bash
   cp .env.example .env.production
   # Configure production values
   ```

3. **Deploy using Docker**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Environment-Specific Configurations

- **Development**: Uses local databases, debug logging, relaxed rate limiting
- **Staging**: Production-like environment with test data
- **Production**: Optimized for performance, security, and scalability

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Write tests for new functionality
- Use conventional commit messages
- Ensure code passes all linting and type checks

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the API documentation

## Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced AI personalities
- [ ] Industry-specific interview templates
- [ ] Team collaboration features
- [ ] Advanced analytics dashboard
- [ ] Integration with job boards
- [ ] Video interview recording
- [ ] AI-powered interview coaching