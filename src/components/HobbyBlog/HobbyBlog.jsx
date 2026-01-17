import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, Heart, Eye } from 'lucide-react';
import "./HobbyBlog.scss";

const guitarStrings = [
  { note: 'E', color: '#FF6B6B', destination: 'Nepal', icon: '🏔️', story: 'Trekking the Himalayas, where every step echoes ancient trails.' },
  { note: 'A', color: '#4ECDC4', destination: 'Bali', icon: '🌴', story: 'Island vibes and temple sunsets, finding peace in tropical chaos.' },
  { note: 'D', color: '#45B7D1', destination: 'Iceland', icon: '❄️', story: 'Northern lights dancing over volcanic landscapes.' },
  { note: 'G', color: '#FFA07A', destination: 'Morocco', icon: '🕌', story: 'Spice markets and desert winds, colors that paint memories.' },
  { note: 'B', color: '#98D8C8', destination: 'Japan', icon: '🎌', story: 'Cherry blossoms and bullet trains, where tradition meets future.' },
  { note: 'e', color: '#F7DC6F', destination: 'Patagonia', icon: '⛰️', story: 'Glaciers and endless horizons, nature in its rawest form.' },
];

const pianoKeys = [
  { note: 'C', type: 'white', topic: 'Morning Rituals', icon: '☕' },
  { note: 'C#', type: 'black', topic: 'Late Night Code', icon: '💻' },
  { note: 'D', type: 'white', topic: 'Guitar Sessions', icon: '🎸' },
  { note: 'D#', type: 'black', topic: 'Photography', icon: '📷' },
  { note: 'E', type: 'white', topic: 'Running Trails', icon: '🏃' },
  { note: 'F', type: 'white', topic: 'Cooking Experiments', icon: '🍳' },
  { note: 'F#', type: 'black', topic: 'Podcasts', icon: '🎙️' },
  { note: 'G', type: 'white', topic: 'Book Reviews', icon: '📚' },
  { note: 'G#', type: 'black', topic: 'Design Inspiration', icon: '🎨' },
  { note: 'A', type: 'white', topic: 'Weekend Hikes', icon: '🥾' },
  { note: 'A#', type: 'black', topic: 'Music Discovery', icon: '🎵' },
  { note: 'B', type: 'white', topic: 'Meditation', icon: '🧘' },
];

const blogPosts = [
  {
    id: 1,
    title: "Building My First Full-Stack Application",
    excerpt: "A journey through learning React, Node.js, and MongoDB. The challenges, the breakthroughs, and the lessons learned.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Development", "Learning", "React"],
    likes: 42,
    views: 128,
    category: "Tech"
  },
  {
    id: 2,
    title: "Trekking Through the Himalayas",
    excerpt: "An unforgettable adventure in the mountains of Nepal. From base camp to summit, every step was a story waiting to be told.",
    date: "February 28, 2024",
    readTime: "8 min read",
    tags: ["Travel", "Adventure", "Nepal"],
    likes: 67,
    views: 203,
    category: "Travel"
  },
  {
    id: 3,
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less can truly be more in web design. Breaking down complex interfaces into elegant, simple solutions.",
    date: "February 10, 2024",
    readTime: "6 min read",
    tags: ["Design", "UI/UX", "Philosophy"],
    likes: 89,
    views: 312,
    category: "Design"
  },
  {
    id: 4,
    title: "Learning Guitar: From Zero to Hero",
    excerpt: "My six-month journey learning guitar. The frustration, the joy, and the moment when it all clicked together.",
    date: "January 22, 2024",
    readTime: "7 min read",
    tags: ["Music", "Learning", "Personal"],
    likes: 54,
    views: 189,
    category: "Hobby"
  }
];

