import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, Music, Hash, Clock } from 'lucide-react';
import "./HobbyBlog.scss";

const pianoKeysData = [
  {
    note: 'C',
    sargam: '',
    type: 'white',
    icon: '☕',
    content: {
      topic: 'Slow Mornings',
      description: 'Mornings begin quietly—with coffee, soft light, and unhurried thoughts. It’s the time I reflect, plan, and mentally sketch the day ahead before the noise of responsibilities takes over.'
    }
  },
  { note: 'C#', sargam: '', type: 'black', icon: '', content: null },

  {
    note: 'D',
    sargam: '',
    type: 'white',
    icon: '💻',
    content: {
      topic: 'Coding & Curiosity',
      description: 'Coding is where logic meets creativity. I enjoy breaking complex problems into simple ideas, experimenting with solutions, and learning through trial, error, and persistence—especially during late-night coding sessions.'
    }
  },
  { note: 'D#', sargam: '', type: 'black', icon: '', content: null },

  {
    note: 'E',
    sargam: '',
    type: 'white',
    icon: '🎸',
    content: {
      topic: 'Guitar & Jamming',
      description: 'Guitar sessions are my escape. Whether playing alone or jamming with friends, it’s about feeling the music, improvising freely, and letting emotions flow through melodies rather than aiming for perfection.'
    }
  },

  {
    note: 'F',
    sargam: '',
    type: 'white',
    icon: '🧑‍🤝‍🧑',
    content: {
      topic: 'Gathering with Friends',
      description: 'Time spent with friends is a mix of laughter, deep conversations, and random debates. These moments—often over tea or food—turn ordinary days into memories that quietly shape who I am.'
    }
  },
  { note: 'F#', sargam: '', type: 'black', icon: '', content: null },

  {
    note: 'G',
    sargam: '',
    type: 'white',
    icon: '✈️',
    content: {
      topic: 'Travel & Exploring',
      description: 'Travel feeds my curiosity. I love exploring unfamiliar places, walking without a plan, discovering local stories, and experiencing cultures firsthand—collecting perspectives rather than just photographs.'
    }
  },
  { note: 'G#', sargam: '', type: 'black', icon: '', content: null },

  {
    note: 'A',
    sargam: '',
    type: 'white',
    icon: '😂',
    content: {
      topic: 'Humor & Lightness',
      description: 'Humor keeps life balanced. I enjoy finding laughter in everyday situations, sharing jokes, and not taking myself too seriously—because sometimes a smile solves more than overthinking ever could.'
    }
  },
  { note: 'A#', sargam: '', type: 'black', icon: '', content: null },

  {
    note: 'B',
    sargam: '',
    type: 'white',
    icon: '✍️',
    content: {
      topic: 'Blogging & Reflection',
      description: 'Writing helps me organize thoughts. Through blogging, I reflect on technology, personal growth, and lessons learned—turning experiences into words so ideas don’t fade with time.'
    }
  },

  {
    note: "C'",
    sargam: '',
    type: 'white',
    icon: '🧘',
    content: {
      topic: 'Stillness',
      description: 'In moments of stillness, I disconnect from constant motion. Meditation helps me reset, stay grounded, and reconnect with clarity—creating space between who I was yesterday and who I aim to be.'
    }
  }
];

const autoPlayPattern = [0, 2, 4, 5, 7, 9, 11, 12]; // Sa Re Ga Ma Pa Dha Ni Sa

