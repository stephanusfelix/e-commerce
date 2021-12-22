import React from "react";
import "../styles/pages/adminRekap.scss";

function AdminRekap(){
    return(
        <>
            <div id="main">
                <h1 id="title">Rekap Penjualan</h1>
                <table>
                    <thead>
                    <tr className="baris">
                        <th>Product</th>
                        <th>Harga</th>
                        <th>Terjual</th>
                        <th>Pendapatan</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <h2>Women Casual Premium Slim Fit T-Shisrt</h2>
                                    <p>Category</p>
                                </div>
                            </td>
                            <td className="data">120.87</td>
                            <td className="data">10</td>
                            <td className="data"> 120.870</td>
                        </tr>
    
                        <tr>
                            <td colSpan={3} id="total">
                                <h2>
                                    TOTAL PENDAPATAN
                                </h2>
                            </td>
                            <td className="data">556.452</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminRekap;