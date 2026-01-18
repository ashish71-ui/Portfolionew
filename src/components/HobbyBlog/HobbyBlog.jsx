import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, Music, Hash, Clock } from 'lucide-react';
import "./HobbyBlog.scss";

const pianoKeysData = [
  { note: 'C', sargam: 'Sa', type: 'white', icon: '☕', content: { topic: 'Morning Rituals', description: 'Starting the day with intention and mindful coffee.' }},
  { note: 'C#', sargam: '', type: 'black', icon: '', content: null },
  { note: 'D', sargam: 'Re', type: 'white', icon: '💻', content: { topic: 'Coding Sessions', description: 'Late night debugging and creative problem solving.' }},
  { note: 'D#', sargam: '', type: 'black', icon: '', content: null },
  { note: 'E', sargam: 'Ga', type: 'white', icon: '🎸', content: { topic: 'Guitar Practice', description: 'Strings and melodies, expressing emotions through music.' }},
  { note: 'F', sargam: 'Ma', type: 'white', icon: '📷', content: { topic: 'Photography', description: 'Capturing fleeting moments and urban landscapes.' }},
  { note: 'F#', sargam: '', type: 'black', icon: '', content: null },
  { note: 'G', sargam: 'Pa', type: 'white', icon: '🏃', content: { topic: 'Running', description: 'Miles of freedom on mountain trails and city streets.' }},
  { note: 'G#', sargam: '', type: 'black', icon: '', content: null },
  { note: 'A', sargam: 'Dha', type: 'white', icon: '🍳', content: { topic: 'Cooking', description: 'Experimenting with flavors from around the world.' }},
  { note: 'A#', sargam: '', type: 'black', icon: '', content: null },
  { note: 'B', sargam: 'Ni', type: 'white', icon: '📚', content: { topic: 'Reading', description: 'Exploring new worlds through literature and philosophy.' }},
  { note: 'C\'', sargam: 'Sa\'', type: 'white', icon: '🧘', content: { topic: 'Meditation', description: 'Finding stillness and clarity in the chaos.' }},
];

const autoPlayPattern = [0, 2, 4, 5, 7, 9, 11, 12]; // Sa Re Ga Ma Pa Dha Ni Sa

const blogPosts = [
  { id: 1, title: "Building My First Full-Stack Application", excerpt: "A deep dive into React, Node, and MongoDB architecture.", date: "Mar 15, 2024", readTime: "5 min", tags: ["React", "Node"], category: "Tech", stringIndex: 0, color: '#FF6B6B' },
  { id: 2, title: "Trekking Through the Himalayas", excerpt: "Chasing horizons in the heart of the world's highest peaks.", date: "Feb 28, 2024", readTime: "8 min", tags: ["Nepal", "Travel"], category: "Travel", stringIndex: 1, color: '#4ECDC4' },
  { id: 3, title: "The Art of Minimalist Design", excerpt: "Why removing elements is often harder than adding them.", date: "Feb 10, 2024", readTime: "6 min", tags: ["UI/UX", "Design"], category: "Design", stringIndex: 2, color: '#45B7D1' },
  { id: 4, title: "Learning Guitar: Zero to Hero", excerpt: "The rhythmic struggle of mastering the six-string beast.", date: "Jan 22, 2024", readTime: "7 min", tags: ["Music", "Hobby"], category: "Music", stringIndex: 3, color: '#FFA07A' },
  { id: 5, title: "Tokyo After Dark", excerpt: "Exploring neon duality through long-exposure photography.", date: "Jan 10, 2024", readTime: "4 min", tags: ["Japan", "Street"], category: "Travel", stringIndex: 4, color: '#98D8C8' },
  { id: 6, title: "The Joy of Slow Cooking", excerpt: "Redefining patience through the lens of a cast-iron pot.", date: "Dec 28, 2023", readTime: "6 min", tags: ["Food", "Life"], category: "Lifestyle", stringIndex: 5, color: '#F7DC6F' }
];

