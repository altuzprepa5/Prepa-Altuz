import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'para ti.',
        1500,
        'para tus hijos.',
        1500,
        'para su futuro.',
        1500,
        'para todos.',
        1500,
      ]}
      speed={50}
      className="text-black"
      repeat={Infinity}
    />
  );
};

export default TextEffect;