export default function DashbaordTable(){
    return (
        <>
        <div className="table_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner">
                            <h5>Report : 16/03/2024</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Sex</th>
                                        <th>Branch</th>
                                        <th>member since</th>
                                        <th>Debt</th>
                                        <th>Amount deposited</th>
                                        <th>Account status</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Naemy Thomas</td>
                                        <td>F</td>
                                        <td>Mzizima</td>
                                        <td>10-1-2024</td>
                                        <td>0</td>
                                        <td>20,000</td>
                                        <td > <p className="green">active-running</p></td>
                                        {/* <td>v</td> */}
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hamida Jumanne</td>
                                        <td>f</td>
                                        <td>Kimara suka</td>
                                        <td>10-1-2024</td>
                                        <td>0</td>
                                        <td>50  ,000</td>
                                            <td className="green"> <p className="green">active-running</p></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Hamida Kassim</td>
                                        <td>f</td>
                                        <td>Kimara suka</td>
                                        <td>10-1-2024</td>
                                        <td>0</td>
                                        <td>50  ,000</td>
                                        <td > <p className="green">active-running</p></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Hamza Mahamod</td>
                                        <td>f</td>
                                        <td>Kimara suka</td>
                                        <td>10-1-2024</td>
                                        <td>0</td>
                                        <td>100 ,000</td>
                                        <td > <p className="green">active-running</p></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Jacqline Thomas</td>
                                        <td>f</td>
                                        <td>Kimara suka</td>
                                        <td>10-1-2024</td>
                                        <td>0</td>
                                        <td>10 ,000</td>
                                        <td > <p className="green">active-running</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}