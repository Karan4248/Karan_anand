import {
  ExerciseTrackerIcon,
  ResumeBuilderIcon,
  FoodOrderingIcon,
  PortfolioIcon,
} from '../components/icons/ProjectIcons.jsx'

export const projects = [
  {
    id: 'exercise-tracker',
    icon: ExerciseTrackerIcon,
    title: 'Exercise Tracker',
    description: 'A fitness tracking app with user profiles, an activity feed, and route logging, persisted to JSON.',
    tags: ['Java', 'Maven', 'JUnit', 'JSON'],
    sourceUrl: 'https://github.com/Karan4248/Exercise-Tracker',
  },
  {
    id: 'ai-resume-builder',
    icon: ResumeBuilderIcon,
    title: 'AI Resume Builder',
    description: 'A resume editor with live preview and PDF export, plus Claude-powered bullet polish, summary generation, and job-description optimization.',
    tags: ['TypeScript', 'Supabase', 'Stripe', 'Claude API'],
    sourceUrl: 'https://github.com/Karan4248/resume-builder',
    liveUrl: 'https://resume-builder-drab-sigma.vercel.app',
  },
  {
    id: 'food-ordering',
    icon: FoodOrderingIcon,
    title: 'Food Ordering System',
    description: 'A group project food ordering app built with Spring Boot — contributed the domain model and cart.',
    tags: ['Java', 'Spring Boot', 'JavaScript'],
    sourceUrl: 'https://github.com/minhkhoily29/Food-Ordering-System',
  },
  {
    id: 'personal-portfolio',
    icon: PortfolioIcon,
    title: 'Personal Portfolio',
    description: 'This site, built from scratch with React.',
    tags: ['React', 'JavaScript', 'CSS'],
    sourceUrl: 'https://github.com/Karan4248/Portfolio',
  },
]
