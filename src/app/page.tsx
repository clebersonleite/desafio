import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Header />    
    <main className={styles.main}></main>
    <Footer />
    </>
  )
}
