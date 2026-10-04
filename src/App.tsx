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

  const offsetX = isMobile ? -45 : -100

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

const disciplines = ["Strategy", "Experience", "Architecture", "Creativity"]

interface NavProps {
  onNavigate?: (page: "home" | "contact", sectionId?: string) => void
}

function Hero({ onNavigate }: NavProps) {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setActiveDisciplineIndex((prev) => (prev + 1) % disciplines.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered])

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
        <a
          className="nav__mark"
          href="#home"
          aria-label="The Maram home"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate("home", "home")
            }
          }}
        >
          <img src="/assets/brand-mark.svg" alt="" />
        </a>
        <div className="nav__links">
          <a
            href="#home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home", "home")
              }
            }}
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home", "work")
              }
            }}
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("contact")
              }
            }}
          >
            Contact
          </a>
          <a
            className="nav__cta"
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("contact")
              }
            }}
          >
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {disciplines.map((discipline, index) => (
          <motion.button
            animate={{ opacity: activeDisciplineIndex === index ? 1 : 0.33 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={activeDisciplineIndex === index ? "is-active" : ""}
            data-discipline={discipline.toLowerCase()}
            key={discipline}
            type="button"
            onFocus={() => {
              setIsHovered(true)
              setActiveDisciplineIndex(index)
            }}
            onBlur={() => setIsHovered(false)}
            onMouseEnter={() => setActiveDisciplineIndex(index)}
            onClick={() => setActiveDisciplineIndex(index)}
          >
            {discipline}
          </motion.button>
        ))}
      </div>
      <motion.p
        className="hero__name"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Abuzanda
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
        <p className="projects-paragraph">
          I work at the intersection of architecture, strategy, creativity,<br/>
          and human experience — turning complex founder visions<br/>
          into clear, aligned, and meaningful experiences. For ambitious<br/>
          founders and decision-makers building brands that deserve<br/>
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
  const viewportRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const [isDraggingState, setIsDraggingState] = useState(false)

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    setIsDraggingState(true)
    startX.current = e.clientX
    if (viewportRef.current) {
      scrollLeftStart.current = viewportRef.current.scrollLeft
    }
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId)
    } catch {}
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !viewportRef.current) return
    const delta = e.clientX - startX.current
    viewportRef.current.scrollLeft = scrollLeftStart.current - delta
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    setIsDraggingState(false)
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {}
  }

  return (
    <section className="testimonials">
      <Divider side="right" />
      <h2>Happy Clients</h2>
      <div
        className={`testimonial-viewport${isDraggingState ? " is-dragging" : ""}`}
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="testimonial-track">
          {duplicatedCards.map((_, index) => (
            <article className="testimonial-card" key={index}>
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

function MobileTestimonials() {
  const cards = Array.from({ length: 4 })
  const duplicatedCards = [...cards, ...cards]
  const viewportRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const [isDraggingState, setIsDraggingState] = useState(false)

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    setIsDraggingState(true)
    startX.current = e.clientX
    if (viewportRef.current) {
      scrollLeftStart.current = viewportRef.current.scrollLeft
    }
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId)
    } catch {}
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !viewportRef.current) return
    const delta = e.clientX - startX.current
    viewportRef.current.scrollLeft = scrollLeftStart.current - delta
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    setIsDraggingState(false)
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {}
  }

  return (
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
      <div
        className={`m-testimonial-viewport${isDraggingState ? " is-dragging" : ""}`}
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="m-testimonials__track">
          {duplicatedCards.map((_, index) => (
            <article key={index}>
              <span className="m-testimonials__avatar" />
              <p>{testimonial}</p>
              <strong>Maya Rahman</strong>
              <small>Founder, Mora Living</small>
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

function MainFooterSection({ onNavigate }: NavProps) {
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
      <section className="contact" id="main-contact">
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
          href="#contact"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate("contact")
            }
          }}
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
          <a
            href="#home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home")
              }
            }}
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home", "work")
              }
            }}
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("contact")
              }
            }}
          >
            Contact
          </a>
        </div>
        <div>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          <span>Here Location Goes</span>
        </div>
      </footer>
    </>
  )
}

