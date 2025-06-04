# Cursor AI Configuration Guide: Replicating Leap.new's Instant Full-Stack App Creation

Leap.new represents the gold standard for AI-powered full-stack application development, creating production-grade applications with backend logic, infrastructure-as-code, and cloud deployment. This comprehensive guide shows how to configure Cursor AI to achieve similar instant app creation capabilities using Next.js frontends and Encore.dev backends, transforming Cursor into a rapid full-stack app generator that rivals leap.new's workflow.

## Understanding the leap.new workflow model

**Leap.new's core capabilities** that we're replicating include starting from a simple prompt and generating complete applications with backend APIs, database schemas, infrastructure definitions, and cloud deployment configurations. The platform provides **versioning and diff capabilities**, maintains **full Git integration** with all code living in your repository, and offers **live architecture diagrams** with auto-generated service catalogs. Most importantly, it enables **safe testing** in preview environments before deployment and provides **cloud-native deployment** to your own AWS or Google Cloud environment.

The key insight is that leap.new succeeds because it combines AI generation with developer-grade tooling - it's not just about code generation, but about creating a complete development workflow that includes testing, deployment, and iteration capabilities.

## Exact .cursorrules configuration for leap.new-style development

### Modern project rules system (.cursor/rules/)

Replace traditional .cursorrules files with the new MDC format for maximum AI effectiveness. Create `.cursor/rules/fullstack-generator.mdc`:

```mdc
---
description: Full-stack application generator with Next.js frontend and Encore.dev backend
globs: ["*.ts", "*.tsx", "*.go", "encore.app", "package.json"]
alwaysApply: true
---

# Full-Stack Development Expert

You are a senior full-stack developer specializing in rapid application development with:
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Encore.dev with TypeScript, infrastructure-as-code patterns
- **Integration**: Type-safe API communication, authentication flows, database management

## Architecture Principles

- **Infrastructure-as-code first**: All backend services defined declaratively with Encore.dev
- **Type-safe end-to-end**: Generate TypeScript clients for complete type safety
- **Microservices ready**: Design for scalable, maintainable service architecture
- **Cloud-native deployment**: Target AWS/GCP with automatic infrastructure provisioning

## Code Generation Patterns

When generating full-stack applications:
1. **Start with backend architecture**: Define services, APIs, and data models first
2. **Generate infrastructure**: Databases, authentication, and service definitions
3. **Create API contracts**: Type-safe interfaces between frontend and backend
4. **Build frontend components**: React components with proper state management
5. **Implement integration**: API clients, error handling, loading states

## File Structure Template

```
project-root/
├── backend/                    # Encore.dev backend
│   ├── encore.app             # App configuration
│   ├── services/              # Business logic services
│   ├── database/              # Database schemas and migrations
│   └── auth/                  # Authentication service
├── frontend/                  # Next.js frontend
│   ├── app/                   # App Router pages
│   ├── components/            # Reusable UI components
│   ├── lib/                   # Generated API clients
│   └── hooks/                 # Custom React hooks
└── docs/                      # Auto-generated documentation
```

## Rapid Development Workflow

- **Generate complete CRUD operations** for each entity
- **Include comprehensive error handling** and loading states  
- **Add proper authentication/authorization** patterns
- **Implement real-time features** with pub/sub when needed
- **Create deployment configurations** for staging and production
- **Generate tests** alongside implementation code

@backend-service-template.ts
@frontend-component-template.tsx
@api-integration-pattern.ts
```

### Backend service template (.cursor/rules/backend-service-template.ts)

