import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const BUILD_ITEMS = [
  {
    title: 'E-Commerce Platforms',
    description:
      'I build marketplace experiences with products, vendors, buyers, inventory and payment integrations.',
    icon: 'cart',
  },
  {
    title: 'Dashboards',
    description:
      'I create structured dashboards and role-based interfaces for different types of users.',
    icon: 'dashboard',
  },
  {
    title: 'Responsive Websites',
    description:
      'I build interfaces that adapt smoothly across desktop, tablet and mobile devices.',
    icon: 'responsive',
  },
  {
    title: 'Interactive Web Applications',
    description:
      'I connect front-end interfaces with APIs, authentication and databases to create functional applications.',
    icon: 'app',
  },
];

function BuildIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };
  if (name === 'cart')
    return (
      <svg {...common}>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="17.5" cy="20" r="1.4" />
        <path d="M2.5 3.5h2l2.4 12h11.1l2.5-9.5H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === 'dashboard')
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7.5" height="9" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="5.5" rx="1.5" />
        <rect x="13.5" y="12" width="7.5" height="9" rx="1.5" />
        <rect x="3" y="15.5" width="7.5" height="5.5" rx="1.5" />
      </svg>
    );
  if (name === 'responsive')
    return (
      <svg {...common}>
        <rect x="2" y="4" width="14" height="16" rx="2" />
        <path d="M16 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6M5 18h2" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 2.5 21.5 7 12 11.5 2.5 7 12 2.5Z" strokeLinejoin="round" />
      <path d="M4.5 10.5v5.2c0 1.4 3.4 2.8 7.5 2.8s7.5-1.4 7.5-2.8v-5.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Build() {
  return (
    <section id="build" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="What I build"
          title="What I Build"
          description="The types of products I create — from storefronts to full role-based applications."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUILD_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="group h-full rounded-xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.8)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-accent transition-colors duration-300 group-hover:border-accent/40">
                  <BuildIcon name={item.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}