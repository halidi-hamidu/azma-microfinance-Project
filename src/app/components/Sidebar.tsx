
// import { BiAlarm, BiHeartFill } from 'react-icons/bi';
export default function SideBar (){
return (

<>
   <ul className="navbar-nav sidebar sidebar-light accordion " id="accordionSidebar" >
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
    </a>
    <li className="nav-item active ">
        <a className="nav-link" href="{% url 'storeApp:homepage' %}">
          <i className="bi bi-speedometer2 p-2 text-primary"></i>
        <span>Dashboard</span></a>
    </li>
    <hr className="sidebar-divider" />

     <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-speedometer2 p-2 text-primary"></i>
        <span> Branches</span></a>
    </li>
    <hr className="sidebar-divider" />

     <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-person-gear p-2 text-primary"></i>
        <span> Employees</span></a>
    </li>
    
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:employeePage' %}">
        <i className="bi bi-person-gear p-2 text-primary"></i>
        <span>Member regisrations</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:authorizationPage' %}">
                    <i className="bi bi-shield-check p-2 text-primary"></i>
        <span>Member accounts</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-cash-stack p-2 text-primary"></i>
        <span> Regular fee</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-hourglass-split p-2 text-primary"></i>
        <span> Shears</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-cash-coin p-2 text-primary"></i>
        <span> Loans</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-speedometer2 p-2 text-primary"></i>
        <span> Shops</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
         <i className="bi bi-speedometer2 p-2 text-primary"></i>
        <span> Shops</span></a>
    </li>
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <a className="nav-link" href="{% url 'storeApp:shopPage' %}">
        <i className="bi bi-speedometer2 p-2 text-primary"></i>
        <span> Shops</span></a>
    </li>
    <hr className="sidebar-divider" />

{/* 
<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:productPage' %}">
<i className="fas fas fab fa-shopping-bag fa-2x text-success"></i>
<span> Products</span></a>
</li>
<hr className="sidebar-divider" />


<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:suppliersPage' %}">
<i className="fas fas fa-user-friends fa-2x text-success"></i>
<span> Suppliers</span></a>
</li>
<hr className="sidebar-divider" />

<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:storePage' %}">
<i className="fas fas fa-store-alt fa-2x text-success"></i>
<span> Store</span></a>
</li>
<hr className="sidebar-divider" />

<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:salesPage' %}">
<i className="fas far fa-money-bill-alt fa-2x text-success"></i>
<span> Sales</span></a>
</li> */}


{/* <li className="nav-item">
<a className="nav-link collapsed text-white" data-toggle="collapse" data-target="#collapseBootstrap"
aria-expanded="true" aria-controls="collapseBootstrap">
<i className="far fa-fw fa-window-maximize text-success"></i>
<span> Invoices</span>
</a>
<div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
<div className="py-2 collapse-inner rounded">

<a className="collapse-item" href="{% url 'storeApp:manageInvoice' %}" >Invoice Panel</a>
<a className="collapse-item" href="{% url 'storeApp:profomaInvoice' %}">Proforma Invoices</a>
<a className="collapse-item" href="{% url 'storeApp:partialPaidInvoices' %}">paid-partial Invoices</a>
<a className="collapse-item" href="{% url 'storeApp:fullPaidinvoices' %}">Paid Invoices</a>
<a className="collapse-item" href="{% url 'storeApp:cancelledInvoice' %}">Cancelled Invoice</a>
<a className="collapse-item" href="">Customer Unpaid Invoices</a>
<a className="collapse-item" href="{% url 'storeApp:allInvoicesList' %}">All Invoices</a>
</div>
</div>
</li>
<hr className="sidebar-divider" />


<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:salesPage' %}">
<i className="fas far fa-money-bill-alt fa-2x text-success"></i>
<span>Invoice</span></a>
</li>
<hr className="sidebar-divider" />



<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:salesPage' %}">
<i className="fas far fa-money-bill-alt fa-2x text-success"></i>
<span> Sales</span></a>
</li>
<hr className="sidebar-divider" />

<li className="nav-item active">
<a className="nav-link" href="{% url 'storeApp:ordersPage' %}">
    <i className="fas far fas fa-cart-arrow-down fa-2x text-success"></i>
    <span> Orders</span></a>
</li>
<hr className="sidebar-divider" />



<li className="nav-item active">
    <a className="nav-link" href="{% url 'storeApp:emergencePage' %}">
        <i className="fas far far fa-comments fa-2x text-success"></i>
        <span>Emergence</span></a>
</li>
<hr className="sidebar-divider" />
    


<li className="nav-item active">
    <a className="nav-link" href="{% url 'storeApp:companyStockPage' %}">
        <i className="fas far far fa-store-alt fa-2x text-success"></i>
        <span>Assets</span></a>
</li>
<hr className="sidebar-divider" />
    

 */}







    </ul>
</>
);

}