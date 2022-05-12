import { BsHandbagFill } from 'react-icons/bs';
import * as S from "./styles";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <S.Header>
            <S.H1>VIVINT</S.H1>
            <BsHandbagFill onClick={() => navigate("/carrinho")} />
        </S.Header>
    );

}