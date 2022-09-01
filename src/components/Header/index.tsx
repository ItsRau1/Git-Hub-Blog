import { HeaderContainer } from "./style";
import logo from '../../assets/FullLogo.svg'
import effectL from '../../assets/EffectRight.svg'
import effectR from '../../assets/EffectLeft.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={effectR} alt="" />
            <img src={logo} alt="" />
            <img src={effectL} alt="" />
        </HeaderContainer>
    )
}