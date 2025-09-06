import React from 'react'


export default function PostCard({ post }) {
return (
<article className="card">
<h3>{post.title}</h3>
<p className="date">{post.date}</p>
<p>{post.excerpt}</p>
</article>
)
}