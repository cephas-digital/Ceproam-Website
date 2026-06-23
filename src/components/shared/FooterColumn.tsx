import type { FooterLink } from "../../types/types";

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-8 text-sm font-bold uppercase tracking-wide text-[#0F2343]">
        {title}
      </h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[15px] text-[#4A4A4A] transition-colors hover:text-[#FF6B00]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
