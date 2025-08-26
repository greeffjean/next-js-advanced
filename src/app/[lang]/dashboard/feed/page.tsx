
const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/next.svg",
      role: "Product Manager"
    },
    content: "Just shipped a major update to our dashboard! The new analytics features are now live. Can't wait to see how our users respond to the improved data visualization.",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    shares: 3
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "/next.svg", 
      role: "Frontend Developer"
    },
    content: "Spent the day optimizing our React components and managed to reduce bundle size by 15%. Performance improvements are always satisfying! 🚀",
    timestamp: "4 hours ago",
    likes: 18,
    comments: 5,
    shares: 2
  },
  {
    id: 3,
    author: {
      name: "Emily Rodriguez",
      avatar: "/next.svg",
      role: "UX Designer"
    },
    content: "User research session today was incredibly insightful. The feedback on our new onboarding flow will help us create a much better first-time user experience.",
    timestamp: "6 hours ago",
    likes: 31,
    comments: 12,
    shares: 7
  },
  {
    id: 4,
    author: {
      name: "David Kim",
      avatar: "/next.svg",
      role: "Backend Engineer"
    },
    content: "Successfully migrated our database to the new schema. Zero downtime deployment completed! The new indexing strategy should improve query performance significantly.",
    timestamp: "1 day ago",
    likes: 42,
    comments: 15,
    shares: 9
  }
];

export default function FeedPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200 flex-shrink-0" />
          <div className="flex-1">
            <textarea 
              placeholder="What's on your mind?"
              className="w-full resize-none border-0 bg-transparent p-0 text-sm placeholder-neutral-500 focus:outline-none focus:ring-0"
              rows={3}
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100">
                  📷 Photo
                </button>
                <button className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100">
                  📊 Poll
                </button>
              </div>
              <button className="rounded-md bg-neutral-900 px-4 py-1.5 text-sm text-white hover:bg-neutral-800">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
            {/* Post Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-neutral-200 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm truncate">{post.author.name}</h3>
                  <span className="text-xs text-neutral-500">•</span>
                  <span className="text-xs text-neutral-500">{post.timestamp}</span>
                </div>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            {/* Post Content */}
            <p className="text-sm text-neutral-900 mb-4 leading-relaxed">
              {post.content}
            </p>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  {post.shares}
                </button>
              </div>
              <button className="text-sm text-neutral-600 hover:text-neutral-900">
                Share
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
          Load more posts
        </button>
      </div>
    </div>
  );
}
