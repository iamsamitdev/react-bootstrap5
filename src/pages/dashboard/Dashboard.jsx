import React from 'react'
import BackendLayout from '../../components/layouts/BackendLayout'

const Dashboard = () => {
    return (
        <BackendLayout>
            <h1 className="font-weight-light">Hi, Samit</h1>
            {[...Array(20)].map((val,index) =>
                <p key={index}>{index+1}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aliquid maiores id odit ea quibusdam nulla beatae commodi, est nihil illum perferendis ex esse exercitationem quidem quas quis fuga recusandae.</p>
            )}
        </BackendLayout>
    )
}

export default Dashboard
