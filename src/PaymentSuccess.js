import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './App.css' ;

export default function PaymentSuccess() {
    
    const searchQuery = useSearchParams()[0] ;
    const referenceNum = searchQuery.get("reference") ;

    return (
    <div className='payment'>
        <div>
            Order Successful
        </div>
        <div>
            Reference NO.{referenceNum}
        </div>
    </div>
  )
}
