import TestimonialHero from '../components/testimonials/TestimonialHero';
import TestimonialGrid from '../components/testimonials/TestimonialGrid';
import ReadyToWork from '../components/testimonials/ReadyToWork';

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <TestimonialHero />
      <TestimonialGrid />
      <ReadyToWork />
    </div>
  );
}