const HobbyBlog = () => {
  const [activeString, setActiveString] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogFilter, setBlogFilter] = useState('All');

  const filteredPosts = blogFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === blogFilter);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="hobby-section">
      <div className="section-title">
        <h2 data-text="LIFE_HARMONICS">LIFE_HARMONICS</h2>
        <div className="subtitle">SYNCHRONIZING_TRAVEL_CREATIVITY_AND_THOUGHTS</div>
      </div>

      <div className="harmonics-container">
        
        {/* GUITAR STRINGS - TRAVEL LOG */}
        <div className="guitar-instrument">
          <div className="instrument-header">
            <span className="label">STRINGS_OF_WANDERLUST</span>
          </div>
          
          <div className="fretboard">
            {guitarStrings.map((string, idx) => (
              <div 
                key={idx} 
                className="string-wrapper"
                onMouseEnter={() => setActiveString(idx)}
                onMouseLeave={() => setActiveString(null)}
              >
                <div className="note-name">{string.note}</div>
                <motion.div 
                  className="string-line"
                  animate={{ 
                    scaleY: activeString === idx ? [1, 1.5, 1] : 1,
                    boxShadow: activeString === idx ? `0 0 15px ${string.color}` : "none"
                  }}
                  transition={{ repeat: activeString === idx ? Infinity : 0, duration: 0.2 }}
                  style={{ backgroundColor: string.color, height: `${1 + idx * 0.5}px` }}
                />
                
                <AnimatePresence>
                  {activeString === idx && (
                    <motion.div 
                      className="floating-card"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 50 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <span className="card-icon">{string.icon}</span>
                      <div className="card-text">
                        <h4>{string.destination}</h4>
                        <p>{string.story}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* PIANO KEYS - HOBBY BLOG */}
        <div className="piano-instrument">
          <div className="instrument-header">
            <span className="label">KEYS_OF_CURIOSITY</span>
          </div>

          <div className="keyboard">
            {pianoKeys.map((key, idx) => (
              <motion.div
                key={idx}
                className={`key ${key.type}`}
                whileHover={{ y: 5 }}
                onMouseEnter={() => setActiveKey(idx)}
                onMouseLeave={() => setActiveKey(null)}
              >
                {key.type === 'white' && <span className="key-icon">{key.icon}</span>}
                <div className="key-note">{key.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="piano-display">
            <AnimatePresence mode="wait">
              {activeKey !== null ? (
                <motion.div 
                  key={activeKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="display-content"
                >
                  <span className="topic-icon">{pianoKeys[activeKey].icon}</span>
                  <h3>{pianoKeys[activeKey].topic}</h3>
                  <div className="meta">TYPE: HOBBY_LOG // FREQ: {pianoKeys[activeKey].note}</div>
                </motion.div>
              ) : (
                <div className="display-idle">SELECT_A_KEY_TO_DECRYPT_STORY</div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BLOGGING SECTION */}
      <div className="blogging-section">
        <div className="blog-header">
          <div className="blog-title-group">
            <BookOpen className="blog-icon" />
            <h3>THOUGHT_ARCHIVE</h3>
            <span className="blog-subtitle">STORIES_AND_INSIGHTS</span>
          </div>
          
          <div className="blog-filters">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`filter-btn ${blogFilter === category ? 'active' : ''}`}
                onClick={() => setBlogFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <div className="blog-stats">
                    <span className="stat-item">
                      <Heart size={12} />
                      {post.likes}
                    </span>
                    <span className="stat-item">
                      <Eye size={12} />
                      {post.views}
                    </span>
                  </div>
                </div>
                
                <h4 className="blog-card-title">{post.title}</h4>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                
                <div className="blog-card-footer">
                  <div className="blog-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="blog-tag">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-meta">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <motion.div 
                  className="read-more"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight size={14} />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="blog-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedPost(null)}>×</button>
              <div className="modal-header">
                <span className="modal-category">{selectedPost.category}</span>
                <h2>{selectedPost.title}</h2>
                <div className="modal-meta">
                  <Calendar size={14} />
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <div className="modal-content">
                <p>{selectedPost.excerpt}</p>
                <p className="modal-full-text">
                  This is where the full blog post content would appear. In a real implementation, 
                  this would be fetched from a CMS or database. The post would include detailed 
                  paragraphs, images, code snippets, and more engaging content that tells the complete story.
                </p>
                <div className="modal-tags">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Visualizer */}
      <div className="wave-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="wave-bar"
            animate={{ height: [20, 100, 20] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HobbyBlog;