function ContactPage({ onNavigate }: NavProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    projectDescription: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact-page" id="contact">
      <nav className="contact-nav" aria-label="Contact navigation">
        <a
          className="nav__mark"
          href="#home"
          aria-label="The Maram home"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate("home")
            }
          }}
        >
          <img src="/assets/brand-mark.svg" alt="" />
        </a>
        <div className="nav__links">
          <a
            href="#home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home")
              }
            }}
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home", "work")
              }
            }}
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("contact")
              }
            }}
          >
            Contact
          </a>
          <a
            className="nav__cta"
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("contact")
              }
            }}
          >
            Sign up
          </a>
        </div>
      </nav>

      <div className="contact-page__content">
        <div className="contact-page__left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's talk<br />about your<br />project!
          </motion.h1>
          <div className="contact-page__divider-wrap" aria-hidden="true">
            <img src="/assets/0ba35.svg" alt="" />
          </div>
        </div>

        <motion.div
          className="contact-page__right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="service">Service</label>
              <input
                id="service"
                type="text"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="projectDescription">Project Description</label>
              <input
                id="projectDescription"
                type="text"
                value={formData.projectDescription}
                onChange={(e) =>
                  setFormData({ ...formData, projectDescription: e.target.value })
                }
              />
            </div>

            <button type="submit" className="contact-form__submit">
              {submitted ? "Submitted!" : "Let's Connect"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function MobileContactPage({ onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mFormData, setMFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    projectDescription: "",
  })
  const [mSubmitted, setMSubmitted] = useState(false)

  const handleMSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMSubmitted(true)
    setTimeout(() => setMSubmitted(false), 3000)
  }

  return (
    <div className="mobile-contact-wrapper">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="m-nav__drawer"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="m-nav__drawer-header">
              <a
                href="#mobile-home"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home")
                }}
              >
                <img src="/assets/brand-mark.svg" alt="The Maram Logo" />
              </a>
              <button
                className="m-nav__drawer-close"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="m-nav__drawer-links">
              <a
                href="#mobile-home"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home")
                }}
              >
                Home
              </a>
              <a
                href="#mobile-work"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home", "mobile-work")
                }}
              >
                Work
              </a>
              <a
                href="#mobile-contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("contact")
                }}
              >
                Contact
              </a>
              <a
                className="m-nav__drawer-cta"
                href="#mobile-contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("contact")
                }}
              >
                Sign up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="m-contact-page" id="mobile-contact">
        <nav className="m-nav" aria-label="Mobile contact navigation">
          <a
            href="#mobile-home"
            aria-label="The Maram home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home")
              }
            }}
          >
            <img src="/assets/brand-mark.svg" alt="The Maram Logo" />
          </a>
          <button
            className={`m-nav__menu${menuOpen ? " is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's talk about <br />your project!
        </motion.h1>

        <form className="contact-form" onSubmit={handleMSubmit}>
          <div className="contact-form__field">
            <label htmlFor="mFirstName">First Name</label>
            <input
              id="mFirstName"
              type="text"
              value={mFormData.firstName}
              onChange={(e) =>
                setMFormData({ ...mFormData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="mLastName">Last Name</label>
            <input
              id="mLastName"
              type="text"
              value={mFormData.lastName}
              onChange={(e) =>
                setMFormData({ ...mFormData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="mEmail">Email</label>
            <input
              id="mEmail"
              type="email"
              value={mFormData.email}
              onChange={(e) =>
                setMFormData({ ...mFormData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="mService">Service</label>
            <input
              id="mService"
              type="text"
              value={mFormData.service}
              onChange={(e) =>
                setMFormData({ ...mFormData, service: e.target.value })
              }
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="mProjectDescription">Project Description</label>
            <input
              id="mProjectDescription"
              type="text"
              value={mFormData.projectDescription}
              onChange={(e) =>
                setMFormData({ ...mFormData, projectDescription: e.target.value })
              }
            />
          </div>

          <button type="submit" className="contact-form__submit">
            {mSubmitted ? "Submitted!" : "Let's Connect"}
          </button>
        </form>


      </section>
    </div>
  )
}

function MobilePage({ onNavigate }: NavProps) {
  const mFooterRef = useRef(null)
  const isMFooterInView = useInView(mFooterRef, { amount: 0.3, once: false })
  const [mGifKey, setMGifKey] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDisciplineIndex((prev) => (prev + 1) % disciplines.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isMFooterInView) {
      setMGifKey((prev) => prev + 1)
    }
  }, [isMFooterInView])

  return (
    <main className="mobile-site">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="m-nav__drawer"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="m-nav__drawer-header">
              <a
                href="#mobile-home"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home")
                }}
              >
                <img src="/assets/brand-mark.svg" alt="The Maram Logo" />
              </a>
              <button
                className="m-nav__drawer-close"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="m-nav__drawer-links">
              <a
                href="#mobile-home"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home")
                }}
              >
                Home
              </a>
              <a
                href="#mobile-work"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("home", "mobile-work")
                }}
              >
                Work
              </a>
              <a
                href="#mobile-contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("contact")
                }}
              >
                Contact
              </a>
              <a
                className="m-nav__drawer-cta"
                href="#mobile-contact"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (onNavigate) onNavigate("contact")
                }}
              >
                Sign up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="m-hero">
        <picture className="m-hero__portrait">
          <img src="/assets/46ba6.png" alt="Maram Abuznada" />
        </picture>
        <nav className="m-nav" aria-label="Mobile navigation">
          <a
            href="#mobile-home"
            aria-label="The Maram home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate("home")
              }
            }}
          >
            <img src="/assets/brand-mark.svg" alt="The Maram Logo" />
          </a>
          <button
            className={`m-nav__menu${menuOpen ? " is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        <div className="m-disciplines" aria-label="Maram's disciplines">
          {disciplines.map((discipline, index) => (
            <motion.span
              key={discipline}
              animate={{ opacity: activeDisciplineIndex === index ? 1 : 0.33 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={activeDisciplineIndex === index ? "is-active" : ""}
            >
              {discipline}
            </motion.span>
          ))}
        </div>
        <motion.p
          className="m-hero__name"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Abuzanda
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

      <MobileTestimonials />

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
          href="#mobile-contact"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate("contact")
            }
          }}
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
  const [currentPage, setCurrentPage] = useState<"home" | "contact">(() => {
    if (typeof window !== "undefined") {
      return window.location.hash === "#contact" ? "contact" : "home"
    }
    return "home"
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setCurrentPage("contact")
      } else {
        setCurrentPage("home")
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const navigateTo = (page: "home" | "contact", sectionId?: string) => {
    setCurrentPage(page)
    if (page === "contact") {
      window.location.hash = "contact"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      if (sectionId) {
        window.location.hash = sectionId
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        window.location.hash = "home"
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <IntroOverlay />
      <main className="desktop-site">
        {currentPage === "contact" ? (
          <ContactPage onNavigate={navigateTo} />
        ) : (
          <>
            <Hero onNavigate={navigateTo} />
            <About />
            <Projects />
            <Services />
            <Testimonials />
            <FAQ />
            <MainFooterSection onNavigate={navigateTo} />
          </>
        )}
      </main>
      <main className="mobile-site">
        {currentPage === "contact" ? (
          <MobileContactPage onNavigate={navigateTo} />
        ) : (
          <MobilePage onNavigate={navigateTo} />
        )}
      </main>
    </>
  )
}
