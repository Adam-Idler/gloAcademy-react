import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../functions/secondaryFunction';
import { formatCurrency } from '../functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 25px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const Toppings = styled.div`
    width: 100%;
    color: #9a9a9a;
    font-size: 14px;
`;

export const OrderListItem = ({ order }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemPrice>{order.count}</ItemPrice>
            <span>{formatCurrency( totalPriceItems(order) )}</span>
            <TrashButton />
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    );
} ;