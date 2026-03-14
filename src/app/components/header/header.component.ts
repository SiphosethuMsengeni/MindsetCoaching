import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <nav class="navbar">
          <div class="logo">
            <a routerLink="/">
              <span class="logo-text">E.M.E.L.D.T</span>
            </a>
          </div>
          
          <button class="mobile-toggle" (click)="toggleMobileMenu()" [class.active]="mobileMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About</a></li>
            <li><a routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()">Services</a></li>
            <li><a routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()">Packages</a></li>
            <li><a routerLink="/contact" class="btn-contact" (click)="closeMobileMenu()">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: #1a3a52;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.15em;
    }
    
    .logo-text {
      color: #2ecc71;
      font-weight: 700;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-links a {
      font-weight: 500;
      color: white;
      transition: color 0.3s ease;
      position: relative;
    }
    
    .nav-links a:hover {
      color: var(--gold-color);
    }
    
    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gold-color);
    }
    
    .btn-contact {
      background: var(--gold-color);
      color: var(--dark-color) !important;
      padding: 0.5rem 1.5rem;
      border-radius: 8px;
      transition: transform 0.3s ease;
      font-weight: 600;
    }
    
    .btn-contact:hover {
      transform: translateY(-2px);
      background: #ffd152;
    }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      padding: 5px;
    }
    
    .mobile-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background: white;
      transition: all 0.3s ease;
    }
    
    .mobile-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    
    .mobile-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    
    @media (max-width: 768px) {
      .mobile-toggle {
        display: flex;
      }
      
      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #1a3a52;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transform: translateY(-120%);
        transition: transform 0.3s ease;
      }
      
      .nav-links.mobile-open {
        transform: translateY(0);
      }
      
      .nav-links a.active::after {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
