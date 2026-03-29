# Mentor Cards Redesign — Real Profiles

## Summary

Replace the generic placeholder mentor cards with real mentor profiles sourced from LinkedIn. Each card will feature: photo, name, designation, company logos, and 3-4 bullet points relevant to the AI Residency syllabus (Generative AI, Automations/Workflows, Product Building).

## Mentor Data

### 1. Vaibhav Kejriwal

- **Role**: n8n Bangalore Ambassador | IIM A | IIT D
- **Bullets**:
  - Official n8n Ambassador — builds AI-powered automation workflows
  - IIM Ahmedabad & IIT Delhi alumnus
  - Runs a YouTube channel (AI with VK) teaching AI agents and automation
  - Leads the "Human AI Collab" community of 280+ AI practitioners
- **Photo**: LinkedIn profile image or initials placeholder
- **LinkedIn**: linkedin.com/in/vaibhav-kejriwal

### 2. Kevin Adams

- **Role**: Artist | Founder | Creator
- **Bullets**:
  - Founder of creative agency Millennial Labs (500+ brands served)
  - LinkedIn Design Top Voice — expert in AI-powered creative workflows
  - Uses Midjourney, AI + Photoshop for commercial visual campaigns
  - Redefining brand storytelling through AI-augmented design and performance marketing
- **Photo**: LinkedIn profile image or initials placeholder
- **LinkedIn**: linkedin.com/in/ikevinadams

### 3. Sabilashan Ganeshan

- **Role**: Ambassador @ Lovable | Country Lead @ Perplexity | BASIS AI Fellow
- **Bullets**:
  - Country Lead at Perplexity AI — at the frontier of AI search products
  - Ambassador at Lovable — ships AI-built products rapidly
  - Head of Product at STEM Link; AI strategy at Amor
  - BASIS AI Fellow and Harvard-nominated innovator in AI education
- **Photo**: LinkedIn profile image or initials placeholder
- **LinkedIn**: linkedin.com/in/sabilashanganeshan

### 4. Rahul Reddy

- **Role**: Founder | Storyteller
- **Bullets**:
  - Founder of LevelUp Learning, India's Largest Creative Education Ecosystmer
  - Built and scaled residential programs across filmmaking, AI, and creative tech
  - Runs India's Largest Filmmaking Community with 300,000 members
  - Producer of India's Biggest Shortfilm Chapter Zero LCU directed by Lokesh Kannagaraj
- **Photo**: Use his LinkedIn profile image URL or a placeholder with initials
- **LinkedIn**: linkedin.com/in/rahulreddy97

## Card Design

Each card will be a vertical card with:

1. **Photo** — rectangular avatar at top (use LinkedIn photo URLs; fallback to initials with gradient)
2. **Name** — bold, large
3. **Designation** — muted text below name
4. **Bullet points** — 3-4 short lines, left-aligned, with subtle check/dot icons
5. **LinkedIn icon link** — small LinkedIn icon linking to their profile

Grid: 4 columns on desktop (`md:grid-cols-4`), 2 on tablet, 1 on mobile. Remove the "Mentor profiles announced closer to program dates" disclaimer.

## Photo Approach

LinkedIn profile images cannot be hotlinked reliably. I will use **gradient avatar fallbacks with initials** (e.g., "RR" for Rahul Reddy) styled with distinct gradients per mentor. If you provide actual headshot images later, they can be swapped in.

## Technical Details


| File                         | Change                                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `src/components/Mentors.tsx` | Complete rewrite — real mentor data, new card layout with avatar/name/designation/bullets/tag/LinkedIn link, 4-column grid |
