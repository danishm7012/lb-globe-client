import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './screens/Home'
import Category from './components/companies/CompanyList'

import Career from './components/career/Career'
import Blogs from './components/Blogs/Blogs'

import ScrollToTop from './components/common/scrollToTop'
import CompanyDetail from './components/companyDetails/companyDetail'
import BlogDetail from './components/Blogs/blogDetail'
import SocialShare from './components/socialShare/Share'

function App() {
  Aos.init({ duration: 500, offset: 150 })
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <main>
        <Switch>
          <Route path='/services/:catagory' component={Category} />
          <Route path='/:_id' exact component={CompanyDetail} />

          <Route path='/info/career' exact component={Career} />

          <Route path='/info/blogs' exact component={Blogs} />
          <Route path='/blogs/:_id' exact component={BlogDetail} />
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
      <Footer />
      <SocialShare />
    </Router>
  )
}

export default App
