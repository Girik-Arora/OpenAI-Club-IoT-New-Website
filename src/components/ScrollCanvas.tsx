import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 320;

export const ScrollCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const stateRef = useRef({
    targetFrame: 0,
    currentFrame: 0,
    images: [] as HTMLImageElement[]
  });

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const filename = (i + 1).toString().padStart(4, '0') + '.jpg';
      img.src = `/images/${filename}`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          stateRef.current.images = loadedImages;
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const render = () => {
      const { currentFrame, images } = stateRef.current;
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(currentFrame)));
      const img = images[idx];

      if (img && img.complete) {
        const cWidth = canvas.width;
        const cHeight = canvas.height;
        const iWidth = img.width;
        const iHeight = img.height;

        const scale = Math.max(cWidth / iWidth, cHeight / iHeight);
        const x = (cWidth / 2) - (iWidth / 2) * scale;
        const y = (cHeight / 2) - (iHeight / 2) * scale;

        ctx.clearRect(0, 0, cWidth, cHeight);
        ctx.drawImage(img, x, y, iWidth * scale, iHeight * scale);
      }
    };

    const animLoop = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = maxScroll > 0 ? Math.max(0, Math.min(1, scrollTop / maxScroll)) : 0;

      stateRef.current.targetFrame = scrollFraction * (FRAME_COUNT - 1);
      stateRef.current.currentFrame += (stateRef.current.targetFrame - stateRef.current.currentFrame) * 0.15;

      render();
      animationFrameId = requestAnimationFrame(animLoop);
    };

    animLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded]);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white transition-opacity duration-500">
          <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
          <div className="text-sm font-medium tracking-wider">Loading animation ({progress}%)...</div>
        </div>
      )}
      <div className="fixed inset-0 w-screen h-screen z-0 bg-black pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-contain block" />
      </div>
    </>
  );
};
