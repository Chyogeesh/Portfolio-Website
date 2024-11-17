import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.div style={props}>Hello, I fade in!</animated.div>;
};
