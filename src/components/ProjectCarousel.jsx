/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import "./ProjectCarousel.css";

export default function ProjectCarousel({ projects, renderProject }) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const reducedMotion = useReducedMotion();

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const nextDistance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (nextDistance < distance) { closest = index; distance = nextDistance; }
    });
    activeRef.current = closest;
    setActive(closest);
  }, []);

  const goTo = useCallback((index, behavior) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: behavior || (reducedMotion ? "instant" : "smooth"),
    });
  }, [reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncActive);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(syncActive);
    observer.observe(track);
    syncActive();
    return () => {
      track.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [syncActive]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let accumulated = 0;
    let lastEvent = 0;
    let lockedUntil = 0;
    const onWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const now = performance.now();
      if (now < lockedUntil) { event.preventDefault(); return; }
      const direction = Math.sign(event.deltaY);
      const index = activeRef.current + direction;
      // At either end, let a fresh wheel gesture scroll the page normally.
      if (!direction || index < 0 || index >= projects.length) return;
      event.preventDefault();
      if (now - lastEvent > 180 || Math.sign(accumulated) !== direction) accumulated = 0;
      lastEvent = now;
      accumulated += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? track.clientHeight : 1);
      if (Math.abs(accumulated) < 40) return;
      accumulated = 0;
      lockedUntil = now + 600;
      goTo(index);
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, [goTo, projects.length]);

  const onKeyDown = (event) => {
    let index;
    if (event.key === "ArrowRight") index = Math.min(projects.length - 1, active + 1);
    if (event.key === "ArrowLeft") index = Math.max(0, active - 1);
    if (event.key === "Home") index = 0;
    if (event.key === "End") index = projects.length - 1;
    if (index === undefined) return;
    event.preventDefault();
    event.stopPropagation();
    goTo(index);
  };

  return (
    <div className="project-carousel mt-12 sm:mt-16" role="region"
      aria-roledescription="carousel" aria-label="Portfolio projects" onKeyDown={onKeyDown}>
      <div className="project-carousel__track" ref={trackRef} tabIndex={0}
        aria-label="Scroll, swipe or use arrow keys to browse projects">
        {projects.map((project, index) => (
          <article key={project.name} ref={element => { slideRefs.current[index] = element; }}
            role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.name}`}
            className={`project-carousel__slide ${index === active ? "is-active" : ""}`}>
            {renderProject(project, index)}
          </article>
        ))}
      </div>
      <button type="button" className="project-carousel__arrow project-carousel__arrow--previous"
        onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>
      <button type="button" className="project-carousel__arrow project-carousel__arrow--next"
        onClick={() => goTo(active + 1)} disabled={active === projects.length - 1} aria-label="Next project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
      <div className="project-carousel__navigation">
        {projects.map((project, index) => (
          <button key={project.name} type="button" onClick={() => goTo(index)}
            className={`project-carousel__dot ${index === active ? "is-active" : ""}`}
            aria-label={`Show ${project.name}`} aria-current={index === active ? "true" : undefined} />
        ))}
        <span className="project-carousel__count" aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Project {active + 1} of {projects.length}: {projects[active]?.name}</p>
    </div>
  );
}
