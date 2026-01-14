import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-gradient-to-b from-muted/20 to-muted/40 py-20 border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-primary/20 rounded-full p-6">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  ¡Bienvenido a la familia!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gracias por unirte. Pronto recibirás ideas para crear momentos especiales 
                  y ofertas exclusivas en nuestros pijamas matching.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Inspírate con ideas para crear tradiciones
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Recibe ideas creativas, consejos y ofertas especiales para hacer 
                    cada momento en familia más memorable
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@correo.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-12 text-base border-2"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    size="lg"
                    className="sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirme'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive font-medium">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};