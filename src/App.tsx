import { Route, Switch, useLocation } from 'wouter'
import './App.css'
import Home from './components/Home'
import { NavDock } from './components/nav-dock'
import { Artfolio } from './components/artfolio'
import { Separator } from './components/ui/separator'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

export function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavDock />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/artfolio" component={Artfolio} />
          <Route component={Home} />
        </Switch>
        <div className="m-16 pt-12 text-center text-white/80">
          <Separator className="bg-neutral-700 mb-16" />
          <p className="text-sm">
            Arianna Joe
          </p>
          <p className="text-xs mt-4">
            © 2026 All rights reserved
          </p>
        </div>
      </main>
      <Analytics />
    </div>
  )
}

export default App