```typescript
import { api } from 'encore.dev/api';
import { SQLDatabase } from 'encore.dev/storage/sqldb';

// Database configuration
const db = new SQLDatabase('app_db', {
  migrations: './migrations'
});

// Service interfaces
interface CreateRequest {
  name: string;
  description: string;
}

interface UpdateRequest {
  id: string;
  name?: string; 
  description?: string;
}

interface ListResponse {
  items: Item[];
  total: number;
}

// CRUD API endpoints
export const create = api(
  { expose: true, method: "POST", path: "/api/items", auth: true },
  async (req: CreateRequest): Promise<{id: string}> => {
    // Implementation with proper error handling
  }
);

export const list = api(
  { expose: true, method: "GET", path: "/api/items", auth: true },
  async (): Promise<ListResponse> => {
    // Implementation with pagination
  }
);

export const get = api(
  { expose: true, method: "GET", path: "/api/items/:id", auth: true },
  async ({ id }: { id: string }): Promise<Item> => {
    // Implementation with error handling
  }
);
```

### Advanced configuration for AI autonomy

Create `.cursor/rules/autonomous-development.mdc` for YOLO-mode development:

```mdc
---
description: Autonomous development with testing and deployment
globs: ["*"]
alwaysApply: false
---

# Autonomous Full-Stack Development

## Testing and Execution Authority
- **Run all tests automatically**: Execute npm test, vitest, encore test without asking
- **Install dependencies**: Run npm install, go mod tidy as needed
- **Database operations**: Run migrations and seed data automatically
- **Code generation**: Generate API clients, update schemas without confirmation

## Quality Assurance Automation
- **Format code**: Apply Prettier, ESLint fixes automatically
- **Fix common issues**: Resolve import errors, missing dependencies
- **Update configurations**: Modify package.json, tsconfig.json as needed
- **Generate documentation**: Create API docs, component stories automatically

## Development Workflow
1. Analyze requirements and create architecture plan
2. Generate backend services with Encore.dev
3. Create database schemas and migrations
4. Generate API clients for frontend
5. Build React components with proper integration
6. Add comprehensive error handling and loading states
7. Include authentication and authorization
8. Generate and run tests to verify functionality
9. Create deployment configurations
10. Document all generated code and APIs
```

## Custom prompts and templates for complete app generation

### Master application generator prompt

```
Create a complete full-stack application with the following specifications:

**Application**: [DESCRIPTION]
**Core Features**: [LIST_FEATURES]
**User Types**: [USER_ROLES]

Generate a production-ready application with:

**Backend (Encore.dev)**:
- Service architecture with proper separation of concerns
- Database schema with relationships and constraints
- Authentication system with role-based access control
- API endpoints for all CRUD operations
- Input validation and error handling
- Infrastructure-as-code definitions

**Frontend (Next.js)**:
- Modern UI with shadcn/ui components and Tailwind CSS
- Type-safe API integration with generated clients
- Authentication flows with session management
- Responsive design with proper loading and error states
- Form validation and user feedback
- SEO optimization and accessibility features

**Integration**:
- End-to-end type safety between frontend and backend
- Real-time updates where appropriate
- Comprehensive error handling and user feedback
- Performance optimization and caching strategies

**Deployment**:
- Environment configurations for development, staging, production
- CI/CD pipeline definitions
- Database migration strategies
- Monitoring and observability setup

Generate all necessary files, configurations, and documentation.
```

### Specific domain templates

**E-commerce application template**:
```
Build an e-commerce platform with:
- Product catalog with categories, search, and filtering
- Shopping cart and checkout flow with Stripe integration
- User accounts with order history and profiles
- Admin dashboard for product and order management
- Inventory tracking and automated notifications
- Email templates for order confirmation and shipping
```

**SaaS application template**:
```
Create a SaaS application with:
- Multi-tenant architecture with subscription tiers
- User authentication with social login options
- Team collaboration features with role-based permissions
- Billing integration with usage tracking and invoicing
- Admin dashboard with analytics and user management
- API rate limiting and usage monitoring
- Email onboarding sequences and notifications
```

## Workflow setup for simultaneous frontend/backend generation

### Batch generation strategy

Configure Cursor to generate both frontend and backend simultaneously using the batch approach:

