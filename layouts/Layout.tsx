import Head from 'next/head'
import NavSidebar from '../modules/Nav';

const navigation = {
    logo: { name: "", to: "/" },
    links: [
      { name: "Dashboard", to: "/dashboard" },
      { name: "ToDo", to: "/todo" },
      { name: "Goal Tracker", to: "/goaltracker" },
      { name: "Project Tracker", to: "/projecttracker" },
      { name: "Data", to: "/data" },
      { name: "Settings", to: "/settings" }
    ]
  }

const Layout = ({children, ...props}) => {

    return(
        <div className="bg-black overflow-hidden">
            <Head>
                <title>Productivo</title>
                <meta name="description" content="Productivity App" />
                <meta httpEquiv="Content-type" content="text/html; charset=UTF-8"></meta>
            </Head>
            <NavSidebar/>
            <main {...props} className="overflow-hidden position-relative">
                {children}
            </main>
        </div>
    )
}

export default Layout;