import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#" className="nav__logo">
                Hoàng Lê Anh Tuấn
              </a>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    Work
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu"></i>
            </div>
          </nav>
        </header>

        <main className="l-main">
          <section className="home bd-grid" id="home">
            <div className="home__data">
              <h1 className="home__title">
                Xin Chào,
                <br />
                Mình tên <span className="home__title-color">Tuấn</span>
                <br />
                FrontEnd Developer
              </h1>

              <a href="#" className="button">
                Contact
              </a>
            </div>

            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/tu%E1%BA%A5n-ho%C3%A0ng-610928228/"
                className="home__social-icon"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/tuanbosstrum"
                className="home__social-icon"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://github.com/tuanbosstrum"
                className="home__social-icon"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </section>

          <section className="about section" id="about">
            <h2 className="section-title">Về chúng tôi</h2>

            <div className="about__container bd-grid">
              <div className="about__img">
                <img src="../img/about.jpg" alt="" />
              </div>

              <div>
                <h2 className="about__subtitle">Hello, I'm Tuấn</h2>
                <p className="about__text">
                  Mô tả về bản thân : Bản thân tôi là một người đam mê với lĩnh
                  vực lập trình front-end với những kinh nghiệm liên quan từ khi
                  còn là học sinh sinh viên Là một người điềm tĩnh , thích ứng
                  nhanh với môi trường mới , không ngại khó , hứng thú trong
                  việc tìm ra hướng giải quyết của vấn đề
                </p>
              </div>
            </div>
          </section>

          <section className="skills section" id="skills">
            <h2 className="section-title">kinh nghiệm</h2>

            <div className="skills__container bd-grid">
              <div>
                <h2 className="skills__subtitle">Kỹ năng</h2>
                <p className="skills__text">
                  Chúng tôi có đội ngũ chuyên nghiệp trong tất cả các mảng mà
                  bạn cần: designer, lập trình viên thiết kế giao website, lập
                  trình di động,...
                </p>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-html5 skills__icon"></i>
                    <span className="skills__name">HTML5</span>
                  </div>
                  <div className="skills__bar skills__html"></div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-css3 skills__icon"></i>
                    <span className="skills__name">CSS3</span>
                  </div>
                  <div className="skills__bar skills__css"></div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-javascript skills__icon"></i>
                    <span className="skills__name">JAVASCRIPT</span>
                  </div>
                  <div className="skills__bar skills__js"></div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxs-paint skills__icon"></i>
                    <span className="skills__name">Reactjs</span>
                  </div>
                  <div className="skills__bar skills__ux"></div>
                </div>
              </div>

              <div>
                <img src="../img/work3.jpg" alt="" className="skills__img" />
              </div>
            </div>
          </section>

          <section className="work section" id="work">
            <h2 className="section-title">Dự Án đã làm</h2>
            <div className="work__container bd-grid">
              <a href="https://github.com/Web-Anime" className="work__img">
                <img src="../img/work1.png" alt="" />
              </a>
              <a
                href="https://github.com/tuanbosstrum/project-kt-python"
                className="work__img"
              >
                <img src="../img/work2.png" alt="" />
              </a>
              <a
                href="https://github.com/tuanbosstrum/C-sharp"
                className="work__img"
              >
                <img src="../img/work3.png" alt="" />
              </a>
              <a
                href="https://github.com/tuanbosstrum/C-sharp-ASP-ENTITY-FRAMEWORK-CORE"
                className="work__img"
              >
                <img src="../img/work4.png" alt="" />
              </a>
              <a
                href="https://github.com/tuanbosstrum/doanwordpress"
                className="work__img"
              >
                <img src="../img/work5.png" alt="" />
              </a>
            </div>
          </section>

          <section className="contact section" id="contact">
            <h2 className="section-title">Vui lòng liên hệ</h2>

            <div className="contact__container bd-grid">
              <form action="" className="contact__form">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__input"
                />
                <input
                  type="mail"
                  placeholder="Email"
                  className="contact__input"
                />
                <textarea
                  name=""
                  id=""
                  cols="0"
                  rows="10"
                  className="contact__input"
                ></textarea>
                <input
                  type="button"
                  value="Enter"
                  className="contact__button button"
                />
              </form>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__title">Tuấn Hoàng</p>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/tuanbosstrum"
              className="footer__icon"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://github.com/tuanbosstrum" className="footer__icon">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-ho%C3%A0ng-610928228/"
              className="footer__icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <p className="footer__copy">&#169;Copyright: My newbie</p>
        </footer>
      </div>
    );
  }
}

export default App;
