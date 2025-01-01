import { Component } from '@angular/core';
import { WindowService } from '../../window.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.scss'
})
export class BrandingComponent {
  skills = [
    {
      name: 'Brand Awareness',
      icon: '/icons/branding/brand-awareness.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Brand Awareness',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Creative Brand Strategies',
      icon: '/icons/branding/brand-strategies.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Brand Strategies',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Personal Branding',
      icon: '/icons/branding/personal-branding.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Personal Branding',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Company & Product Branding',
      icon: '/icons/branding/product-branding.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Company & Product Branding',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Target Group Definition',
      icon: '/icons/branding/target-group.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Target Group Definition',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Market Positioning',
      icon: '/icons/branding/market-positioning.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Market Positioning',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Unique Selling Point (USP)',
      icon: '/icons/branding/unique-selling-point.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Unique Selling Point (USP)',
      infoboxDescription: 'Lorem Ipsum dolor.',
      infoboxIcons: []
    },

    {
      name: 'Graphic Design',
      icon: '/icons/branding/graphic-design.svg',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Graphic Design',
      infoboxDescription: 'Visual storytelling through impactful design.',
      infoboxIcons: []
    },
    {
      name: 'Digital Strategy',
      icon: '/icons/branding/digital-strategy.svg',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Digital Strategy',
      infoboxDescription: 'Targeted approaches for measurable success.',
      infoboxIcons: []
    },
    {
      name: 'Content Creation',
      icon: '/icons/branding/content-creation.svg',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Content Creation',
      infoboxDescription: 'Compelling content that engages and inspires.',
      infoboxIcons: []
    },
    {
      name: 'Social Media Marketing',
      icon: '/icons/branding/social-media.svg',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Social Media Marketing',
      infoboxDescription: 'Building communities and driving engagement.',
      infoboxIcons: []
    },
    {
      name: 'SEO Optimization',
      icon: '/icons/branding/seo.svg',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'SEO Optimization',
      infoboxDescription: 'Boosting visibility with search engine best practices.',
      infoboxIcons: []
    }
  ];

  constructor(private windowService: WindowService) {}

  toggleInfobox(skill: any): void {
    if (this.windowService.isMobile() || this.windowService.isTablet()) {
      this.skills.forEach(s => {
        if (s !== skill) {
          s.isInfoboxVisible = false;
        }
      });
      skill.isInfoboxVisible = !skill.isInfoboxVisible;
    }
  }

  showHover(skill: any): void {
    if (this.windowService.isDesktop()) {
      skill.isHovered = true;
    }
  }

  hideHover(skill: any): void {
    if (this.windowService.isDesktop()) {
      skill.isHovered = false;
    }
  }
}
