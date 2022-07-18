import React,{useState,useEffect,useRef} from 'react'
import {Tag}from "primereact/tag";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import Map from '../components/Map';
// import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
const Single = () => {
const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading1, setLoading1] = useState(true);
    const [pwd,setPwd] = useState('');
    const [loadz,setLoadz] = useState(false);
    const [productDialog, setProductDialog] = useState(false);
    const hideDialog = () => {
      
        setProductDialog(false);
        setLoadz(false)
    }
    const openNew = () => {
        setProductDialog(true);
    }
    const handleSubmit=async (e)=>{   
        e.preventDefault();
setLoadz(true);
try {
    var formdata = new FormData();
    formdata.append('password', pwd);
    formdata.append('deviceid', id);

var config = {
method: 'post',
url: 'https://api.verxid.site/bt-mdm/update-password',
data : formdata
};
  const res = await axios(config);
//   console.log(res)
  const stat = res.status;
  if(stat === 200){
    setLoadz(false)
     setPwd('')
    hideDialog()
      toast.current?.show({severity:'success', summary: 'Password updated Successfully.', detail:'', life: 1500});
    //   window.location.href='/user';
  }
  else{
    setLoadz(false)
    toast.current?.show({severity:'error', summary: 'Error Updating device password.', detail:'', life: 1500});  
  }

} catch (error) {
    setLoadz(false)
    toast.current?.show({severity:'error', summary: 'Error Updating device password.', detail:'Please retry,', life: 1500});

}      
        }

    const toast = useRef(null);
    const  lock=async()=>{
        try {
            var formdata = new FormData();
          formdata.append('deviceid', id);
    var config = {
        method: 'post',
        url: `https://api.verxid.site/bt-mdm/lock-device`,
        data : formdata
      };
      const res = await axios(config);
      console.log(res)
      if(res.status===200){
        toast.current?.show({severity:'success', summary: 'Device  locked.', detail:'', life: 2500});
    }
      
      else{
        toast.current?.show({severity:'error', summary: 'Device not locked.', detail:'', life: 2500});
      }
    }

    catch(error){
        console.log(error)
        toast.current?.show({severity:'error', summary: 'Device not locked.', detail:'', life: 2500});
      }
    }


    const  reboot=async()=>{
        try {
            var formdata = new FormData();
          formdata.append('deviceid', id);
    var config = {
        method: 'post',
        url: `https://api.verxid.site/bt-mdm/reboot-device`,
        data : formdata
      };
      const res = await axios(config);
      console.log(res)
      if(res.status===200){
        toast.current?.show({severity:'success', summary: 'Device  rebooted.', detail:'', life: 2500});
    }
      
      else{
        toast.current?.show({severity:'error', summary: 'Device not rebooted.', detail:'', life: 2500});
      }
    }

    catch(error){
        console.log(error)
        toast.current?.show({severity:'error', summary: 'Device not rebooted.', detail:'', life: 2500});
      }
    }


    useEffect(() => {
        const getDatz=async ()=>{
  const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
const obj = statz.data.results.find((it)=>it.id===id);
        setProduct(obj)
        console.log(obj)
        setLoading1(false)
        }
                getDatz()
    }, [id]);

    if(loading1){
return   <ProgressSpinner/>
    }
  return (
   <div className='col-12'>
<div className='grid'>
<div className='col-12'>
<div className="surface-card p-4 shadow-2 border-round">
    <div className="font-medium text-3xl text-900 mb-3">Device {product?.name}</div>
    <div className="text-500 mb-5">{product?.serial_number},{product?.manufacturer}.</div>
    <ul className="list-none p-0 m-0 border-top-1 surface-border">
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">OS VERSION</div>
            <div className="text-900 w-full md:w-10">{product?.os_version}</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
            <div className="text-500 w-full md:w-2 font-medium">LATEST ADDRESS</div>
            <div className="text-900 w-full md:w-10 line-height-3">{product?.geolocation_positions[0].address}</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">BATTERY LEVEL</div>
            <div className="text-900 w-full md:w-10">{product?.battery_level}%  <i className="pi pi-mobile mr-2 text-primary"></i></div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
            <div className="text-500 w-full md:w-2 font-medium">Actions</div>
            <div className="text-900 w-full md:w-10 cursor-pointer">
                {/* <Tag className="mr-2 my-2" value="Algorithms" rounded /> */}
                <Tag className="mr-2 my-2" severity="success" value="Update password" onClick={openNew} rounded />
                <Tag className="mr-2 my-2" severity="danger" value="Lock device" onClick={lock} rounded />
                <Tag className='mr-2' severity="warning" value="Reboot device"  onClick={reboot} rounded />
            </div >
        </li >
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">Phone Informations</div>
            <div className="text-900 w-full md:w-10">
                <div className="grid mt-0 mr-0">
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                               
                                <span className="font-medium">MANUFACTURER</span>
                            </div>
                            <div className="text-700">{product?.manufacturer}</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                               
                                <span className="font-medium">ICCID</span>
                            </div>
                            <div className="text-700">{product?.iccid}</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">SSAID</span>
                            </div>
                            <div className="text-700">
                                {product?.ssaid}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                               
                                <span className="font-medium">Serial number</span>
                            </div>
                            <div className="text-700">{product?.serial_number}</div>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    </ul>
    <Toast ref={toast} position="top-center" />
    <Dialog visible={productDialog} style={{ width: '450px' }} header="Edit user" modal className="p-fluid" 
                        // footer={productDialogFooter} 
                        onHide={hideDialog}>
                      
                        <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name">Password</label>
                            <Password  placeholder="Password" className='w-full' onChange={(e)=>setPwd(e.target.value)} toggleMask />
                          
                        </div>
                        <Button label="Update Password" type='submit'  icon="pi pi-check" loading={loadz} />
                        </form>
                    </Dialog>
</div>
</div>
</div>

<div className='col-12'>
<div className="surface-card shadow-2 border-round">


<Map lati={product?.geolocation_positions[0].latitude} longi={product?.geolocation_positions[0].longitude}/>
</div>

</div>
   </div>

    
  )
}

export default Single