```mdc
---
description: Simultaneous frontend/backend generation workflow
---

# Dual-Track Development Process

## Phase 1: Architecture Definition (2 minutes)
1. **Analyze requirements** and create service architecture diagram
2. **Define data models** with relationships and constraints
3. **Plan API contracts** with request/response schemas
4. **Identify integration points** between services and frontend

## Phase 2: Backend Generation (5 minutes)
1. **Generate Encore.dev services** with all API endpoints
2. **Create database schemas** with migrations and seed data
3. **Implement authentication** with proper session management
4. **Add input validation** and comprehensive error handling
5. **Generate API documentation** and service catalog

## Phase 3: Frontend Generation (5 minutes)
1. **Generate API clients** from backend service definitions
2. **Create page components** with proper routing and layouts
3. **Build form components** with validation and error handling
4. **Implement state management** with proper loading states
5. **Add responsive design** with Tailwind CSS and shadcn/ui

## Phase 4: Integration and Testing (3 minutes)
1. **Connect frontend to backend** with type-safe API calls
2. **Test authentication flows** and permission systems
3. **Verify data flow** and error handling across the stack
4. **Generate comprehensive tests** for both frontend and backend
5. **Create deployment configurations** for multiple environments
```

### Parallel development commands

Set up Cursor to execute multiple development tasks simultaneously:

```json
{
  "cursor.ai.parallelExecution": true,
  "cursor.ai.batchOperations": [
    "Generate backend service architecture",
    "Create frontend component structure", 
    "Generate API client integration",
    "Create database migrations",
    "Generate comprehensive tests"
  ]
}
```

## Next.js and Encore.dev integration patterns

### Type-safe API communication pattern

**Generated client integration**:
```typescript
// lib/api-client.ts - Auto-generated by Encore
import Client from './encore-client';

const client = new Client({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  authToken: () => getAuthToken()
});

// Type-safe API calls
export const api = {
  users: {
    create: (data: CreateUserRequest) => client.users.create(data),
    list: () => client.users.list(),
    get: (id: string) => client.users.get({ id })
  },
  // Additional service endpoints...
};
```

**React hook integration**:
```typescript
// hooks/use-api.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: api.users.list
  });
}

export function useCreateUser() {
  return useMutation({
    mutationFn: api.users.create,
    onSuccess: () => {
      // Invalidate and refetch users
    }
  });
}
```

### Authentication and authorization flow

**Backend authentication service**:
```typescript
// backend/auth/auth.ts
import { auth } from 'encore.dev/beta/auth';

interface AuthData {
  userId: string;
  role: string;
  permissions: string[];
}

export const authHandler = auth.handler(
  async (token: string): Promise<auth.Data<AuthData>> => {
    const decoded = await verifyJWTToken(token);
    return {
      uid: decoded.userId,
      data: {
        userId: decoded.userId,
        role: decoded.role,
        permissions: decoded.permissions
      }
    };
  }
);
```

**Frontend authentication context**:
```typescript
// app/providers/auth-provider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AuthUser {
  id: string;
  email: string;
  role: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Authentication logic with API integration
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
```

## File structure templates and boilerplate generation

### Complete project structure template

