# 🚀 Aashutosh Bairagi - Developer Portfolio

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=300&fit=crop&auto=format)

A modern, professional portfolio website showcasing the work and expertise of Full-Stack Developer Aashutosh Bairagi. Built with Next.js 15, TypeScript, Tailwind CSS, and powered by Cosmic CMS for seamless content management.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations and dark theme
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **Lightning Fast**: Next.js 15 with App Router for optimal performance
- 🔧 **Dynamic Content**: All content managed through Cosmic CMS
- 💼 **Project Showcase**: Detailed project pages with tech stack, live demos, and GitHub links
- 🎯 **Skills Matrix**: Organized skill display by category with proficiency levels
- 📝 **Blog Platform**: Share insights and tutorials with markdown support
- 💬 **Testimonials**: Client feedback section with ratings
- 📊 **Work Timeline**: Professional experience with company details
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- 🎭 **Type-Safe**: Full TypeScript implementation

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c1acc12bc0a45649cdb60e&clone_repository=68fdd7d692c9229c30fe709a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Hello! I need to create a comprehensive set of content models for a "god-tier" personal portfolio website for a developer named Aashutosh Bairagi. The site will be built with React, Vite, and Tailwind CSS. The design should be modern, extraordinary, and professional.
>
> Here is the developer's information:
>
> Name: Aashutosh Bairagi
>
> Email: aashutosh.bairagi05@gmail.com
>
> Core Skills: MERN Stack (MongoDB, Express, React, Node.js), Supabase, APIs, full-stack web development.
>
> Please generate the following interconnected content models:
>
> Personal Info (as a Singleton Object Type): This will store global site information.
>
> Name: (Text) - Pre-fill with "Aashutosh Bairagi"
>
> Email: (Text) - Pre-fill with "aashutosh.bairagi05@gmail.com"
>
> Headline: (Text) - A short, punchy headline for the hero section. Example: "Full-Stack Developer | MERN & Supabase Expert"
>
> Bio: (Markdown) - A short, compelling biography for the "About Me" section.
>
> Profile Picture: (Image)
>
> Resume URL: (File) - To upload the PDF.
>
> Social Links: (Repeater) - This repeater should contain two fields: Platform (Text, e.g., "GitHub", "LinkedIn", "Twitter") and URL (Text).
>
> Project (as a Multiple Object Type): This is for the main portfolio pieces.
>
> Title: (Text)
>
> Slug: (Slug) - This should be automatically generated from the title.
>
> Featured Image: (Image) - This will be the main image for project cards and headers.
>
> Short Description: (Textarea) - A 1-2 sentence summary for display on portfolio grids.
>
> Full Description: (Markdown) - The detailed project case study. This allows for rich text, code snippets, and images.
>
> Tech Stack: (Multiple Select) - A list of technologies used. Add options like "React", "Node.js", "Supabase", "Tailwind CSS", "MongoDB", "Express.js", "API".
>
> Live URL: (Text) - Link to the deployed project.
>
> Repository URL: (Text) - Link to the GitHub repo.
>
> Gallery Images: (Repeater) - A list of (Image) and (Caption) pairs to showcase the project.
>
> Is Featured: (Checkbox) - A boolean toggle to pin key projects to the homepage.
>
> Skill (as a Multiple Object Type): To dynamically display your skills.
>
> Skill Name: (Text) - e.g., "React", "Supabase", "Node.js"
>
> Skill Category: (Single Select) - Create options: "Frontend", "Backend", "Database", "Tools", "Other".
>
> Icon Identifier: (Text) - A simple text field to store an icon class name (like 'devicon-react-original') or an emoji, giving you design flexibility.
>
> Work Experience (as a Multiple Object Type): For your career timeline.
>
> Job Title: (Text)
>
> Company Name: (Text)
>
> Company URL: (Text)
>
> Start Date: (Date)
>
> End Date: (Date) - Make this optional (for current jobs).
>
> Is Current Job: (Checkbox)
>
> Description: (Markdown) - Key responsibilities and achievements, formatted as bullet points.
>
> Testimonial (as a Multiple Object Type): For social proof.
>
> Author Name: (Text)
>
> Author Title: (Text) - e.g., "Senior Developer at Google" or "Client"
>
> Author Image: (Image)
>
> Quote: (Textarea) - The testimonial content itself.
>
> Please set up these models with the specified fields and types. This structure will provide all the data needed to build an extraordinary and dynamic portfolio site. Thank you!"

### Code Generation Prompt

> "Hello! I need to create a comprehensive set of content models for a "god-tier" personal portfolio website for a developer named Aashutosh Bairagi. The site will be built with React, Vite, and Tailwind CSS. The design should be modern, extraordinary, and professional."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Runtime**: Bun

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Projects

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all featured projects
const { objects: projects } = await cosmic.objects
  .find({ 
    type: 'projects',
    'metadata.is_featured': true 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Personal Info

```typescript
// Get singleton personal info
const { object: personalInfo } = await cosmic.objects
  .findOne({ 
    type: 'personal-info'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Fetching Skills by Category

```typescript
// Get all skills grouped by category
const { objects: skills } = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'metadata'])
  .depth(1)

// Group by category
const skillsByCategory = skills.reduce((acc, skill) => {
  const category = skill.metadata.skill_category
  if (!acc[category]) acc[category] = []
  acc[category].push(skill)
  return acc
}, {})
```

## 🌐 Cosmic CMS Integration

This portfolio is powered by Cosmic CMS, providing:

- **Easy Content Management**: Update your portfolio content through the Cosmic dashboard
- **No Code Changes**: Add new projects, skills, or blog posts without touching code
- **Media Library**: Centralized image and file management
- **RESTful API**: Fast, reliable content delivery
- **Version Control**: Track content changes over time

### Content Types

1. **Personal Info** (Singleton)
   - Name, email, headline, bio
   - Profile picture and resume
   - Social media links

2. **Projects**
   - Project details with images
   - Tech stack and descriptions
   - Live URLs and GitHub links

3. **Skills**
   - Skill name and category
   - Proficiency level
   - Custom icons

4. **Work Experience**
   - Job title and company
   - Date range and descriptions
   - Company logos

5. **Testimonials**
   - Client feedback
   - Ratings and author details

6. **Blog Posts**
   - Articles with markdown
   - Categories and tags
   - Featured images

## 📦 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Build command: `bun run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

## 📝 Environment Variables

Required environment variables for production:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Content managed by [Cosmic](https://www.cosmicjs.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide](https://lucide.dev)

---

**Built with 💙 by Aashutosh Bairagi**

<!-- README_END -->