import React from 'react'

const Header1 = () => {
  return (
    <div className='header' style={styles.header}>

      <div style={styles.topBar}>
        <span style={styles.topBarText}>Free delivery on orders over 299 kr</span>
        <span style={styles.topBarText}>Open daily 10:00 – 22:00</span>
      </div>

      <div style={styles.heroContent}>
        <div style={styles.tagline}>Est. 2024 · Södertälje</div>
        <div style={styles.divider} />
        <h1>Södertälje Food Point</h1>
        <h2>"Fast. Fresh. Delicious. Your cravings, our kitchen!"</h2>
        <div style={styles.divider} />
        <button
          style={styles.cta}
          onMouseEnter={e => Object.assign(e.currentTarget.style, styles.ctaHover)}
          onMouseLeave={e => Object.assign(e.currentTarget.style, styles.cta)}>
          Order Now
        </button>
      </div>

    </div>
  )
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#111',
    borderBottom: '1px solid #2a2a2a',
    overflow: 'hidden',
    position: 'relative',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '10px 40px',
    backgroundColor: '#0e0e0e',
    borderBottom: '1px solid #1e1e1e',
  },
  topBarText: {
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#555',
    fontFamily: "'DM Sans', sans-serif",
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '72px 24px 64px',
    textAlign: 'center',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,163,102,0.08) 0%, transparent 70%)',
  },
  tagline: {
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#c9a366',
    marginBottom: '16px',
    fontFamily: "'DM Sans', sans-serif",
  },
  divider: {
    width: '48px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #c9a366, transparent)',
    margin: '16px auto',
  },
  cta: {
    marginTop: '28px',
    padding: '12px 36px',
    background: 'transparent',
    border: '1px solid #c9a366',
    color: '#c9a366',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '12px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.25s',
    borderRadius: '4px',
    minHeight: '44px',
  },
  ctaHover: {
    marginTop: '28px',
    padding: '12px 36px',
    background: '#c9a366',
    border: '1px solid #c9a366',
    color: '#111',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '12px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.25s',
    borderRadius: '4px',
    minHeight: '44px',
  },
}

export default Header1
