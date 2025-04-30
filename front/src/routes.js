import about from "./pages/about/about"
import catalog from "./pages/catalog/catalog"
import contacts from "./pages/contacts/contacts"
import his from "./pages/history/history"
import otziv from "./pages/otziv/otziv"
import product from "./pages/product/product"
import team from "./pages/team/team"
import main from "./pages/main/main"
import { ABOUT, CATALOG, CONTACTS, HISTORY, OTZIV, PRODUCT, TEAM, MAIN } from "./utils/const"

export const authRoutes = []
export const publicRoutes = [
    {
        path: ABOUT,
        Component: about
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
        Component: product
    },
    {
        path: TEAM,
        Component: team
    },
    {
        path: MAIN,
        Component: main
    },
]