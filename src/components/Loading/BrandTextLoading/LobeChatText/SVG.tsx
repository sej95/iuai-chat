import { memo } from 'react';

const LobeChatText = memo<{ size?: number }>(({ size = '1em' }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size}
    style={{ flex: 'none', lineHeight: 1, opacity: 0.6 }}
    viewBox="0 0 980 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LobeChat</title>
		<path className="animate-draw" d="m907.3 202.6v-48.6h27.1v-30.6h-27.1v-30.6h-33.6v30.6h-16.8v30.6h16.8v48.4q0 39.8 39.8 39.8 14.5 0 23-3.7v-27.9q-7.1 4.6-16.3 4.6-5.8 0-9.5-3.2-3.4-3.2-3.4-9.4z"/>
		<path className="animate-draw" d="m795.8 155.1q5 4.2 5 13.2v2.7h-17.4q-12.9 0-22.8 2.4-9.7 2.2-16.3 6.8-6.4 4.4-9.7 11.2-3.3 6.8-3.3 15.9 0 10.5 5.1 18.4 5.2 7.7 14 12.1 9.1 4.4 20.1 4.4 8.3 0 15.8-3.3 7.7-3.3 14.1-9l0.4-0.4v10.5h34.1v-78.5q0-13.9-5.9-22.9-6-9-16.7-13.4-10.8-4.4-25.6-4.4-16 0-29.7 6.2-13.6 6.1-24.2 16.9l21.2 20.5q6.1-7.3 12.7-10.4 6.8-3.3 15.4-3.3 8.8 0 13.7 4.4zm5 52.1v-14h-16.5q-4.6 0-8.1 0.9-3.5 0.6-6 2.4-2.4 1.5-3.7 3.7-1.1 2.2-1.1 5.3 0 3.3 1.8 5.7 1.7 2.4 4.6 3.8 3.1 1.3 7 1.3 5.7 0 10.8-1.8 5.3-2 9.2-5.5 0.3-0.2 0.6-0.4 0.2-0.2 0.5-0.5 0.2-0.2 0.4-0.4 0.3-0.3 0.5-0.5z"/>
		<path className="animate-draw" d="m636 135.1q-0.7 0.7-1.3 1.4v-59.5h-35v162.8h35.4v-69.5q0-4.4 1.6-7.9 0.3-0.9 0.8-1.7 0.5-0.9 1-1.7 0.6-0.7 1.2-1.4 0.7-0.8 1.4-1.4 3-2.9 7-4.2 4-1.5 8.6-1.5 5.9-0.2 9.9 2 3.9 2.2 5.9 6.8 2 4.6 2 11.6v68.9h35.4v-71.5q0-15.6-4.6-26.2-4.4-10.8-13.4-16-9-5.5-22.2-5.5-9.7 0-18.5 3.9-8.8 4-15.2 10.6z"/>
		<path className="animate-draw" d="m518.6 242q-17.3 0-32.1-5.7-14.5-6-25.3-16.5-10.5-10.8-16.5-25.3-5.7-14.8-5.7-32.1 0-17.2 5.9-31.7 6.2-14.5 17.2-25.3 11-10.8 25.7-16.7 15-6 32.4-6 11 0 21.5 2.9 10.6 2.8 19.6 8.6 9.3 5.5 15.9 13.4l-23.1 26.2q-6.9-7.5-15.4-11.7-8.4-4.2-18.7-4.2-8.8 0-16.8 3.1-7.7 3.1-13.4 9-5.7 6-9 14.1-3.3 8.1-3.3 18.5 0 10.1 3.1 18.5 3.3 8.1 9.2 14 6.2 5.8 14.5 8.8 8.6 3.1 19 3.1 6.8 0 12.9-1.7 1.6-0.5 3.1-1.1 1.6-0.6 3.1-1.3 1.5-0.7 2.9-1.5 1.4-0.8 2.8-1.6 5.5-3.6 9.5-8l18.2 29.1q-5.2 5.9-14.5 10.8-9 4.8-20.2 7.7-2.8 0.6-5.6 1.1-2.7 0.5-5.6 0.8-2.8 0.4-5.6 0.5-2.8 0.2-5.7 0.2z"/>
		<path className="animate-draw" d="m417 131v109h-36v-109z"/>
		<path className="animate-draw" d="m399.3 119.5c-10.7 0-19.3-8.6-19.3-19.3 0-10.6 8.6-19.2 19.2-19.2 10.7 0 19.3 8.6 19.3 19.2 0 10.7-8.6 19.3-19.3 19.3z"/>
		<path className="animate-draw" d="m316.8 155.1q5 4.2 5 13.2v2.7h-17.4q-12.9 0-22.8 2.4-9.7 2.2-16.3 6.8-6.4 4.4-9.7 11.2-3.3 6.8-3.3 15.9 0 10.5 5.1 18.4 5.2 7.7 14 12.1 9.1 4.4 20.1 4.4 8.3 0 15.8-3.3 7.7-3.3 14.1-9l0.4-0.4v10.5h34.1v-78.5q0-13.9-5.9-22.9-6-9-16.7-13.4-10.8-4.4-25.6-4.4-16 0-29.7 6.2-13.6 6.1-24.2 16.9l21.2 20.5q6.1-7.3 12.7-10.4 6.8-3.3 15.4-3.3 8.8 0 13.7 4.4zm5 52.1v-14h-16.5q-4.6 0-8.1 0.9-3.5 0.6-6 2.4-2.4 1.5-3.7 3.7-1.1 2.2-1.1 5.3 0 3.3 1.8 5.7 1.7 2.4 4.6 3.8 3.1 1.3 7 1.3 5.7 0 10.8-1.8 5.3-2 9.2-5.5 0.3-0.2 0.6-0.4 0.2-0.2 0.5-0.5 0.2-0.2 0.4-0.4 0.3-0.3 0.5-0.5z"/>
		<path className="animate-draw" d="m119 131c12.2 0 24.4 0 37 0 0 4.6 0 9.2 0 13.9q0.1 4.3 0.1 8.7 0.1 6.9 0.1 13.9 0 5.6 0.1 11.2 0 2.1 0 4.2c0 8.7 0.5 15.9 5.7 23.1 4.2 3.3 8.4 3.5 13.6 3.3 4.7-0.6 7.4-2.3 10.7-5.6 3.1-4.9 4-9.5 4-15.3q0-1.9 0.1-3.8 0-2.1 0-4.2 0-2.1 0.1-4.3 0-5.6 0.1-11.2 0.1-6.7 0.2-13.5 0.1-10.2 0.2-20.4c12.2 0 24.4 0 37 0 0 36 0 71.9 0 109-11.6 0-23.1 0-35 0-0.3-3.3-0.7-6.6-1-10q-0.8 0.8-1.6 1.6c-9.2 8.7-18.6 11.8-31.1 11.6-12.1-0.8-22.2-5.2-30.5-14-9.7-12-10.2-26.8-10.1-41.6q0-2.4 0-4.9 0-6.4 0.1-12.8 0-7.8 0.1-15.5 0-11.7 0.1-23.4z"/>
		<path className="animate-draw" d="m54 240v-152.8h39.2v152.8z"/>
  </svg>
));

export default LobeChatText;
