// @flow strict
import React, { FC, useEffect } from "react";
import { TimelineMax, gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import styles from "./Logo.module.scss";

gsap.registerPlugin(CSSPlugin);

const Logo: FC = () => {
  useEffect(() => {
    const tl = new TimelineMax();
    tl.to("#name path", 0.5, {
      strokeDashoffset: 0,
      "fill-opacity": 1,
    });
    tl.fromTo("#name path", 0.5, { x: 40 }, { x: -55 });
  }, []);

  return (
    <svg
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-15.403765869140614 10.982495117187511 530.8075317382812 128.03500976562498"
      style={{ background: "rgba(0, 0, 0, 0)" }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <filter id="editing-extrude-glow">
          <feFlood floodColor="#333333" result="flood-1"></feFlood>
          <feMorphology
            operator="erode"
            radius="1"
            in="SourceAlpha"
            result="erode"
          ></feMorphology>
          <feComposite
            operator="in"
            in="flood-1"
            in2="erode"
            result="comp1"
          ></feComposite>
          <feConvolveMatrix
            order="10,10"
            divisor="1"
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          ></feConvolveMatrix>
          <feOffset dx="-10" dy="0" in="convolve" result="extrude"></feOffset>
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          ></feComposite>
          <feFlood floodColor="rgba(0%,0%,0%,0)" result="flood-2"></feFlood>
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          ></feComposite>
          <feMorphology
            operator="dilate"
            radius="1"
            in="comp2"
            result="dilate"
          ></feMorphology>
          <feOffset dx="-15" dy="0" in="dilate" result="offset"></feOffset>
          <feGaussianBlur
            in="offset"
            stdDeviation="5.8"
            result="blur"
          ></feGaussianBlur>
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope="0.8" intercept="-0.2"></feFuncA>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow"></feMergeNode>
            <feMergeNode in="comp-extrude"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g id="name" filter="url(#editing-extrude-glow)">
        <g transform="translate(63.9650012254715, 98.17500114440918)">
          <path
            d="M23.03-44.81L23.03-17.91L23.03-17.91Q23.03-14.19 21.63-10.92L21.63-10.92L21.63-10.92Q20.22-7.66 17.80-5.23L17.80-5.23L17.80-5.23Q15.38-2.81 12.11-1.41L12.11-1.41L12.11-1.41Q8.84 0 5.13 0L5.13 0L5.13 0Q2.88 0 0.63-0.56L0.63-0.56L0.63-10.19L0.63-10.19Q1.63-9.59 2.78-9.28L2.78-9.28L2.78-9.28Q3.94-8.97 5.13-8.97L5.13-8.97L5.13-8.97Q6.97-8.97 8.61-9.67L8.61-9.67L8.61-9.67Q10.25-10.38 11.47-11.59L11.47-11.59L11.47-11.59Q12.69-12.81 13.39-14.44L13.39-14.44L13.39-14.44Q14.09-16.06 14.09-17.91L14.09-17.91L14.09-44.81L23.03-44.81ZM74.75-22.22L74.75-22.22L74.75-22.22Q74.75-19.03 73.92-16.08L73.92-16.08L73.92-16.08Q73.09-13.13 71.59-10.55L71.59-10.55L71.59-10.55Q70.09-7.97 67.97-5.84L67.97-5.84L67.97-5.84Q65.84-3.72 63.28-2.20L63.28-2.20L63.28-2.20Q60.72-0.69 57.75 0.14L57.75 0.14L57.75 0.14Q54.78 0.97 51.59 0.97L51.59 0.97L51.59 0.97Q48.41 0.97 45.45 0.14L45.45 0.14L45.45 0.14Q42.50-0.69 39.92-2.20L39.92-2.20L39.92-2.20Q37.34-3.72 35.22-5.84L35.22-5.84L35.22-5.84Q33.09-7.97 31.58-10.55L31.58-10.55L31.58-10.55Q30.06-13.13 29.23-16.08L29.23-16.08L29.23-16.08Q28.41-19.03 28.41-22.22L28.41-22.22L28.41-22.22Q28.41-25.41 29.23-28.38L29.23-28.38L29.23-28.38Q30.06-31.34 31.58-33.91L31.58-33.91L31.58-33.91Q33.09-36.47 35.22-38.59L35.22-38.59L35.22-38.59Q37.34-40.72 39.92-42.22L39.92-42.22L39.92-42.22Q42.50-43.72 45.45-44.55L45.45-44.55L45.45-44.55Q48.41-45.38 51.59-45.38L51.59-45.38L51.59-45.38Q54.78-45.38 57.75-44.55L57.75-44.55L57.75-44.55Q60.72-43.72 63.28-42.22L63.28-42.22L63.28-42.22Q65.84-40.72 67.97-38.59L67.97-38.59L67.97-38.59Q70.09-36.47 71.59-33.91L71.59-33.91L71.59-33.91Q73.09-31.34 73.92-28.38L73.92-28.38L73.92-28.38Q74.75-25.41 74.75-22.22ZM65.84-22.22L65.84-22.22L65.84-22.22Q65.84-25.16 64.72-27.77L64.72-27.77L64.72-27.77Q63.59-30.38 61.67-32.30L61.67-32.30L61.67-32.30Q59.75-34.22 57.14-35.34L57.14-35.34L57.14-35.34Q54.53-36.47 51.59-36.47L51.59-36.47L51.59-36.47Q48.63-36.47 46.03-35.34L46.03-35.34L46.03-35.34Q43.44-34.22 41.50-32.30L41.50-32.30L41.50-32.30Q39.56-30.38 38.44-27.77L38.44-27.77L38.44-27.77Q37.31-25.16 37.31-22.22L37.31-22.22L37.31-22.22Q37.31-19.28 38.44-16.70L38.44-16.70L38.44-16.70Q39.56-14.13 41.50-12.19L41.50-12.19L41.50-12.19Q43.44-10.25 46.03-9.13L46.03-9.13L46.03-9.13Q48.63-8 51.59-8L51.59-8L51.59-8Q54.53-8 57.14-9.13L57.14-9.13L57.14-9.13Q59.75-10.25 61.67-12.19L61.67-12.19L61.67-12.19Q63.59-14.13 64.72-16.70L64.72-16.70L64.72-16.70Q65.84-19.28 65.84-22.22ZM111.34-8.97L111.34 0L80.63 0L80.63-44.81L111.34-44.81L111.34-35.84L89.59-35.84L89.59-26.88L104.31-26.88L104.31-17.91L89.59-17.91L89.59-8.97L111.34-8.97ZM153.47-44.81L153.47 0L143.88 0L126.59-29.50L126.59 0L117.63 0L117.63-44.81L127.22-44.81L144.50-15.28L144.50-44.81L153.47-44.81ZM197.44-22.22L197.44-4.53L197.44-4.53Q194.31-1.88 190.47-0.45L190.47-0.45L190.47-0.45Q186.63 0.97 182.47 0.97L182.47 0.97L182.47 0.97Q179.28 0.97 176.33 0.14L176.33 0.14L176.33 0.14Q173.38-0.69 170.81-2.20L170.81-2.20L170.81-2.20Q168.25-3.72 166.13-5.83L166.13-5.83L166.13-5.83Q164-7.94 162.50-10.52L162.50-10.52L162.50-10.52Q161-13.09 160.17-16.06L160.17-16.06L160.17-16.06Q159.34-19.03 159.34-22.22L159.34-22.22L159.34-22.22Q159.34-25.41 160.17-28.34L160.17-28.34L160.17-28.34Q161-31.28 162.50-33.86L162.50-33.86L162.50-33.86Q164-36.44 166.13-38.55L166.13-38.55L166.13-38.55Q168.25-40.66 170.81-42.16L170.81-42.16L170.81-42.16Q173.38-43.66 176.33-44.48L176.33-44.48L176.33-44.48Q179.28-45.31 182.47-45.31L182.47-45.31L182.47-45.31Q186.63-45.31 190.47-43.89L190.47-43.89L190.47-43.89Q194.31-42.47 197.44-39.81L197.44-39.81L192.75-32L192.75-32Q190.72-34.06 188.06-35.23L188.06-35.23L188.06-35.23Q185.41-36.41 182.47-36.41L182.47-36.41L182.47-36.41Q179.53-36.41 176.95-35.28L176.95-35.28L176.95-35.28Q174.38-34.16 172.44-32.23L172.44-32.23L172.44-32.23Q170.50-30.31 169.38-27.73L169.38-27.73L169.38-27.73Q168.25-25.16 168.25-22.22L168.25-22.22L168.25-22.22Q168.25-19.25 169.38-16.66L169.38-16.66L169.38-16.66Q170.50-14.06 172.44-12.13L172.44-12.13L172.44-12.13Q174.38-10.19 176.95-9.06L176.95-9.06L176.95-9.06Q179.53-7.94 182.47-7.94L182.47-7.94L182.47-7.94Q184.16-7.94 185.75-8.34L185.75-8.34L185.75-8.34Q187.34-8.75 188.78-9.47L188.78-9.47L188.78-22.22L197.44-22.22ZM223.22-44.81L223.22-17.91L223.22-17.91Q223.22-14.19 221.81-10.92L221.81-10.92L221.81-10.92Q220.41-7.66 217.98-5.23L217.98-5.23L217.98-5.23Q215.56-2.81 212.30-1.41L212.30-1.41L212.30-1.41Q209.03 0 205.31 0L205.31 0L205.31 0Q203.06 0 200.81-0.56L200.81-0.56L200.81-10.19L200.81-10.19Q201.81-9.59 202.97-9.28L202.97-9.28L202.97-9.28Q204.13-8.97 205.31-8.97L205.31-8.97L205.31-8.97Q207.16-8.97 208.80-9.67L208.80-9.67L208.80-9.67Q210.44-10.38 211.66-11.59L211.66-11.59L211.66-11.59Q212.88-12.81 213.58-14.44L213.58-14.44L213.58-14.44Q214.28-16.06 214.28-17.91L214.28-17.91L214.28-44.81L223.22-44.81ZM240-44.81L240 0L231.03 0L231.03-44.81L240-44.81ZM257.28-17.91L257.28 0L248.31 0L248.31-44.81L257.28-44.81L257.28-26.88L275.19-26.88L275.19-44.81L284.16-44.81L284.16 0L275.19 0L275.19-17.91L257.28-17.91ZM327.81-44.81L327.81-17.91L327.81-17.91Q327.81-14.19 326.41-10.92L326.41-10.92L326.41-10.92Q325-7.66 322.56-5.23L322.56-5.23L322.56-5.23Q320.13-2.81 316.86-1.41L316.86-1.41L316.86-1.41Q313.59 0 309.88 0L309.88 0L309.88 0Q306.16 0 302.89-1.41L302.89-1.41L302.89-1.41Q299.63-2.81 297.20-5.23L297.20-5.23L297.20-5.23Q294.78-7.66 293.38-10.92L293.38-10.92L293.38-10.92Q291.97-14.19 291.97-17.91L291.97-17.91L291.97-44.81L300.91-44.81L300.91-17.91L300.91-17.91Q300.91-16.06 301.61-14.44L301.61-14.44L301.61-14.44Q302.31-12.81 303.53-11.59L303.53-11.59L303.53-11.59Q304.75-10.38 306.39-9.67L306.39-9.67L306.39-9.67Q308.03-8.97 309.88-8.97L309.88-8.97L309.88-8.97Q311.72-8.97 313.36-9.67L313.36-9.67L313.36-9.67Q315-10.38 316.22-11.59L316.22-11.59L316.22-11.59Q317.44-12.81 318.14-14.44L318.14-14.44L318.14-14.44Q318.84-16.06 318.84-17.91L318.84-17.91L318.84-44.81L327.81-44.81ZM371.44-44.81L371.44 0L361.84 0L344.56-29.50L344.56 0L335.59 0L335.59-44.81L345.19-44.81L362.47-15.28L362.47-44.81L371.44-44.81Z"
            fill="#eb6c6c"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
