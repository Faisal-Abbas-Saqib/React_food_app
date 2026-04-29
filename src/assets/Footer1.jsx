import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
  faApplePay,
  faGooglePay
} from '@fortawesome/free-brands-svg-icons';

const Footer1 = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>

        <div className="social-icons" style={styles.socialOverride}>
          {[
            { icon: faTwitter,  href: 'https://twitter.com/yourhandle',     label: 'Twitter'  },
            { icon: faGithub,   href: 'https://github.com/yourhandle',      label: 'GitHub'   },
            { icon: faLinkedin, href: 'https://linkedin.com/in/yourhandle', label: 'LinkedIn' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}>
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        <div className="card" style={styles.card}>
          <div style={styles.logo}>Södertälje Food Point</div>
          <div style={styles.divider} />
          <h3 style={styles.address}>
            <span style={{ display: 'block' }}>Stockholmsvägen 235, 15285 Södertälje</span>
            <span style={{ display: 'block' }}>Mobil: 075 425 41 21</span>
          </h3>
        </div>

        <div className="payment-icons" style={styles.paymentOverride}>
          {[faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faApplePay, faGooglePay].map((icon, i) => (
            <FontAwesomeIcon key={i} icon={icon} />
          ))}
        </div>

      </div>

      <div style={styles.footerBottom}>
        © {new Date().getFullYear()} Södertälje Food Point — All rights reserved
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#111',
    borderTop: '1px solid #2a2a2a',
    padding: '48px 40px 28px',
    fontFamily: "'DM Sans', sans-serif",
  },
  footerInner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '32px',
    marginBottom: '28px',
  },
  socialOverride: { margin: 0, justifyContent: 'flex-start' },
  card: { textAlign: 'center', flex: '1', minWidth: '200px' },
  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#e8d9bf',
    marginBottom: '10px',
  },
  divider: {
    width: '32px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #c9a366, transparent)',
    margin: '10px auto',
  },
  address: {
    fontWeight: 300,
    fontSize: '11.5px',
    letterSpacing: '0.04em',
    color: '#666',
    lineHeight: 1.9,
  },
  paymentOverride: { margin: 0, justifyContent: 'flex-end' },
  footerBottom: {
    borderTop: '1px solid #1e1e1e',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '10.5px',
    letterSpacing: '0.08em',
    color: '#3a3a3a',
    textTransform: 'uppercase',
  },
};

export default Footer1;
