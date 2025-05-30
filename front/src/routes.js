import about from "./pages/about/about"
import catalog from "./pages/catalog/catalog"
import contacts from "./pages/contacts/contacts"
import his from "./pages/history/history"
import otziv from "./pages/otziv/otziv"
import Produc4 from "./pages/product/product3"
import Produc3 from "./pages/product/product.jsx"
import team from "./pages/team/team"
import main from "./pages/main/main"
import Produc1 from "./pages/product/product2"
import RegistrationPage from "./pages/reg/reg"
import { ABOUT, CATALOG, CONTACTS, HISTORY, OTZIV, PRODUCT, TEAM, MAIN, PRODUC1, REG, CART, PRODUC3 } from "./utils/const"
import cart from "./pages/cart/cart"

export const authRoutes = []
export const publicRoutes = [
    {
        path: ABOUT,
        Component: about
    },
    {
        path: REG,
        Component: RegistrationPage
    },
    {
        path: PRODUC1,
        Component: Produc1
    },
    {
        path: CATALOG,
        Component: catalog
    },
    {
        path: CONTACTS,
        Component: contacts
    },
    {
        path: HISTORY,
        Component: his
    },
    {
        path: OTZIV,
        Component: otziv
    },
    {
        path: PRODUCT,
        Component: Produc3
    },
    {
        path: TEAM,
        Component: team
    },
    {
        path: MAIN,
        Component: main
    },
        {
        path: PRODUC3,
        Component: Produc4
    },
        {
        path: CART,
        Component: cart
    },
]