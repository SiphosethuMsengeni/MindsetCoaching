import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="blog">
      <!-- Hero Section -->
      <section class="blog-hero">
        <div class="container">
          <h1 class="fade-in-up">Mindset & Growth Blog</h1>
          <p class="lead fade-in-up">Insights, strategies, and inspiration for personal transformation</p>
        </div>
      </section>

      <!-- Featured Post -->
      <section class="featured-section">
        <div class="container">
          <div class="featured-post">
            <div class="featured-image">
              <span class="featured-emoji">🌟</span>
            </div>
            <div class="featured-content">
              <span class="category-badge">Featured</span>
              <h2>{{ featuredPost.title }}</h2>
              <p>{{ featuredPost.excerpt }}</p>
              <div class="post-meta">
                <span>👤 {{ featuredPost.author }}</span>
                <span>📅 {{ featuredPost.date }}</span>
                <span>⏱️ {{ featuredPost.readTime }}</span>
              </div>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="categories-section">
        <div class="container">
          <h2 class="section-title">Browse by Category</h2>
          <div class="categories-grid">
            <div class="category-card" *ngFor="let category of categories">
              <div class="category-icon">{{ category.icon }}</div>
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }} articles</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Posts Grid -->
      <section class="posts-section">
        <div class="container">
          <h2 class="section-title">Latest Articles</h2>
          <div class="posts-grid">
            <article class="post-card" *ngFor="let post of blogPosts">
              <div class="post-image">
                <span class="post-emoji">{{ post.image }}</span>
                <span class="category-tag">{{ post.category }}</span>
              </div>
              <div class="post-content">
                <h3>{{ post.title }}</h3>
                <p>{{ post.excerpt }}</p>
                <div class="post-meta">
                  <span>📅 {{ post.date }}</span>
                  <span>⏱️ {{ post.readTime }}</span>
                </div>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get weekly mindset tips, success strategies, and exclusive content delivered to your inbox.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email address" required>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
            <p class="newsletter-note">📧 Join 5,000+ subscribers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .blog {
      margin-top: 70px;
    }
    
    .blog-hero {
      padding: 6rem 0 4rem;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
      text-align: center;
    }
    
    .blog-hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .lead {
      font-size: 1.25rem;
      color: var(--text-light);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .featured-section {
      padding: 6rem 0;
      background: white;
    }
    
    .featured-post {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }
    
    .featured-image {
      aspect-ratio: 1;
      background: white;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .featured-emoji {
      font-size: 8rem;
    }
    
    .category-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: var(--primary-color);
      color: white;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .featured-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .featured-content p {
      color: var(--text-color);
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    
    .post-meta {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      color: var(--text-light);
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }
    
    .categories-section {
      padding: 6rem 0;
      background: var(--light-color);
    }
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .category-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15);
    }
    
    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .category-card h3 {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    
    .category-card p {
      color: var(--text-light);
      font-size: 0.9rem;
    }
    
    .posts-section {
      padding: 6rem 0;
      background: white;
    }
    
    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .post-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .post-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 50px rgba(99, 102, 241, 0.15);
    }
    
    .post-image {
      position: relative;
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .post-emoji {
      font-size: 4rem;
    }
    
    .category-tag {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--primary-color);
    }
    
    .post-content {
      padding: 2rem;
    }
    
    .post-content h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    
    .post-content p {
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .post-content .post-meta {
      margin-bottom: 1rem;
      gap: 1rem;
      font-size: 0.85rem;
    }
    
    .read-more {
      color: var(--primary-color);
      font-weight: 600;
      transition: transform 0.3s ease;
      display: inline-block;
    }
    
    .read-more:hover {
      transform: translateX(5px);
    }
    
    .newsletter-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
    }
    
    .newsletter-content {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .newsletter-content h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .newsletter-content > p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .newsletter-form {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .newsletter-form input {
      flex: 1;
      padding: 0.875rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }
    
    .newsletter-form input:focus {
      outline: 2px solid white;
    }
    
    .newsletter-form .btn {
      background: white;
      color: var(--primary-color);
      white-space: nowrap;
    }
    
    .newsletter-note {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    @media (max-width: 968px) {
      .blog-hero h1 {
        font-size: 2.5rem;
      }
      
      .featured-post {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .featured-content h2 {
        font-size: 2rem;
      }
      
      .posts-grid {
        grid-template-columns: 1fr;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
    }
  `]
})
export class BlogComponent {
  featuredPost = {
    title: '5 Powerful Mindset Shifts That Will Transform Your Life',
    excerpt: 'Discover the key mindset changes that successful people make to achieve extraordinary results. Learn how to reprogram your thinking patterns and unlock your true potential.',
    author: 'Sarah Johnson',
    date: 'March 10, 2026',
    readTime: '8 min read'
  };

  categories = [
    { icon: '🧠', name: 'Mindset', count: 24 },
    { icon: '🎯', name: 'Goal Setting', count: 18 },
    { icon: '💪', name: 'Motivation', count: 21 },
    { icon: '📈', name: 'Success', count: 15 },
    { icon: '🌱', name: 'Personal Growth', count: 27 },
    { icon: '❤️', name: 'Self-Care', count: 12 }
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How to Overcome Fear and Take Bold Action',
      excerpt: 'Fear is often the biggest obstacle to success. Learn proven strategies to face your fears and move forward with confidence.',
      author: 'Sarah Johnson',
      date: 'March 8, 2026',
      category: 'Mindset',
      readTime: '6 min read',
      image: '💪'
    },
    {
      id: 2,
      title: 'The Power of Morning Routines for Success',
      excerpt: 'Your morning sets the tone for your entire day. Discover how to create a morning routine that sets you up for success.',
      author: 'Sarah Johnson',
      date: 'March 5, 2026',
      category: 'Success',
      readTime: '5 min read',
      image: '🌅'
    },
    {
      id: 3,
      title: 'Building Unshakable Self-Confidence',
      excerpt: 'Self-confidence is a skill you can develop. Learn the daily practices that will help you build lasting confidence.',
      author: 'Sarah Johnson',
      date: 'March 1, 2026',
      category: 'Personal Growth',
      readTime: '7 min read',
      image: '✨'
    },
    {
      id: 4,
      title: 'The Art of Setting and Achieving Big Goals',
      excerpt: 'Goal setting is more than writing wishes. Discover the science-backed method for setting goals you actually achieve.',
      author: 'Sarah Johnson',
      date: 'February 28, 2026',
      category: 'Goal Setting',
      readTime: '9 min read',
      image: '🎯'
    },
    {
      id: 5,
      title: 'Turning Failure into Fuel for Success',
      excerpt: 'Failure is not the opposite of success—it\'s part of success. Learn how to reframe failure and use it to propel you forward.',
      author: 'Sarah Johnson',
      date: 'February 25, 2026',
      category: 'Mindset',
      readTime: '6 min read',
      image: '🚀'
    },
    {
      id: 6,
      title: 'Mastering the Art of Positive Self-Talk',
      excerpt: 'The way you talk to yourself matters. Transform your inner dialogue and watch your life change.',
      author: 'Sarah Johnson',
      date: 'February 20, 2026',
      category: 'Self-Care',
      readTime: '5 min read',
      image: '💭'
    }
  ];
}