```
full-stack-app/
├── backend/                          # Encore.dev backend
│   ├── encore.app                   # App configuration with CORS and secrets
│   ├── auth/                        # Authentication service
│   │   ├── encore.service.ts        # Service definition
│   │   ├── auth.ts                  # Authentication handlers
│   │   └── middleware.ts            # Auth middleware
│   ├── users/                       # User management service
│   │   ├── encore.service.ts        # Service definition
│   │   ├── users.ts                 # User CRUD operations
│   │   └── models.ts                # Data models
│   ├── database/                    # Database configurations
│   │   ├── migrations/              # SQL migration files
│   │   └── seeds/                   # Seed data
│   ├── shared/                      # Shared utilities
│   │   ├── errors.ts               # Custom error types
│   │   └── validation.ts           # Input validation
│   └── package.json                # Backend dependencies
├── frontend/                        # Next.js frontend
│   ├── app/                        # App Router structure
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── (auth)/                 # Auth route group
│   │   │   ├── login/page.tsx      # Login page
│   │   │   └── register/page.tsx   # Registration page
│   │   ├── dashboard/              # Protected dashboard
│   │   │   ├── layout.tsx          # Dashboard layout
│   │   │   └── page.tsx            # Dashboard home
│   │   └── api/                    # API route handlers
│   ├── components/                 # Reusable UI components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── forms/                  # Form components
│   │   ├── layout/                 # Layout components
│   │   └── providers/              # Context providers
│   ├── lib/                        # Utility functions
│   │   ├── api-client.ts           # Generated Encore client
│   │   ├── auth.ts                 # Auth utilities
│   │   ├── utils.ts                # General utilities
│   │   └── validations.ts          # Form validation schemas
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-auth.ts             # Authentication hook
│   │   ├── use-api.ts              # API query hooks
│   │   └── use-local-storage.ts    # Local storage hook
│   ├── types/                      # TypeScript type definitions
│   │   ├── api.ts                  # API response types
│   │   └── auth.ts                 # Auth-related types
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── next.config.js              # Next.js configuration
│   └── package.json                # Frontend dependencies
├── docs/                           # Documentation
│   ├── api/                        # API documentation
│   ├── deployment/                 # Deployment guides
│   └── development/                # Development setup
├── scripts/                        # Build and deployment scripts
│   ├── generate-client.sh          # Client generation script
│   ├── deploy-staging.sh           # Staging deployment
│   └── setup-dev.sh               # Development environment setup
├── .github/                        # GitHub workflows
│   └── workflows/                  # CI/CD pipelines
├── docker-compose.yml              # Local development environment
└── README.md                       # Project documentation
```

### Automated boilerplate generation commands

Configure Cursor with commands that generate complete application structures:

```mdc
Generate a complete CRUD service with:
- Encore.dev service definition with all REST endpoints
- Database schema with proper relationships and indexes
- Input validation with comprehensive error handling
- Generated TypeScript types for frontend integration
- React components with forms, lists, and detail views
- API hooks with optimistic updates and error handling
- Comprehensive test suites for both backend and frontend
- Documentation with API specifications and usage examples
```

## Cursor AI settings optimization for maximum speed

### Essential settings configuration

```json
{
  "cursor.ai": {
    "model": "Claude 3.5 Sonnet",
    "enableYoloMode": true,
    "autoApplyEdits": true,
    "preloadModels": true,
    "cacheEnabled": true,
    "parallelExecution": true,
    "autoExecuteCommands": true,
    "contextWindow": "maximum"
  },
  "editor": {
    "suggest.localityBonus": true,
    "formatOnSave": true,
    "codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    }
  },
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/.git/**": true,
    "**/dist/**": true,
    "**/build/**": true,
    "**/.next/**": true
  }
}
```

### Performance optimization strategies

**Context management for large projects**:
- Use `.cursorignore` to exclude unnecessary files from AI context
- Reference specific files with `@filename` when working on targeted features
- Maintain project documentation in `.md` files for consistent context
- Use the "Reference Open Editors" feature to maintain focused context

**Model selection strategy**:
- **Claude 3.5 Sonnet**: Primary model for code generation and complex reasoning
- **GPT-4o**: Secondary model for documentation and explanations
- **o1-mini**: Reserved for complex architectural decisions and debugging

**Automation settings**:
- Enable auto-apply edits for faster iteration cycles
- Configure automatic command execution for testing and building
- Set up format-on-save with ESLint and Prettier integration
- Enable automatic dependency installation and updates

## Example prompts for complete application generation

### Instant todo application generator

