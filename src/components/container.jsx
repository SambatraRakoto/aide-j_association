import Acceuil from './acceuil.jsx'
import Nos_realisation from './Nos_action.jsx'
import Apropos from './apropos.jsx'
import Contact from './contact.jsx'

const Content = () => {
    const path = window.location.pathname

    if (path === '/nos-actions' || path === '/nos-realisations') {
        return <Nos_realisation />
    }

    if (path === '/a-propos') {
        return <Apropos />
    }

    if (path === '/contact') {
        return <Contact />
    }

    return <Acceuil />
}

export default Content