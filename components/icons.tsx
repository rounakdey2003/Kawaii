import { Component } from "react";

export class ChevronDown extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </svg>
    );
  }
}

export class Sun extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Sun Circle */}
        <circle cx="12" cy="12" fill={fill} r="4" />

        {/* Sun Rays */}
        <line stroke={fill} strokeWidth="1.5" x1="12" x2="12" y1="2" y2="6" />
        <line stroke={fill} strokeWidth="1.5" x1="12" x2="12" y1="18" y2="22" />
        <line stroke={fill} strokeWidth="1.5" x1="2" x2="6" y1="12" y2="12" />
        <line stroke={fill} strokeWidth="1.5" x1="18" x2="22" y1="12" y2="12" />
        <line
          stroke={fill}
          strokeWidth="1.5"
          x1="4.22"
          x2="6.34"
          y1="4.22"
          y2="6.34"
        />
        <line
          stroke={fill}
          strokeWidth="1.5"
          x1="17.66"
          x2="19.78"
          y1="4.22"
          y2="6.34"
        />
        <line
          stroke={fill}
          strokeWidth="1.5"
          x1="4.22"
          x2="6.34"
          y1="19.78"
          y2="17.66"
        />
        <line
          stroke={fill}
          strokeWidth="1.5"
          x1="17.66"
          x2="19.78"
          y1="19.78"
          y2="17.66"
        />
      </svg>
    );
  }
}

export class Calender extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Calendar Base */}
        <rect
          height="17"
          rx="2"
          stroke={fill}
          strokeWidth="1.5"
          width="18"
          x="3"
          y="4"
        />

        {/* Calendar Header */}
        <rect fill={fill} height="4" width="18" x="3" y="4" />

        {/* Calendar Dots for Days */}
        {[...Array(5)].map((_, row) =>
          [...Array(7)].map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={5 + col * 3}
              cy={9 + row * 3}
              fill={fill}
              r="0.8"
            />
          )),
        )}
      </svg>
    );
  }
}

export class Book extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          fill="none"
          height="16"
          rx="1"
          stroke={fill}
          strokeWidth="1.5"
          width="18"
          x="3"
          y="4"
        />

        <rect fill={fill} height="12" rx="0.5" width="8" x="5" y="6" />

        <rect
          fill="none"
          height="12"
          rx="0.5"
          stroke={fill}
          strokeWidth="1.5"
          width="8"
          x="11"
          y="6"
        />

        <line stroke={fill} strokeWidth="1" x1="11" x2="11" y1="6" y2="18" />
      </svg>
    );
  }
}

export class Love extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 21s-1-.67-2.45-1.94C6.65 16.24 4 13.44 4 10a4 4 0 0 1 8 0h0a4 4 0 1 1 8 0c0 3.44-2.65 6.24-5.55 8.06C13 20.33 12 21 12 21Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
}

export class Robot extends Component<{
  fill: any;
  size: any;
  height: any;
  width: any;
}> {
  render() {
    let { fill, size, height, width, ...props } = this.props;

    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Robot Head Shape */}
        <rect
          fill="none"
          height="12"
          rx="2"
          stroke={fill}
          strokeWidth="1.5"
          width="14"
          x="5"
          y="7"
        />

        {/* Eyes */}
        <circle cx="9" cy="13" fill={fill} r="1.5" />
        <circle cx="15" cy="13" fill={fill} r="1.5" />

        {/* Mouth */}
        <rect fill={fill} height="1" rx="0.5" width="4" x="10" y="16" />

        {/* Antenna */}
        <line stroke={fill} strokeWidth="1.5" x1="12" x2="12" y1="4" y2="7" />
        <circle cx="12" cy="4" fill={fill} r="1" />
      </svg>
    );
  }
}

export class Down extends Component {
  render() {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        {...this.props}
      >
        <path
          d="M12 19C12.4 19 12.7 18.8 12.9 18.6L17.6 13.9C18 13.5 17.7 13 17.2 13H14V6C14 5.4 13.6 5 13 5H11C10.4 5 10 5.4 10 6V13H6.8C6.3 13 6 13.5 6.4 13.9L11.1 18.6C11.3 18.8 11.6 19 12 19Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

export class Up extends Component {
  render() {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        {...this.props}
      >
        <path
          d="M12 5C11.6 5 11.3 5.2 11.1 5.4L6.4 10.1C6 10.5 6.3 11 6.8 11H10V18C10 18.6 10.4 19 11 19H13C13.6 19 14 18.6 14 18V11H17.2C17.7 11 18 10.5 17.6 10.1L12.9 5.4C12.7 5.2 12.4 5 12 5Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

export class Right extends Component {
  render() {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        {...this.props}
      >
        <path
          d="M19 12C19 11.6 18.8 11.3 18.6 11.1L13.9 6.4C13.5 6 13 6.3 13 6.8V10H6C5.4 10 5 10.4 5 11V13C5 13.6 5.4 14 6 14H13V17.2C13 17.7 13.5 18 13.9 17.6L18.6 12.9C18.8 12.7 19 12.4 19 12Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

export class Left extends Component {
  render() {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        {...this.props}
      >
        <path
          d="M5 12C5 12.4 5.2 12.7 5.4 12.9L10.1 17.6C10.5 18 11 17.7 11 17.2V14H18C18.6 14 19 13.6 19 13V11C19 10.4 18.6 10 18 10H11V6.8C11 6.3 10.5 6 10.1 6.4L5.4 11.1C5.2 11.3 5 11.6 5 12Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

export class Search extends Component<{
  size: number;
  strokeWidth: number;
  width: any;
  height: any;
}> {
  static defaultProps = { size: 24, strokeWidth: 1.5 };

  render() {
    let { size, strokeWidth, width, height, ...props } = this.props;

    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }
}

export class Download extends Component<{
  size: number;
  width: any;
  height: any;
  strokeWidth: number;
  fill: string;
}> {
  static defaultProps = { size: 24, strokeWidth: 2, fill: "none" };

  render() {
    let { size, width, height, strokeWidth, fill, ...props } = this.props;

    return (
      <svg
        aria-hidden="true"
        fill={fill}
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      >
        <path
          d="M12 2V18M12 18L6 12M12 18L18 12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }
}

export class Heart extends Component<{
  size: number;
  width: any;
  height: any;
  strokeWidth: number;
  fill: string;
}> {
  static defaultProps = { size: 24, strokeWidth: 1.5, fill: "none" };

  render() {
    let { size, width, height, strokeWidth, fill, ...props } = this.props;

    return (
      <svg
        aria-hidden="true"
        color="pink"
        fill={fill}
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      >
        <path
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }
}

export class Reload extends Component<{
  size: number;
  width: any;
  height: any;
  strokeWidth: number;
  fill: string;
}> {
  static defaultProps = { size: 24, strokeWidth: 1.5, fill: "none" };

  render() {
    let { size, width, height, strokeWidth, fill, ...props } = this.props;

    return (
      <svg
        aria-hidden="true"
        color="green"
        fill={fill}
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      >
        <path
          d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6a6.005 6.005 0 01-5.997-5.743L6 12H4a8 8 0 008 8c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }
}

export class MoonIcon extends Component<{
  size: number;
}> {
  static defaultProps = { size: 24, fill: "none" };
  render() {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...this.props}
      >
        <path
          d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
          fill="currentColor"
        />
      </svg>
    );
  }
}

export class SunIcon extends Component<{
  size: number;
}> {
  static defaultProps = { size: 24, fill: "none" };
  render() {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...this.props}
      >
        <g fill="currentColor">
          <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
          <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
        </g>
      </svg>
    );
  }
}