const HobbyBlog = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hoveredString, setHoveredString] = useState(null);
  const [blogFilter, setBlogFilter] = useState('All');
  const patternIndexRef = useRef(0);

  // Piano Auto-play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const keyIndex = autoPlayPattern[patternIndexRef.current];
      setActiveKey(keyIndex);
      patternIndexRef.current = (patternIndexRef.current + 1) % autoPlayPattern.length;
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Filter Logic: Hovered string takes priority over category filter
  const filteredPosts = hoveredString !== null 
    ? blogPosts.filter(p => p.stringIndex === hoveredString)
    : (blogFilter === 'All' ? blogPosts : blogPosts.filter(p => p.category === blogFilter));

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  return (
    <div className="hobby-container">
      {/* HEADER */}
      <header className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="glitch" 
          data-text="LIFE_HARMONICS"
        >
          LIFE_HARMONICS
        </motion.h2>
        <p className="subtitle">SYNCHRONIZING_CREATIVITY_AND_RHYTHMS</p>
      </header>

      {/* PIANO SECTION */}
      <section className="piano-wrapper">
        <div className="instrument-meta">
          <Music size={14} />
          <span>AUTOPLAY_ACTIVE: {pianoKeysData[activeKey]?.sargam || '--'}</span>
        </div>
        
        <div className="piano-flex-container">
          <div className="keyboard-frame">
            {pianoKeysData.map((key, idx) => (
              <motion.div
                key={idx}
                className={`piano-key ${key.type} ${activeKey === idx ? 'active' : ''}`}
                animate={{ 
                  y: activeKey === idx ? 6 : 0,
                  backgroundColor: activeKey === idx ? (key.type === 'white' ? '#eee' : '#333') : (key.type === 'white' ? '#fff' : '#000')
                }}
              >
                {key.type === 'white' && <span className="sargam-label">{key.sargam}</span>}
              </motion.div>
            ))}
          </div>

          <div className="piano-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="display-card"
              >
                <span className="icon">{pianoKeysData[activeKey]?.icon}</span>
                <div className="text">
                  <h3>{pianoKeysData[activeKey]?.content?.topic || "RESONANCE"}</h3>
                  <p>{pianoKeysData[activeKey]?.content?.description || "Select a frequency to begin."}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* BLOG / FRETBOARD SECTION */}
      <section className="blog-wrapper">
        <div className="blog-controls">
          <div className="title-group">
            <BookOpen size={20} />
            <h3>THOUGHT_STRINGS</h3>
          </div>
          <div className="filter-chips">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={blogFilter === cat ? 'active' : ''} 
                onClick={() => setBlogFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FRETBOARD INTERACTION */}
        <div className="fretboard-interaction">
          {[...Array(6)].map((_, sIdx) => {
            const post = blogPosts.find(p => p.stringIndex === sIdx);
            return (
              <div 
                key={sIdx} 
                className={`string-lane ${hoveredString === sIdx ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredString(sIdx)}
                onMouseLeave={() => setHoveredString(null)}
              >
                <div className="string-meta">
                  {hoveredString === sIdx && post && (
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: '100%' }} 
                      className="typewriter-text"
                    >
                      {`>> FETCHING_POST: ${post.title}`}
                    </motion.div>
                  )}
                </div>
                <div className="physical-string" style={{ height: `${1 + sIdx * 0.4}px` }} />
                {post && (
                  <motion.div 
                    className="fret-node" 
                    style={{ backgroundColor: post.color, left: `${20 + (sIdx * 10)}%` }}
                    animate={{ scale: hoveredString === sIdx ? 1.8 : 1 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* DYNAMIC POST GRID */}
        <motion.div layout className="post-grid">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="post-card"
                onClick={() => setSelectedPost(post)}
              >
                <div className="card-top">
                  <span className="string-indicator"><Hash size={12}/> String {post.stringIndex + 1}</span>
                  <div className="category-pill" style={{ borderColor: post.color, color: post.color }}>{post.category}</div>
                </div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <div className="card-bottom">
                  <div className="meta">
                    <span><Calendar size={12}/> {post.date}</span>
                    <span><Clock size={12}/> {post.readTime}</span>
                  </div>
                  <ArrowRight size={16} className="arrow" />
                </div>
                <div className="card-glow" style={{ background: `linear-gradient(45deg, ${post.color}22, transparent)` }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* MODAL VIEW */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPost(null)}>
            <motion.div className="modal-content" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} onClick={e => e.stopPropagation()}>
              <button className="close-x" onClick={() => setSelectedPost(null)}>×</button>
              <div className="modal-header" style={{ borderLeft: `4px solid ${selectedPost.color}` }}>
                <span className="cat">{selectedPost.category}</span>
                <h2>{selectedPost.title}</h2>
              </div>
              <div className="modal-body">
                <p className="excerpt">{selectedPost.excerpt}</p>
                <div className="tags">
                  {selectedPost.tags.map(t => <span key={t} className="tag">#{t}</span>)}
                </div>
                <div className="filler-text">
                  This blog resonance is anchored on <strong>String {selectedPost.stringIndex + 1}</strong>. 
                  In the full version, you would find technical documentation, high-resolution photography, 
                  and the creative process behind this specific frequency of thought.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HobbyBlog;