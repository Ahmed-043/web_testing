import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import logoGif from "../public/Logo_Animation-1.gif"
import heroPortrait from "../public/assets/27617.png"
import heroPortraitMobile from "../public/assets/46ba6.png"
import brandMark from "../public/assets/brand-mark.svg"
import dividerMobile from "../public/assets/4f230.svg"
import dividerLeft from "../public/assets/0ba35.svg"
import sparkMarkSvg from "../public/assets/ccb5e.svg"
import aboutGridVert from "../public/assets/76633.svg"
import aboutGridHoriz from "../public/assets/7b3b7.svg"
import wordmarkFooterSvg from "../public/assets/wordmark-footer.svg"
import project08f39 from "../public/assets/08f39.png"
import projectA98da from "../public/assets/a98da.png"
import project70b4e from "../public/assets/70b4e.png"
import project104c5 from "../public/assets/104c5.png"
import project1ce5e from "../public/assets/1ce5e.png"

import dividerRight from "@/imports/Group_350-1.png"

const projects = [
  { src: project08f39, alt: "Geometric atrium viewed from below" },
  { src: projectA98da, alt: "Azadi Tower in monochrome" },
  { src: project70b4e, alt: "Sculptural modern building at night" },
  { src: project104c5, alt: "Reflective modern architecture" },
  { src: project1ce5e, alt: "Modern urban architecture in mist" },
]

const services = [
  { title: "Interior Design", image: project1ce5e },
  { title: "Creative Direction", image: project08f39 },
  { title: "Business Strategy", image: project104c5 },
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

  useEffect(() => {
    if (reduceMotion) return
    const timeout = window.setTimeout(() => setVisible(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src={logoGif}
            alt="The Maram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
      <img className="section-divider__mobile" src={dividerMobile} alt="" />
      <img
        className={`section-divider__desktop section-divider__desktop--${side}`}
        src={side === "left" ? dividerLeft : dividerRight}
        alt=""
      />
    </div>
  )
}

function SparkMark() {
  return (
    <span className="spark-mark" aria-hidden="true">
      <img src={sparkMarkSvg} alt="" />
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
        <source media="(max-width: 767px)" srcSet={heroPortraitMobile} />
        <img src={heroPortrait} alt="Maram Abuznada" />
      </motion.picture>
      <div className="hero__shade" />
      <nav className="nav" aria-label="Main navigation">
        <a className="nav__mark" href="#home" aria-label="The Maram home">
          <img src={brandMark} alt="" />
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
        <img className="about__grid-vertical" src={aboutGridVert} alt="" />
        <img
          className="about__grid-horizontal"
          src={aboutGridHoriz}
          alt=""
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
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
          I work at the intersection of architecture, strategy, creativity, and
          human experience — turning complex founder visions into clear,
          aligned, and meaningful experiences.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.figure
            key={project.src}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            <img src={project.src} alt={project.alt} />
          </motion.figure>
        ))}
      </div>
      <a className="text-link" href="#services">
        Watch More <span aria-hidden="true">→</span>
      </a>
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
            viewport={{ once: true, amount: 0.35 }}
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
  return (
    <section className="testimonials">
      <Divider side="right" />
      <h2>Happy Clients</h2>
      <div className="testimonial-viewport">
        <motion.div
          className="testimonial-track"
          drag="x"
          dragConstraints={{ left: -700, right: 0 }}
        >
          {cards.map((_, index) => (
            <article
              className={`testimonial-card${index === 2 ? " is-muted" : ""}`}
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
        </motion.div>
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
              <span aria-hidden="true">{open === index ? "−" : "+"}</span>
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
  return (
    <>
      <section className="contact" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to build
          <br />
          together?
        </motion.h2>
        <a href="mailto:abc@gmail.com">Let’s Connect</a>
      </section>
      <footer>
        <img src={wordmarkFooterSvg} alt="The Maram" />
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

export default function App() {
  return (
    <>
      <IntroOverlay />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
