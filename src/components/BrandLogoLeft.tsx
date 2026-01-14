export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Sueños Compartidos - Home" className="flex items-center gap-3">
      <img 
        src="/logo.png"
        alt="Sueños Compartidos"
        className="h-12 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-tight">Sueños</span>
        <span className="text-sm text-primary font-semibold leading-tight">Compartidos</span>
      </div>
    </a>
  )
}