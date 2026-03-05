"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  ElementType,
} from "react";

// ─── Context ─────────────────────────────────────────────────────────────────

interface MouseEnterContextType {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const MouseEnterContext = createContext<MouseEnterContextType>({
  isMouseEntered: false,
  setIsMouseEntered: () => {},
});

// ─── CardContainer ────────────────────────────────────────────────────────────
// Aplica a perspectiva 3D e rastreia o mouse.
// Mantenha sua className de tamanho/layout aqui (ex: "group", largura etc.)

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function CardContainer({
  children,
  className,
  containerClassName,
}: CardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      {/* Wrapper externo: só define perspective */}
      <div
        className={containerClassName}
        style={{ perspective: "1000px" }}
      >
        {/* Elemento que recebe o tilt */}
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={className}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

// ─── CardBody ─────────────────────────────────────────────────────────────────
// Apenas ativa o preserve-3d nos filhos.
// Coloque TODAS as suas classes Ponira customizadas aqui.

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardBody({ children, className, style }: CardBodyProps) {
  return (
    <div
      className={className}
      style={{ transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}

// ─── CardItem ─────────────────────────────────────────────────────────────────
// Aplica profundidade (translateZ) e rotações opcionais em elementos filhos.
// Use `as` para renderizar como qualquer tag HTML (img, button, span…)

interface CardItemProps<T extends ElementType = "div"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown; // permite passar props extras (href, src, onClick…)
}

export function CardItem<T extends ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const { isMouseEntered } = useContext(MouseEnterContext);

  const transform = isMouseEntered
    ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";

  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}