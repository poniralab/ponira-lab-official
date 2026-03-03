"use client";
import MetallicPaint from "@/components/MetallicPaint"; // ← raiz do projeto, não app/components

export default function MetallicLogo() {
  return (
    <div style={{ width: "900px", height: "600px" }}>
      <MetallicPaint
        imageSrc="/logo-icon.svg"
        seed={42}
        scale={4}
        patternSharpness={1}
        noiseScale={0.5}
        speed={0.3}
        liquid={0.75}
        mouseAnimation={true}
        brightness={2}
        contrast={0.5}
        refraction={0.01}
        blur={0.015}
        chromaticSpread={2}
        fresnel={1}
        angle={0}
        waveAmplitude={1}
        distortion={1}
        contour={0.2}
        lightColor="#f8f7f4"
        darkColor="#c03a11"
        tintColor="#ecc467"
      />
    </div>
  );
}