import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='main-footer bg-dark'>
            <div className="container">
                    <div className="row">
                        <p className="col-sm text-info text-end">
                            &copy;{new Date().getFullYear()} SofkaBANK | Banco de Sofkianos para Sofkianos.!
                        </p>
                    </div>
                
            </div>
        </div>
    )
}