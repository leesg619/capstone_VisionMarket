import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ShoppingCard from './ShoppingCard';
import PayPage from '../Paymovement/PayPage';
import { useLocation } from 'react-router';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(12, 2),
    },
    window: {
        width: '100%',
        padding: '5px',
    },
    windowDummy: {
        height: '5px'
    },
    flex: {
        display: 'flex',
        padding: '2px',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function ShoppingBascket(props) {
    
    const getShoppingList = (ShoppingListObj) => {
        return (
            <List>
                <ShoppingCard {...ShoppingListObj}  deleteShoppingItem={e => deleteShoppingItem(e)} getTotalPrice = {e => getTotalPrice(e)}/>
            </List>
        );
    }

    //sh 44~60 => 38
    const[ShoppingList,setShoppingList] = useState([])

    useEffect(() => {
 
        axios.post(`/api/cart/cartList`)
        .then(response => {

            if(response.data.success) {
                console.log(response)
                setShoppingList(response.data.shoppingList)
            }
        })
    }, [])

    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
 
        axios.post(`/api/cart/cartList`)
        .then(response => {

            if(response.data.success) {
                setShoppingList(response.data.shoppingList)
            }
        })
    }, [])

    function getTotalPrice() {
        let total = 0;
         ShoppingList.forEach(function(item) {
            total += (item.quantity * item.post.pprice)
            console.log(total)
         });
          setTotalPrice(total)
     }
       
    

    function deleteShoppingItem(cartId){ 
        setShoppingList(ShoppingList.filter(item => item._id !== cartId))
    }

    const classes = useStyles();

    const [Paynow, setPaynow] = useState(false)

    const Payhandle = (e) => {
        e.preventDefault()

        setPaynow(true)
    }

    

    const deleteAllCart = () => {

        if(window.confirm("정말 삭제하시겠습니까??") == true) {
        axios.delete(`/api/cart/allCart`)
        .then(response => {
            if(response.data.success) {
               setShoppingList([])
            }
        })
      }
    }

    return (
        <div>
            <Grid item container >
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8} justify="center" >
                    <br />
                    <Card className={classes.root}>
                        <ShoppingCartIcon fontSize="Large" />
                        <hr />
                        <div className={classes.flex}>
                            <div className={classes.window}>
                                {ShoppingList.map(ShoppingListObj => getShoppingList(ShoppingListObj))}
                            </div>
                        </div>
                        <hr />
                        <div className={classes.flex} style={{ fontSize: '0.9rem' }}>

                            상품가격 {totalPrice}원 + 배송비 0원 = 총 주문금액 {totalPrice}원
                        </div>
                        <hr />
                        <div className={classes.flex}>
                            <Button variant="contained" color="primary" onClick = {deleteAllCart}>
                                장바구니비우기
                            </Button>
                            <Grid item xs={1} />
                            <Button onClick={Payhandle} variant="contained" color="primary">
                                구매하기
                             </Button>
                        </div>
                        {
                            Paynow && <PayPage />
                        }
                    </Card>

                </Grid>

                <Grid item xs={1} sm={2} />

            </Grid>
        </div>
    );
}