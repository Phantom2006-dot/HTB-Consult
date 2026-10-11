interface AcademyLogoProps {
  className?: string;
}

const AcademyLogo = ({ className = '' }: AcademyLogoProps) => (
  <img
    src="/brand/htb-academy-logo-gold.webp"
    alt="HTB Consult Academy"
    width={768}
    height={512}
    decoding="async"
    className={`h-12 w-auto object-contain sm:h-14 ${className}`}
  />
);

export default AcademyLogo;
