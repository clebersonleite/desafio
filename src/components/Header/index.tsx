import styles from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import SearchForm from "./components/SearchForm";
import IconButton from "./components/IconButton";
import MainMenu from "./components/MainMenu";

export default function Header() {
  return (
    <>
      <header className={styles.desktopHeader}>
        <Container fluid>
          <Row className={styles.topHeader}>
            <Col xs={12}>
              Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </Col>
          </Row>
        </Container>
        <section className={styles.middleHeaderRow}>
          <Container>
            <Row className={styles.middleHeader}>
              <Col lg={2} className={styles.logo}>
                <Link href="/" title="Home | Maeztra">
                  <Image
                    src="/images/logo.svg"
                    width={147}
                    height={18}
                    alt="Logo | Maeztra"
                  />
                </Link>
              </Col>
              <Col lg={6} className={styles.searchBox}>
                <SearchForm />
              </Col>
              <Col lg={4} className={styles.myAccountBox}>
                <IconButton
                  icon="/images/icons/user.svg"
                  text="Minha Conta"
                  url="/"
                  iconWidth={14}
                  iconHeight={16}
                />
                <IconButton
                  icon="/images/icons/wishlist.svg"
                  text="Favoritos"
                  url="/"
                  iconWidth={18.281}
                  iconHeight={16}
                />
                <IconButton
                  icon="/images/icons/shopping-cart.svg"
                  text="Meu Carrinho"
                  url="/"
                  iconWidth={14.536}
                  iconHeight={16}
                  bordered
                />
              </Col>
            </Row>
          </Container>
        </section>

        <Container className={styles.mainMenuBox}>
          <Row>
            <Col lg={12}>
              <MainMenu />
            </Col>
          </Row>
        </Container>
      </header>

      <header className={styles.mobileHeader}>
        <Container fluid>
          <Row className={styles.topHeader}>
            <Col xs={12}>
              Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className={styles.middleHeader}>
            <Col xs={2} className={styles.mobileNav}>
              <Link href="/">
                <Image
                  src="/images/icons/menu.svg"
                  width={24}
                  height={24}
                  alt="Menu"
                />
              </Link>
            </Col>
            <Col xs={4} className={styles.logo}>
              <Link href="/" title="Home | Maeztra">
                <Image
                  src="/images/logo.svg"
                  width={110}
                  height={12}
                  alt="Logo | Maeztra"
                />
              </Link>
            </Col>
            <Col xs={6} className={styles.myAccountBox}>
              <Link href="/" title="Buscar Produtos">
                <Image
                  src="/images/icons/search.svg"
                  width={24}
                  height={24}
                  alt="Icone de uma Lupa"
                />
              </Link>
              <Link
                href="/"
                title="Sacola de Compras"
                className={styles.shoppingCartButton}
              >
                <Image
                  src="/images/icons/shopping-basket.svg"
                  width={21}
                  height={24}
                  alt="Icone de uma Sacola de Compras"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
