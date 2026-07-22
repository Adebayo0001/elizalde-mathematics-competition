# Memory — Testimonials Update, Image De-duplication & Visual Enhancements

Last updated: 2026-07-22 20:29:00+01:00

## What was built this session

- **Math Formula Texture**: Added a faded background formula texture to solid backgrounds to improve depth (`MomentsMarqueeSection.tsx`).
- **Image De-Duplication**: Replaced duplicate and broken image references with newly uploaded fitted ones (`IMG_20260720...`) across `MomentsMarqueeSection`, `TimelineCalendarSection`, `newsData.ts`, `MissionVisionSection.tsx`, and `page.tsx` for visual variety.
- **Testimonials Section Update (`src/components/TestimonialsSection.tsx`)**:
  - Extracted text from provided images and replaced placeholder text with authentic student testimonials.
  - Built a new **Video Testimonial Block** positioned directly above the carousel to spotlight a teacher's review (`testimonials.mp4`). This establishes a strong visual hierarchy before introducing the student carousel.
- Created branch `feature/testimonials-update`, committed and pushed to GitHub.

## Decisions made this session

- Positioned the video testimonial prominently outside and above the carousel cards to prevent layout breaks and emphasize the teacher's quote intuitively.
- Adjusted the formula texture's `backgroundSize` and `opacity` with `mix-blend-overlay` to ensure it remains subtle without distracting from the content.

## Problems solved this session

- Eliminated placeholder content in testimonials to make the section authentic.
- Fixed duplicated and broken images throughout the codebase to ensure a varied, professional look.

## Current state

- Testimonials section is complete with real quotes and a functioning video block.
- All duplicated images have been replaced with the new, fitted versions.
- Code is pushed to GitHub on branch `feature/testimonials-update`.

## Next session starts with

- Reviewing any further design refinements or moving on to the next set of user-provided content.

## Open questions

- Are there any other sections that need real data replacements?

---

## Previous Session Memory

### What was built
- **Medalists Data Refinements (`src/components/MedalistsSection.tsx`)**:
  - Removed the "School" column entirely.
  - Converted names and categories to sentence case formatting.
  - Grouped and ordered medalists by exact award string ("Gold Medalist", "Silver Medalist", "Bronze Medalist", "London Medalist").
- **Medalists UI Enhancements**:
  - Truncated the default display to show only the first 4 medalists per category to improve UX and reduce mobile scrolling fatigue.
  - Added a "View All" / "Show Less" toggle button to dynamically expand and collapse the full list.
- **Competition Stages Visual Overhaul (`src/components/CompetitionStagesSection.tsx`)**:
  - Changed layout from a standard card grid to a **Sticky Split-Screen** design.
  - Left column holds a full-height, sticky photo of students collaborating.
  - Right column contains the scrolling stage cards that glide up smoothly next to the static image.
- **Olympiad Roadmap Visual Overhaul (`src/components/TimelineCalendarSection.tsx`)**:
  - Transformed the timeline into an aligned two-column layout.
  - Placed all text cards perfectly aligned on the left, and corresponding visual accents/images aligned on the right.
  - Implemented `items-stretch` and `h-full` to ensure each image perfectly matches the height of its corresponding text card for an ultra-clean block layout.
- **Global Finals Medalists Refactor (`src/components/MedalistsSection.tsx`)**:
  - Replaced the image-based StaggerContainer card layout with a clean, responsive HTML table.
  - Configured horizontal scrolling (`overflow-x-auto`).
  - Implemented new category tab filters: `Little Bee`, `Honey Bee`, and `Bloom Bee`.
- **Framer Motion Architecture Fix**: Addressed StaggerContainer animations failing on tab change via `key={selectedYear}`.
- **Tailwind v4 Dev Server Fix**: Fixed unstyled HTML rendering during `npm run dev` by creating `tailwind.config.js`.
- **Font Preload Optimization**: Moved Google Fonts (`Inter`, `Poppins`) out of PostCSS `@import`.
- **Wall of Mathematicians Redesign (`src/components/WorldOfMathematiciansSection.tsx`)**:
  - Added **Multi-Year Edition Tabs**: `2025/2026`, `2024/2025`, `2026/2027 (Upcoming)`, and `All Editions`.
  - Built **Upcoming Season Teaser Card (`2026/2027`)**.
  - Implemented **Compact Top 3 + Directory Roster Layout**.
- **White Header Navigation Bar**: Transformed top header in `src/app/page.tsx` into a solid white navbar.
- **Updated Olympiad Roadmap Dates**: Updated `src/components/TimelineCalendarSection.tsx` with 2027 competition dates.
- **Mission & Vision Image Update**: Replaced Facebook image URL in `src/components/MissionVisionSection.tsx` with local image `/images/about-us.jpeg`.
- **Global Winner Floating Badge**: Added high-contrast white glass card on the global winner photo in `src/app/page.tsx`.
- **News Data Schema (`src/data/newsData.ts`)** and **Homepage News Preview (`src/components/NewsSection.tsx`)**.
- **Dedicated Newsroom Portal (`src/app/news/page.tsx`)** and **Storytelling Modal Reader (`src/components/ArticleModal.tsx`)**.
- **Direct Article Permalinks (`src/app/news/[id]/page.tsx`)**.

### Decisions made
- Replaced "Global Medalist" terminology with "London Medalist" to match the branding of the event location.
- Used a 2-column layout (Cards left, Images right) for the Roadmap rather than a true zig-zag (alternating left-right) to satisfy the user's requirement for strict vertical alignment of all text and all pictures.
- Used Framer Motion `transition-transform` extensively for hover states to bring the new visual layouts to life.
- Chose horizontal scrolling for the mobile table over stacked card transforms.
- Default category filter is now `Little Bee`.
- Using placeholder names until the user provides the actual 2026 data.
- **Header Architecture**: Used sticky white header bar.
- **Dual Story Reader Mechanism**: Interactive modal or SSG permalinks.
- **Tailwind v4 PostCSS Config**: Linked `@config` to guarantee Dev Server scans output.

### Problems solved
- The medalists list was too overwhelming and long for mobile view. Solved by implementing an inline slice mechanism (`filteredMedalists.slice(0, 4)`) toggled via React state.
- Solved Framer Motion `viewport={{ once: true }}` state caching.
- Handled Next.js dev server port collisions.
- Resolved dev server unstyled HTML rendering in `npm run dev`.
- Resolved excessive vertical page scroll on the Wall of Mathematicians.
- Fixed low legibility on navigation header when overlaying the hero video background.
- Fixed Next.js "Internal Server Error" screen.

### Current state
- The Competition Stages and Roadmap sections are now visually distinct, premium, and utilize dynamic scroll/sticky behaviors.
- The Medalists Section now correctly displays a responsive data table. All filtering interactions trigger clean Framer Motion staggered animations.
- The entire frontend is fully responsive, high-contrast, type-safe, and pre-rendered with 9 static pages.
- The site flows much better and has high visual storytelling density.
- The site is successfully running locally.
