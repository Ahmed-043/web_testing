import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import dividerRight from "@/imports/Group_350-1.png"

const projects = [
  { src: "/assets/08f39.png", alt: "Geometric atrium viewed from below" },
  { src: "/assets/a98da.png", alt: "Azadi Tower in monochrome" },
  { src: "/assets/70b4e.png", alt: "Sculptural modern building at night" },
  { src: "/assets/104c5.png", alt: "Reflective modern architecture" },
  { src: "/assets/1ce5e.png", alt: "Modern urban architecture in mist" },
]

const services = [
  { title: "Interior Design", image: "/assets/1ce5e.png" },
  { title: "Creative Direction", image: "/assets/08f39.png" },
  { title: "Business Strategy", image: "/assets/104c5.png" },
]

const faqItems = [
  "How do we determine if we're a good fit to work together?",
  "What is your approach to architecture and strategy?",
  "How long does a typical engagement take?",
  "Can you support an existing brand or project?",
]

const testimonial =
  "Maram has a rare ability to step into a messy idea, understand what actually matters, and give it direction. She challenged some of our assumptions — and the result was far stronger than what we originally imagined."

function IntroOverlay() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(!reduceMotion)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 767 : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const timeout = window.setTimeout(() => setVisible(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [reduceMotion])

  const offsetX = isMobile ? -40 : -100

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src="/Logo_Animation-1.gif"
            alt="The Maram"
            initial={{ opacity: 0, x: offsetX }}
            animate={{ opacity: 1, x: offsetX }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Divider({ side }: { side: "left" | "right" }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <img className="section-divider__mobile" src="/assets/4f230.svg" alt="" />
      <img
        className={`section-divider__desktop section-divider__desktop--${side}`}
        src={side === "left" ? "/assets/0ba35.svg" : dividerRight}
        alt=""
      />
    </div>
  )
}

function SparkMark() {
  return (
    <span className="spark-mark" aria-hidden="true">
      <img src="/assets/ccb5e.svg" alt="" />
    </span>
  )
}

function Hero() {
  const [activeDiscipline, setActiveDiscipline] = useState("Experience")
  const disciplines = ["Strategy", "Experience", "Architecture", "Creativity"]

  return (
    <section className="hero" id="home">
      <motion.picture
        className="hero__portrait"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <source media="(max-width: 767px)" srcSet="/assets/46ba6.png" />
        <img src="/assets/27617.png" alt="Maram Abuznada" />
      </motion.picture>
      <div className="hero__shade" />
      <nav className="nav" aria-label="Main navigation">
        <a className="nav__mark" href="#home" aria-label="The Maram home">
          <img src="/assets/brand-mark.svg" alt="" />
        </a>
        <div className="nav__links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav__cta" href="#contact">
            Sign up
          </a>
        </div>
        <a className="nav__menu" href="#work" aria-label="Jump to work">
          <span />
          <span />
          <span />
        </a>
      </nav>

      <div
        className="hero__disciplines"
        aria-label="Maram's disciplines"
        onMouseLeave={() => setActiveDiscipline("Experience")}
      >
        {disciplines.map((discipline) => (
          <button
            className={activeDiscipline === discipline ? "is-active" : ""}
            data-discipline={discipline.toLowerCase()}
            key={discipline}
            type="button"
            onFocus={() => setActiveDiscipline(discipline)}
            onMouseEnter={() => setActiveDiscipline(discipline)}
            onClick={() => setActiveDiscipline(discipline)}
          >
            {discipline}
          </button>
        ))}
      </div>
      <motion.p
        className="hero__name"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Abduzanda
      </motion.p>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <Divider side="right" />
      <div className="about__grid" aria-hidden="true">
        <img className="about__grid-vertical" src="/assets/76633.svg" alt="" />
        <img
          className="about__grid-horizontal"
          src="/assets/7b3b7.svg"
          alt=""
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        I work at the intersection of architecture, strategy, creativity, and
        human experience — turning complex founder visions into clear, aligned,
        and meaningful experiences. For ambitious founders and decision-makers
        building brands that deserve to be understood, not just noticed.
      </motion.p>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects" id="work">
      <Divider side="left" />
      <div className="section-heading section-heading--light">
        <h2>
          Recent
          <br />
          Projects
        </h2>
        <p>
          I work at the intersection of architecture, strategy, creativity,
          and human experience — turning complex founder visions
          into clear, aligned, and meaningful experiences. For ambitious
          founders and decision-makers building brands that deserve
          to be understood, not just noticed.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.figure
            key={project.src}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            <img src={project.src} alt={project.alt} />
          </motion.figure>
        ))}
        <a className="project-watch-more" href="#services">
          Watch More
        </a>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <img src={service.image} alt="" />
            <div>
              <h3>{service.title}</h3>
              <SparkMark />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const cards = Array.from({ length: 5 })
  const duplicatedCards = [...cards, ...cards]

  return (
    <section className="testimonials">
      <Divider side="right" />
      <h2>Happy Clients</h2>
      <div className="testimonial-viewport">
        <div className="testimonial-track">
          {duplicatedCards.map((_, index) => (
            <article
              className={`testimonial-card${index % 5 === 2 ? " is-muted" : ""}`}
              key={index}
            >
              <span className="testimonial-card__avatar" />
              <p>{testimonial}</p>
              <div>
                <strong>Maya Rahman</strong>
                <span>Founder, Mora Living</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="faq">
      <Divider side="left" />
      <h2>FAQ.</h2>
      <div className="faq__list">
        {faqItems.map((item, index) => (
          <div className="faq__item" key={item}>
            <button
              type="button"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>{item}</span>
              <span className={`faq__spark${open === index ? " is-open" : ""}`} aria-hidden="true">
                <img src="/assets/ccb5e.svg" alt="" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  Every engagement begins with a focused conversation about your
                  vision, needs, and the change you want to create.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const footerRef = useRef(null)
  const isFooterInView = useInView(footerRef, { amount: 0.3, once: false })
  const [gifKey, setGifKey] = useState(0)

  useEffect(() => {
    if (isFooterInView) {
      setGifKey((prev) => prev + 1)
    }
  }, [isFooterInView])

  return (
    <>
      <section className="contact" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to build
          <br />
          together?
        </motion.h2>

        <motion.a
          href="mailto:abc@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Let’s Connect
        </motion.a>
      </section>
      <footer ref={footerRef}>
        {isFooterInView ? (
          <motion.img
            key={gifKey}
            src={`/Logo_Animation-1.gif?v=${gifKey}`}
            alt="The Maram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div style={{ width: "13rem", height: "4rem" }} />
        )}
        <div>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          <span>Here Location Goes</span>
        </div>
      </footer>
    </>
  )
}

function MobilePage() {
  const mFooterRef = useRef(null)
  const isMFooterInView = useInView(mFooterRef, { amount: 0.3, once: false })
  const [mGifKey, setMGifKey] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    if (isMFooterInView) {
      setMGifKey((prev) => prev + 1)
    }
  }, [isMFooterInView])

  return (
    <main className="mobile-site">
      <section className="m-hero">
        <picture className="m-hero__portrait">
          <img src="/assets/46ba6.png" alt="Maram Abuznada" />
        </picture>
        <nav className="m-nav" aria-label="Mobile navigation">
          <a href="#mobile-home" aria-label="The Maram home">
            <img src="/assets/brand-mark.svg" alt="The Maram Logo" />
          </a>
          <a className="m-nav__menu" href="#mobile-work" aria-label="Jump to work">
            <span />
            <span />
            <span />
          </a>
        </nav>
        <div className="m-disciplines" aria-label="Maram's disciplines">
          <span>Strategy</span>
          <span className="is-active">Experience</span>
          <span>Architecture</span>
          <span>Creativity</span>
        </div>
        <motion.p
          className="m-hero__name"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Abduzanda
        </motion.p>
      </section>

      <section className="m-about" id="mobile-home">
        <Divider side="right" />
        <div className="m-about__grid" aria-hidden="true">
          <img src="/assets/76633.svg" alt="" />
          <img src="/assets/7b3b7.svg" alt="" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          I work at the intersection of architecture, strategy, creativity, and human experience —
          turning complex founder visions into clear, aligned, and meaningful experiences. For
          ambitious founders and decision-makers building brands that deserve to be understood, not
          just noticed.
        </motion.p>
      </section>

      <section className="m-projects" id="mobile-work">
        <Divider side="left" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Recent Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          I work at the intersection of architecture, strategy, creativity, and human experience —
          turning complex founder visions into clear, aligned, and meaningful experiences. For
          ambitious founders and decision-makers building brands that deserve to be understood, not
          just noticed.
        </motion.p>
        <div className="m-projects__grid">
          {[projects[1], projects[3], projects[2], projects[4]].map((project, index) => (
            <motion.img
              key={project.src}
              src={project.src}
              alt={project.alt}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
            />
          ))}
        </div>
        <a href="#mobile-services">Watch More</a>
      </section>

      <section className="m-services" id="mobile-services">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="m-services__cards">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <img
                src={service.title === "Business Strategy" ? "/assets/70b4e.png" : service.image}
                alt=""
              />
              <div>
                <h3>{service.title}</h3>
                <SparkMark />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="m-testimonials">
        <Divider side="right" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Happy Clients
        </motion.h2>
        <div className="m-testimonials__track">
          {Array.from({ length: 4 }).map((_, index) => (
            <article className={index === 0 || index === 3 ? "is-muted" : ""} key={index}>
              <span className="m-testimonials__avatar" />
              <p>{testimonial}</p>
              <strong>Maya Rahman</strong>
              <small>Founder, Mora Living</small>
            </article>
          ))}
        </div>
      </section>

      <section className="m-faq">
        <Divider side="left" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          FAQ.
        </motion.h2>
        <div className="m-faq__list">
          {faqItems.map((item, index) => (
            <div className="m-faq__item" key={item}>
              <button
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{item}</span>
                <span
                  className={`faq__spark${openFaq === index ? " is-open" : ""}`}
                  aria-hidden="true"
                >
                  <img src="/assets/ccb5e.svg" alt="" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Every engagement begins with a focused conversation about your
                    vision, needs, and the change you want to create.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="m-contact">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to build<br />together?
        </motion.h2>
        <motion.a
          href="mailto:abc@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Let’s Connect
        </motion.a>
      </section>

      <footer className="m-footer" ref={mFooterRef}>
        {isMFooterInView ? (
          <motion.img
            key={mGifKey}
            src={`/Logo_Animation-1.gif?v=${mGifKey}`}
            alt="The Maram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div style={{ width: "8.5rem", height: "3rem" }} />
        )}
        <div>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          <span>Here Location Goes</span>
        </div>
      </footer>
    </main>
  )
}

export default function App() {
  return (
    <>
      <IntroOverlay />
      <main className="desktop-site">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <MobilePage />
    </>
  )
}