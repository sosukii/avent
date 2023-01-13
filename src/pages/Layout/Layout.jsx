import { Outlet, Link } from 'react-router-dom'
import 'pages/Layout/Layout.sass'
import 'pages/Layout/LayoutMediaQueries.sass'

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <Link to="/" className="header__logo logo-mobile">
            <span className="blue">Avent</span> Board
          </Link>
          <div className="menu">
            <div className="header__icons menu__icons">
              <div className="header__icon-wrapper menu__icon-wrapper">
                <div className="header__user-icon menu__user-icon menu__icon"></div>
              </div>
              <div className="header__icon-wrapper menu__icon-wrapper">
                <div className="header__user-icon menu__menu-icon menu__icon"></div>
              </div>
            </div>
            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <Link to="/schedule" className="navbar-link">
                    Договоры
                  </Link>
                </li>
                <li>
                  <Link to="/staff" className="navbar-link">
                    Сотрудники
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="navbar-link">
                    Календарь
                  </Link>
                </li>
                <li>
                  <Link to="/finance" className="navbar-link">
                    Финансы
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="menu-popup container">
        <div className="popup-hat">
          <Link to="/" className="header__logo logo-mobile">
            <span className="blue">Avent</span> Board
          </Link>
          <div className="header__icons menu__icons">
            <div className="header__icon-wrapper menu__icon-wrapper">
              <div className="header__user-icon menu__user-icon-popup menu__icon "></div>
            </div>
            <div className="header__icon-wrapper menu__icon-wrapper">
              <div className="header__user-icon menu__menu-close-icon menu__icon "></div>
            </div>
          </div>
        </div>

        <div className="popup-body">
          <nav className="popup-navbar">
            <ul className="popup-navbar-list">
              <li>
                <Link to="/schedule" className="navbar-link">
                  Договоры
                </Link>
              </li>
              <li>
                <Link to="/staff" className="navbar-link">
                  Сотрудники
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="navbar-link">
                  Календарь
                </Link>
              </li>
              <li>
                <Link to="/finance" className="navbar-link">
                  Финансы
                </Link>
              </li>
            </ul>
          </nav>

          <div className="popup-btns">
            <button className="popup-btns__lk popup-btns__btn">
              Личный кабинет
            </button>
            <button className="popup-btns__reg popup-btns__btn">
              Регистрация
            </button>
          </div>

          <div className="popup-bottom">
            <div className="popup-socials">
              <div className="popup-social-wrapper">
                <div className="popup-social fb-social"></div>
              </div>
              <div className="popup-social-wrapper">
                <div className="popup-social vk-social"></div>
              </div>
              <div className="popup-social-wrapper">
                <div className="popup-social ig-social"></div>
              </div>
            </div>
            <div className="popup-links">
              <a href="tel:+900600500" className="popup-number">
                +7-900-600-500
              </a>
              <a href="mailto:promo@aventcompany.ru" className="popup-email">
                mail@mail.ru
              </a>
              <a href="https://aventcompany.ru/" className="popup-site">
                aventcompany.ru
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <header className="header">
        <div className="header-container">
          <div className="header-wrapper">
            <Link to="/" className="header__logo"><span className="blue">Avent</span> Board</Link>
            <div className="header-popup">
              <nav className="navbar">
                <ul className="navbar-list">
                  <li>
                    <Link to="/schedule" className="navbar-link">Договоры</Link>
                  </li>
                  <li>
                    <Link to="/staff" className="navbar-link">Сотрудники</Link>
                  </li>
                  <li>
                    <Link to="/calendar" className="navbar-link">Календарь</Link>
                  </li>
                  <li>
                    <Link to="/finance" className="navbar-link">Финансы</Link>
                  </li>
                </ul>
              </nav>
              <div className="navbar-auth-btns">
                <button className="navbar-lk">Личный кабинет</button>
                <Link to="/auth" >
                  <button className="navbar-registration">Регистрация</button>
                </Link>
              </div>
            </div>

            <div className="header-icons">
              <div className="header-icons__user"></div>
              <div className="header-icons__burger-btn"></div>
            </div>

          </div>
        </div>
      </header> */}

      <main className="main container">
        <Outlet />
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          blanditiis quasi dolorem corporis doloremque perspiciatis aspernatur
          eum pariatur optio totam? Assumenda praesentium numquam facere
          aspernatur consequuntur iure alias dolore maxime. Ex, aliquam!
          Reprehenderit, est perferendis voluptatem non dolorum quisquam vitae,
          quaerat maiores perspiciatis odit quibusdam cum consectetur in a.
          Nostrum at distinctio, labore perferendis praesentium ex asperiores
          placeat dolores officia? Dolorem nobis sunt, cupiditate, consequuntur
          inventore rerum officia eligendi deleniti praesentium nihil id tempore
          fugiat optio veniam. Magni suscipit, modi beatae repudiandae enim
          tenetur cumque veniam alias totam. Distinctio, quidem? Iusto nisi
          rerum maxime veniam cumque at dolores, vero eveniet! Mollitia possimus
          ipsa quas quibusdam deserunt accusantium, placeat, repellendus
          consequuntur perspiciatis ea, sunt doloribus obcaecati. Alias atque
          nesciunt dicta pariatur. Amet totam est nulla obcaecati, quam
          recusandae tempora porro a. Asperiores odit repellendus error quia
          voluptas perspiciatis, minus tempore, reiciendis modi veniam
          voluptatum nihil accusamus mollitia aut? Quaerat, quasi eveniet?
          Explicabo nobis non expedita voluptatem quisquam neque deserunt. Omnis
          reprehenderit recusandae, facilis quaerat iusto voluptatem quisquam
          neque dolorem fuga laboriosam? Dolor perferendis quas porro distinctio
          ipsam velit dolorem temporibus repellat. Dolorem consequatur
          distinctio ullam laboriosam! Ea nulla molestias consequuntur obcaecati
          totam asperiores ratione pariatur quam placeat illo, praesentium
          adipisci, dolor culpa ut deleniti aut facilis magni quis corrupti
          deserunt excepturi! Dolorum cupiditate architecto illum eum
          consequuntur temporibus voluptas tempora. Corrupti adipisci
          perferendis blanditiis fugit ducimus ipsam saepe provident.
          Reprehenderit hic blanditiis aliquid sit consequuntur mollitia libero
          ipsum ipsam rerum suscipit. Eius iure quia non debitis necessitatibus
          eaque odit animi autem, itaque nam pariatur minus dignissimos quod
          reiciendis quaerat fugiat? Cumque alias ratione nesciunt deserunt
          necessitatibus possimus consequatur obcaecati impedit laborum! Porro,
          soluta culpa asperiores fuga aperiam adipisci, odio ab ex iure quasi,
          voluptates tenetur. Eveniet, consectetur. Dolorem, dolor. Amet in quos
          ea molestiae aperiam porro cum temporibus consectetur dolores hic.
          Atque eveniet ex, voluptatum qui rerum laudantium quas reprehenderit
          officia nesciunt accusamus obcaecati earum dolores ducimus, aliquid
          asperiores saepe, dicta exercitationem perspiciatis? Eum esse mollitia
          eos et alias est odit. Expedita, ad recusandae! Quo fugit iusto
          officiis impedit? Eveniet, ea dolore, eos incidunt at impedit quasi
          illum labore quo aperiam modi! Commodi corrupti amet totam
          necessitatibus molestiae perferendis odit voluptates! Perspiciatis
          enim sint voluptatum nam rem ut nisi laboriosam sed? Dolorem suscipit
          officia vitae? Veritatis laborum vero cum quos at quis similique
          incidunt, sed recusandae ducimus, nihil est beatae consectetur? Nulla
          ipsam molestiae quae aliquid non veritatis ipsa voluptates dicta! Ut
          hic iste eligendi dolorum quaerat assumenda nihil. Quam unde cumque a
          eligendi repellat eaque aperiam assumenda placeat optio quaerat?
          Cumque accusamus, molestiae magni, ratione officia, voluptatem soluta
          facilis libero iure corporis reiciendis earum asperiores. Voluptates,
          natus fugiat recusandae sequi veritatis beatae impedit facere,
          reiciendis, provident minima exercitationem quis accusamus. Saepe
          error aliquid beatae aperiam laborum rerum molestiae eius nemo iusto
          sit porro eveniet quam exercitationem tempora et quos, repellendus
          minima doloribus id adipisci harum optio. Officia accusantium suscipit
          cum. Maxime fuga fugiat ea veritatis magnam, sapiente consequatur
          excepturi quam amet tempore velit suscipit repellendus esse labore
          totam eveniet corporis nulla quos dolores. Quod hic eum dicta
          pariatur, esse nobis. Amet nam a nisi, ea reiciendis eaque voluptate
          ut doloremque, eligendi molestiae, mollitia facere voluptatem
          voluptatum provident? Ea quae, voluptates recusandae magni,
          perspiciatis repudiandae consequuntur quam ipsa soluta possimus
          inventore! Possimus, optio, blanditiis illum sed quae iusto est, in
          rerum iste enim autem. Error, veniam neque. Molestiae, commodi
          inventore ex perferendis unde, fugit mollitia voluptatem consequatur
          suscipit adipisci ad dolorum! Ipsam corrupti, aliquam incidunt
          repellendus saepe autem maiores enim cupiditate adipisci id officia
          exercitationem quae nam atque repellat ullam nulla non perspiciatis ea
          delectus a obcaecati error mollitia. Natus, ipsa! Eaque praesentium
          quis quasi magnam necessitatibus consequatur cum. Iure ad repudiandae
          at sapiente sint repellat reprehenderit voluptates quia? Dolores harum
          nam quo, saepe velit id natus. Esse voluptate quaerat architecto? A
          exercitationem quidem maxime aspernatur neque soluta officiis delectus
          praesentium? Soluta illum, delectus nam, distinctio aspernatur magni
          impedit libero dolorem, commodi nisi deleniti placeat architecto
          ratione asperiores sed ipsa doloremque. Minus recusandae in distinctio
          veniam doloribus, nisi ab quae autem soluta dolorem modi quibusdam at,
          nostrum harum dignissimos odit consequuntur provident debitis? Ab
          harum deserunt commodi itaque officiis placeat repudiandae. Amet
          necessitatibus fuga labore? Possimus vitae illo dicta? Quaerat impedit
          ab, provident cupiditate in omnis quisquam repellat iure dolore,
          beatae consequatur! Fuga adipisci dolorum ut accusantium ipsum dolores
          quam consequuntur. Fugiat amet deleniti, magnam voluptate recusandae
          quo animi doloribus ad ipsa harum rerum dolores ut tempore voluptas
          commodi dolore a vel exercitationem dolorem et odit ex? Omnis
          distinctio fugit accusamus? Ipsum laboriosam cum deserunt fuga dolorem
          nulla eius eaque excepturi vitae? Eos, aspernatur ipsum voluptates
          laboriosam totam possimus deleniti, eligendi nulla, hic eaque
          blanditiis itaque deserunt recusandae quas! Quo, quod. Dolor, culpa,
          modi ipsa ratione optio dicta libero nostrum nesciunt incidunt
          eligendi quae explicabo, perspiciatis qui placeat inventore ad vero
          harum. Excepturi, magnam unde? Adipisci quae ut minima laudantium
          dolorum. Atque eum amet porro harum. Eos, consequatur vero aut
          accusantium nostrum distinctio dolor molestiae? Necessitatibus, sit.
          Totam quasi quod amet repellat omnis minus explicabo. Reprehenderit
          accusamus itaque modi a corporis. Quos magni obcaecati aspernatur
          repellendus? Explicabo assumenda quaerat minus dicta aspernatur
          eligendi saepe consequatur, beatae ea! Laborum accusamus porro nisi
          quod, doloribus blanditiis inventore deserunt mollitia itaque
          laboriosam quibusdam totam. Sunt eum tempore totam, ut iusto iste
          eligendi cupiditate itaque sint vitae est ratione qui rem unde.
          Voluptates error laudantium veniam, voluptatum, eaque, tempora ipsa
          magnam sequi necessitatibus debitis adipisci. Distinctio soluta
          accusantium impedit ab nam libero earum ipsum voluptates incidunt.
          Voluptatibus id aperiam obcaecati iste porro eos molestias maiores
          voluptate quos nam dicta autem beatae ipsum impedit, cum hic? Dolorum
          debitis esse accusantium nam. Voluptatum quis recusandae soluta ut
          doloribus fugiat, illum ipsam eaque ullam blanditiis aperiam facere
          hic suscipit repudiandae vitae vel deserunt enim consequuntur
          laboriosam sit ea! Amet perspiciatis iure quasi aliquid quisquam quod
          ducimus ipsam, id, maiores, dignissimos alias modi aspernatur. Unde
          itaque consectetur iste possimus aperiam, dolorum perferendis tenetur
          maxime maiores placeat sed quidem? Ipsam! Numquam, ex natus
          necessitatibus nostrum maxime ut omnis repellendus esse nemo quasi
          eveniet laudantium! Ipsa earum ea accusamus odio, autem ducimus a
          quisquam veritatis suscipit vero ut quasi iure dolores. Ducimus magni
          rerum, reprehenderit doloremque labore vitae a delectus quae, sed
          cupiditate tenetur? Non sapiente quaerat aliquam animi, nulla
          possimus, ab quia dicta perspiciatis, dignissimos saepe earum suscipit
          esse illum? Dolore officiis aperiam ex, officia, asperiores voluptates
          reprehenderit veniam quae error, non accusantium assumenda? Suscipit
          amet eum cupiditate voluptates, voluptatum et ducimus perspiciatis.
          Quae unde a quos. Asperiores, deserunt sed! Rem eligendi doloribus ad
          labore laudantium fugiat, amet nobis animi commodi vitae velit iste!
          Voluptatem incidunt dolorum, alias illo atque amet ut ratione magni
          pariatur tenetur quasi libero temporibus quod? Voluptatum aliquid hic
          tempore voluptas minus distinctio odit adipisci fugit odio rem,
          tempora recusandae laboriosam maxime dolorum voluptate nostrum dolores
          omnis quo facere natus eius similique. Quod porro corporis unde. Cum
          facilis id, nulla labore eum dolorem culpa quam perspiciatis quis
          officia amet ut, reprehenderit velit nemo ipsum aut perferendis. Fuga,
          est nemo. Recusandae quidem maxime harum quos sed doloribus?
          Distinctio dolorem eaque omnis laborum ab magni maiores quis
          architecto, debitis dolor fugiat porro quos minima perspiciatis
          corrupti nisi provident quo adipisci voluptas ipsam corporis
          perferendis illum! Id, nulla ipsam! Molestias tenetur possimus atque
          laborum tempora in, incidunt recusandae voluptate, ipsa officia
          tempore. Saepe dignissimos et, ipsam veritatis, reiciendis porro eum
          qui consequatur velit, corrupti aperiam aliquid necessitatibus error?
          Dolorum? Sit impedit explicabo voluptatum, asperiores dolorem ipsa
          nesciunt commodi ut perspiciatis placeat! Esse facere atque et
          mollitia quis ducimus illo totam eaque pariatur placeat ipsum dolorum,
          porro at quibusdam voluptates. Maiores unde laudantium voluptate
          eligendi mollitia quae commodi. Deleniti, sint ut? Similique earum,
          atque quia natus velit quae saepe soluta, facilis dicta cumque vitae
          laudantium adipisci aut placeat facere tenetur. Velit doloribus fugit
          facilis, aperiam sint quo, nihil ducimus nisi, quis est ratione
          dolorum modi quia voluptates? Perspiciatis est reprehenderit aperiam
          voluptates assumenda, harum quod vero autem fuga ipsa pariatur.
          Reprehenderit, sed ex dolores molestiae debitis consectetur. Fugit
          veniam qui sequi molestias! Voluptatem cupiditate, et excepturi,
          quaerat perferendis ullam cum pariatur expedita porro aut esse
          exercitationem vero obcaecati hic iste. Explicabo totam inventore ipsa
          odit reprehenderit ab recusandae, consectetur a perspiciatis
          perferendis temporibus natus, asperiores modi nisi aperiam blanditiis
          aliquam unde facilis. Tenetur, mollitia! Minima sapiente culpa saepe
          accusantium blanditiis. Omnis quasi, fugit impedit quibusdam provident
          architecto velit labore facere laboriosam animi repellendus ipsam nam
          minus earum odit! Amet nemo distinctio, aliquid quos hic at
          praesentium dolor beatae eum! Ducimus. Esse eligendi repellendus
          tempore cumque? Saepe eius assumenda omnis ab, voluptates eligendi
          perferendis tempore necessitatibus blanditiis sapiente distinctio
          molestias dolorum totam nihil non velit alias, temporibus sit
          praesentium debitis aspernatur! Atque dolores porro nostrum doloremque
          voluptatum non, laboriosam asperiores optio enim impedit doloribus
          quasi recusandae fugit fugiat possimus veniam in aliquid minima
          deleniti rerum. Saepe at officiis incidunt nemo tempore! Quam
          consequatur rerum atque obcaecati adipisci, placeat alias dolor
          reiciendis dolorem vel. Tenetur, provident quibusdam delectus
          assumenda pariatur libero sint laboriosam quidem facilis aspernatur
          repudiandae eos excepturi id! Voluptates, odit.
        </section>
      </main>

      <footer className="footer container">footer here</footer>
    </>
  )
}

export default Layout
