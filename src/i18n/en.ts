export default {
  nav: {
    services: 'Projects',
    incidents: 'Problem Solving',
    playbooks: 'Skills',
    logs: 'Experience',
    contact: 'Contact',
    downloadCV: 'Download CV',
  },
  hero: {
    systemStatus: 'System Status',
    healthy: 'Healthy',
    tagline: "I build systems that don't break.",
    bio: "Backend engineer specialized in building reliable APIs, integrations, and automation pipelines. I ship systems with an infra-minded approach—monitoring, logging, and operational excellence built in from day one.",
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    // Recruiter View
    recruiter: {
      tagline: 'Backend Developer focused on building reliable systems.',
      bio: 'I design and build APIs, automate workflows, and integrate systems. My work helps teams save time, reduce errors, and deliver better software.',
    },
    // Tech Lead View
    tech: {
      tagline: "I build systems that don't break.",
      bio: "Backend engineer specialized in building reliable APIs, integrations, and automation pipelines. I ship systems with an infra-minded approach—monitoring, logging, and operational excellence built in from day one.",
    },
  },
  metrics: {
    title: 'Impact Metrics',
    description: 'Measurable outcomes from building reliable systems',
    // Recruiter View - Business Impact
    recruiter: {
      title: 'Impact & Results',
      description: 'Measurable business outcomes from my work',
      timeSaved: {
        label: 'Time Saved',
        value: '80%',
        description: 'Reduced manual work through automation',
      },
      processesAutomated: {
        label: 'Processes Automated',
        value: '12+',
        description: 'Workflows built to run without human intervention',
      },
      systemsIntegrated: {
        label: 'Systems Connected',
        value: '8+',
        description: 'Different platforms working together seamlessly',
      },
      projectsDelivered: {
        label: 'Projects Delivered',
        value: '15+',
        description: 'Production systems shipped on time',
      },
    },
    // Tech Lead View - Technical Metrics
    tech: {
      title: 'Impact Metrics',
      description: 'Measurable outcomes from building reliable systems',
      timeSaved: {
        label: 'Time Saved',
        value: '~80%',
        description: 'Operational time reduction through automation',
      },
      apisShipped: {
        label: 'APIs Shipped',
        value: '12+',
        description: 'Production-grade REST APIs deployed',
      },
      integrations: {
        label: 'Systems Integrated',
        value: '8+',
        description: 'External & internal service integrations',
      },
      uptime: {
        label: 'Uptime Focus',
        value: '99.9%',
        description: 'Reliability-first engineering mindset',
      },
    },
  },
  services: {
    title: 'Projects',
    description: "Production systems I've built and shipped. Real problems, engineered solutions, measurable impact.",
    techView: 'Tech Lead View',
    problem: 'Problem',
    solution: 'Solution',
    outcome: 'Outcome',
    architecture: 'Architecture',
    designDecisions: 'Design Decisions',
    tradeoffs: 'Trade-offs',
    techNotes: 'Technical Notes',
    viewGithub: 'View on GitHub',
    viewLive: 'View live demo',
    // Recruiter View
    recruiter: {
      title: 'Key Projects',
      description: 'Real business problems I solved with technology.',
      challenge: 'Challenge',
      whatIDid: 'What I Did',
      technologies: 'Technologies',
      result: 'Result',
    },
    // Tech Lead View
    tech: {
      title: 'Projects',
      description: "Production systems I've built and shipped. Real problems, engineered solutions, measurable impact.",
      problem: 'Problem',
      solution: 'Solution',
      outcome: 'Outcome',
      architecture: 'Architecture',
    },
  },
  incidents: {
    title: 'Incident Reports',
    description: "Real production incidents I've debugged and resolved. Every system breaks—what matters is how you fix it and prevent recurrence.",
    symptom: 'Symptom',
    rootCause: 'Root Cause',
    fix: 'Fix',
    prevention: 'Prevention',
    lessonsTitle: 'Lessons Learned',
    lessonsText: "Every incident is a learning opportunity. I document root causes, share findings with the team, and implement preventive measures. The goal isn't perfection—it's building systems that degrade gracefully and recover quickly.",
    // Recruiter View
    recruiter: {
      title: 'Challenges Solved',
      description: 'Real problems I identified and fixed in production systems.',
      situation: 'Situation',
      action: 'What I Did',
      result: 'Result',
      lessonsTitle: 'Problem-Solving Approach',
      lessonsText: 'When issues occur, I quickly identify the cause, implement a fix, and put measures in place to prevent it from happening again. This approach keeps systems running smoothly and reduces downtime.',
    },
    // Tech Lead View
    tech: {
      title: 'Incident Reports',
      description: "Real production incidents I've debugged and resolved. Every system breaks—what matters is how you fix it and prevent recurrence.",
      symptom: 'Symptom',
      rootCause: 'Root Cause',
      fix: 'Fix',
      prevention: 'Prevention',
      lessonsTitle: 'Lessons Learned',
      lessonsText: "Every incident is a learning opportunity. I document root causes, share findings with the team, and implement preventive measures. The goal isn't perfection—it's building systems that degrade gracefully and recover quickly.",
    },
  },
  playbooks: {
    title: 'Technical Skills',
    description: 'My technical toolkit, organized by domain. These are the skills I use daily to build reliable backend systems.',
    skills: 'Skills',
    tools: 'Tools',
  },
  dayInProduction: {
    title: 'A Day in Production',
    // Recruiter View
    recruiter: {
      title: 'A Day Keeping Systems Running',
      description: 'How I spend my time maintaining and improving production systems.',
      timeline: [
        {
          time: '09:00',
          title: 'Morning System Check',
          description: 'Review overnight alerts and system health. Check if any issues need immediate attention.',
          outcome: 'All systems running smoothly. No urgent issues.',
        },
        {
          time: '10:30',
          title: 'Investigate Slow Reports',
          description: 'Users reported slow dashboard loading. Found database queries taking too long as data grew.',
          outcome: 'Optimized queries. Reports now load in under 2 seconds instead of 15 seconds.',
        },
        {
          time: '12:00',
          title: 'Deploy New Feature',
          description: 'Released new API endpoint for mobile app. Tested thoroughly, monitored rollout.',
          outcome: 'Deployment successful. Mobile team can now integrate the new functionality.',
        },
        {
          time: '14:30',
          title: 'Payment Alert Investigation',
          description: 'Alert showed payment confirmations slowing down. Checked external payment provider status.',
          outcome: 'Provider had temporary issues. Set up backup system for future incidents.',
        },
        {
          time: '16:00',
          title: 'Code Review and Planning',
          description: 'Reviewed teammate\'s code, discussed upcoming automation project.',
          outcome: 'Approved changes. Planned next sprint work with clear priorities.',
        },
        {
          time: '17:30',
          title: 'Documentation Update',
          description: 'Updated runbook with today\'s payment issue resolution for future reference.',
          outcome: 'Team now has clear steps to handle similar issues independently.',
        },
      ],
    },
    // Tech Lead View
    tech: {
      title: 'A Day in Production',
      description: 'Real operational work: monitoring, debugging, deploying, and improving systems.',
      timeline: [
        {
          time: '09:00',
          title: 'Morning Health Check',
          log: '[INFO] Checking overnight metrics: API p99 latency stable at 45ms, error rate 0.02%, all services green',
          action: 'Reviewed Grafana dashboards, checked PagerDuty for alerts. No incidents overnight.',
          outcome: 'Systems nominal. Proceed with planned deployment.',
        },
        {
          time: '10:30',
          title: 'Performance Investigation',
          log: '[WARN] Dashboard queries timing out for users. DB slow query log showing 15s+ on analytics endpoint.',
          hypothesis: 'Table grew past 2M rows without proper indexing. Query planner doing full table scan.',
          action: 'Added composite index on (user_id, created_at), optimized N+1 queries in ORM.',
          outcome: 'Query time reduced from 15s to 1.8s. Added monitoring for table growth.',
        },
        {
          time: '12:00',
          title: 'Feature Deployment',
          log: '[DEPLOY] Rolling out v2.3.0 to production. New /api/v2/user-preferences endpoint.',
          action: 'Blue-green deployment via CI/CD. Monitored error rates, latency, throughput for 30min.',
          outcome: 'Zero errors. p99 latency 52ms. Switched 100% traffic to new version.',
        },
        {
          time: '14:30',
          title: 'External API Degradation',
          log: '[ALERT] Payment confirmation latency spike: p99 jumped from 200ms to 3s. Error rate 8%.',
          hypothesis: 'Third-party payment gateway having issues. Check their status page.',
          action: 'Confirmed provider degradation. Implemented circuit breaker, routed 30% traffic to backup processor.',
          outcome: 'Error rate dropped to 0.5%. Documented failover procedure in runbook.',
        },
        {
          time: '16:00',
          title: 'Code Review & Architecture Discussion',
          log: '[PR-#247] Reviewed data sync automation refactor. 450 LOC, 85% test coverage.',
          action: 'Suggested connection pooling improvements, added retry backoff validation.',
          outcome: 'PR approved with minor changes. Discussed event-driven architecture for Q2 project.',
        },
        {
          time: '17:30',
          title: 'Runbook Update',
          log: '[DOCS] Updated incident response playbook with payment gateway failover procedure.',
          action: 'Added decision tree, monitoring queries, rollback steps. Shared with on-call rotation.',
          outcome: 'Team can now handle payment provider issues without escalation.',
        },
      ],
    },
  },
  systemHealth: {
    title: 'System Health Over Time',
    description: 'Measurable improvements in system reliability and operational efficiency.',
    before: {
      label: 'Before',
      subtitle: '6 months ago',
      metrics: [
        { label: 'Incidents per month', value: '8-12', severity: 'high' },
        { label: 'Mean time to detection', value: '45 min', severity: 'high' },
        { label: 'Manual interventions', value: '3-4 daily', severity: 'medium' },
        { label: 'Deployment frequency', value: 'Weekly', severity: 'medium' },
        { label: 'Failed deployments', value: '15%', severity: 'high' },
      ],
    },
    after: {
      label: 'After',
      subtitle: 'Current state',
      metrics: [
        { label: 'Incidents per month', value: '1-2', severity: 'low' },
        { label: 'Mean time to detection', value: '<5 min', severity: 'low' },
        { label: 'Manual interventions', value: '~0', severity: 'low' },
        { label: 'Deployment frequency', value: 'Daily', severity: 'low' },
        { label: 'Failed deployments', value: '<2%', severity: 'low' },
      ],
    },
    improvements: [
      'Implemented comprehensive monitoring and alerting',
      'Automated manual processes reducing operational overhead',
      'Improved deployment pipeline with automated testing',
      'Built reliable systems requiring minimal intervention',
    ],
  },
  optimizeFor: {
    title: 'What I Optimize For',
    description: 'Engineering principles I follow when building backend systems.',
    principles: [
      {
        name: 'Observable Systems',
        explanation: 'If you can\'t measure it, you can\'t fix it. I instrument everything—metrics, logs, traces. When issues happen (and they will), I need data to debug quickly.',
        example: 'Added structured logging to all API endpoints. When payments started failing, I traced the issue to a specific external API in under 5 minutes instead of hours.',
      },
      {
        name: 'Graceful Degradation',
        explanation: 'Systems fail. The goal isn\'t perfection—it\'s failing in a way that doesn\'t break everything. Circuit breakers, fallbacks, and timeouts are not optional.',
        example: 'When our payment gateway went down, the system automatically routed to a backup processor. Users didn\'t notice. Zero downtime.',
      },
      {
        name: 'Automation Over Toil',
        explanation: 'If I\'m doing the same task twice, I automate it. Manual work doesn\'t scale, creates errors, and burns time better spent building.',
        example: 'Automated data reconciliation saved 4+ hours daily. The team now focuses on features instead of copying spreadsheets.',
      },
      {
        name: 'Boring Technology',
        explanation: 'I default to proven tools and patterns. Use the new framework when it solves a real problem—not because it\'s trendy. Boring is reliable.',
        example: 'Chose PostgreSQL over a trendy NoSQL solution. Saved weeks debugging eventual consistency issues. SQL just works.',
      },
      {
        name: 'Optimize for Change',
        explanation: 'Code will be modified. Write it so others (including future you) can understand and change it quickly. Clear over clever.',
        example: 'Refactored 800-line function into 6 small, well-named functions. New developer onboarded and made changes in days, not weeks.',
      },
      {
        name: 'Ownership Mentality',
        explanation: 'If I build it, I own it. That means monitoring, on-call, documentation, and making it easy for others to maintain. No throwing code over the wall.',
        example: 'Created runbooks for all services I built. Team can resolve 90% of incidents without waking me up. That\'s real ownership.',
      },
    ],
  },
  logs: {
    title: 'Experience',
    description: "My professional timeline. Where I've worked, what I've built, and the impact I've made.",
    responsibilities: 'Responsibilities',
    impact: 'Impact',
  },
  deploy: {
    title: "Let's Connect",
    description: "Ready to build reliable systems together? Let's connect.",
    getInTouch: 'Get in Touch',
    email: 'Email',
    sendMessage: 'Send a Message',
    cta: "Let's build reliable systems together.",
    ctaDescription: "Whether you need API integrations, automation pipelines, or reliable backend systems, I'm here to help build solutions that scale.",
  },
  console: {
    title: 'System Console',
    latency: 'Latency',
    errorRate: 'Error Rate',
    throughput: 'Throughput',
    lastDeploy: 'Last Deploy',
    systemStatus: 'System Status',
    healthy: 'Healthy',
    live: 'Live',
    paused: 'Paused',
    reqPerMin: 'req/min',
  },
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    required: 'Required',
    invalidEmail: 'Please enter a valid email',
    successTitle: 'Message sent successfully!',
    successMessage: "I'll get back to you soon.",
    errorMessage: 'Failed to send message. Please try again.',
  },
  viewToggle: {
    recruiter: 'Recruiter View',
    techLead: 'Tech Lead View',
    recruiterShort: 'Recruiter',
    techLeadShort: 'Tech',
  },
  footer: {
    builtWith: 'Built with Vue 3 + TypeScript + TailwindCSS',
    allSystemsOperational: 'All systems operational.',
  },
  data: {
    projects: {
      'api-gateway': {
        title: 'Enterprise API Gateway',
        problem: 'Multiple internal services needed unified authentication, rate limiting, and request routing without duplicating logic.',
        solution: 'Built a centralized API gateway in Go with JWT validation, Redis-backed rate limiting, and dynamic routing configuration.',
        outcome: 'Reduced auth implementation time by 70% for new services. Handled 10K+ req/min with p99 latency < 50ms.',
        // Recruiter version
        recruiter: {
          challenge: 'Multiple systems needed a secure way to communicate without repeating security code in each one.',
          whatIDid: 'Built a central security gateway that handles authentication and manages traffic for all internal services.',
          technologies: 'Go, Redis, Docker, SQL',
          result: 'Reduced setup time for new services by 70%. System handles over 10,000 requests per minute reliably.',
        },
      },
      'automation-pipeline': {
        title: 'Data Sync Automation',
        problem: 'Manual data reconciliation between CRM and ERP took 4+ hours daily, error-prone and blocking operations.',
        solution: 'Developed FastAPI service with scheduled jobs, webhook listeners, and retry logic. Integrated with both systems via REST APIs.',
        outcome: '~85% time reduction, zero manual interventions. Processed 50K+ records daily with automatic error recovery.',
        // Recruiter version
        recruiter: {
          challenge: 'Team spent over 4 hours daily manually copying data between CRM and ERP systems, causing delays and errors.',
          whatIDid: 'Created an automated system that syncs data between both platforms automatically, with built-in error handling.',
          technologies: 'Python, APIs, Docker, SQL',
          result: 'Saved 85% of manual work time. Processes 50,000+ records daily with zero manual intervention.',
        },
      },
      'monitoring-dashboard': {
        title: 'Ops Monitoring Backend',
        problem: 'No centralized visibility into microservices health, logs scattered across systems, incidents detected too late.',
        solution: 'Built Spring Boot service aggregating metrics from multiple sources, exposing real-time WebSocket API for dashboard.',
        outcome: 'Mean time to detection (MTTD) reduced from 45min to <5min. Full system visibility in single dashboard.',
        // Recruiter version
        recruiter: {
          challenge: 'Team had no way to see system health in real-time. Issues were discovered too late, causing downtime.',
          whatIDid: 'Built a monitoring system that collects data from all services and displays it in one dashboard with real-time updates.',
          technologies: 'Java, WebSocket, SQL, Grafana',
          result: 'Reduced problem detection time from 45 minutes to under 5 minutes. Complete system visibility in one place.',
        },
      },
      'internal-tool': {
        title: 'Developer Onboarding Tool',
        problem: 'New developers spent 3+ days setting up environments, credentials, and understanding system architecture.',
        solution: 'Created CLI tool in Go automating environment setup, credential provisioning, and generating architecture docs from codebases.',
        outcome: 'Onboarding time reduced to <4 hours. Adopted by 20+ developers, 95% satisfaction rating.',
        // Recruiter version
        recruiter: {
          challenge: 'New developers needed 3+ days to set up their work environment before being productive.',
          whatIDid: 'Created an automated setup tool that configures everything new developers need in one command.',
          technologies: 'Go, Docker, Shell scripts',
          result: 'Reduced onboarding from 3 days to under 4 hours. Used by 20+ developers with 95% satisfaction.',
        },
      },
    },
    incidents: {
      'inc-001': {
        title: 'Payment Gateway Integration Timeout',
        symptom: 'Payment confirmations failing at 15% rate during peak hours. Users experiencing checkout failures.',
        rootCause: 'Third-party API had undocumented rate limits. Our retry logic was naive, amplifying the problem.',
        fix: 'Implemented exponential backoff with jitter, circuit breaker pattern, and request queuing with Redis.',
        prevention: 'Added comprehensive load testing, monitoring for external API latency, automatic failover to backup processor.',
        // Recruiter version
        recruiter: {
          title: 'Payment Processing Issues',
          situation: '15% of customer payments were failing during busy hours, causing lost sales and customer complaints.',
          action: 'Found the payment provider had limits we were hitting. Redesigned how we send payment requests to stay within limits and added a backup system.',
          result: 'Payments now process reliably even during peak traffic. Added monitoring to catch similar issues early.',
        },
      },
      'inc-002': {
        title: 'Data Mismatch in Analytics Pipeline',
        symptom: 'Dashboard reporting 30% lower transaction volumes than actual. Finance team flagged discrepancy.',
        rootCause: 'Timezone handling inconsistency between data ingestion (UTC) and aggregation queries (local time).',
        fix: 'Standardized all timestamps to UTC at ingestion, added validation layer checking record counts at each stage.',
        prevention: 'Created automated reconciliation jobs, added data quality metrics to monitoring, documented timezone standards.',
        // Recruiter version
        recruiter: {
          title: 'Reporting Accuracy Problem',
          situation: 'Finance dashboard showed 30% fewer transactions than actually occurred, causing confusion in business decisions.',
          action: 'Discovered timezone handling was inconsistent. Standardized how we store and display dates across all systems.',
          result: 'Reports now match actual numbers. Added automatic checks to catch data inconsistencies early.',
        },
      },
      'inc-003': {
        title: 'Memory Leak in Background Workers',
        symptom: 'Worker pods restarting every 6 hours, processing delays accumulating, OOM kills in logs.',
        rootCause: 'Database connection pool not properly closed after batch jobs. Connections accumulated over time.',
        fix: 'Implemented proper connection lifecycle management, added memory profiling, reduced pool size.',
        prevention: 'Set up memory usage alerts, added connection pool metrics to dashboards, scheduled restarts as safety net.',
        // Recruiter version
        recruiter: {
          title: 'System Slowdown Issues',
          situation: 'Background job system kept crashing every 6 hours, causing work to pile up and delays in processing.',
          action: 'Found the system was not releasing database connections properly. Fixed the connection management and added monitoring.',
          result: 'System now runs continuously without crashes. Added alerts to catch resource issues before they cause problems.',
        },
      },
      'inc-004': {
        title: 'API Performance Degradation',
        symptom: 'Response times increased from 200ms to 2s+ over 2 weeks. No obvious spike in traffic.',
        rootCause: 'Unindexed database queries as table grew past 1M rows. Query planner choosing full table scans.',
        fix: 'Added composite indexes on frequently queried columns, optimized N+1 queries, implemented query result caching.',
        prevention: 'Set up slow query logging, added database performance to monitoring, scheduled monthly query reviews.',
        // Recruiter version
        recruiter: {
          title: 'Slow System Response',
          situation: 'System response time increased from instant to 2+ seconds over two weeks, frustrating users.',
          action: 'Identified database performance issues as data volume grew. Optimized database queries and added caching.',
          result: 'Response time back to under 200ms. Set up monitoring to catch performance issues before users notice.',
        },
      },
    },
    playbooks: {
      'api-design': {
        category: 'API Design',
        skills: [
          'RESTful architecture',
          'OpenAPI/Swagger documentation',
          'Versioning strategies',
          'Rate limiting & throttling',
          'Error handling patterns',
        ],
      },
      data: {
        category: 'Data',
        skills: [
          'Database design & optimization',
          'SQL query tuning',
          'Data modeling',
          'ETL pipelines',
          'Cache strategies (Redis)',
        ],
      },
      reliability: {
        category: 'Reliability',
        skills: [
          'Health checks & monitoring',
          'Logging & observability',
          'Circuit breaker patterns',
          'Retry logic & backoff',
          'Graceful degradation',
        ],
      },
      security: {
        category: 'Security Basics',
        skills: [
          'JWT authentication',
          'OAuth 2.0 flows',
          'Input validation',
          'SQL injection prevention',
          'Secrets management',
        ],
      },
      tooling: {
        category: 'Tooling',
        skills: [
          'CI/CD pipelines',
          'Docker containerization',
          'Git workflows',
          'Automated testing',
          'Shell scripting',
        ],
      },
    },
    experiences: {
      'exp-001': {
        role: 'Backend Developer',
        company: 'Current Role',
        period: '2023 - Present',
        responsibilities: [
          'Design and implement REST APIs serving 100K+ daily requests with Spring Boot and Go',
          'Build integration layers connecting internal systems with third-party services',
          'Automate operational workflows, reducing manual processing time by 80%',
          'Maintain production systems with focus on reliability, monitoring, and incident response',
          'Collaborate with frontend and DevOps teams on full-stack feature delivery',
        ],
        impact: 'Shipped 8+ production services handling critical business operations. Zero major incidents in last 6 months.',
      },
      'exp-002': {
        role: 'IT Systems Analyst',
        company: 'Previous Projects',
        period: '2021 - 2023',
        responsibilities: [
          'Analyzed system requirements and designed technical solutions',
          'Developed internal tools and automation scripts with Python',
          'Managed databases, optimized queries, and maintained data integrity',
          'Created documentation and provided technical support',
          'Participated in code reviews and knowledge sharing sessions',
        ],
        impact: 'Improved system efficiency across multiple departments. Recognized for problem-solving and reliability focus.',
      },
    },
  },
}
