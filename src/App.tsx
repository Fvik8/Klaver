/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ExclusivityTicker } from "./components/sections/ExclusivityTicker";
import { HeritageGrid } from "./components/sections/HeritageGrid";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background grain texture overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[100]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <HeritageGrid />
        <ExclusivityTicker />
      </main>

      <Footer />
    </div>
  );
}
