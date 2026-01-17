import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, Heart, Eye } from 'lucide-react';
import "./HobbyBlog.scss";

// Multiple content items for each guitar string
const guitarStringsData = [
  { 
    note: 'E', 
    color: '#FF6B6B', 
    content: [
      { destination: 'Nepal', icon: '🏔️', story: 'Trekking the Himalayas, where every step echoes ancient trails.' },
      { destination: 'Everest Base Camp', icon: '⛰️', story: 'Standing at 5,364m, where the sky meets the earth.' },
      { destination: 'Pokhara', icon: '🏞️', story: 'Lakeside serenity and mountain reflections.' }
    ]
  },
  { 
    note: 'A', 
    color: '#4ECDC4', 
    content: [
      { destination: 'Bali', icon: '🌴', story: 'Island vibes and temple sunsets, finding peace in tropical chaos.' },
      { destination: 'Ubud', icon: '🌿', story: 'Rice terraces and spiritual awakening in the heart of Bali.' },
      { destination: 'Seminyak', icon: '🏖️', story: 'Beach vibes and vibrant nightlife under the stars.' }
    ]
  },
  { 
    note: 'D', 
    color: '#45B7D1', 
    content: [
      { destination: 'Iceland', icon: '❄️', story: 'Northern lights dancing over volcanic landscapes.' },
      { destination: 'Reykjavik', icon: '🌋', story: 'Geysers and hot springs in the land of fire and ice.' },
      { destination: 'Golden Circle', icon: '💎', story: 'Waterfalls and geysers in nature\'s masterpiece.' }
    ]
  },
  { 
    note: 'G', 
    color: '#FFA07A', 
    content: [
      { destination: 'Morocco', icon: '🕌', story: 'Spice markets and desert winds, colors that paint memories.' },
      { destination: 'Marrakech', icon: '🎨', story: 'Souk labyrinths and vibrant medina life.' },
      { destination: 'Sahara', icon: '🐪', story: 'Desert nights under a blanket of stars.' }
    ]
  },
  { 
    note: 'B', 
    color: '#98D8C8', 
    content: [
      { destination: 'Japan', icon: '🎌', story: 'Cherry blossoms and bullet trains, where tradition meets future.' },
      { destination: 'Tokyo', icon: '🏙️', story: 'Neon lights and ancient temples in perfect harmony.' },
      { destination: 'Kyoto', icon: '⛩️', story: 'Temples, gardens, and the essence of old Japan.' }
    ]
  },
  { 
    note: 'e', 
    color: '#F7DC6F', 
    content: [
      { destination: 'Patagonia', icon: '⛰️', story: 'Glaciers and endless horizons, nature in its rawest form.' },
      { destination: 'Torres del Paine', icon: '🏔️', story: 'Towering peaks and pristine wilderness.' },
      { destination: 'Perito Moreno', icon: '🧊', story: 'Massive glaciers calving into turquoise waters.' }
    ]
  },
];