const blogPosts = [
  {
    id: 1,
    title: "From Django Views to Real-World Products",
    excerpt: "Lessons learned while turning backend logic into usable, human-friendly applications.",
    date: "Mar 18, 2024",
    readTime: "6 min",
    tags: ["Django", "Backend", "WebDev"],
    category: "Tech",
    stringIndex: 0,
    color: "#FF6B6B",
    content: `
When I first started learning Django, everything felt straightforward.
Views returned responses, models stored data, and templates rendered pages.
If the application worked, I considered it complete.

But real-world projects quickly changed that perspective.

### When “Working” Is Not Enough
Tutorial projects focus on functionality—forms submit, APIs respond, data saves.
In real applications, users care about something deeper:
clarity, flow, and trust.

I learned that backend development isn’t just about writing correct logic,
but about designing systems that **feel predictable and reliable**.

### The Evolution of My Code
Earlier, my Django views handled everything:
queries, validation, business logic, and responses.

Over time, I started separating concerns:
- Business logic moved into services
- Validation became explicit
- Views became simpler and more readable

This shift made my code easier to debug, test, and extend.

### Thinking Beyond the Database
A backend system eventually serves people, not tables.
Error messages, response timing, and edge cases suddenly mattered more than clever queries.

The biggest lesson?
Good backend code is invisible—but bad backend code is unforgettable.

### Still Learning
I’m still learning how to design scalable APIs,
write cleaner abstractions, and prepare systems for change.
But every project teaches me how software quietly shapes user experience.
`
  },

  {
    id: 2,
    title: "Playing Guitar After a Long Day of Coding",
    excerpt: "How music helps me reset my mind when logic starts feeling too heavy.",
    date: "Feb 14, 2024",
    readTime: "4 min",
    tags: ["Guitar", "Music", "Balance"],
    category: "Music",
    stringIndex: 1,
    color: "#45B7D1",
    content: `
After hours of staring at code, my mind reaches a point where logic feels heavy.
That’s usually when I pick up my guitar.

### Music as a Mental Reset
Coding requires structure, precision, and constant problem-solving.
Music asks for something different—emotion, flow, and presence.

Playing guitar helps me disconnect from screens
and reconnect with something more instinctive.

### No Perfection, Just Expression
I don’t aim for perfection when I play.
Sometimes it’s just simple chords, familiar songs, or random improvisation.

Those imperfect moments do something important:
they remind me that creativity doesn’t always need rules.

### How Music Makes Me a Better Developer
Strangely, music improves my coding too.
After a short session, I return with:
- A calmer mind
- Better focus
- Fresh perspective on problems

Balance matters.
And for me, guitar strings often solve problems that logic alone can’t.
`
  },

  {
    id: 3,
    title: "Exploring Kathmandu Without a Destination",
    excerpt: "Wandering familiar streets, finding new perspectives, and enjoying unplanned moments.",
    date: "Jan 30, 2024",
    readTime: "7 min",
    tags: ["Nepal", "Exploring", "Life"],
    category: "Travel",
    stringIndex: 2,
    color: "#FFA07A",
    content: `
Kathmandu is familiar to me, yet it constantly surprises me.
Some of my best experiences come from walking without a destination.

### The Beauty of Wandering
When there’s no plan, curiosity takes control.
A small café, a quiet alley, a random conversation—
these moments don’t appear on maps.

### Familiar Streets, New Eyes
Exploring without purpose changes how I see the city.
Places I once rushed past suddenly feel meaningful.

It reminds me that exploration isn’t always about distance—
sometimes it’s about attention.

### Lessons Beyond Travel
Wandering teaches patience.
It teaches observation.
And it teaches comfort with uncertainty.

The same lessons quietly apply to life and learning:
you don’t always need a clear endpoint to move forward.
`
  },
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
    }, 1600);
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
                  {selectedPost.content.split('\n').map((line, idx) => {
                    if (line.trim().startsWith('###')) {
                      return <h4 key={idx} style={{ marginTop: '20px', marginBottom: '10px', fontSize: '1.1em', fontWeight: '600' }}>{line.replace('###', '').trim()}</h4>;
                    }
                    if (line.trim()) {
                      return <p key={idx} style={{ marginBottom: '12px', lineHeight: '1.6' }}>{line}</p>;
                    }
                    return <br key={idx} />;
                  })}
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