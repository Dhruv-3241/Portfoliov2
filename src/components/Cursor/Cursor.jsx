import styles from "./Cursor.module.css";

import React, { useEffect, useRef } from 'react';
import TweenMax from 'gsap';


export const Cursor = () => {

  const cursor = useRef(null);

  const amount = 20;
const sineDots = Math.floor(amount * 0.3);
const width = 26;
const idleTimeout = 150;
let lastFrame = 0;
let mousePosition = {x: 0, y: 0};
let dots = [];
let timeoutID;
let idle = false;
let hoverButton;
let hoverTL;

class HoverButton {
    constructor(id) {
        this.hovered = false;
        this.animatingHover = false;
        this.forceOut = false;
        this.timing = 0.65;
        this.el = document.getElementById(id);
        this.bg = this.el.getElementsByClassName("bg")[0];
        this.el.addEventListener("mouseenter", this.onMouseEnter);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
    }

    onMouseEnter = () => {
        this.hoverInAnim();
    };

    hoverInAnim = () => {
        if (!this.hovered) {
            this.hovered = true;
            this.animatingHover = true;
            this.forceOut = false;
            TweenMax.fromTo(
                this.bg,
                this.timing,
                {x: "-112%"},
                {
                    x: "-12%",
                    ease: Power3.easeOut,
                    onComplete: () => {
                        this.animatingHover = false;
                        if (this.forceOut) {
                            this.foceOut = false;
                            this.hoverOutAnim();
                        }
                    }
                }
            );
        }
    };

    onMouseLeave = () => {
        if (!this.animatingHover) {
            this.hoverOutAnim();
        } else {
            this.forceOut = true;
        }
    };

    hoverOutAnim = () => {
        this.hovered = false;
        TweenMax.to(this.bg, this.timing, {
            x: "100%",
            ease: Power3.easeOut,
            onComplete: () => {
            }
        });
    };
}

class Dot {
    constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - width / 2 * this.scale + 2;
        this.limit = width * 0.75 * this.scale;
        this.element = document.createElement("span");
        TweenMax.set(this.element, {scale: this.scale});
        cursor.current.appendChild(this.element);
    }

    lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
    }

    draw(delta) {
      if (!idle || this.index <= sineDots) {
          console.log('draw')
            TweenMax.set(this.element, {x: this.x, y: this.y});
        } else {
            this.angleX += this.anglespeed;
            this.angleY += this.anglespeed;
            this.y = this.lockY + Math.sin(this.angleY) * this.range;
            this.x = this.lockX + Math.sin(this.angleX) * this.range;
            TweenMax.set(this.element, {x: this.x, y: this.y});
        }
    }
}

class Circle {
    constructor(id) {
        const el = document.getElementById(id);
        const parent = el.parentElement;
        parent.removeChild(el);
        const chars = el.innerText.split("");
        chars.push(" ");
        for (let i = 0; i < chars.length; i++) {
            const span = document.createElement("span");
            span.innerText = chars[i];
            span.className = `char${i + 1}`;
            parent.appendChild(span);
        }
    }
}

function init() {
    window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("scroll", onScroll);
    // hoverButton = new HoverButton("button");
    // eslint-disable-next-line no-new
    // new Circle("circle-content");
    lastFrame += new Date();
    buildDots();
    render();
}

/*function limit(value, min, max) {
    return Math.min(Math.max(min, value), max);
}*/

function startIdleTimer() {
    timeoutID = setTimeout(goInactive, idleTimeout);
    idle = false;
}

function resetIdleTimer() {
    clearTimeout(timeoutID);
    startIdleTimer();
}

function goInactive() {
    idle = true;
    for (let dot of dots) {
        dot.lock();
    }
}

function buildDots() {
    for (let i = 0; i < amount; i++) {
        let dot = new Dot(i);
        dots.push(dot);
    }
}

const onScroll = () => {
  mousePosition.x += window.scrollX;
  mousePosition.y += window.scrollY;
};
  const onMouseMove = event => {
    mousePosition.x = event.clientX - width / 2 + window.scrollX;
    mousePosition.y = event.clientY - width / 2 + window.scrollY;
    resetIdleTimer();
};

const onTouchMove = () => {
    mousePosition.x = event.touches[0].clientX - width / 2 + window.scrollX;
    mousePosition.y = event.touches[0].clientY - width / 2 + window.scrollY;
    resetIdleTimer();
};

const render = timestamp => {
    const delta = timestamp - lastFrame;
  positionCursor(delta);
  // console.log(lastFrame, timestamp, delta)
    lastFrame = timestamp;
    requestAnimationFrame(render);
};

const positionCursor = delta => {
    let x = mousePosition.x;
    let y = mousePosition.y;
    dots.forEach((dot, index, dots) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
            const dx = (nextDot.x - dot.x) * 0.35;
            const dy = (nextDot.y - dot.y) * 0.35;
            x += dx;
            y += dy;
        }
    });
};

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" style={{
        display: 'none'
      }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
</svg>
      <div ref={cursor} className={styles.cursor} id="cursor" />
      </>
  );
};
