import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../paginas/home';
import MeuCurriculo from '../paginas/curriculo';
import MuralOportunidades from '../paginas/muralOportunidades';
import MuralVagas from '../paginas/muralVagas';
import MuralOngs from '../paginas/muralOngs';
import Cadastro from '../paginas/cadastro';
import MeusCurriculos from '../paginas/meusCurriculos';


function RoutesMain(){
    return(
        <Routes>
            <Route path="/paginas/home" element={<Home />} />
            <Route path="/paginas/muralOportunidades" element={<MuralOportunidades />} />
            <Route path="/paginas/muralVagas" element={<MuralVagas />} />
            <Route path="/paginas/curriculo" element={<MeuCurriculo />} />
            <Route path="/paginas/muralOngs" element={<MuralOngs />} />
            <Route path="/paginas/cadastro" element={<Cadastro />} />
            <Route path="/paginas/meusCurriculos" element={<MeusCurriculos />} />
        </Routes>
    )
}

export default RoutesMain;