// Multiple content items for each piano key
const pianoKeysData = [
  { note: 'C', type: 'white', icon: '☕', content: [
    { topic: 'Morning Rituals', description: 'Starting the day with intention and focus.' },
    { topic: 'Coffee & Code', description: 'The perfect blend of caffeine and creativity.' },
    { topic: 'Sunrise Meditation', description: 'Finding peace before the day begins.' }
  ]},
  { note: 'C#', type: 'black', icon: '💻', content: [
    { topic: 'Late Night Code', description: 'When the world sleeps, ideas come alive.' },
    { topic: 'Debugging Sessions', description: 'Solving puzzles one line at a time.' },
    { topic: 'Side Projects', description: 'Building dreams after hours.' }
  ]},
  { note: 'D', type: 'white', icon: '🎸', content: [
    { topic: 'Guitar Sessions', description: 'Strings and melodies, a language of emotion.' },
    { topic: 'Learning New Songs', description: 'Each chord tells a story.' },
    { topic: 'Jam Sessions', description: 'Creating music with friends.' }
  ]},
  { note: 'D#', type: 'black', icon: '📷', content: [
    { topic: 'Photography', description: 'Capturing moments, freezing time.' },
    { topic: 'Street Photography', description: 'Life in candid frames.' },
    { topic: 'Nature Shots', description: 'Beauty in every corner.' }
  ]},
  { note: 'E', type: 'white', icon: '🏃', content: [
    { topic: 'Running Trails', description: 'Miles of freedom, one step at a time.' },
    { topic: 'Marathon Training', description: 'Pushing limits, breaking barriers.' },
    { topic: 'Trail Running', description: 'Nature as the ultimate gym.' }
  ]},
  { note: 'F', type: 'white', icon: '🍳', content: [
    { topic: 'Cooking Experiments', description: 'Turning ingredients into art.' },
    { topic: 'New Recipes', description: 'Exploring flavors from around the world.' },
    { topic: 'Baking Adventures', description: 'Sweet creations and happy mistakes.' }
  ]},
  { note: 'F#', type: 'black', icon: '🎙️', content: [
    { topic: 'Podcasts', description: 'Learning while on the move.' },
    { topic: 'Tech Talks', description: 'Staying updated with industry trends.' },
    { topic: 'Storytelling', description: 'Narratives that inspire and educate.' }
  ]},
  { note: 'G', type: 'white', icon: '📚', content: [
    { topic: 'Book Reviews', description: 'Journeys through pages and minds.' },
    { topic: 'Reading Challenges', description: 'Expanding horizons one book at a time.' },
    { topic: 'Library Visits', description: 'Discovering hidden literary gems.' }
  ]},
  { note: 'G#', type: 'black', icon: '🎨', content: [
    { topic: 'Design Inspiration', description: 'Beauty in form and function.' },
    { topic: 'UI/UX Studies', description: 'Crafting experiences that matter.' },
    { topic: 'Creative Projects', description: 'Where imagination meets reality.' }
  ]},
  { note: 'A', type: 'white', icon: '🥾', content: [
    { topic: 'Weekend Hikes', description: 'Escaping to nature\'s embrace.' },
    { topic: 'Mountain Climbing', description: 'Reaching new heights, literally.' },
    { topic: 'Camping Trips', description: 'Stars, stories, and simplicity.' }
  ]},
  { note: 'A#', type: 'black', icon: '🎵', content: [
    { topic: 'Music Discovery', description: 'Finding new sounds and rhythms.' },
    { topic: 'Concert Experiences', description: 'Live music, unforgettable moments.' },
    { topic: 'Playlist Curation', description: 'Crafting the perfect soundtrack.' }
  ]},
  { note: 'B', type: 'white', icon: '🧘', content: [
    { topic: 'Meditation', description: 'Finding stillness in chaos.' },
    { topic: 'Mindfulness Practice', description: 'Being present in every moment.' },
    { topic: 'Yoga Sessions', description: 'Balance of body and mind.' }
  ]},
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
  const [stringContentIndex, setStringContentIndex] = useState({});
  const [activeKey, setActiveKey] = useState(null);
  const [keyContentIndex, setKeyContentIndex] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogFilter, setBlogFilter] = useState('All');
  const pianoIntervalRef = useRef(null);

  // Auto-click piano keys in a pattern
  useEffect(() => {
    const pattern = [0, 2, 4, 5, 7, 9, 11, 9, 7, 5, 4, 2, 0]; // C major scale pattern
    let patternIndex = 0;

    pianoIntervalRef.current = setInterval(() => {
      const keyIndex = pattern[patternIndex];
      setActiveKey(keyIndex);
      
      // Cycle through content for this key
      setKeyContentIndex(prev => ({
        ...prev,
        [keyIndex]: ((prev[keyIndex] || 0) + 1) % pianoKeysData[keyIndex].content.length
      }));

      patternIndex = (patternIndex + 1) % pattern.length;
    }, 2000); // Change every 2 seconds

    return () => {
      if (pianoIntervalRef.current) {
        clearInterval(pianoIntervalRef.current);
      }
    };
  }, []);

  // Handle guitar string click - cycle through content
  const handleStringClick = (stringIndex) => {
    setActiveString(stringIndex);
    setStringContentIndex(prev => ({
      ...prev,
      [stringIndex]: ((prev[stringIndex] || 0) + 1) % guitarStringsData[stringIndex].content.length
    }));
  };

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
            <span className="hint">Click strings to cycle through destinations</span>
          </div>
          
          <div className="fretboard">
            {guitarStringsData.map((string, idx) => {
              const contentIndex = stringContentIndex[idx] || 0;
              const currentContent = string.content[contentIndex];
              
              return (
                <div 
                  key={idx} 
                  className="string-wrapper"
                  onClick={() => handleStringClick(idx)}
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
                  
                  <AnimatePresence mode="wait">
                    {activeString === idx && (
                      <motion.div 
                        key={contentIndex}
                        className="floating-card"
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 50, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="card-icon">{currentContent.icon}</span>
                        <div className="card-text">
                          <h4>{currentContent.destination}</h4>
                          <p>{currentContent.story}</p>
                          <div className="content-indicator">
                            {contentIndex + 1} / {string.content.length}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* PIANO KEYS - HOBBY BLOG */}
        <div className="piano-instrument">
          <div className="instrument-header">
            <span className="label">KEYS_OF_CURIOSITY</span>
            <span className="hint">Auto-playing in C major scale</span>
          </div>

          <div className="keyboard">
            {pianoKeysData.map((key, idx) => (
              <motion.div
                key={idx}
                className={`key ${key.type} ${activeKey === idx ? 'active' : ''}`}
                whileHover={{ y: 5 }}
                animate={{ 
                  y: activeKey === idx ? 5 : 0,
                  scale: activeKey === idx ? 0.95 : 1
                }}
                transition={{ duration: 0.1 }}
              >
                {key.type === 'white' && <span className="key-icon">{key.icon}</span>}
                <div className="key-note">{key.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="piano-display">
            <AnimatePresence mode="wait">
              {activeKey !== null ? (() => {
                const contentIndex = keyContentIndex[activeKey] || 0;
                const currentContent = pianoKeysData[activeKey].content[contentIndex];
                
                return (
                  <motion.div 
                    key={`${activeKey}-${contentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="display-content"
                  >
                    <span className="topic-icon">{pianoKeysData[activeKey].icon}</span>
                    <h3>{currentContent.topic}</h3>
                    <p className="topic-description">{currentContent.description}</p>
                    <div className="meta">
                      TYPE: HOBBY_LOG // FREQ: {pianoKeysData[activeKey].note} // 
                      CONTENT: {contentIndex + 1}/{pianoKeysData[activeKey].content.length}
                    </div>
                  </motion.div>
                );
              })() : (
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
