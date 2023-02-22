function GlowingText({ text }) {
  return (
    <div className="text-left">
      <h1 className="text-4xl text-left font-bold text-white cursor-pointer hover:text-shadow transition-all duration-[1000ms] ease-in-out">
        {text}
      </h1>
    </div>
  );
}

export default GlowingText;
