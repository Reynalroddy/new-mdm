import React,{useEffect,useState} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import qr from "../assets/images/qr.png";
const Guy = () => {
    const [loading1, setLoading1] = useState(true);
   
    const [productDialog, setProductDialog] = useState(false);
    const [products, setProducts] = useState([]);
    const hideDialog = () => {
      
        setProductDialog(false);

    }
    const openNew = () => {
        // setProduct(emptyProduct);
        // setSubmitted(false);
        setProductDialog(true);
    }
    useEffect(() => {
        const getDatz=async ()=>{
  const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
console.log(statz.data.results)
        setProducts(statz.data.results)
        setLoading1(false)
        }
                getDatz()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

   

    const statusBodyTemplate2 = (rowData) => {
        return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single-device/${rowData.id}`} >
VIEW DEVICE
        </Link>
    }


  return (
  
 <div className="col-12">
     <div className='grid'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">All Devices</span>
        <Button label="Onboard Device" icon="pi pi-plus"  onClick={openNew}/>
    </div>
             <DataTable value={products} 
                  
                    loading={loading1}
                     responsiveLayout="stack"
                  
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                       
                        <Column field="id" header="Device Id"></Column>
                            <Column field="name" header="Device Name"></Column>
                            <Column field="phone_number" header="Phone_number"></Column>
                            {/* <Column field="imei" header="Device IMEI"></Column> */}
                        <Column field="id" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                </div>
            </div>
            
            <Dialog visible={productDialog} style={{ width: '450px' }} header="Onboard New Device" modal className="p-fluid" 
                        // footer={productDialogFooter} 
                        onHide={hideDialog}>
                     <img src={qr} alt={'qr-code'} width="100%" className="mt-0 mx-auto mb-5 block shadow-2" />

                    </Dialog>
</div> </div>
  )
}

export default Guy