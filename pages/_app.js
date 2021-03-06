import { AnimatePresence } from "framer-motion"
import Chakra from "../components/chakra"
import Fonts from '../components/fonts'
import Layout from "../components/layouts/main"

const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts/>
            <Layout router={router.route}>
                <AnimatePresence
                    exitBeforeEnter
                    initial
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({top: 0})
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Website