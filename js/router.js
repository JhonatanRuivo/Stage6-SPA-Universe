export class Router {
  routes = {}

  add(routName, page) {
    this.routes[routName] = page
    
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
    this.handleBackground()
    this.handleNav()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
      
        
  }

  handleBackground() {
    
    if (window.location.pathname == "/universe") {
      document.querySelector('body').classList.add('pageUniverse')
      document.querySelector('body').classList.remove('pageExplorer')
      document.querySelector('body').classList.remove('pageHome')
    }
    if (window.location.pathname == "/explorer") {
      document.querySelector('body').classList.remove('pageUniverse')
      document.querySelector('body').classList.add('pageExplorer')
      document.querySelector('body').classList.remove('pageHome')
    }
    if (window.location.pathname == "/") {
      document.querySelector('body').classList.remove('pageUniverse')
      document.querySelector('body').classList.remove('pageExplorer')
      document.querySelector('body').classList.add('pageHome')
    }
  }
  
  handleNav() {
      if(window.location.pathname == "/") {
        document.querySelector('.linkHome').classList.add('active')
        document.querySelector('.linkUniverse').classList.remove('active')
        document.querySelector('.linkExplorer').classList.remove('active')
      }
      if(window.location.pathname == "/universe") {
        document.querySelector('.linkHome').classList.remove('active')
        document.querySelector('.linkUniverse').classList.add('active')
        document.querySelector('.linkExplorer').classList.remove('active')
      }
      if(window.location.pathname == "/explorer") {
        document.querySelector('.linkHome').classList.remove('active')
        document.querySelector('.linkUniverse').classList.remove('active')
        document.querySelector('.linkExplorer').classList.add('active')
      }
  }
}

