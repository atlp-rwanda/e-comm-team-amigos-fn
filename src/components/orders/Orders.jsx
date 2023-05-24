import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import "./orders.styles.scss";
import { getOrders } from '../../redux/orders/actions';



export default function Orders() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)

    useEffect(()=>{
        dispatch(getOrders(window.localStorage.getItem("token")))
    }, [dispatch])

    console.log(orders)
  return (
    <div>Orders</div>
  )
}
