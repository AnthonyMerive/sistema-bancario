import React from 'react'

export const Bienvenida = () => {

    return (
        <div className="container mt-5">
            {
                <div className="d-flex justify-content-center mt-5">
                    <img
                        src='https://res.cloudinary.com/df8qzqymf/image/upload/v1642732097/descarga_mwztk9.png'
                        width={150}
                        alt="welcome"
                    />
                </div>
            }
            <h4 className="text-center mt-5">
                Ha sido Reconocido..!
            </h4>

        </div>
    )
}
