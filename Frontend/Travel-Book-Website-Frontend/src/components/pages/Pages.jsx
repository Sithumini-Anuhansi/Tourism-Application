import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Destinations from "../destinations/Destinations"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
<<<<<<< HEAD
import PackagesList from "../packages/PackagesList"
=======
import Recent from "../home/recent/Recent"
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/destinations' component={Destinations} />
          {/* support header links: packages -> Recent (Our Packages), offers -> Pricing (Seasonal Offers) */}
<<<<<<< HEAD
                  <Route exact path='/packages' component={PackagesList} />
=======
          <Route exact path='/packages' component={Recent} />
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
          {/* Hotels page removed */}
          <Route exact path='/offers' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
