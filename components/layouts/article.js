import { motion } from 'framer-motion'
import Head from 'next/head'

// const variants = {
//     hidden: { opacity: 0, x: 0, y: 20 }
// }

const Layout = ({children, title}) => {
    const t = `${title} - Evgeny Dmitriev`
    return (
        <motion.article>
            <>
                {title && (
                    <Head>
                        <title>{t}</title>
                        <meta name="twitter:title" content={t}/>
                        <meta property='og:title' content={t}/>
                    </Head>
                )}
                {children}
            </>
        </motion.article>
    )
}

export default Layout