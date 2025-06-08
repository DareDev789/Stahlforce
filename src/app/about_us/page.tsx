// app/about-us/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - STAHLFORCE',
  description:
    'Discover STAHLFORCE: advanced material innovation, from ultra-thin stainless steel to high-performance alloys for aerospace, automotive, and beyond.',
};

export default function AboutUs() {
  return (
    <main className='w-full'>
      <div className="relative bg-gray-900 min-h-[300px] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About STAHLFORCE</h1>
            <p className="text-xl mb-8">STAHLFORCE, S.L. – Premium Special Materials & Advanced Steel Solutions</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800 px-6 container mx-auto py-12 space-y-20">
        {/* Full Text Sections */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p>
              STAHLFORCE, S.L. is a Spanish company with manufacturing facilities in China. We specialize in the research,
              development, production, manufacturing, and distribution of premium special materials. Our expertise lies in
              producing ultra-thin stainless steel, specialty steel alloys, titanium plates, tool steel, automotive-grade
              steel, and other high-specification materials that meet exacting quality standards. Our products serve
              critical applications across diverse sectors including aerospace, semiconductor, medical, precision machinery,
              automotive, electronics, home appliances, instrumentation, and defense industries.
            </p>

            <p>
              Our business model integrates an "innovation center + industrial base" approach, where cutting-edge
              technological research directly drives the production of superior materials. This symbiotic relationship
              enables technology to propel product and industry advancement, while the revenue generated from our premium
              products fuels further technological innovation. This circular ecosystem establishes STAHLFORCE as a hub for
              technological excellence and allows us to deliver value-added services that create tangible benefits for our
              clients.
            </p>
          </div>
          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-400">
            {/* Replace with actual image */}
            <span>Image Placeholder</span>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-start flex-row-reverse">
          <div className="space-y-6">
            <p>
              To date, STAHLFORCE has successfully developed 60 different types of steel products, spanning from ultra-thin
              to thick materials. Our diverse portfolio includes ultra-thin stainless steel, special steel alloys, ultra-thin
              non-oriented silicon steel, electromagnetically pure iron, automotive polymer materials, high-strength
              automotive steel, spring steel, medium-strength steel, and medium to high carbon tool steels. These materials
              primarily serve the electronics, semiconductor, automotive, and tooling industries.
            </p>
            <p>
              Over the next five years, we are committed to intensifying our R&D investments to achieve significant
              breakthroughs in high-performance materials by enhancing conventional materials through innovative process
              modifications. By strategically combining ultra-thick and ultra-thin material production lines and developing
              advanced equipment for specific manufacturing processes, we continually expand our product range and
              capabilities. Our vision is to establish STAHLFORCE as the preeminent brand for advanced materials and
              high-end equipment serving aerospace, semiconductor, clean energy, precision tooling, mining, medical, and
              automotive applications.
            </p>
          </div>
          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-400">
            {/* Replace with actual image */}
            <span>Image Placeholder</span>
          </div>
        </section>
      </div>
    </main>
  );
}
