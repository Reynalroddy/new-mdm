import React,{useEffect,useState} from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart } from 'primereact/chart';
import svg from '../assets/images/secure.svg';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
// import { Link } from 'react-router-dom';
const Dashboard = () => {

    const [loading1, setLoading1] = useState(true);
   
    const [products, setProducts] = useState([]);
    const doughnutData = {
        labels: ['Locked Devices', 'Active Devices'],
        datasets: [
            {
                data: [300,100],
                backgroundColor: [
                    "#e2841a",
                    "#0F97C7",
                   
                ],
                hoverBackgroundColor: [
                    "#edb575",
                    "#6fc0dd",
                     
                ]
            }]
    };

    // useEffect(() => {
    //     const getDatz=async ()=>{
    //         var config = {
    //             method: 'get',
    //             url: 'https://www.tinymdm.net/api/v1/devices',
    //             headers: { 
    //               'X-Tinymdm-Apikey': '72bafd81b37d0dae5a71d7dcbefeed6b', 
    //               'Cookie': 'AWSALB=tVHmHqJt+tyHIUjqbPMu2/xS3HNDfNL9/+kV8p/zYIdUCGDhzj7AEpYN3M2gXcujxiPHc1lqmvD02kAsfkBMhZUniYy/ZHMbGLXqbauKDanw1CdXnz1ZTPeu7WWh; AWSALBCORS=tVHmHqJt+tyHIUjqbPMu2/xS3HNDfNL9/+kV8p/zYIdUCGDhzj7AEpYN3M2gXcujxiPHc1lqmvD02kAsfkBMhZUniYy/ZHMbGLXqbauKDanw1CdXnz1ZTPeu7WWh'
    //             }
    //           };
    //         const statz = await axios(config);
    //         console.log(statz.data)
       
    //     // setProducts(statz.data.mtn)
    //     // setLoading1(false)
    //     }
    //             getDatz()
    // }, []);
     // eslint-disable-line react-hooks/exhaustive-deps

   
    useEffect(() => {
        const getDatz=async ()=>{
            const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
            console.log(statz.data.mtn)
       
        setProducts(statz.data.results)
        setLoading1(false);
        }
                getDatz()
    }, []);



    
    const header = (
        <div className="table-header-container">
           
          All Devices
        </div>
    );
  return (
    <>
    <div className='col-12'>
<div className='grid'>
<div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Total devices</span>
                                    <div className="text-900 font-medium text-xl">152</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-database text-blue-500 text-xl"></i>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Active devices</span>
                                    <div className="text-900 font-medium text-xl">29</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-mobile text-orange-500 text-xl"></i>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Locked devices</span>
                                    <div className="text-900 font-medium text-xl">2</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-unlock text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Tracked devices</span>
                                    <div className="text-900 font-medium text-xl">15</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                                </div>
                            </div>
                           
                        </div>
                    </div>
</div>
    </div>
            

<div className='col-12'>

<div className='grid'>
<div className="col-12 lg:col-6 xl:col-4">
                <div className="surface-card shadow-2 lg:p-3 border-round text-center">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-l">COMPLIANCE AND MANAGEMENT</div>
                       
                    </div>
                    <div  className='dash-spin' style={{ width: 200, height: 200 }}>

                  
                    <CircularProgressbar
                    value="100"
                    text="100%"
                   
                    strokeWidth={2}
                   
                    styles={buildStyles({
                      textColor: "#419544",
                      pathColor: "#419544",
                    })}
                  />
               </div>
                </div>
            </div> 

           

             <div className="col-12 lg:col-6 xl:col-4">
                <div className="surface-card shadow-2 lg:p-2 border-round text-center">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-l">DEVICE CATEGORY</div>
                       
                    </div>
                   
                    <Chart style={{  width: '70%' }} type="doughnut" data={doughnutData} />
                 
                </div>
            </div>

         
   <div className="col-12 lg:col-12 xl:col-4">
                <div className="surface-card border-round shadow-2 lg:p-1  text-center">
                    <img src={svg}  width={150} height={150} alt="security" className="mx-auto block mb-4" />
                    <div className="text-900 font-medium mb-3 text-l">CUSTOMER SATISFACTION</div>
                    <p className="mt-0 mb-4 p-0 line-height-3">Our Device management system has the ability to track, lock and reset devices – essential to be able to discharge its good governance requirements as an organisation using public money.</p>   
                </div>
            </div> 
</div>
</div>
             
           
      <div className='col-12'>
        <div className='grid'>
        <div className="col-12 lg:col-12 xl:col-12">
                <div className="surface-card border-round shadow-2  text-center">
                <DataTable value={products} 
                    loading={loading1} 
                     responsiveLayout="stack"
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[5,10,50]}
                  
                        header={header}>
                       
                        <Column field="id" header="Device Id"></Column>
                            <Column field="name" header="Device Name"></Column>
                            <Column field="phone_number" header="Phone_number"></Column>
                            <Column field="serial_number" header="S/N"></Column>
                           
                            
                    </DataTable>
                </div>
            </div> 
        </div>
   
    </div>  
   {/* <div className="col-12 lg:col-12 xl:col-12">
                <div className="surface-card border-round shadow-2 p-4 text-center">
                <DataTable value={products} 
                    loading={loading1}
                     responsiveLayout="stack"
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[5,10,50]}
                  
                        header={header}>
                       
                        <Column field="id" header="Device Id"></Column>
                            <Column field="name" header="Device Name"></Column>
                            <Column field="phone_number" header="Phone_number"></Column>
                           
                            
                    </DataTable>
                </div>
            </div>   */}

             {/* <div className="col-12 lg:col-12">
                <div className="card card-w-title global-sales p-fluid">
                        <h5>Latest Registered Sims.</h5>
                        <DataTable value={products} paginator  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"  rows={5}  loading={loading1} className="p-datatable-products">
                            <Column field="nin" header="NIN"></Column>
                            <Column field="msisdn" header="msisdn"></Column>
                            <Column field="sim_serial" header="sim_serial"></Column>
                           
                            <Column field="alt_phone" header="Alt-phone"></Column>
                            <Column field="mother_maiden" header="Mother's Name" sortable></Column>
                           
                        </DataTable>
                    </div>
                </div>  */}
</>
             
  )
}

export default Dashboard