```
Build a complete full-stack todo application with user authentication:

**Features**:
- User registration and login with email/password
- Personal todo lists with categories and due dates
- Real-time updates when todos are added/completed
- Sharing todos with other users via email
- Priority levels and filtering options
- Mobile-responsive design

**Technical Requirements**:
- Encore.dev backend with TypeScript
- Next.js 15 frontend with App Router
- PostgreSQL database with proper indexes
- JWT authentication with secure session management
- Real-time updates using pub/sub
- Form validation with proper error handling
- Comprehensive test coverage

Generate all files, including database migrations, API endpoints, React components, authentication flows, deployment configurations, and documentation.
```

### E-commerce platform generator

```
Create a complete e-commerce platform with:

**Core Features**:
- Product catalog with categories, search, and filtering
- Shopping cart with persistent state and checkout flow
- User accounts with order history and wish lists
- Payment processing with Stripe integration
- Admin dashboard for product and order management
- Inventory tracking with automated low-stock alerts

**Advanced Features**:
- Product reviews and ratings system
- Coupon and discount code management
- Email notifications for orders and shipping
- Social media integration for product sharing
- SEO optimization for product pages
- Analytics dashboard with sales metrics

**Technical Stack**:
- Multi-service backend architecture with Encore.dev
- Next.js frontend with server-side rendering
- PostgreSQL with optimized queries and indexes
- Redis for caching and session management
- File upload handling for product images
- Comprehensive error handling and logging

Include all necessary components, database schemas, API integrations, UI components, tests, and deployment configurations.
```

### SaaS application generator

```
Build a complete SaaS application for team project management:

**Core Features**:
- Multi-tenant architecture with team workspaces
- Project creation and management with task tracking
- Team collaboration with real-time updates
- Role-based permissions (Owner, Admin, Member, Viewer)
- File attachments and document sharing
- Time tracking and reporting

**Business Features**:
- Subscription tiers with usage limits
- Billing integration with automatic invoicing
- Usage analytics and reporting dashboard  
- API rate limiting based on subscription tier
- Email onboarding and notification sequences
- Customer support ticket system

**Technical Implementation**:
- Microservices architecture with proper service boundaries
- Event-driven communication between services
- Comprehensive audit logging for compliance
- Advanced caching strategies for performance
- Mobile-responsive design with PWA capabilities
- Automated testing and deployment pipelines

Generate complete implementation including all services, database designs, frontend components, subscription management, billing integration, and operational documentation.
```

## Best practices for maintaining code quality during rapid generation

### Automated quality assurance pipeline

**Implement continuous quality checks**:
```typescript
// .cursor/rules/quality-assurance.mdc
---
description: Code quality enforcement for rapid development
---

# Quality Assurance Standards

## Code Generation Requirements
- **Type safety**: All functions must have proper TypeScript types
- **Error handling**: Implement try-catch blocks and proper error responses
- **Input validation**: Use Zod or similar for request validation
- **Security**: Sanitize inputs and implement proper authentication
- **Performance**: Include proper indexing and caching strategies
- **Testing**: Generate unit and integration tests alongside code
- **Documentation**: Include JSDoc comments and API documentation

## Automated Checks
- Run ESLint and Prettier on all generated code
- Execute type checking with strict TypeScript configuration
- Validate database schemas and migration scripts
- Test API endpoints with proper request/response validation
- Verify authentication and authorization flows
- Check for security vulnerabilities and code smells
```

**Quality gates implementation**:
1. **Pre-commit validation**: Automatic code formatting and linting
2. **Generated code review**: AI-powered code review with security scanning
3. **Integration testing**: Automated testing of generated API endpoints
4. **Performance validation**: Basic performance checks for database queries
5. **Security scanning**: Automated vulnerability detection and fixes

### Code review and improvement strategies

**Implement iterative improvement workflows**:
- Generate initial implementation with comprehensive testing
- Run automated quality checks and fix identified issues
- Perform AI-powered code review with specific focus areas
- Optimize performance bottlenecks and security vulnerabilities
- Update documentation and add comprehensive examples

