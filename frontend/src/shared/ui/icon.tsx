import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
  className?: string;
}

export function Icon({ id, className, ...props }: IconProps) {
  return (
    <svg {...props} className={className}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}
