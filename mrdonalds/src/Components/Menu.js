import styled from 'styled-components';
import { ListItem } from './ListItem';
import bannerImg from '../image/banner.png';
import dbMenu from './DBMenu';

const SectionMenu = styled.section`
    padding: 30px
`;

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const Banner = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 300px;
    background: url(${bannerImg}) no-repeat;
    background-size: cover;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
);