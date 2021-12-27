import PageHead from "../components/PageHead";
import SideBar from '../components/SideBar'
import DocsIntro from '../components/DocsIntro'
import Footer from '../components/Footer'
import DocsContent from '../components/DocsContent'
import Nav from '../components/Nav'

const docs = () => {
    return (
        <>
            <PageHead title={'Documentation | Fake Store API'} />
            <section>
                <div className="flex flex-wrap">
                    <SideBar />
                    <div className="w-full lg:w-4/5">
                        <Nav />
                        <div className="p-2 md:p-4">
                            <DocsIntro />
                            <DocsContent />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default docs