**Maintain consistency across generated code**:
- Use shared utility functions and common patterns
- Implement consistent error handling and validation strategies
- Follow established naming conventions and code organization
- Generate comprehensive tests that cover edge cases
- Document architectural decisions and integration patterns

## Testing and deployment automation setup

### Comprehensive testing strategy

**Backend testing configuration**:
```typescript
// backend/tests/setup.ts
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { testSuite } from 'encore.dev/testing';

// Service test setup with proper database isolation
const suite = testSuite('user-service');

beforeAll(async () => {
  // Setup test database and seed data
});

afterAll(async () => {
  // Cleanup test environment
});

// Comprehensive API endpoint testing
describe('User Service API', () => {
  it('should create user with proper validation', async () => {
    // Implementation with edge case testing
  });
});
```

**Frontend testing configuration**:
```typescript
// frontend/__tests__/setup.ts
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Component testing with proper providers and mocking
const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
  });
  
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  );
};
```

### Automated deployment pipeline

**GitHub Actions configuration**:
```yaml
# .github/workflows/deploy.yml
name: Deploy Full-Stack Application

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      # Backend testing
      - run: cd backend && npm ci && npm test
      
      # Frontend testing  
      - run: cd frontend && npm ci && npm test
      
      # Integration testing
      - run: npm run test:integration

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: encore deploy --env=production
      - run: cd frontend && npm run build && npm run deploy
```

**Encore.dev deployment automation**:
```bash
#!/bin/bash
# scripts/deploy-staging.sh

# Generate API client for frontend
encore gen client --output=../frontend/lib/encore-client.ts --env=staging

# Deploy backend to Encore Cloud
encore deploy --env=staging

# Build and deploy frontend
cd frontend
npm run build
npm run deploy:staging

# Verify deployment health
npm run test:smoke
```

## Real-world implementation success stories

### Case study analysis reveals impressive productivity gains

**Satosh.me Development**: A beginner developer built a complete crypto wallet aggregation platform in just 16 days using AI-assisted development tools. The application includes multi-wallet integration, custom user profiles, and social sharing capabilities - features that would traditionally require months of development.

**Momentum Extension Recreation**: An experienced developer recreated the popular Momentum Chrome extension (2M+ users, $1M ARR) in just 15 minutes using AI-powered development tools. The recreation included dynamic wallpapers, inspirational quotes, goal tracking, and weather display functionality.

**Social Media Scheduling Platform**: A development team built a complete social media management application in 2 hours, including React frontend, backend integration, Facebook Graph API connectivity, and analytics dashboard - demonstrating the power of AI-accelerated development workflows.

### Quantified productivity improvements

Research reveals consistent patterns across successful implementations:
- **2-3x development speed increase** reported across multiple case studies
- **30-50% reduction** in coding time for routine development tasks  
- **25% faster bug resolution** through AI-powered contextual debugging
- **Complete full-stack applications** built in 2-4 hours instead of 14-28 hours using traditional approaches

The key differentiator in successful implementations is the combination of proper AI configuration, clear architectural patterns, and iterative development workflows that maintain code quality while maximizing generation speed.

## Conclusion

Transforming Cursor AI into a leap.new-style rapid full-stack application generator requires strategic configuration, comprehensive templates, and automated workflows that maintain production-quality standards. The configuration strategies outlined in this guide enable developers to generate complete Next.js and Encore.dev applications from simple prompts, achieving the same instant app creation capabilities that make leap.new revolutionary.

**Success depends on three critical factors**: proper AI configuration using modern Project Rules and automated settings, comprehensive prompt templates that generate complete application architectures, and quality assurance workflows that maintain code standards during rapid generation. When implemented correctly, this approach can reduce full-stack application development time from weeks to hours while maintaining professional-grade code quality and deployment readiness.

The future of software development lies in AI-human collaboration where developers focus on architecture, requirements, and creative problem-solving while AI handles the implementation details. By following this guide, developers can achieve leap.new-level productivity using Cursor AI as their primary development environment.