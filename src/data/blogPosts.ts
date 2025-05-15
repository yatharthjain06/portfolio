interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "On Consistency",
    date: "May 15, 2025",
    description: "And why it stopped mattering for me",
    slug: "on-consistency",
    content: `People say that consistency is key. I used to believe that. I used to be very consistent.
    
For the past year I've been going to the gym 5-6 days a week. For the most part, I was very consistent. Sure there were times I missed a day here and there, but I was still going most days.
    
But after a year, I realized that it wasn't really showing results. I was still not seeing the progress I wanted.
    
And after some self-reflection, I realized that I was holding back on intensity. I hadn't really been pushing myself to the max. I was just going through the motions.
    
I haven't really been eating the best. I haven't really been training until failure. And while I have the general habit of going to the gym, I haven't really made use of the time.
    
And now I've realized that doing something doesn't matter if you're not doing it with intensity.
    
If you practice a skill, but don't practice it with intensity, you're not actually getting better.
    
But maybe it was helpful to be consistent. Now that I've realized this, I can start to change with minimal effort. All I have to do now is start pushing myself to the max.`
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
} 