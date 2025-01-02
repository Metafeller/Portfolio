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
      icon: '/icons/branding/brand-awareness-flowchart.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Brand Awareness',
      infoboxDescription: 'Establish a strong presence to resonate with your target audience.',
      infoboxIcons: []
    },

    {
      name: 'Creative Brand Strategies',
      icon: '/icons/branding/brand-strategies.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Brand Strategies',
      infoboxDescription: 'Craft smart, emotional strategies to create an authentic brand.',
      infoboxIcons: []
    },

    {
      name: 'Personal Branding',
      icon: '/icons/branding/personal-branding.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Personal Branding',
      infoboxDescription: 'Build an authentic and inspiring personal brand.',
      infoboxIcons: []
    },

    {
      name: 'Target Group Definition',
      icon: '/icons/branding/target-audience.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Target Group Definition',
      infoboxDescription: 'Identify and understand your ideal audience to tailor your communication.',
      infoboxIcons: []
    },

    {
      name: 'Market Positioning',
      icon: '/icons/branding/market-positioning.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Market Positioning',
      infoboxDescription: 'Stand out by positioning your brand uniquely in the market.',
      infoboxIcons: []
    },

    {
      name: 'Unique Selling Point (USP)',
      icon: '/icons/branding/unique-selling-point.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Unique Selling Point (USP)',
      infoboxDescription: 'Define what makes your brand special and differentiate it from competitors.',
      infoboxIcons: []
    },

    {
      name: 'Graphic Design',
      icon: '/icons/branding/graphic-design.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Graphic Design',
      infoboxDescription: 'Communicate visually with high-quality designs and creative assets.',
      infoboxIcons: []
    },

    {
      name: 'Web Design & UX / UI',
      icon: '/icons/branding/figma.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Web Design & UX / UI',
      infoboxDescription: 'Create seamless and visually appealing digital experiences.',
      infoboxIcons: []
    },

    {
      name: 'PR / Public Relations',
      icon: '/icons/branding/pr-public-relations.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'PR / Public Relations',
      infoboxDescription: 'Build trust and manage your brands reputation effectively',
      infoboxIcons: []
    },

    {
      name: 'Dynamic Visability Strategies',
      icon: '/icons/branding/visability-strategies.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Dynamic Visability Strategies',
      infoboxDescription: 'Be visible and relevant across all key channels with adaptive strategies.',
      infoboxIcons: []
    },

    {
      name: 'AI-Influencer Creating [New]',
      icon: '/icons/branding/artificial-intelligence-ai.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'AI Influencer Identity',
      infoboxDescription: 'Use AI to create digital influencers and amplify your brands reach.',
      infoboxIcons: []
    },

    {
      name: 'Growth Mindset',
      icon: '/icons/branding/growth-mindset-rare-green.png',
      isHovered: false,
      isInfoboxVisible: false,
      infoboxTitle: 'Growth Mindset',
      infoboxDescription: 'I am interested in innovative and rare niches.',
      infoboxIcons: []
    },

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
